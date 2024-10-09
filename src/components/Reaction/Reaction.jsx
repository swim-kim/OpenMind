import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Reaction.css";
import { ReactComponent as ThumbsupSVG } from "../../assets/reaction/thumbs-up.svg";
import { ReactComponent as ThumbsdownSVG } from "../../assets/reaction/thumbs-down.svg";

export const ThumbsUp = ({ question }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await axios.get(
          `https://openmind-api.vercel.app/10-1/questions/${question.id}/`
        );
        setLikeCount(response.data.like);
      } catch (error) {
        console.error("좋아요 수를 가져오는데 실패햇습니다.", error);
      }
    };

    fetchLikes();
  }, []);

  const handleLike = async () => {
    if (!like) {
      try {
        const response = await axios.post(
          `https://openmind-api.vercel.app/10-1/questions/${question.id}/reaction/`,
          { type: "like" },
          { headers: { "Content-Type": "application/json" } }
        );
        setLikeCount(response.data.like);
        setLike(true);

        if (dislike) {
          setDislike(false);
        }
      } catch (error) {
        console.error("좋아요 추가에 실패했습니다.", error);
      }
    }
  };

  return (
    <div onClick={handleLike} className="reaction-button">
      <ThumbsupSVG className={`reaction-icon ${like ? "liked" : ""}`} />
      <span className={`reaction-icon ${like ? "liked" : ""}`}
      style={{ fontSize: "14px" }} >
        좋아요 {likeCount}
      </span>
    </div>
  );
};

export const ThumbsDown = ({ question }) => {
  const [dislikeCount, setDisLikeCount] = useState(0);
  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(() => {
    const fetchDisLikes = async () => {
      try {
        const response = await axios.get(
          `https://openmind-api.vercel.app/10-1/questions/${question.id}/`
        );
        setDisLikeCount(response.data.dislike);
      } catch (error) {
        console.error("싫어요 수를 가져오는데 실패햇습니다.", error);
      }
    };
    fetchDisLikes();
  }, []);

  const handleDislike = async () => {
    try {
      if (!dislike) {
        await axios.post(
          `https://openmind-api.vercel.app/10-1/questions/${question.id}/reaction/`,
          { type: "dislike" }
        );
        setDisLikeCount((prev) => prev + 1);
        setDislike(true);

        if (like) {
          setLike(false);
        }
      }
    } catch (error) {
      console.error("싫어요 변경에 실패했습니다.", error);
    }
  };
  return (
    <div onClick={handleDislike} className="reaction-button">
      <ThumbsdownSVG className={`reaction-icon ${dislike ? "disliked" : ""}`} />
      <span className={`reaction-icon ${dislike ? "disliked" : ""}`}
      style={{ fontSize: "14px" }} >
        싫어요 {dislikeCount}
      </span>
    </div>
  );
};

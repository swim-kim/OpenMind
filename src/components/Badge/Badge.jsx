import React from "react";
import "./Badge.css";

const Badge = ({ status = "unanswered" }) => {
  const badgeClass = `badge ${
    status === "answered" ? "answered" : "unanswered"
  }`;

  return (
    <span className={badgeClass}>
      {status === "answered" ? "답변 완료" : "미답변"}
    </span>
  );
};

export default Badge;

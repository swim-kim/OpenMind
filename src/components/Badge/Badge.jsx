import React from "react";
import styled from "styled-components";

const StyledBadge = styled.span`
  display: inline-block;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 14px;
  border: 2px solid;
  color: ${(props) =>
    props.status === "answered" ? "var(--brown-40)" : "var(--gray-30)"};
  border-color: ${(props) =>
    props.status === "answered" ? "var(--brown-40)" : "var(--gray-30)"};
`;

const Badge = ({ status = "unanswered" }) => {
  return (
    <StyledBadge status={status}>
      {status === "answered" ? "답변 완료" : "미답변"}
    </StyledBadge>
  );
};

export default Badge;
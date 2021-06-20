import React, { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

function Comment(props) {
  const videoId = props.videoId;
  const user = useSelector((state) => state.user);
  const [commentValue, setcommentValue] = useState("");

  const handleClick = (e) => {
    setcommentValue(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      content: commentValue,
      writer: user.userData._id,
      postId: videoId,
    };

    console.log("comment variables: ", variables);

    Axios.post("/api/comment/saveComment").then((res) => {
      if (res.data.success) {
        console.log("res.data.result: ", res.data.result);
      } else {
        alert("댓글 저장에 실패했습니다.");
      }
    });
  };

  return (
    <>
      <p>댓글</p>
      <br />
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <textarea
          style={{
            width: "100%",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "1px solid black",
            resize: "none",
          }}
          onChange={handleClick}
          value={commentValue}
          placeholder="공개 댓글 추가..."
        />
        <button style={{ width: "20%", height: "40px" }} onClick={onSubmit}>
          추가
        </button>
      </form>
    </>
  );
}

export default withRouter(Comment);

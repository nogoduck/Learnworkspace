import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";

function Subscribe(props) {
  const [SubscribeNumber, setSubscribeNumber] = useState(0);
  const [Subscribed, setSubscribed] = useState(false);

  const userTo = props.userTo;
  const userFrom = props.userFrom;

  useEffect(() => {
    const variable = { userTo: userTo, userFrom: userFrom };

    Axios.post("/api/subscribe/subscribeNumber", variable).then((res) => {
      if (res.data.success) {
        setSubscribeNumber(res.data.subscribeNumber);
      } else {
        alert("구독자 정보를 알 수 없습니다.");
      }
    });

    Axios.post("/api/subscribe/subscribed", variable).then((res) => {
      if (res.data.success) {
        setSubscribed(res.data.subscribed);
      } else {
        alert("내 구독 정보를 알 수 없습니다.");
      }
    });
  }, []);

  const onSubscribe = () => {
    let subscribedVariable = {
      userTo: userTo,
      userFrom: userFrom,
    };

    if (Subscribed) {
      Axios.post("/api/subscribe/unSubscribe", subscribedVariable).then(
        (res) => {
          if (res.data.success) {
            setSubscribeNumber(SubscribeNumber - 1);
            setSubscribed(!Subscribed);
          } else {
            alert("구독 취소 실패");
          }
        }
      );
    } else {
      Axios.post("/api/subscribe/subscribe", subscribedVariable).then((res) => {
        if (res.data.success) {
          setSubscribeNumber(SubscribeNumber + 1);
          setSubscribed(!Subscribed);
        } else {
          alert("구독 실패");
        }
      });
    }
  };
  return (
    <div>
      <button
        style={{
          backgroundColor: `${Subscribed ? "#AAAAAA" : "#CC0000"}`,
          borderRadius: "4px",
          border: "none",
          color: "#fff",
          padding: "10px",
          outline: "none",
        }}
        onClick={onSubscribe}
      >
        {SubscribeNumber} {Subscribed ? "구독중" : "구독"}
      </button>
    </div>
  );
}

export default withRouter(Subscribe);

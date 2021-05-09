import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";

function Subscribe(props) {
  const [SubscribeNumber, setSubscribeNumber] = useState(0);
  const [Subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    let variable = { userTo: props.userTo };

    Axios.post("/api/subscribe/subscribeNumber", variable).then((res) => {
      if (res.data.success) {
        setSubscribeNumber(res.data.subscribeNumber);
      } else {
        alert("구독자 정보를 알 수 없습니다.");
      }
    });

    let subscribedVariable = {
      userTo: props.userTo,
      userFrom: localStorage.getItem("userId"),
    };

    Axios.post("/api/subscribe/subscribed", subscribedVariable).then((res) => {
      if (res.data.success) {
        setSubscribed(res.data.subscribed);
      } else {
        alert("내 구독 정보를 알 수 없습니다.");
      }
    });
  }, []);

  return (
    <div>
      <button>
        {SubscribeNumber} {Subscribed ? "구독중" : "구독"}
      </button>
    </div>
  );
}

export default withRouter(Subscribe);

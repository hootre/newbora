"use client";

import "./style.css";

const ImgCom = ({ item }) => {
  return (
    <>
      <div className="contentBox_1">
        <div className="contents">
          <h2>{item.content_title_1}</h2>
          <div>{item.content_subscription_1}</div>
        </div>
      </div>
      <div className="contentBox_2">
        {item.content_img_1}
        <div className="contents"></div>
      </div>
      <div className="contentBox_2">
        {item.content_img_2}
        <div className="contents"></div>
      </div>
      {item.content_img_3 ? (
        <div className="contentBox_1">
          {item.content_img_3}
          <div className="contents"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default ImgCom;

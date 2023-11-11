import React from "react";
import "./body.css";
import Records from "./records.json";
import { FaThumbsUp } from "react-icons/fa";

const Body = () => {
  return (
    <div>
      <div className="hoz">
        <span className="post-count">{Records.length} Posts</span>
        <span className="hr"></span>
      </div>
      {Records &&
        Records.map((record) => {
          return (
            <div key={record.id}>
              <br />
              <div className="title-container">
                <strong>{record.title}</strong>
                <FaThumbsUp size={25} color="gold" />
              </div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: record.content }}
              />
              <div className="desc-container">
                <div className="left">
                  <span className="rtype">{record.type}</span> by Equbal
                </div>
                <div className="right">
                  {record.date} . {record.time} Read . {record.views} Views
                </div>
              </div>
              <br />
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default Body;

import React from "react";
import { Rate } from "antd";

function Movie({ image, rate, title, description }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
        padding: 5,
        boxShadow: "0px 0px 20px rgb(169,169,169)",
        maxHeight: 300,
        maxWidth: 280,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
        }}
      >
        <div>
          <img src={image} style={{ width: 100 }} />
        </div>
        <div>
          <Rate
            allowHalf
            disabled={true}
            defaultValue={rate / 2}
            style={{ fontSize: 15, padding: 10 }}
          />
          <h3 style={{ textAlign: "center", marginTop: 20 }}>{title}</h3>
        </div>
      </div>

      <p
        style={{
          wordBreak: "normal",
          textAlign: "left",
          marginTop: 20,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default Movie;

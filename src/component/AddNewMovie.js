import React from "react";
import { Rate } from "antd";

function AddNewMovie({
  setAdd,
  setNewImage,
  setNewTitle,
  setNewDescription,
  setRateValue,
  addNew,
}) {
  return (
    <div className={"modal-wrapper"}>
      <div className={"modal-backdrop"} onClick={() => setAdd(false)} />
      <div
        className={"modal-box"}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr 1fr",
          padding: 5,
          boxShadow: "0px 0px 20px rgb(169,169,169)",
          maxHeight: 330,
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
            <input
              type="text"
              placeholder="Add image url"
              style={{
                width: 110,
                height: 127,
                marginTop: 10,
                border: "2px dashed rgb(30,144,255)",
                borderRadius: 5,
                background: `url("https://img.icons8.com/officel/40/000000/add-image.png") no-repeat top`,
              }}
              onChange={(e) => setNewImage(e.target.value)}
            />
          </div>
          <div>
            <Rate
              allowHalf
              style={{ fontSize: 15, padding: 10 }}
              onChange={(e) => setRateValue(e * 2)}
            />
            <input
              type="text"
              style={{
                marginTop: 20,
                width: 120,
                height: 84,
                textAlign: "center",
                wordBreak: "normal",
                border: "2px dashed rgb(30,144,255)",
                borderRadius: 5,
              }}
              placeholder="Enter Title"
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Place description here"
              style={{
                width: 270,
                height: 110,
                wordBreak: "normal",
                marginTop: 20,
                border: "2px dashed rgb(30,144,255)",
                borderRadius: 5,
              }}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <div style={{ margin: "6px 20px", textAlign: "right" }}>
            <button
              style={{
                height: 28,
                width: 60,
                borderRadius: 7,
                color: "white",
                border: "1px solid rgb(255,0,0)",
                backgroundColor: "rgba(255,0,0,0.6)",
                cursor: "pointer",
              }}
              onClick={() => setAdd(false)}
            >
              Cancel
            </button>
            <button
              style={{
                height: 28,
                width: 60,
                marginLeft: 10,
                borderRadius: 7,
                color: "white",
                border: "1px solid rgb(30,144,255)",
                backgroundColor: "rgb(30,144,255)",
                cursor: "pointer",
              }}
              onClick={() => {
                addNew();
                setNewImage(false);
                setNewTitle(false);
                setNewDescription(false);
                setRateValue(false);
                setAdd(false);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewMovie;

import React from "react";
import { Switch } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";

function Header({ setSearchList, setAdd, setChecked, checked, searchList }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        borderBottom: "1px solid rgb(169,169,169)",
        backgroundColor: "rgba(169,169,169,0.2)",
        boxShadow: "0px 2px 20px rgb(169,169,169)",
      }}
    >
      <h1 style={{ gridColumn: "2 / 4" }}>Movies</h1>
      <div
        style={{
          gridColumn: "4",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          paddingTop: 10,
        }}
      >
        <div>
          <PlusCircleTwoTone
            style={{
              fontSize: 30,
            }}
            onClick={() => {
              setAdd(true);
              setSearchList(false);
            }}
          />
        </div>
        <div style={{ paddingTop: 3 }}>
          <Switch
            checkedChildren="Rate"
            unCheckedChildren="Title"
            onClick={() => {
              setChecked(!checked);
              setSearchList(false);
            }}
          />
        </div>
        <div style={{ paddingTop: 3, paddingRight: 5 }}>
          <input
            type="text"
            value={!searchList ? "" : searchList}
            placeholder={checked ? "Rate from 1 to 10" : "Search by Title"}
            onChange={(e) => setSearchList(e.target.value)}
            style={{
              width: 150,
              height: 25,
              borderRadius: 15,
              paddingLeft: 15,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
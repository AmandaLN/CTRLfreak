import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 5 }} className="btn btn-primary">
      {props.children}
    </button>
  );
}

var _jsxFileName = "C:\\ask-mono\\lib\\src\\components\\card\\Card.js";
import React from "react";
import { useSelector } from "react-redux";
export default function Card() {
  const count = useSelector(state => state.counter.value);
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }, count);
}
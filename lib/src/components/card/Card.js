import React from "react";
import { useSelector } from "react-redux";

export default function Card() {
  const count = useSelector(state => state.counter.value);
  return <div className="card">{count}</div>
}

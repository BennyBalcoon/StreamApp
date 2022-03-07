import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StreamShow = () => {
  const { id } = useParams();

  const stream = useSelector((state) => {
    return state.streams[id];
  });

  return !stream ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;

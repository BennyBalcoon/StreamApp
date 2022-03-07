import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import { useNavigate } from "react-router-dom";
import StreamForm from "./StreamForm";

const StreamCreate = (props) => {
  let navigate = useNavigate();

  const onSubmit = (formValues) => {
    props.createStream(formValues);
    navigate("/");
  };

  return (
    <div>
      <h3>Create a stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);

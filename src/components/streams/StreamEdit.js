import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();

  const stream = useSelector((state) => {
    return state.streams[id];
  });

  const onSubmit = (formValues) => {
    props.editStream(stream.id, formValues);
    navigate("/");
  };

  return (
    <div>
      <h3>Edit your stream</h3>
      <StreamForm onSubmit={onSubmit} initialValues={{ title: stream.title, description: stream.description }} />
    </div>
  );
};

export default connect(null, { editStream })(StreamEdit);

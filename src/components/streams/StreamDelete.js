import React from "react";
import Modal from "../Modal";
import { useNavigate, useParams, Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { deleteStream } from "../../actions";

const StreamDelete = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();

  const stream = useSelector((state) => {
    return state.streams[id];
  });

  const cickToCloseModal = () => {
    navigate("/");
  };

  const onDelete = () => {
    props.deleteStream(stream.id);
    navigate("/");
  };

  const actions = (
    <React.Fragment>
      <button className="ui button negative" onClick={onDelete}>
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  return (
    <Modal
      title="Delete Stream"
      content={`Are you sure you want to delete this stream: ${stream.title}`}
      actions={actions}
      onDismiss={cickToCloseModal}
    />
  );
};

export default connect(null, { deleteStream })(StreamDelete);

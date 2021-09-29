import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div className="container-fluid">
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`}
          role="alert"
        >
          <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;

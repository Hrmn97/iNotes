import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    const lower = word.tolowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div>
      <div className="alert alert-success" role="alert">
        {props.alert && (
          <div
            className={`alert alert-${props.alert.type} alert-dismssible fade show`}
            role="alert"
          >
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;

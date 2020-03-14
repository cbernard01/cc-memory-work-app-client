import React from "react";

const MathItem = props => {
  return (
    <React.Fragment>
      <div className="ui card">
        <div className="content">
          <div className="ui center aligned huge header">
            {props.question} = {props.answer}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MathItem;

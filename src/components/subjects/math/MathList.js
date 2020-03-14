import React from "react";
import MathItem from "./MathItem";


const renderItems = (items) => {
  return items.map(equation => {
    return (
      <MathItem key={equation.id} question={equation.question} answer={equation.answer}/>
    )
  })
};

const renderContent = (content) => {
  return (
    <React.Fragment>
      <div className="six wide column"/>
      <div className="three wide column">
        {renderItems(content)}
      </div>
    </React.Fragment>
  )
};

const renderHeader = (math) => {
  const {title, description} = math;

  return (
      <div className="sixteen wide column">
        <h1 className={"ui center aligned header"}>{title}: {description}</h1>
      </div>
  )
};

const MathList = props => {
  return (
    <React.Fragment>
      {renderHeader(props.math)}
      {renderContent(props.math.content)}
    </React.Fragment>
  );
};

export default MathList;

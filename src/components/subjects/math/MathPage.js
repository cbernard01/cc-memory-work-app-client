import React from "react";
import {fetchMath} from "../../../redux/actions";
import {connect} from "react-redux";
import MathList from "./MathList";

class MathPage extends React.Component {
  componentDidMount() {
    this.props.fetchMath();
  }

  render() {
    if (!this.props.math) return <div>Loading...</div>;

    return (
      <div className="ui grid">
        <MathList math={this.props.math}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    math: state.cc.math
  }
};

export default connect(mapStateToProps, {fetchMath})(MathPage);

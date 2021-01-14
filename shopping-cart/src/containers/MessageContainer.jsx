import PropTypes from 'prop-types';
import React from "react";
import { connect } from "react-redux";
import Message from '../components/Message';

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
};

// CartContainer.defaultProps = {
//   product: [],
// }



function MessageContainer(props) {
  const {message} = props
  //function
  //function


  return (
    <Message  message={message}/>
  );
}


const mapStateToProps = state => {
  return {
    message: state.message,
  }
}

export default connect(mapStateToProps, null) (MessageContainer);

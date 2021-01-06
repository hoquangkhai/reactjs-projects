import React, { useState } from 'react';
import './style.scss'
import { connect } from "react-redux";
import * as actions from "./../../actions/index";

function Sort(props) {
  const {onSortTask} = props;

  const [sortValue, setSortValue] = useState({
    by: 'sortName',
    value: 0,
  })

  const onHandlechange = (event) => {
    let target = event.target;
    let key = target.name;
    let value = target.value;
    onSortTask({
      by: key,
      value: value,
    })
    setSortValue({
      ...sortValue,
      by: key,
      value: value,
    })
  }
  return (
    <div className='sort'>
      <select
      className='sort-select'
      name='sortName'
      value={sortValue.status}
      onChange={onHandlechange}
      >
        <option value={0}>Từ A đến Z</option>
        <option value={1}>Từ Z đến A</option>
        <option value={2}>kích hoạt</option>
        <option value={3}>Ẩn</option>
      </select>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSortTask: (sort) => {
      dispatch(actions.sortTask(sort));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);

import React, { useState } from 'react';
import './style.scss'

function Sort(props) {
  const {onSort} = props;

  const [sortValue, setSortValue] = useState({
    sortName: 'sortName',
    status: 0,
  })

  const onHandlechange = (event) => {
    let target = event.target;
    let key = target.name;
    let value = target.value;
    onSort({
      sortName: key,
      status: value
    })
    setSortValue({
      ...sortValue,
      sortName: key,
      status: value
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

export default Sort;
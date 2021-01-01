import React from 'react';
import './style.scss'

function Sort(props) {
  return (
    <div className='sort'>
      <select className='sort-select'>
        Sắp xếp
        <option value="0">Từ A đến Z</option>
        <option value="1">Từ Z đến A</option>
        <option value="2">kích hoạt</option>
        <option value="3">Ẩn</option>
      </select>
    </div>
  );
}

export default Sort;
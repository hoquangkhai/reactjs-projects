import React from 'react';
import './style.scss'

function Search(props) {
  return (
    <div className='search'>
      <input
      type="text"
      className='search-input'
      />
      <button type='button' className='search-btn'>Tìm</button>
    </div>
  );
}

export default Search;
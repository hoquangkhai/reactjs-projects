import React, { useState } from 'react';
import './style.scss'

function Search(props) {
  const {onSearch} = props


  const [searchValue, setSearchValue] = useState({
    keyword: '',
  });

  const onHanleKeyword = (event) => {
    let target = event.target;
    let key = target.name;
    let value = target.value
    setSearchValue({
      ...searchValue,
      [key]: value,
    })
  }

  const onHandleSearch = () => {
    onSearch(searchValue)

  }


  return (
    <div className='search'>
      <input
      type="text"
      className='search-input'
      placeholder='Nhap tim kiem'
      name='keyword'
      value={searchValue.keyword}
      onChange={onHanleKeyword}

      />
      <button type='button' className='search-btn'
              onClick={onHandleSearch}
      >Tìm</button>
    </div>
  );
}

export default Search;
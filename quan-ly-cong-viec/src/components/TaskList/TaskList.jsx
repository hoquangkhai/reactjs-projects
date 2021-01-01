import React from 'react';
import './style.scss'
function TaskList(props) {
  return (
    <div className='taskList'>
      <div className="taskList-heading">
        <p>STT</p>
        <p>Tên</p>
        <p>Trạng Thái</p>
        <p>Hành Động</p>
      </div>
      <div className="taskList-slice">
        <p></p>
        <p><input type="text" placeholder='search'/></p>
        <p>
          <select>
            <option value="0">Tất Cả</option>
            <option value="1">Ẩn</option>
            <option value="2">Kích Hoạt</option>
          </select>
        </p>
        <p></p>
      </div>
        {/** duyet qua đe them */}
      <div className="taskList-body">
        <p>1</p>
        <p>Học ReactJS</p>
        <p>
          <button className='btn btn-active'>
            Kick Hoat
          </button>
        </p>
        <p>
          <button className='btn btn-change'>
            Sửa
          </button>
          <button className='btn btn-delete'>
            Xóa
          </button>
        </p>
      </div>
    </div>
  );
}

export default TaskList;
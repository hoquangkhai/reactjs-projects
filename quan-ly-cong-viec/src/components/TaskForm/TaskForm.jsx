import React from 'react';
import './style.scss'

function TaskForm(props) {
  return (
    <div className='taskForm'>
      <div className="taskForm-heading">
        <h3>Thêm Công Việc</h3>
      </div>
      <div className="taskFrom-body">
        <form>
          <div className="form-group">
            <label>Tên</label>
            <input type="text"/>
          </div>

          <div className="form-group">
            <label>Trạng Thái:</label>
            <select >
              <option value="1">Kích Hoạt</option>
              <option value="0">Ẩn</option>
            </select>
          </div>
        </form>
      </div>
      <div className="taskForm-footer">
        <button className='btn btn-add'>Kích Hoạt</button>
        <button className='btn btn-cancel'>Hủy Bỏ</button>
      </div>
    </div>
  );
}

export default TaskForm;
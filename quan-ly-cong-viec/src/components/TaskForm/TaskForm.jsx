import React, { useState } from 'react';
import './style.scss'

function TaskForm(props) {
  const {onCloseForm, onSubmit} =props;

  //Hook
  const [formValue, setFormValue] = useState({
    name: '',
    status: false
  })

  //function start
  const onChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;

    if(key === 'status') {
      value = event.target.value === 'true' ? true : false;
    }

    setFormValue({
      ...formValue,
      [key]: value,
    })
  }

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValue)
    onClear();
    onCloseForm();
  }

  const onClear = () => {
    setFormValue({
      name: '',
      status: false
    })
  }
  //function end

  return (
    <div className='taskForm'>
      <div className="taskForm-heading">
        <h3>Thêm Công Việc</h3>
        <button className='btn btn-close'
        onClick = {onCloseForm}>Đóng</button>
      </div>
      <div className="taskFrom-body">
        <form onSubmit={onHandleSubmit}>
          <div className="form-group">
            <label>Tên</label>
            <input
            type="text"
            name='name'
            value={formValue.name}
            onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label>Trạng Thái:</label>
            <select
            name='status'
            value={formValue.status}
            onChange={onChange} >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
          </div>

          <div className="form-group">
          <button type='submit' className='btn btn-add'>Kích Hoạt</button>
          </div>
        </form>

        <div className="taskForm-footer">
        <button onClick={onClear} className='btn btn-cancel'>Hủy Bỏ</button>
        </div>
      </div>

    </div>
  );
}

export default TaskForm;
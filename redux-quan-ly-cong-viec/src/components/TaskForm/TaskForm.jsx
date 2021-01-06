import React, { useEffect, useState } from 'react';
import './style.scss'
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
function TaskForm(props) {

  const {onCloseForm, onSaveTask,  isDisplayForm, itemEditing } =props;
  //Hook
  const [formValue, setFormValue] = useState({
    id: '',
    name: '',
    status: false
  })

//conponentwillmount
  useEffect(() => {

    if(itemEditing) {
      setFormValue({
        ...formValue,
        ...itemEditing,
      })
    } else if (!itemEditing) {
      onClear()
    }
  },[itemEditing])



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
    onSaveTask(formValue)
    onClear();
    onCloseForm();
  }

  const onClear = () => {
      setFormValue({
        ...formValue,
        id: itemEditing.id,
        name: '',
        status: false,
      })
  }

  const onHandleCloseForm = () => {
    onCloseForm();
  }
  //function end
  if(!isDisplayForm) return null;
  return (
    <div className='taskForm'>
      <div className="taskForm-heading">
        <h3>
          {formValue.id !== '' ? 'Cập nhật công việc' : 'Thêm Công Việc'}
        </h3>
        <button className='btn btn-close'
        onClick = {onHandleCloseForm}>Đóng</button>
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
          <button type='submit' className='btn btn-add'>Them Cong viec</button>
          </div>
        </form>

        <div className="taskForm-footer">
        <button onClick={onClear} className='btn btn-cancel'>Hủy Bỏ</button>
        </div>
      </div>

    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing,
  }
}

const mapDisptchToProps =  (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    }
  }
}

export default connect(mapStatetoProps, mapDisptchToProps)(TaskForm);
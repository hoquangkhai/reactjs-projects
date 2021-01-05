import React from 'react';
import './style.scss'
import { connect } from 'react-redux';
import * as actions from './../../actions/index'

function TaskItem(props) {
  const {task, index, onUpdateStatus, onDelete, onUpdate} = props;

  const onHandleStatus = () => {
    onUpdateStatus(task.id)
  }

  const onHandleDelete = () => {
    onDelete(task.id)
  }

  const onHandleUpdate = () => {
    onUpdate(task.id)
  }
  return (
      <div className="taskList-body">
        <p>{index}</p>
        <p>{task.name}</p>
        <p>
          <button
           className={task.status ? 'btn btn-active' : 'btn btn-hide'}
           onClick={onHandleStatus}
          >
           {task.status ? 'Kích Hoạt' : 'Ẩn đi'}
          </button>
        </p>
        <p>
          <button className='btn btn-change'
                  onClick={onHandleUpdate}
          >
            Sửa
          </button>
          <button className='btn btn-delete'
                  onClick={onHandleDelete}
          >
            Xóa
          </button>
        </p>
      </div>

  );
}

const mapStatetoProps = (state) => {
  return {}
}

const mapDisptchToProps =  (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id))
    }
  }
}

export default connect(mapStatetoProps, mapDisptchToProps)(TaskItem);
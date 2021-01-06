import React from 'react';
import './style.scss'
import { connect } from 'react-redux';
import * as actions from './../../actions/index'

function TaskItem(props) {
  const {task, index, onUpdateStatus, onDeleteTask, onCloseForm, onOpenForm, onEditTask} = props;

  /* function*/
  const onHandleStatus = () => {
    onUpdateStatus(task.id)
  }

  const onHandleDelete = () => {
    onDeleteTask(task.id)
    onCloseForm()
  }

  const onHandleEditTask = () => {
    onOpenForm()
    onEditTask(task)

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
                  onClick={onHandleEditTask}
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
    onDeleteTask: (id) => {
      dispatch(actions.deleteStatus(id))
    },
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task))
    }
  }
}

export default connect(mapStatetoProps, mapDisptchToProps)(TaskItem);
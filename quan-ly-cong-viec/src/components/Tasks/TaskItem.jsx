import React from 'react';
import './style.scss'

function TaskItem(props) {
  const {task, index, onUpdateStatus} = props;
  const onHandleStatus = () => {
    onUpdateStatus(task.id)
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
          <button className='btn btn-change'>
            Sửa
          </button>
          <button className='btn btn-delete'>
            Xóa
          </button>
        </p>
      </div>

  );
}

export default TaskItem;
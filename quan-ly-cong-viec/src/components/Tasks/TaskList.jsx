import React from 'react';
import './style.scss'
import TaskItem from './TaskItem';

function TaskList(props) {
  const {tasks, onUpdateStatus, onDelete, onUpdate} = props;

  let elementTask;
  if(tasks) {
     elementTask = tasks.map((task, index) => {
      return <TaskItem
                task = {task}
                index ={index}
                key = {task.id}
                onUpdateStatus={onUpdateStatus}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
    })
  }


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
      {elementTask}
    </div>
  );
}

export default TaskList;
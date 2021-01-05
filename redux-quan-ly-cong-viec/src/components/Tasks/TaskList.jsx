
import React, { useState } from 'react';
import './style.scss'
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

function TaskList(props) {
  const {tasks, onDelete, onUpdate, onFilter} = props;

  const [filter, setFilter] = useState({
    name: '',
    status: -1,
  })
   // all:-1; active:1; deactive:0;

  let elementTask;
  if(tasks) {
     elementTask = tasks.map((task, index) => {
      return <TaskItem
                task = {task}
                index ={index}
                key = {task.id}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
    })
  }

  const onChange = (event) => {
      let target = event.target;
      let key = target.name;
      let value = target.value;

      onFilter({
        name: key==='name' ? value : filter.name,
        status: key ==='status' ? value : filter.status
      })

      setFilter({
          ...filter,
          [key] : value,
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
        <p><input
         type="text"
        placeholder='search'
        name='name'
        value={filter.name}
        onChange={onChange}/></p>
        <p>
          <select
          name='status'
          value={filter.status}
          onChange={onChange}
          >
            <option value={-1}>Tất Cả</option>
            <option value={0}>Ẩn</option>
            <option value={1}>Kích Hoạt</option>
          </select>
        </p>
        <p></p>
      </div>
        {/** duyet qua đe them */}
      {elementTask}
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    tasks: state.tasks,
  }
}

export default  connect(mapStatetoProps,null)(TaskList);
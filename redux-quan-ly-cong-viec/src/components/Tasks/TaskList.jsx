
import React, { useState } from 'react';
import './style.scss'
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../../actions/index'

function TaskList(props) {
  const {tasks,  onFilterTable, filterTable, searchTask , sortTask} = props;

  const [filter, setFilter] = useState({
    name: '',
    status: -1,
  })

  let tasksList = [...tasks]

  if (filterTable) {
    if (filterTable.name) {
       tasksList = tasksList.filter((task) => {
        return (
          task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
        );
      });
    }
    tasksList = tasksList.filter((task) => {
      if (filterTable.status === -1) {
        return task;
      } else {
        return task.status === (filterTable.status === 1 ? true : false);
      }
    });
  }

  if(searchTask.keyword) {
    let {keyword} = searchTask;
    tasksList = tasksList.filter((task) => {
      return (
        task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    });
  }

  if (sortTask) {
    if (sortTask.by) {
      tasksList.sort((a, b) => {
        if (sortTask.value === '0')
         return a.name > b.name ? 1 : -1;
        if (sortTask.value === '1')
         return a.name > b.name ? -1 : 1;

        if (sortTask.value === '2')
         return a.status > b.status ? -1 : 1;
        if (sortTask.value === '3')
         return a.status > b.status ? 1 : -1;
      });
    }
  }

  let elementTask;
  if(tasksList) {
     elementTask = tasksList.map((task, index) => {
      return <TaskItem
                task = {task}
                index ={index}
                key = {task.id}
              />
    })
  }

  const onChange = (event) => {
      let target = event.target;
      let key = target.name;
      let value = target.type === 'checkbox' ? target.checked : target.value;

      onFilterTable({
        name: key === 'name' ? value : filter.name,
        status: key === 'status' ? value : filter.status
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
      {elementTask}
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    searchTask: state.searchTask,
    sortTask: state.sortTask
  }
}

const mapDisptchToProps =  (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(actions.filterTask(filter))
    }
  }
}

export default  connect(mapStatetoProps,mapDisptchToProps)(TaskList);
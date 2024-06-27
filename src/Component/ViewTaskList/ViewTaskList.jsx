import React from "react";
import { useParams } from "react-router-dom";

function ViewTaskList() {

  const {username} = useParams()

  const today = new Date()
  const targetdate = new Date(today.getDate())

  const tasks =[
                  {id:1, description: 'Learn AWS', status: 'Pending', duedate: targetdate},
                  {id:2, description: 'Learn Docker', status: 'On hold', duedate: targetdate},
                  {id:3, description: 'Learn DevOps', status: 'In Progress', duedate: targetdate},
              ]


  return (
    <div>
      <h1>Welcome {username} </h1>
      <div className='container'>
        <h1>All task List</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td>Id</td>
                <td>Description</td>
                <td>Status</td>
                <td>DueDate</td>
              </tr>
            </thead>

            <tbody>
              {
                tasks.map(
                  task => (
                    <tr key={task.id}>
                      <td>{task.id}</td>
                      <td>{task.description}</td>
                      <td>{task.status}</td>
                      <td>{task.duedate.toDateString()}</td>
                    </tr>
                  )
                )
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewTaskList;
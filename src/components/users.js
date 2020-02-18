import React from 'react'
import {useState} from 'react'
import UserData from './user'

const Users = () => {
  const [open, setOpen] = useState(false);
  const openState = () => {
    setOpen(!open)
  }
  return (<>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>email</th>
        <th>role</th>
      </tr>
    </thead>
    <tbody>
    <UserData openState={openState} open={open}/>
    </tbody>
  </table>
  </>)
}

export default Users
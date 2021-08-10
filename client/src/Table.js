import React, {Component} from 'react'

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.userData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeUser(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

const Table = (props) => {
  const {
    userData, removeUser
  } = props
  return (
    <table>
      <TableHead />
      <TableBody
        userData={userData}
        removeUser={removeUser}
      />
    </table>
  )
}

export default Table

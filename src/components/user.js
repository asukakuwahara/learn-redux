import React from 'react'

const UserData = (props) => {
  return (<div>
          <tr className={props.open ? 'mobile-title open' : 'mobile-title'}>
            <td>Name</td>
            <td className="detail">email</td>
            <td className="detail">role</td>
            <td></td>
          </tr>
          <tr className={props.open ? 'open' : ''}>
          <td>Asuka</td>
          <td className="detail">kuwahara@gmail.com</td>
          <td className="detail">Component</td>
          <td onClick={()=>{props.openState()}}>button</td>
        </tr> 
    </div>
  )
}

export default UserData
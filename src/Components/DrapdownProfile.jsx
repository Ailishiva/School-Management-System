import React from 'react'

function DrapdownProfile() {
  return (
    <div className='flex flex-col dropdownProfile'>
        <ul className='flex flex-col gap-4 list' style={{marginLeft:0}}>
            <li><h2>Edwards Thomas</h2></li>
            <i class="fa fa-key" style = {{fontSize:16, color: 'gray'}}></i><li style={{marginTop: -25, marginLeft:20}}>Change Password</li>
            <i class="fa fa-sign-out" style={{fontSize:16, color: 'gray'}}></i><li style={{marginTop: -25, marginLeft:20}}>LogOut</li>
        </ul>
    </div>
  )
}

export default DrapdownProfile
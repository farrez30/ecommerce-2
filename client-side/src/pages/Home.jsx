import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
const userGlobal = useSelector((state) => state.users.user)
const dispatch = useDispatch()
const user = userList
  return (
    <div>
      <p>Welcome back, {userGlobal.name}</p>
    </div>
  )
}

export default Home
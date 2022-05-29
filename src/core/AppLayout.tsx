/*
 * @docs
 * react-router-dom https://reactrouter.com/docs/en/v6/getting-started/tutorial
 *
 * */
import React from 'react'
import { Outlet } from 'react-router-dom'

import TopMenu from './ui/TopMenu/TopMenu'

const AppLayout = () => {
  return (
    <div>
      <TopMenu />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout

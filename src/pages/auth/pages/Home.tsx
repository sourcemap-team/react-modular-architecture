import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Link to={'/auth'}>Auth Page</Link>
    </div>
  )
}

export default HomePage

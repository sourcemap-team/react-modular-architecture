/*
 * @docs
 * react-router-dom https://reactrouter.com/docs/en/v6/getting-started/tutorial
 *
 * */
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AuthPage from './pages/auth/pages/Auth'
import HomePage from './pages/auth/pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

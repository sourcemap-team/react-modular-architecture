/*
 * @docs
 * react-router-dom https://reactrouter.com/docs/en/v6/getting-started/tutorial
 *
 * */
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppLayout from '@core/AppLayout'
import AuthPage from '@core/pages/auth/Index'
import HomePage from '@core/pages/home/Index'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="auth" element={<AuthPage />} />
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

export default AppRouter

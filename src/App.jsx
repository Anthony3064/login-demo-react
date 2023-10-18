import { EMPTY, DASHBOARD } from '../src/config/routes/paths.js'
import Login from '../src/routes/Login.jsx'
import Dashboard from '../src/routes/Dashboard.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import PrivateRoute from './components/router/PrivateRoute.jsx'

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={EMPTY} element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path={DASHBOARD} element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './pages/LogIn.jsx'
import SignUp from './pages/SignUp.jsx'
import GlobalLists from './pages/GlobalLists.jsx'
import SingleList from './pages/SingleList.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import { ContextProvider } from './components/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='login' index element={<LogIn />} />
            <Route path='signup' index element={<SignUp />} />
            <Route path='shared-lists' element={<GlobalLists />} />
            <Route path='list/:id' element={<SingleList />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='private' element={<PrivateRoute />} />
            <Route
              path="*"
              element={
                <main>
                  <p>404 - No existe la ruta!</p>
                </main>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)

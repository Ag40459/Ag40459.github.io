import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';

function RoutesProtection({ redirectTo }) {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}
export default function MainRoutes() {

  return (
    <div className="container_home">
      <Routes>
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignIn />} />
        <Route path='*' element={<SignIn />} />
      </Routes>
    </div>

  )
}
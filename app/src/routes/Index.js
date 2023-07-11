import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import EmployeeRoutes from './employee';
import CompanyRoutes from './company';
import ProtectedEmployeeRoute from '../Auth/guards/employee';
import ProtectedCompanyRoute from '../Auth/guards/company';
const Home = React.lazy(() => import('../views/Home'));
const Login = React.lazy(() => import('../views/Login'));
const Signup = React.lazy(() => import('../views/Signup'));
const NotFound = React.lazy(() => import('../views/NotFound'));

export default function Index() {
  const role = localStorage.getItem('role');
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="*" Component={NotFound} />

          {/* Company protected routes */}
          {role === 'company' ? (
            <Route path="/" Component={ProtectedCompanyRoute}>
              {CompanyRoutes}
            </Route>
          ) : null}

          {/* Employee protected routes */}
          {role === 'employee' ? (
            <Route path="/" Component={ProtectedEmployeeRoute}>
              {EmployeeRoutes}
            </Route>
          ) : null}
        </Routes>
      </Router>
    </Suspense>
  );
}

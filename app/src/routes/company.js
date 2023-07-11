import React from 'react';
import { Route } from 'react-router-dom';
const CompanyDashboard = React.lazy(() => import('../views/company/Home'));

export default (
  <>
    <Route path="/dashboard" Component={CompanyDashboard} />
  </>
);

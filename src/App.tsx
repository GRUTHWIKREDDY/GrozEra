/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Legal from './pages/Legal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "services/:serviceId", element: <ServiceDetail /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <ContactUs /> },
      { path: "legal/:policyType", element: <Legal /> },
    ]
  }
], {
  basename: import.meta.env.BASE_URL
});

export default function App() {
  return <RouterProvider router={router} />;
}

import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Service from './components/service/service';
import Title from './components/title/title';
import About from './components/about/about';
import Contact from './components/Contact/contact';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/register/register';
import Dashboard from './components/dashboard/dashboard';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Farmerdash from './components/farmerdash/farmerdash';
import Stats from './components/dashboard/stats/Statistics';
import Farmerstat from './components/farmerdash/statsfarmer/farmstat';
import Admindash from './components/adminDash/admindash';
import { color } from 'chart.js/helpers';
import { IoLogoUsd } from 'react-icons/io';
import Card from './components/adminDash/card/card';
import Cards from './components/cards/cards';
import Table from  './components/adminDash/table/table'
import Farmprof from './components/farmerdash/farmprof/farmprof';
import Diysidebar from './components/diydash/diy-sidebar/diysidebar';
import Diydash from './components/diydash/diydash';
import Diyvideo from './components/diydash/bodydiy/diyvideo/diyvideo';
import Windowdiy from './components/diydash/bodydiy/windowdiy/windowdiy';
import InspirationGallery from './components/farmerdash/InspirationGallery/InspirationGallery';
import Chatbot from './components/Chatbot/Chatbot';
import CommunityForum from './components/CommunityForum/CommunityForum';
 

// Layout Component to handle common sections (Navbar, Footer)
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Renders the current route's component */}
      <Footer />
    </div>
  );
};

// Home Page (renders the rest of the site)
const Home = () => {
  return (
    <div>
      <Hero />
      <div className='container'>
        <Title subTitle='Services' title='What We Offer' />
        <Service />
        <About />
        <Title subTitle='Contact Us' title='Here For Help' />
        <Contact />
        <Chatbot/>
      </div>
    </div>
  );
};

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Apply the layout (Navbar, Footer)
    children: [
      {
        path: '/',
        element: <Home />, // Home content with layout
      },
    ],
  },
  {
    path: '/login',
    element: <Login />, // Login route without layout
  },
  {
    path: '/register',
    element: <Register />, // Register route without layout
  },
  {
    path: '/dashboard',
    element: <Dashboard />, // Dashboard route
  },
  {
    path: '/farmerdash',
    element: <Farmerdash />, // Dashboard route
  },
  {
    path: '/stats',
    element: <Stats />, // Dashboard route
  },
  {
    path: '/statsfarmer',
    element: <Farmerstat/>
  },
  {
    path: '/farmprof',
    element: <Farmprof/>
  },
  {
    path: '/adminDash',
    element: <Admindash/>
  },
  {
    path: '/card',
    element: <Card/>
  },
  {
    path: '/cards',
    element: <Cards/>
  },
  {
    path: '/table',
    element: <Table/>
  },
  {
    path: '/bodydiy',
    element: <Diysidebar/> 
  },
  {
    path: '/diydash',
    element: <Diydash/> 
  },
  {
    path:'/diyvideo',
    element: <Diyvideo/>
  },
  {
    path: '/windowdiy',
    element: <Windowdiy/>
  },
  {
    path: '/InspirationGallery',
    element: <InspirationGallery/>
  },
  {
    path: '/CommunityForum',
  element: <CommunityForum/>
}
]);

// Main App Component
const App = () => {
  return <RouterProvider router={router} />;
};

  
export default App;

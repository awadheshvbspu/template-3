import React from 'react';
import './App.css';
import Sidebar from './component/Sidebar';
import DashboardView from './component/DashboardView';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='flex'>
        <div className='basis-[13%]  h-[100vh]'>
          <Sidebar/>
        </div>
        <div className='basis-[87%] border h-[100vh] overflow-scroll '>
          <DashboardView/>
        </div>
        <div>
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;

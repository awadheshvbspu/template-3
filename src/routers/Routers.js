import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from '../component/Main';
import App from '../App';

function Routers() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
            <Route index element={<Main/>}/>
            </Route>
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default Routers

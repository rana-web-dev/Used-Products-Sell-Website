import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/home/footer/Footer';
import Nav from '../pages/home/nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
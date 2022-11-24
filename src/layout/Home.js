import React from 'react';
import AdvertisedItems from '../pages/home/advertisedItems/AdvertisedItems';
import Category from '../pages/home/category/Category';
import Footer from '../pages/home/footer/Footer';
import Nav from '../pages/home/nav/Nav';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <AdvertisedItems></AdvertisedItems>
            <Category></Category>
            <Footer></Footer>
        </div>
    );
};

export default Home;
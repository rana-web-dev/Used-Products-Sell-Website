import React from 'react';
import AdvertisedItems from '../pages/home/advertisedItems/AdvertisedItems';
import Banner from '../pages/home/banner/Banner';
import Category from '../pages/home/category/Category';
import Support from '../pages/home/support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Category></Category>
            <Support></Support>
        </div>
    );
};

export default Home;
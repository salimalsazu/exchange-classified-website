import React from 'react';
import useTitle from '../../Hook/useTitle';
import Advertisement from '../Advertisement/Advertisement';
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';
import Testimonial from '../Testimonidal/Testimonial';

const Home = () => {

    //dynamic title
    useTitle('Home')

    return (
        <div>
            <Hero></Hero>
            <Advertisement></Advertisement>
            <Categories></Categories>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
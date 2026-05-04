import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';
import Brand from '../Brands/Brand';
import Testimonials from '../Testimonals/Testimonal';
import FAQ from '../FAQ/FAQ';
import OurPriority from '../OurPriority/OurPriority';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowWorks></HowWorks>
           <Services></Services>
           <Brand></Brand>
           <Testimonials></Testimonials>
           <FAQ></FAQ>
           <OurPriority></OurPriority>
        </div>
    );
};

export default Home;
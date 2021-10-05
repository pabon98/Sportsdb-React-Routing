import React from 'react';
import AllTeams from '../AllTeams/AllTeams';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTeams></AllTeams>
            <Footer></Footer>
        </div>
    );
};

export default Home;
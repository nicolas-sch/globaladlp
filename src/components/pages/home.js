import React from 'react';
import Navbar from '../navbar';
import Header from '../header';
import About from '../about';
import Expertises from '../expertises';
import Clientes from '../clientes';
import Blog from '../blog';
import Contato from '../contato';
import Newsletter from '../newsletter';
import Footer from '../footer';

function Home () {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Expertises />
            <Clientes />
            <Blog />
            <Contato />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home;
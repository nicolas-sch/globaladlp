import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Privaci from './components/pages/politicas';
import CookieConsent from 'react-cookie-consent'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Privaci' exact component={Privaci} />
          {/* <Route path='/home' exact component={Home} /> */}
          {/* <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} /> */}
          
          {/* <Route path='/contact' exact component={Contact} /> */}
        </Switch>
      </Router>
      <CookieConsent 
      debug={true}
      style={{ width:"90%", marginLeft:"5%", borderRadius: "10px", textAlign:"center", opacity: "90%", fontSize:"15px"}}
      buttonStyle={{ background: "#FE016E", color: "white", width:"80px", borderRadius:"2px"}}
      buttonText="OK"
      expires={150}
      >
        Utilizamos cookies essenciais e tecnologias semelhantes de acordo com a nossa Política de Privacidade e, ao continuar navegando, você concorda com estas condições.
        </CookieConsent>
    </>
      
  );
}

export default App;



// import './App.css';
// import Inform from './components/inform';
// import Navbar from './components/navbar';
// import Header from './components/header';
// import About from './components/about';
// import Expertises from './components/expertises';
// import Clientes from './components/clientes';
// // import Cases from './components/cases';
// import Blog from './components/blog';
// import Contato from './components/contato';
// import Newsletter from './components/newsletter'
// import Footer from './components/footer';
// import {BrowserRouter as Router} from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Router>
//         {/* <Inform /> */}
//         <Navbar />
//         <Header />
//         <About />
//         <Expertises />
//         <Clientes />
//         {/* <Cases /> */}
//         <Blog />
//         <Contato />
//         <Newsletter />
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;

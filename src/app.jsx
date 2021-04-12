import React from 'react';
import Body from './components/body';
import Footer from './components/footer';
import Nav from './components/navbar';

const App = () => {
    return ( 
        <div className="min-h-screen" style={{
            background : 'linear-gradient(to bottom ,#F0F4FD ,#A1A3BA'
        }}>
            <Nav/>
            <Body/>
            <Footer/>
            <img className="w-full h-96" src="https://img.freepik.com/free-vector/low-poly-mesh-background_1048-7639.jpg" alt=""/>

        </div>
     );
}
 
export default App;
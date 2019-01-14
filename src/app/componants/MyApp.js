import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

//<Header /> Loads the header componant
//<MainContent /> Loads the main content componant 
 //<Footer /> Loads the footer   

function MyApp()
{
    return (
        <div>
            <Header />  
            <MainContent />
            <Footer />
        </div>
    )  
  
}

export default MyApp 
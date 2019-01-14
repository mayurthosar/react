import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

//<Header /> Loads the header componant
//<MainContent /> Loads the main content componant 
 //<Footer /> Loads the footer   

function MyApp()
{
    const date = new Date(2019,1,14,15);
    const hours= date.getHours();
    let timeOfDay;
    const styles = {
        fontSize:30
    }

    if(hours < 12)
    {
        timeOfDay = "morning"; 
    }
    else if(hours >= 12 && hours <= 17)
    {
        timeOfDay = "Afternoon"
    }
    else
    {
        timeOfDay = "Night";
    }
    return (
        <div>
            <Header />  
            <MainContent />
            <Footer />
        </div>
    )  
  
}

export default MyApp 
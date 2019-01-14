import React from 'react';
import ContactCard from './ContactCard';

function MainContent()
{
    return(
    <div>
      <ContactCard contacts = {{name:"Mayur Thosar",image:"https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg",city:"Thane"}} />
      <ContactCard contacts = {{name:"Raj shukla",image:"https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg",city:"Mumbai"}} />
      <ContactCard contacts = {{name:"jitendra Vaishnav",image:"https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg",city:"Kalyan"}} />
      <ContactCard contacts = {{name:"Mayur Thosar",image:"https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg",city:"Thane"}} />
    </div>
    )
  }

export default MainContent
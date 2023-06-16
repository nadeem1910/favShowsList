import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Details from './Details';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className='heading__style'>My Favorite TV Shows List</h1>
    {  /* earlier we write -> {Details.map(function SCard(val){...} */
      Details.map((val) => {     // now this is fat arrow representation
        return(
          <App 
            key = {val.id} 
            img = {val.img}
            title = {val.title}
            sName = {val.sName}
            link = {val.link}
          />
        );
    })}

    {/* <App 
      img = {Details[1].img}
      title = {Details[1].title}
      series = {Details[1].sName}
      link = {Details[1].link}
    />

    <App 
      img = {Details[2].img}
      title = {Details[2].title}
      series = {Details[2].sName}
      link = {Details[2].link}
    />

    <App 
      img = {Details[3].img}
      title = {Details[3].title}
      series = {Details[3].sName}
      link = {Details[3].link}
    />

    <App 
      img = {Details[4].img}
      title = {Details[4].title}
      series = {Details[4].sName}
      link = {Details[4].link}
    /> */}
  </React.StrictMode>
);


import React from 'react';
import Sidebar from './compoents/sidebar';
import Contentbar from './compoents/contentbar';
import './App.css';

export default function App(){
   return (
    <>
    <div  className='hole_div'>
      <div class="row" >
           <Sidebar/> 
           <Contentbar/>
      </div>
    </div>
    </>
   )
}

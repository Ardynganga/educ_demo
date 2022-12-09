import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
var Educ_modul = require('educ_modul');

// fonction de test  
export function Test(prop){
    
    return (<div id='test'>
              <HookExemple/><hr/>
              <h2 id='h21'>composant : rdc_etabTypeEcole</h2><hr/>
              <Rdc_etabTypeEcole/>
            </div> 
            )
}
// fonctionement de hook

export function HookExemple(){
  const [nom,setnom]= useState('ardy');
  var [count,setCount]= useState(0);
  
  useEffect(() =>{
    var element = document.getElementById('clicks');
    element.addEventListener('click',function(e){
    
    })

  });
  
  return (
    <div>
      <h2 id='h21'>test ajax/jquery avec jquery</h2><hr/>
      <button id='clicks'>ajax avec jquery</button><br/>
      <p>identié du serveur recupere par une requete ajax</p>
      <div id="idServer"></div>
      <div id="res"></div>

      
    </div>
  )
};

// composant : rdc_etabTypeEcole

export function Rdc_etabTypeEcole(){

  useEffect(() =>{

  });
  return (
          <div id='Rdc_etabTypeEcole'>
            <div className='Rdc_etabTypeEcole_1'>type de l'école</div>
              <div className='Rdc_etabTypeEcole_2'>
                <input type='radio' id='rdc_typeEcole' name='typeEcole' value='publique'/><label>École publique</label><br/>
                <input type='radio' id='rdc_typeEcole' name='typeEcole' value='privée agréer'/><label>École privée agréer</label>
              </div>
          </div>
          );
};
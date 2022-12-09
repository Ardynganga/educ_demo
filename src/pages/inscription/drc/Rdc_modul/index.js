// Rdc_modul
import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
import {Rdc_etabTypeEcole} from './../composant';
import { render } from '@testing-library/react';

  /*************************************************************************************/
 //--------- module de gestion de composant pour le type d'etablisement de la rdc------/
/*************************************************************************************/
// fonction de randu de composant 
export function rdc_gestTypEtab_componat(idcomposant,IdtypeEtab,IdpayEtab){
    var composant = document.getElementById(idcomposant);
    var typeEtab = document.getElementById(IdtypeEtab);
    var payEtab = document.getElementById(IdpayEtab);
    
    
  //recuperation de type de l'etablisement
    payEtab.addEventListener('input',function(e){
      //recuperation du pays
      var payEtab_v = e.target.value;
    typeEtab.addEventListener('input',function(e){
        //recuperation du type de l'etabisement
      var typeEtab_v = e.target.value;
      if(payEtab_v == 'Rdc' && typeEtab_v == 'ecole'){
      $(composant).show(2000);
      var typeEcole = document.getElementById('rdc_typeEcole')
      typeEcole.addEventListener('input',(e)=>{
      var typeEcole_v = e.target.value;
      console.log(typeEcole_v)
      })
      }else{
        composant.style.display="none" 
      }
   

    });
      
      });
};

// methode de de gestion de données 
export function rdc_gestTypEtab_donnees(){
    var EcoleType = document.formCreatcompte.typeEcole.value
  return EcoleType
}
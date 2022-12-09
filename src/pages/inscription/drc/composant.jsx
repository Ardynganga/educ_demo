// les composant du pays : RDC
import React,{ useState, useEffect } from 'react';

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
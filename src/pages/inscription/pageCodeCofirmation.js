// page de code de confirmation pour l'inscription
import React,{ useState, useEffect } from 'react';
import Entete from '../../composants/entete';
var Educ_modul = require('educ_modul');
function PageCodeConfirmation(){
    useEffect(() =>{
        //surveillance de données en temps reel
            let Bsubmit = document.getElementById('submit');
            let Bmsg = document.getElementById('msgCode');
            let idchamp = document.getElementById('codeCofirm');

            Bsubmit.addEventListener('click',(e)=>{
                e.preventDefault();
                let codesaisie = document.formCofirm.codeCofirm.value;

                let objetRegexManuel ={
                    data : codesaisie,
                    masqueAcept : /[0-9]/,
                    masqueIgnore : /[^0-9]/
                }
                codesaisie = Educ_modul.RegexManuel(objetRegexManuel);

                let compteComfirmer = (codesaisie == sessionStorage.getItem('code'));
                if(compteComfirmer == true){
                   
                        Bmsg.textContent='code correct ';
                        Bmsg.style.color='green';
                        idchamp.style.border='3px solid green';

                        alert('compte cree avec succes ecole type : '+sessionStorage.getItem('typeEcole'))
                    
                }else{
                    Bmsg.textContent='code incorrect ';
                    Bmsg.style.color='red';
                    idchamp.style.border='3px solid red';
                }
            })
            
        
    })
    return(
        <div>
            <Entete/><br/><br/><br/><br/><br/><br/><br/>
            <center>
                <div id='formCodeConfirm'>
                    <p className='p1'><b>Saisisse le code a 6 chiffres envoyer a l’adresse <b className='emailConfirm'>{sessionStorage.getItem('emailEtab')}</b></b></p>
                    <form name='formCofirm'>
                        <div>
                            <input type="tel" id='codeCofirm' placeholder='code de confirmation ' name='codeCofirm' maxLength={6}/>
                            <p id='msgCode'></p>
                        </div>
                        <p className='p2'>code ne pas reçu</p>
                        <button id='submit'><b>valide</b></button>
                    </form>
                </div>
            </center>
        </div>
    )
}
export default PageCodeConfirmation;
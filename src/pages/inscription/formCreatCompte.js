
import React,{ useState, useEffect } from 'react';
import Entete from '../../composants/entete';

// module cote systeme
var Educ_modul = require('educ_modul');


export function FormRoute(){
   
    useEffect(() =>{
        //surveillance de données en temps reel
        var nom_msg = {
            max :50,
            min : 5,
            minMsg : "ce champ ne doivent pas être en dessous de 5 caractère ",
            maxMsg : "ce champ ne doivent pas deppasé 5 carracteur",
            msgInvalide : "nom invalide",
            msgValide : "votre nom est valide"
        }
        Educ_modul.autotext('nom','nom_msg',10,nom_msg,'valider');
        
        let mailConfig ={
            msgInvalide : "adresse e-mail invalide",
            msgValide : "adresse e-mail valide",
            valideColor : "green",
            invalidColor : "red",
            idSubmit : "valider"
        }
        Educ_modul.autoMail('email','mailmsg',mailConfig);
        
        let paysSelects ={
            idchamp : "select1",
            listElement : [/Rdc/],
            idchamp : "select1",
            msgValide: "pays valide",
            msgInvalide :"veiller selectioner votre pays",
            idBmsg : "pays_msg",
            colorValide : "green",
            borderValide : "3px solid green",
            borderInvalide : "2px solid red",
            colorInvalide : "red",
            idsubmit : "valider"
        }
        Educ_modul.autoselect(paysSelects);

        let etabSelects ={
            idchamp : "selectEtab",
            listElement : [/univerite/,/ecole/,/centre_de_formation/],
            msgValide: "type valide",
            msgInvalide :"veiller selectioner le type de votre etablissement",
            idBmsg : "EtabMsg",
            colorValide : "green",
            borderValide : "3px solid green",
            borderInvalide : "2px solid red",
            colorInvalide : "red",
            idsubmit : "valider"
        }
        Educ_modul.autoselect(etabSelects);


        
        // lors du validation du formulaire d'inscription
        let submit = document.getElementById("valider");
        submit.addEventListener('click',function(e){
            e.preventDefault();
            // recuperation de données principale du formulaire
            var nomEtab = document.formCreatcompte.nom_etablissement.value;
            var typeEtab = document.formCreatcompte.type_de_letablissement.value;
            var paysEtab = document.formCreatcompte.pays.value;
            var emailEtab = document.formCreatcompte.email.value;
            
            //inscription partie 1 
            let nomEtabs = {
                data:nomEtab,
                min:5,
                max:50
            }
            let paysEtabs = {
                data : paysEtab,
                listElement : [/Rdc/],
                idchamp : "select1"
            }
            let typeEtabs = {
                data : typeEtab,
                listElement : [/univerite/,/ecole/,/centre_de_formation/],
                idchamp : "selectEtab"
            }
            Educ_modul.formValideInscript1(nomEtabs,paysEtabs,typeEtabs,emailEtab);
            
        }) 
    })
    
    return (<div>
        <Entete/><br/><br/><br/><br/>
    <center>
        <div id="form_creatcompte">
            
            <form id='formCreatcompte' name='formCreatcompte'>
            
                <div id="nomdeletablissement">
                    <h2 id="admin"> administre vos etablissement simple et rapide en toute sécurité </h2><br/>
                    <input type="text" className='champ' id="nom" name="nom_etablissement" required placeholder="nom de l'etablissement"  />
                    <p id="nom_msg"></p>
                </div>
                
                <div id="pays">
                    <label className='label'>pays : </label>
                    <select name="pays" className='select' id="select1">
                                <option value="null">choisiser votre pays</option>
                                <option value="Rdc">république démocratique du Congo RDC</option>
                                
                    </select><br/>
                    <p id="pays_msg"></p>
                    
                </div>

                <div id="typedeletablissement">
                    <label>type : </label>
                    <select name="type_de_letablissement" className='select' id="selectEtab">
                                <option value="null">selectioner le type de l'etablissement</option>
                                <option value="univerite">université</option>
                                <option value="ecole">école</option>
                                <option value="centre_de_formation">centre de formation</option>
                    </select><br/>
                    <p id="EtabMsg"></p>
                    <div id='gestionTypeEcole'>
                    </div>
                </div>
                

                <div id="mailParent">
                    <input type="email" className='champ' id="email" name="email" required placeholder="e-mail"  />
                    <p id="mailmsg"></p>
                </div>

                

                <div id="suivan">
                    
                    <center><button type="submit"  id="valider" >suivant</button> <button type='reset'  id="anuller" >Anuller</button></center><br/><br/>
                </div>
            </form>

        </div>    
    </center>
</div>)
}

import React,{ useState, useEffect } from 'react';
var Educ_modul = require('educ_modul');


function FormetebEccole(){
    useEffect(() =>{
        //surveillance de données en temps reel
            //tel
        var objetTel ={
            baliseMsg:"telmsg",
            idChamp:"numTel",
            msgValide:"tel valide",
            msgIvalide:"tel nom valide",
            colorValide:"green",
            colorIvalide:"red",
            idsubmit:"Btsubmit",
            champBOrdeValide:"3px solid green",
            champBorderInvalide:"3px solid red"
        }
        Educ_modul.autoTel(objetTel);
            //type ecole
        let tpEcoleSelects ={
            idchamp : "typeEcole",
            listElement : [/privée/,/publique/],
            msgValide: "type valide",
            msgInvalide :"veiller selectioner le type de votre école",
            idBmsg : "typemsg",
            colorValide : "green",
            borderValide : "3px solid green",
            borderInvalide : "2px solid red",
            colorInvalide : "red",
            idsubmit : "Btsubmit"
        }
        Educ_modul.autoselect(tpEcoleSelects);
        
            //objet_x_y
        let objet_x_y = {
            idx : 'mtp1',
            idy : 'mtp2',
            msgValide: "mot de passe valide",
            msgInvalide : "mot de passe incorrecte",
            msgInvalide_x_y :"les deux mot de passe ne son pas conrect",
            msglengthIvalide : "nombre de caractère  invalide (6-8)",
            idBmsg : "mmtpmsg",
            colorValide : "green",
            borderValide : "3px solid green",
            borderInvalide : "2px solid red",
            colorInvalide : "red",
            idsubmit : "Btsubmit"
        }
        Educ_modul.autodifer_x_y(objet_x_y);

        
        //gestion du type de l'école
        let ecoletype = document.getElementById(tpEcoleSelects.idchamp) ;
        var idtpcontrant = document.getElementById('tpcontrant');
        var idtpconvention = document.getElementById('tpconvention');
        
        ecoletype.addEventListener('change',(e)=>{
            let ecoletypeV = e.target.value;
            if(ecoletypeV =='privée'){
                idtpcontrant.style.display="block";
                idtpconvention.style.display="none";
            }else if(ecoletypeV =='publique'){
                idtpcontrant.style.display="none";
                idtpconvention.style.display="block";
            }else{
                idtpcontrant.style.display="none";
                idtpconvention.style.display="none";
            }
        });


        // lors du validation du formulaire d'inscription
        let submit = document.getElementById('Btsubmit');
        submit.addEventListener('click',(e)=>{
            e.preventDefault();
            // recuperation de données principale du formulaire
            let TelEtab = document.FormEtanEcole.Tel.value;
            let typeEtab = document.FormEtanEcole.typeEcole.value;
                let typeContran = document.FormEtanEcole.typePv.value;
                let typeConvention = document.FormEtanEcole.typeconvention.value;
            let mtp1 = document.FormEtanEcole.mtp1.value;
            let mtp2 = document.FormEtanEcole.mtp2.value;

            var elementEcole = {
                TelEtab : {
                    data:TelEtab,
                    max : 8
                },
                typeEcole : {
                    data : typeEtab,
                    listElement : [/privée/,/publique/],
                    idchamp : "typeEcole"
                },
                typeContran : {
                    data : typeContran,
                    listElement : [/true/,/false/],
                    idchamp : "select1"
                },
                typeConvention : {
                    data : typeConvention,
                    listElement : [/catholique/,/kimbaguisme/,/protestante/,/islamique/,/nonconventionner/],
                    idchamp : "select1"
                },
                mtp :{
                    data_x : mtp1,
                    data_y : mtp2
                }
                
            };
            
            //inscription partie 2
           Educ_modul.inscript2(elementEcole,null,null);

        });

    });
    return <center><div>
        <form name="FormEtanEcole">
            <div id="FormEtanEcole">
                <p className="intro">merci d’avoire choisie yekolaeduc pour administre votre école simple rapide est  en toute sécurité</p>
                <hr/>

                
                    <div id="tel">
                        <label htmlFor="numTel">Tel : <b className='payscode'>+243  </b></label>
                        <input type="tel" id="numTel" name='Tel' placeholder="numéro de téléphone" />
                        <p id="telmsg"></p>
                    </div>
                    
                    <div id="typeEcol">
                        <label>type de votre école : </label>
                        <select name="typeEcole" id="typeEcole">
                            <option value="null">choisiser le type de l'école</option>
                            <option value="privée" id="typeEcole">école privée</option>
                            <option value="publique" id="typeEcole">école publique</option>
                        </select>
                            <p id="typemsg"></p>

                    <center><div id="tpcontrant">
                        <div id="tppvIntro">veiller choisir le contrant de votre ecole</div><hr />
                        <div id="typepriveer">
                            <label htmlFor="sous_contrant">sous contrant</label>
                            <input type="radio" name="typePv" id="sous_contrant" value={true}/><br/>

                            <label htmlFor="sans_contrant">sans contrant</label>
                            <input type="radio" name="typePv" id="sans_contrant" value={false}/>
                        </div>

                        </div>
                    </center>

                    <center><div id="tpconvention">
                        <div id="tppvIntro">veiller choisir la convention de votre ecole</div><hr />
                        <div id="typepublique">
                            <label htmlFor="catholique">catholique</label>
                            <input type="radio" value='catholique' name="typeconvention" id="sous_contrant" /><br/>

                            <label htmlFor="kimbaguisme">kimbaguisme</label>
                            <input type="radio" value='kimbaguisme' name="typeconvention" id="sans_contrant" /><br/>

                            <label htmlFor="">protestante</label>
                            <input type="radio" value='protestante' name="typeconvention" id="" /><br/>

                            <label htmlFor="typeconvention">islamique</label>
                            <input type="radio" value='islamique' name="typeconvention" id="" /><br/>

                            <label htmlFor="typeconvention">non conventionner </label>
                            <input type="radio" value='nonconventionner' name="typeconvention" id="" />

                        </div>
                        </div><br />
                    </center>

                    </div>
                    <div id="Mtp">
                        
                        <input type="password" id="mtp1" name='mtp1' placeholder="mot de passe" /> <input type="password" id="mtp2" name='mtp2' placeholder="confirmer votre mot de passe" />
                        <p id="mmtpmsg"></p>
                    </div>

                    <button type="submit" id="Btsubmit">valider</button> <button type='reset'  id="BtAnnuler">anuller la création du compte</button>
                </div>
                
            </form></div>
        </center>
};
export default FormetebEccole;
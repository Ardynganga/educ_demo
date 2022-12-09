
import React from "react";

function FormetebEccole(){
    return <center><div>
            <div id="FormEtanEcole">
                <h1>continue votre inscription</h1>
                <p>merci d’avoire choisie yekola Educ pour administre votre école simple,rapide en toute sécurité </p>
                <hr/>

                
                    <div id="tel">
                        <input type="tel" id="numTel" placeholder="tel" />
                        <p id="telError"></p>
                    </div>
                    
                    <div id="typeEcol">
                        <label>type de votre école : </label>
                        <select name="typeEcole" id="typeEcole">
                            <option value="privée" id="typeEcole">école privée</option>
                            <option value="publique" id="typeEcole">école publique</option>
                        </select>
                            <p id="ttypeEcoleError"></p>
                    </div>

                    <div id="Mtp">
                        
                        <input type="password" id="mtp1" placeholder="mot de passe" /> <input type="password" id="mtp2" placeholder="confirmer votre mot de passe" />
                        <p id="mmtpErrpr"></p>
                    </div>

                    <button type="submit" id="Btsubmit">valider</button> <button  id="BtAnnuler">anuller la création du compte</button>
                </div>
                
            </div>
        </center>
};
export default FormetebEccole;
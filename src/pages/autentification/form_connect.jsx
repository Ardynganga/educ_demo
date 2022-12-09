import React from 'react';
import {Link} from "react-router-dom";

function Form_connect(){
    return (
        <form name="form_connection">
        <center>
        <div className="form_connection">
            
            <div>
            <h4 id="connecter">se connecter a votre compte </h4>
				<input type="tel" id="mail_tel" name="mail_tel" required placeholder="adresse e-mail ou numéro de tel"  /><br/><br/>
            </div>
            <input type="password" id="password" name="password" required placeholder="mot de passe"  /><br/><br/>
            <div> 
                
            </div>

            <button type="submit"  id="submit" >se connecter</button><br/><br/>
				<a href="#" id="a1">mot de passe oublier ?</a><br/>
				<hr/>
                <p id="p2">cliquer si dessous pour créer un compte administratif pour vos établissement <br/><i className="fa-thin fa-arrow-down-from-dotted-line"></i></p>
                <center><Link to="/inscription"><h3 className="créernouveaucompte"><i className="fa-solid fa-user-plus"></i> créer nouveau compte </h3></Link></center>

            </div><br/><br/>
        </center>
    </form>
    
    )
    
    
};
export default Form_connect;
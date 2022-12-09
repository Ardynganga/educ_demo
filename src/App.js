
import './pages/css/mode-claire.css';
import './pages/fontawesome-free-6.1.1-web/css/all.min.css';
import {Routes,Route, BrowserRouter} from "react-router-dom";

import Pageconnect from './pages/autentification/page_connect';
import {FormRoute} from './pages/inscription/formCreatCompte';
import FormEtabEcole from './pages/inscription/drc/pageformEtabEcole';
import Inscriptecole from './Cpays/rdc/page/ecole'
import PageCodeConfirmation from './pages/inscription/pageCodeCofirmation';
//page des execcises
import {Test} from './composants/teste';


function App() {
    
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Pageconnect />} />
        <Route path='/inscription' element={<FormRoute />}/>
        <Route path='/inscription/ecole' element={<FormEtabEcole />}/>
        <Route path='/test' element={<Test />}/>
        <Route path='/inscription/rdc/ecole' element={<Inscriptecole />}/>
        <Route path='/inscription/confirmation' element={<PageCodeConfirmation />}/>

      </Routes>
    </div>
    
  );
  
}

export default App;

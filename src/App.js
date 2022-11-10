import {
  Routes,
  Route,
} from "react-router-dom";

import './App3.scss'; 
import Contain from "./lap7/FilmListManage";
import MainContain from "./lap7/Container"
import Header from "./lap7/Header"
import FilmDetail from "./lap7/FilmDetail"
import Footer from "./lap7/Footer"
import Adding from "./lap7/Adding" 
import HeaderAdmin from "./lap7/HeaderAdmin" 
import Authen from "./authen/Authen";
function App() {
  return (

      <div>
        <Routes>
          <Route path='/' element={<><Header/><MainContain/><Footer/> </>} ></Route>

      <Route element={<Authen/>}> 
          <Route path='/login' element={<><HeaderAdmin/><MainContain/><Footer/> </>} ></Route>
      </Route>
         
          
          
          <Route path='/detail/:id' element={<FilmDetail />}></Route> 
          <Route path='/login/detail/:id' element={<FilmDetail />}></Route> 
          <Route path='/FilmList' element={<Contain />}></Route> 
          <Route path='/FilmList/adding' element={<Adding />}></Route>  
      </Routes>
      </div>
     
  );
}

export default App;

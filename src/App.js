import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom";
import {userContext} from './context/userContext';
import {useState} from 'react';
import './styles/styles.scss';

function App() {

  const [user, setUser] = useState("Patricia"); // hook useState

  //login

  const login = (name) => {
      setUser(name);
  }
  
  //logout

  const logout = () => {
    setUser("");
  }

  const data = {
    user,
    login,
    logout
  }
  
  return (
    <div className="App">
        <BrowserRouter>
        <userContext.Provider value={data}>
        <Header/>
        <Main/>
        </userContext.Provider>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;

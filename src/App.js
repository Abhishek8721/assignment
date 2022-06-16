import Header from './Components/Header';
import Home from './Components/Home';
import Section from './Components/Section';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="cont bg-dark">
        <img src="https://beta.goalfi.app/logo/Group.png" />
        <button>GET STARTED</button>
      </div>
      <Header />
      <Home />
      <Section/>
      <Footer/>
    </>

  );
}

export default App;

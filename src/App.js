import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import HomeScreen from './Components/HomeScreen';
import Login from './Components/Login';

function App() {
  return (
    <div classNameName="App">
      <Login/>
      <HomeScreen/>
      <About/>
      <Contact/>




      <footer className ="col-sm-12 bg-black text-white text-[10px] h-16 p-4" >
        <div className = "col-sm-12">
          <div className ="flex justify-between">
            <div className = "col-sm-8 flex justify-start">
              <p >© UG ELECTIVES SELECTION HELPER | All Rights Reserved</p>
            </div>
            <div className = "col-sm-4">
              <div className ="mr-4 flex justify-start">
                 <p className = " mr-8">Terms & Conditions</p>
                 <p className = "mr-8">Privacy</p>
                 <p className = "mr-8">Community Forum Policy</p>
                 <p className = "mr-8">Contact</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

/* eslint-disable react/style-prop-object */
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";   
import Slider from './components/images';

function App() {
  return (
    <div className="App">      
        <Header/>
      <Slider/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Top from './components/Top'
import Navbar from './components/Navbar'
import Carouel from './components/Carousels'
import Category from './components/Category'
import Brand from './components/Brands'

function App() {
  return (
    <div className="App">
      <Top/>
      <div id="container">
        <Navbar/>
        <Carouel/>
        <Category/>
        <Brand/>
      </div>
    </div>
  );
}

export default App;

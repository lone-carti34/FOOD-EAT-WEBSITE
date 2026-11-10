import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import BgImage from "./assets/2.png";
import Hero from "./components/Hero/Hero";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
}

const App = () => {
  return (
    <div style={bgStyle} className="overflow-x-hidden">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl" >
      <Navbar />
      
      </div>
    

    </div>
  )
}

export default App

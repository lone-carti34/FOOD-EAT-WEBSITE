import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import BgImage from "./assets/2.png";
import Hero from "./components/Hero/Hero";
import TopList from "./components/TopList/TopList";
import Banner from "./Components/Banner/Banner";
import OurServices from "./Components/OurServices/OurServices";


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
        <Hero />
        <TopList />
        <Banner />
        <OurServices />
      </div>
    </div>
  )
}

export default App


import './App.css';
import Footer from './Component/footer/Footer';
import Header from './Component/header/Header';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Featured from './pages/featured/Featured';
import Project from './pages/project/Project';
function App() {
  return (
<div className='container'>
<Header />
<div className='wrapper'>
    <Featured/>
    < About />
    < Project />
    <Contact />
</div>
< Footer />
</div>
  );
}

export default App;

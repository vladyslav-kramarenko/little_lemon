import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routes from "./routes";

import { BrowserRouter as Router} from 'react-router-dom';
import Nav from "./components/Nav/Nav";


function App() {
    return (
        <Router>
            <Nav/>
            <Routes/>
            <Footer/>
        </Router>
    );
}



export default App;

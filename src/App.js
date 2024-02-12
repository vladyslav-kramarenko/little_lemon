import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";

import { BrowserRouter as Router} from 'react-router-dom';


function App() {
    return (
        <Router>
            <Header/>
            <Routes/>
            <Footer/>
        </Router>
    );
}



export default App;

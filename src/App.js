import logo from './logo.svg';
import './App.css';
import TopNav from "./pages/dashboard/component/TopNav";
import Hero from "./pages/dashboard/component/Hero";
import Body from "./pages/dashboard/component/Body";
import CircleCalculator from "./pages/CircleCalculator/component/CircleCalculator";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FrontPage from "./FrontPage";
import CircleResult from "./pages/CircleCalculator/component/CircleResult";
import CircleResultTwo from "./pages/CircleCalculator/component/CircleResultTwo";

function App() {
  return (
    <div className="App">
        <TopNav/>
        <Router>
            <Routes>
                <Route path='/home' element={ <FrontPage/>}/>
                <Route path= '/circleCalculation' element={<CircleCalculator/>}/>
                <Route path= '/circleResult' element={<CircleResult/>}/>
                <Route path= '/circleResultTwo' element={<CircleResultTwo/>}/>
            </Routes>
        </Router>

    </div>
  );
}

export default App;

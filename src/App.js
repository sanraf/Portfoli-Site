import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/portfolio-site" element={<Home />} /> 
      </Routes>
    </div>
  </Router>
  );
}

export default App;
// echo "# Portfoli-Site" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sanraf/Portfoli-Site.git
// git push -u origin main
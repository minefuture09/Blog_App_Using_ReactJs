import Home from "./pages/Home.js"
import About from "./pages/About.js"
import ArticleList from "./pages/ArticleList.js"
import Article from "./pages/Article.js"
import NavBar from "./components/NavBar.js"

import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar/>
    <div className="max-w-screen-md mx-auto pt-20">
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/ArticleList" component={ArticleList}/>
      <Route exact path="/Article/:name" component={Article}/>
    </div>
    </Router>
  );
}

export default App;


import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { routePath } from "./routes/route";
import AllPosts from "./Pages/AllPosts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={routePath.Home} element={<Home/>} />
          <Route path={routePath.Create} element={<CreatePost/>} />
          <Route path={routePath.Posts} element={<AllPosts/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

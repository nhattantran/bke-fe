import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { PageRouter } from './route.js'
import Page404 from './pages/auth/Page404.js';

function App() {
  const extractRoute =  (route) => (
    route.map((item, index) =>{
      const Component = item.component;
      return (<Route
        key={index}
        path={item.path}
        exact
        element={<Component />}
      />)
    })
    )
  return (
    <Router>
      <Routes>
        {extractRoute(PageRouter)}
        <Route 
          render={() => (<Page404 />)}
        />
      </Routes>
    </Router>
  );
}

export default App;

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Nav from './components/Nav/Nav';
import NavElement from '../interfaces/NavElement';
import './App.scss'
import Home from "./pages/Home/Home";
import Nytimes from "./pages/NYTimes/NYtimes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'nytimes',
    element: <Nytimes/>
  }
]);

function App() {
  const elements : NavElement[] = [
    {
      name: "Accueil",
      href: "/"
    },
    {
      name: "NYTimes",
      href: "/nytimes"
    }
  ]
  
  return (
    <>
      <Nav elements={elements}/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

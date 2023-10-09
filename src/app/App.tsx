import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import Nav from './components/Nav/Nav';
import NavElement from '../interfaces/NavElement';
import './App.scss'
import Home from "./pages/Home/Home";
import Nytimes from "./pages/NYTimes/NYtimes";

const queryClient = new QueryClient();

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
      name: "NewYorkTimes",
      href: "/nytimes"
    }
  ]
  
  return (
    <>
      <Nav elements={elements}/>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;

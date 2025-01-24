import './Main.css';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// create router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/signUp",
    element: (
      <div>
        <Navbar />
        <Signup />
      </div>
    ),
  },
  {
    path: "/logIn",
    element: (
      <div>
        <Navbar />
        <Login />
      </div>
    ),
  }
])
function App() {
  return (
    <div className="Main">
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;

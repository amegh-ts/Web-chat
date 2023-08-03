import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Pages/Signup';

function App() {

const router =createBrowserRouter([
  {
    path:'/',
    element:<Signup/>
  }
])

  return (
  <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Main from './Pages/Main'
import { useSelector } from 'react-redux';

function App() {
const user=useSelector((state)=>state.loginuser.userData)
const Token=user.map((li)=>{
  return li.accessToken
})

const router =createBrowserRouter([
  {
    path:'/',
    element:Token[0] ?<Main/> :<Login/>
  },
  {
    path:'signup',
    element:<Signup/>
  }
])

  return (
  <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

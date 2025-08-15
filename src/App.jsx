import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import Home from './components/Home';
import Footer from './components/Footer';

const router= createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar></Navbar>
        <Paste></Paste>
        <Footer></Footer>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar></Navbar>
        <ViewPaste></ViewPaste>
        <Footer></Footer>
      </div>
    }
  ]
);

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

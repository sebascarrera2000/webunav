import './App.css'
import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from './components/mainpage/MainPage'
import HomePage from './components/homepage/HomPage'
import MapPage from './components/map/MapPage';
import SanJose from './components/buildings/SanJose';
import JDN from './components/buildings/JDN';
import MI from './components/buildings/MI';
import SanBuenaventura from './components/buildings/SB';
import SanFrancisco from './components/buildings/SanFrancisco';
import SantaClara from './components/buildings/SantaClara';
import MadreCaridad from './components/buildings/MadreCaridad'
import MyApp from './components/myapp/MyApp';
import Owner from './components/owner/owner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
  path: "home",
  element: <HomePage/>
  },
  {
    path: "map",
    element: <MapPage/>
  },
  {
    path: "sanjose",
    element: <SanJose/>
  },
  {
    path: "JesusDeNazareth",
    element: <JDN/>
  },
  {
    path: "MariaImaculada",
    element: <MI/>
  },
  {
    path: "SanBuenaventura",
    element: <SanBuenaventura/>
  },
  {
    path: "SanFransisco",
    element: <SanFrancisco/>
  },
  {
    path: "SantaClara",
    element: <SantaClara/>
  },
  {
    path: "MadreCaridad",
    element: <MadreCaridad/>
  },
  {
    path: "MyApp",
    element: <MyApp/>
  },
  {
    path: "owner",
    element: <Owner/>
  }
]);


function App() {
  

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App

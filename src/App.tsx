import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/navBar';
import {AppContainer} from './styles/appStyle';
function App() {

  return (
      <AppContainer>
        <div className='ContainerApp'>
          <div className='NavBarContainer'>
              <NavBar/>
          </div>
          <div className='OutletContainer'>
              <Outlet/>
          </div>
          <div className='FooterContainer'>
              <Footer />
          </div>
        </div>
      </AppContainer>
  )
}

export default App

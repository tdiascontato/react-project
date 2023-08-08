import { Link, useLocation } from 'react-router-dom';
import { ContainerNavBar, Logo, Menu } from '../styles/navBarStyle';

export default function NavBar (){
  const location = useLocation();
    return (
      <ContainerNavBar>
        <Logo>Lacrei</Logo>
                  
        <Menu>
          <Link to='/'><li className={location.pathname === '/' ? 'active' : ''}>Home</li></Link>
          <Link to='/pessoa-usuaria'><li className={location.pathname === '/pessoa-usuaria' ? 'active' : ''}>Pessoa Usuária</li></Link>
          <Link to='/profissional'><li className={location.pathname === '/profissional' ? 'active' : ''}>Profissional</li></Link>
        </Menu>
      </ContainerNavBar>
    )
  }
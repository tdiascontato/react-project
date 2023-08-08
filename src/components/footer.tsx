import { Link, useLocation } from "react-router-dom";
import { FooterContainer, Icons, MenuFooter, Text } from "../styles/footerStyle";
import fb from '../img/fb.png';
import ig from '../img/ig.png';
import ln from '../img/ln.png';

export default function Footer(){
  const location = useLocation();
  return (
    <FooterContainer>
      <hr/>
      <MenuFooter>
          <Link to='/'><li className={location.pathname === '/' ? 'active' : ''}>Home</li></Link>
          <Link to='/pessoa-usuaria'><li className={location.pathname === '/pessoa-usuaria' ? 'active' : ''}>Pessoa Usuária</li></Link>
          <Link to='/profissional'><li className={location.pathname === '/profissional' ? 'active' : ''}>Profissional</li></Link>
        </MenuFooter>
      <Icons>
        <img src={fb} alt='Facebook Lacrei!'/>
        <img src={ig} alt='Instagram Lacrei!'/>
        <img src={ln} alt='Linkedin Lacrei!'/>
      </Icons>
      <Text>&copy;footer</Text>
    </FooterContainer>
  )
}

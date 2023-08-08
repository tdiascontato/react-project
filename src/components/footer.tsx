import { Link, useLocation } from "react-router-dom";
import { FooterContainer, Icons, MenuFooter, Text } from "../styles/footerStyle";
import fb from '../img/fb.png';
import ig from '../img/ig.png';
import ln from '../img/ln.png';
import pt from '../img/logo.png';

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
      <Link to='https://www.facebook.com/lacrei.saude' target="_blank"><img src={fb} alt='Facebook Lacrei!'/></Link>
      <Link to='https://www.instagram.com/lacrei.saude/' target="_blank"><img src={ig} alt='Instagram Lacrei!'/></Link>
      <Link to='https://www.linkedin.com/company/lacrei-saude/' target="_blank"><img src={ln} alt='Linkedin Lacrei!'/></Link>
      <Link to='https://tdiascontato.vercel.app/' target="_blank"><img src={pt} alt='Portifólio do Tiago!'/></Link>
      </Icons>
      <Text>Desafio Front-end Lacrei!</Text>
    </FooterContainer>
  )
}

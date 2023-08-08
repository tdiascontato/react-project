import { Aside, HomeStyle, Section, Text, Button } from "../styles/homeStyle";
import PNG from '../img/LGBT.png'
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <HomeStyle>
      <Section>
        <Text>
          <h1>Boas vindas a Lacrei Saúde!</h1>
          <h3>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</h3>
        </Text>
        <div className="Settings">
          <Link to='/pessoa-usuaria'> <Button bg = '#018762' bd = '#fff' col= '#fff'>Pessoa Usuária</Button> </Link>
          <Link to='/profissional'> <Button bg = '#fff' bd= '#018762' col= '#018762'>Profissional</Button> </Link>
        </div>
      </Section>
      <Aside>
        <img src={PNG} alt='Imagem'/>
      </Aside>
    </HomeStyle>
  )
}

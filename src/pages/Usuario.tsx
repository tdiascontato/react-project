import PNG from '../img/LGBTQ.png'
import { UserStyle, Aside, Text } from "../styles/userStyle";

export default function Usuario(){
    return (
      <UserStyle>
          <Text>
            <h1>Pessoa Usuária!</h1>
            <div className="Settings">
            <hr/>
            <h3>A Lacrei garante que pessoas LGBTQIAPN + recebam 
              atendimento realizado por profissionais de qualidade 
              e que atendam às suas necessidades de forma segura 
              e acolhedora.</h3>
            </div>
          </Text>
        <Aside>
          <img src={PNG} alt='Imagem'/>
        </Aside>
    </UserStyle>
    )
  }
  
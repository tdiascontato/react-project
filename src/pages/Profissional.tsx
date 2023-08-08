import { Aside, ProfissionalStyle, Text } from "../styles/profissionalStyle";
import PNG from '../img/LGBTQI.png'

export default function Profissional(){
    return (
      <ProfissionalStyle>
          <Text>
            <h1>Profissional</h1>
            <div className="Settings">
            <hr/>
            <h3>A Lacrei garante que pessoas LGBTQIAPN + 
              recebam atendimento realizado por profissionais 
              de qualidade e que atendam às suas necessidades 
              de forma segura e acolhedora.</h3>
            </div>
          </Text>
        <Aside>
          <img src={PNG} alt='Imagem'/>
        </Aside>
      </ProfissionalStyle>
    )
  }
  
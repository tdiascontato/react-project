import { Link } from 'react-router-dom';

export default function NavBar (){
    return (
      <div className='ContainerNavBar'>
      <div>Logo</div>
                
      <ul className="BoxCheats">
        <Link to='/'><li>Home</li></Link>
        <Link to='/pessoa-usuaria'><li>Pessoa Usuária</li></Link>
        <Link to='/profissional'><li>Profissional</li></Link>
      </ul>

      </div>
    )
  }
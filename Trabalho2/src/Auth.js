import React, {useState} from 'react';

const Auth = props => {

  const [autenticado, setAutenticado] = useState(false);

  const EventoClick = () => {
    setAutenticado(!autenticado);
  };

  return (
    <div>
      {!autenticado ?
        <div>
          <p>Opa, Faça seu Login</p>
          <button onClick={EventoClick}>Login</button>
        </div> :
        <div>
          <p>Seja bem vindo Usuário!</p>
          <button onClick={EventoClick}>Logout</button>
        </div>
      }
    </div>
  );
};

export default Auth;

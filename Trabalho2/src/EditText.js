import React, {useState} from 'react';

const EditText = props => {

  const [texto, setTexto] = useState(props.text);
  const [qtdCaracteres, setQtdCaracteres] = useState(props.text.length);

  const EventoOnchange = (event) => {
    setTexto(event.target.value);
    setQtdCaracteres(event.target.value.length);
  };

  return(
    <div>
      <input type="text" onChange={EventoOnchange} value={texto}/>
      <p>Quantidade de caracteres {qtdCaracteres}</p>
    </div>
  );
};

export default EditText;

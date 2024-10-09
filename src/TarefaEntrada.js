import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

function TarefaEntrada({ adicionarTarefa }) {
  const [descricao, setDescricao] = useState('');

  const tarefasFicticias = [
    'Preparar aula de programação',
    'Fazer feira',
    'Preparar marmitas'
  ];

  const estilosQuadro = {
    backgroundColor: 'lightyellow', padding: '20px',
    borderRadius: '10px', border: '1px solid darkyellow', marginBottom: '20px'
  };

  const estilosTarefa = {
    marginBottom: '10px', border: '1px solid black', 
    padding: '10px', borderRadius: '2px', textAlign: 'center', width: '70%',
    marginLeft: 'auto', marginRight: 'auto'
  };

  const estilosDescricao = {
    marginTop: 12, paddingTop: 8, paddingBottom: 8, 
    backgroundColor: 'white', color: 'black', border: '1px solid black', 
    width: '100%', borderRadius: 3, textAlign: 'center'
  };

  const estilosBotao = {
    marginTop: 12, paddingTop: 8, paddingBottom: 8, 
    backgroundColor: 'lightcyan', color: 'black', border: '1px solid lightskyblue', 
    width: '100%', borderRadius: 3
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao) {
      adicionarTarefa(descricao);
      setDescricao('');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            style={estilosDescricao}
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição de uma nova tarefa"
          />
        </Form.Group>
        <Button style={estilosBotao} type="submit" disabled>OK</Button>
      </Form>

      <div style={estilosQuadro}>
        <ListGroup>
          {tarefasFicticias.map((tarefa, index) => (
            <ListGroup.Item key={index} style={estilosTarefa}>
              {tarefa}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      
    </>
  );
}

export default TarefaEntrada;
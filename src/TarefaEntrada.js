import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

function TarefaEntrada() {
  const [descricao, setDescricao] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao) {
      setTarefas([...tarefas, descricao]);
      setDescricao('');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            className='mt-3 py-2 bg-white text-dark border border-dark w-100 rounded text-center'
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição de uma nova tarefa"
          />
        </Form.Group>
        <Button className='mt-1 py-2 bg-light text-dark border border-info w-100 rounded' type="submit">OK</Button>
      </Form>

      <div className=' p-4 mb-4 mt-2 rounded border border-warning' style={{backgroundColor: 'lightyellow'}}>
        <ListGroup>
          {tarefas.map((tarefa, index) => (
            <ListGroup.Item key={index} className='p-2 mb-2 border border-dark text-center w-70 mx-auto rounded-1' style={{width: '70%'}}>
              {tarefa}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default TarefaEntrada;
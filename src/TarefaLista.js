import React from 'react';
import { ListGroup } from 'react-bootstrap';

function TarefaLista() {
  const tarefasFicticias = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];

  return (
    <ListGroup>
      {tarefasFicticias.map((tarefa, index) => (
        <ListGroup.Item key={index}>{tarefa}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TarefaLista;

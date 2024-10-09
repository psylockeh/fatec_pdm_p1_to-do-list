import React from 'react';
import { ListGroup } from 'react-bootstrap';

function TarefaLista({ tarefas }) {
    return (
      <ListGroup>
        {tarefas.map((tarefa, index) => (
          <ListGroup.Item key={index}>{tarefa}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
  

export default TarefaLista;

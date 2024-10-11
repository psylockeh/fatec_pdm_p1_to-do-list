import React from 'react';
import { ListGroup } from 'react-bootstrap';

function TarefaLista({ tarefas }) {
    return (
      <ListGroup>
        {tarefas.map((tarefas, index) => (
          <ListGroup.Item key={index}>{tarefas}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
  

export default TarefaLista;
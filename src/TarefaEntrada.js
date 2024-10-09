import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function TarefaEntrada({ adicionarTarefa }) {
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao) {
      adicionarTarefa(descricao);
      setDescricao('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Descrição da Tarefa</Form.Label>
        <Form.Control
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Digite a tarefa"
        />
      </Form.Group>
      <Button type="submit">Cadastrar Tarefa</Button>
    </Form>
  );
}

export default TarefaEntrada;

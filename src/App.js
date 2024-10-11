import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TarefaEntrada from './TarefaEntrada';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (descricao) => {
    setTarefas([...tarefas, descricao]);
  };

  return (
    <Container>
      <Row>
        <Col>
        <h1 className='text-center border mt-3'>Hello, Tarefas</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

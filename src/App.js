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
          <TarefaEntrada adicionarTarefa={adicionarTarefa} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

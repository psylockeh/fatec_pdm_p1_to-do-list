import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TarefaEntrada from './TarefaEntrada';
import TarefaLista from './TarefaLista';

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
          <TarefaLista tarefas={tarefas} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
import React from 'react';

import { Container } from './style';

export default function MediatorPattern() {
  return (
    <Container>
      <header>
        <h4>Mediator Pattern</h4>
      </header>
      <section>
        {[1, 2].map(x => (
          <p>{x}</p>
        ))}
      </section>
    </Container>
  );
}

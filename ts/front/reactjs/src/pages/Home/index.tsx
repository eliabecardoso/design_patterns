import React from 'react';
import { Link } from 'react-router-dom';

import { Container, NavContainer } from './style';

export default function Home() {
  return (
    <Container>
      <section>
        <h4>Design Patterns - Illustrative</h4>
      </section>

      <section>
        <a
          href="https://github.com/eliabehenrique/design_patterns"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            title="GitHub Code"
          />
        </a>
      </section>

      <section>
        <NavContainer>
          <Link to="/mediator">Mediator</Link>
          <Link to="/observer">Observer</Link>
          <Link to="/pubsub">Publisher/Subscriber</Link>
          {/* <Link to="/observer">Observer</Link> */}
        </NavContainer>
      </section>
    </Container>
  );
}

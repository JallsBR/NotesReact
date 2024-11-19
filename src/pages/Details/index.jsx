import  {Container, Links} from './styles' 
import {Button } from '../../components/Button'
import {Header} from '../../components/Header' 
import { Section } from '../../components/Section'

export function Details() {
  return (
  <Container>
      <Header />

      <Section title="Línks Úteis">
        <Links>
          <li>
            <a href="https://rocketseat.com.br">rocketseat.com.br</a>
          </li>
          <li>
            <a href="https://github.com/rocketseat">github.com/rocketseat</a>
          </li>
        </Links>
      </Section>

      <Button title="Voltar"/>  
  </Container>

  )
    
}


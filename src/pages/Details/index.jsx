import  {Container, Links, Content} from './styles' 
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'
import {Header} from '../../components/Header' 
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
 
export function Details() {
  return (
  <Container> 
      <Header />

      <main>
        <Content>
          
          <ButtonText title="Excluir Nota" />

          <h1> Introdução ao React </h1>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque minus molestias et? Doloribus, hic facilis! 
            Quaerat quis doloribus accusamus facilis temporibus culpa nobis voluptate repellat nostrum. Repellat, recusandae deleniti!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque minus molestias et? Doloribus, hic facilis! 
            Quaerat quis doloribus accusamus facilis temporibus culpa nobis voluptate repellat nostrum. Repellat, recusandae deleniti!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque minus molestias et? Doloribus, hic facilis! 
            Quaerat quis doloribus accusamus facilis temporibus culpa nobis voluptate repellat nostrum. Repellat, recusandae deleniti!</p>

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

          <Section title="Marcadores">
            <Tag title="React"/>
            <Tag title="Node.js"/>
          </Section>

          <Button title="Voltar"/>  

        </Content>
      </main>

  </Container>

  )
    
}


import { FiMail , FiLock  } from "react-icons/fi"
import  {Container, Form, Background} from './styles' 
import { Button } from '../../components/Button'
import { Input } from "../../components/Input"


export function SingIn() {
    return (
        <Container>
            <Form>
                <h1>JallsNotes</h1>
                <p>Aplicação para manter notas e linkes úteis.</p>
                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" type="email" icon={ FiMail }/>
                <Input placeholder="Senha" type="password" icon={ FiLock }/>
                <Button title="Entrar"/>
                <a href="#">Criar Conta</a>

            </Form>
            <Background/>
        </Container>    
    )} 
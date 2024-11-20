import { FiMail , FiLock, FiUser  } from "react-icons/fi"
import  {Container, Form, Background} from './styles' 
import { Button } from '../../components/Button'
import { Input } from "../../components/Input"


export function SingUp() {
    return (
        <Container>
            <Background/>
            <Form>
                <h1>JallsNotes</h1>
                <p>Aplicação para manter notas e linkes úteis.</p>
                <h2>Crie Sua Conta</h2>
                <Input placeholder="Nome" type="etxt" icon={ FiUser }/>
                <Input placeholder="E-mail" type="email" icon={ FiMail }/>
                <Input placeholder="Senha" type="password" icon={ FiLock }/>
                <Button title="Cadastrar"/>
                <a href="#">Voltar para Login</a>
            </Form>

        </Container>    
    )} 
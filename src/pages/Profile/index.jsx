import { FiMail , FiLock, FiUser, FiArrowLeft, FiCamera  } from "react-icons/fi"
import  {Container, Form, Avatar} from './styles' 
import { Button } from '../../components/Button'
import { Input } from "../../components/Input"


export function Profile() {
    return (
        <Container>
            <header>
                <a href=""> <FiArrowLeft /></a>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/JallsBR.png" alt="Oswaldo Jales" />
                    <label htmlFor="avatar"> <FiCamera />                     
                    <input id="avatar" type="file" />
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={ FiUser }/>
                <Input placeholder="E-mail" type="email" icon={ FiMail }/>
                <Input placeholder="Senha Atual" type="password" icon={ FiLock }/>
                <Input placeholder="Nova Senha" type="password" icon={ FiLock }/>
                <Button title="Salvar" />
            </Form>

        </Container>    
    )}  
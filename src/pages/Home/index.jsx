import  {Container, Brand, Menu, Search, NewNote, Content} from './styles' 
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>JallsNotes</h1>
            </Brand>    
            <Header/>
            <Menu>
                <li><ButtonText title="Todos" isactive={true} /></li>
                <li><ButtonText title="Back-end" /></li>
                <li><ButtonText title="Frontend" /></li>
                <li><ButtonText title="RPG" /></li>
                <li><ButtonText title="Artesanato" /></li>
            </Menu> 

            <Search placeholder="Pesquisar pelo título" />  
            <NewNote to="/new">
                <h1>+</h1>
                <span>Criar nota</span>
            </NewNote>

            <Content/>

        </Container>    
    )} 
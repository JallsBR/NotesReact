import { FiPlus, FiSearch } from "react-icons/fi"
import  {Container, Brand, Menu, Search, NewNote, Content} from './styles' 
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from "../../components/Input"
import {Section} from '../../components/Section'
import { Notes } from "../../components/Notes"

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
 
            <Search >
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>  

            <NewNote to="/new">
                <FiPlus/>
                <span>Criar nota</span>
            </NewNote>

            <Content>
                <Section title="Minhas notas">
                    <Notes data = {{
                        title: "Introdução ao React", 
                        tags: [
                            {id: 1, name: "React"}, 
                            {id: 2, name: "JS"}]
                        }}
                    />
                </Section>
            </Content>

        </Container>    
    )} 
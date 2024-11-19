
import PropTypes from 'prop-types';
import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/JallsBR.png" 
                alt="Oswaldo Jales" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Oswaldo Jales</strong>
                </div>

            </Profile>     
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )}
    
Header.propTypes = {
        title: PropTypes.string,
        loading: PropTypes.bool,
    };
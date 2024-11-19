
import PropTypes from 'prop-types';
import { Container, Profile } from "./styles";

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
        </Container>
    )}
    
Header.propTypes = {
        title: PropTypes.string.isRequired,
        loading: PropTypes.bool,
    };
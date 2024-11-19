
import PropTypes from 'prop-types';
import { Container } from "./styles";

export function Header() {
    return (
        <Container 
      
        >
            
     
        </Container>
    )}
    
Header.propTypes = {
        title: PropTypes.string.isRequired,
        loading: PropTypes.bool,
    };

import PropTypes from 'prop-types';
import { Container } from "./styles";

export function ButtonText( { title, isactive = false, ...rest } ) {
    return (
        <Container 
        type = "button"  
        isactive={isactive}
        {...rest}
        >
            {title}
        </Container>
      
    )}
     
    ButtonText.propTypes = {
        title: PropTypes.string,
        isactive: PropTypes.bool

    };
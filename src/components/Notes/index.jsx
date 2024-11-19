import PropTypes from 'prop-types';
import  { Container } from "./styles";
import { Tag } from "../../components/Tag";

export function Notes( { data , ...rest } ) {
    return (
        <Container {...rest} >
            <h1>{data.title}</h1>
            {data.tags &&
            <footer>
                {
                data.tags.map(tag => 
                <Tag key={tag.id} title={tag.name}/>
                )}
            </footer>
            }
                        
        </Container>
    )
}

Notes.propTypes = {
    data: PropTypes.string,
};
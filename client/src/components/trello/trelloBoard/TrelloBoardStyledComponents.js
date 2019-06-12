import styled from "styled-components";
import Card from '@material-ui/core/Card';
import Icon from "@material-ui/core/Icon";
import Typography from '@material-ui/core/Typography';

const _Card = styled(Card)`
    cursor: pointer;
    margin: 10px;
    min-width: 288px; 
    max-width: 288px;    
    position: relative;
`

const _Typography = styled(Typography)`
    font-size: 20px;
`

export const DeleteButton = styled(Icon)`
    position: absolute;
    display: none;
    right: 1px;
    top: 5px;
    opacity: 0.5;
    ${_Card}:hover & {
    display: block;
    cursor: pointer;
    }
    &:hover {
        opacity: 0.8;
    }
`

export const EditButton = styled(Icon)`
    position: absolute;
    display: none;
    right: 1px;
    bottom: 5px;
    opacity: 0.5;
    ${_Card}:hover & {
    display: block;
    cursor: pointer;
    }
    &:hover {
        opacity: 0.8;
    }
`

export const TrelloActionFormContainer = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 2px;
`

export { _Card as Card };
export { _Typography as Typography };
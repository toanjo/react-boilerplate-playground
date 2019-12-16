import styled from 'styled-components';

export const Button = styled.button`
    margin: 1em;
    padding: 0.5em 1em;
    border-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #F0F3BD;
    }
    &:focus {
        outline: none;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
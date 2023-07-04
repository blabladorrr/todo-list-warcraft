import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`; 

export const Button = styled.button`
    color: hsl(250, 100%, 25%);
    border: none;
    background-color: transparent;
    transition: 0.5s;
    @media (max-width: ${({ theme }) => theme.devicePort.mobile}px) {
        flex-basis: 100%;
        margin: 10px;
    }
    &:hover {
        color: hsl(250, 100%, 70%);
    }
    &:disabled {
        color: #ccc;
    }
`;
import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`; 

export const Button = styled.button`
    color: ${({ theme }) => theme.color.navy};
    border: none;
    background-color: transparent;
    transition: 0.5s;
    @media (max-width: ${({ theme }) => theme.devicePort.mobile}px) {
        flex-basis: 100%;
        margin: 10px;
    }
    &:hover {
        filter: brightness(450%);
    }
    &:disabled {
        filter: brightness(100%);
        color: ${({ theme }) => theme.color.silver}
    }
`;
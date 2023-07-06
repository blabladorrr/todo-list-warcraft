import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 10px 0;
    justify-content: space-between;
    display: flex;
    @media (max-width: ${({ theme }) => theme.devicePort.mobile}px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 8px;
    display: flex;
    align-self: center;
    border: 2px solid ${({ theme }) => theme.color.mercury};
`;

export const FormButton = styled.button`
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    margin-left: 20px;
    width: 200px;
    background: ${({ theme }) => theme.color.navy};
    border: none;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
    }
    
    &:active {
        filter: brightness(160%);
    }
    @media (max-width: ${({ theme }) => theme.devicePort.mobile}px) {
        width: 100%;
        margin: 10px 0;
    }
`;
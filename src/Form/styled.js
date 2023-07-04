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
    border: 2px solid #e2e2e2;
`;

export const FormButton = styled.button`
    background-color: #027381;
    color: #fff;
    padding: 10px;
    margin-left: 20px;
    width: 200px;
    background: hsl(250, 100%, 25%);
    border: none;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        background: hsl(250, 100%, 30%);
        transform: scale(1.1);
    }
    
    &:active {
        background: hsl(250, 100%, 35%);
    }
    @media (max-width: ${({ theme }) => theme.devicePort.mobile}px) {
        width: 100%;
        margin: 10px 0;
    }
`;
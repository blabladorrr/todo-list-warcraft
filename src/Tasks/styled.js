import styled, { css } from "styled-components";

export const TasksWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    word-break: break-word;
`;

export const TaskItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const TaskContent = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const TaskButton = styled.button`
    border: none;
    border-radius: 10%;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.3s;
    ${({ toggleDone }) => toggleDone && css`
        background: hsl(108, 72%, 24%);
        &:hover {
            background: hsl(108, 72%, 34%);
        }
    `}
    ${({ remove }) => remove && css`
        background: hsl(350, 83%, 47%);
        &:hover {
            background: hsl(350, 83%, 52%);
        }
        &:active {
            background: hsl(350, 83%, 57%);
        }
    `}
`;
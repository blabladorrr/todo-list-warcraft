import styled, { css } from "styled-components";

export const TasksWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    word-break: break-word;
`;

export const TaskItem = styled.li`
    display: grid;
    grid-template-columns: auto auto 1fr auto auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
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
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.3s;
    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.color.bilbao};
        &:hover {
            filter: brightness(140%);
        }
    `}
    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.color.crimson};
        &:hover {
            filter: brightness(110%);
        }
        &:active {
            filter: brightness(120%);
        }
    `}
`;

export const PriorityButton = styled.button`
    border: none;
    background: #fff;
    font-family: 'Cherry Bomb One', cursive;
    font-size: 32px;
    padding-bottom: 5px;
    margin: 0;
    ${({ priority }) => priority === 0 && css`
        color: ${({ theme }) => theme.color.scarlet};
    `}
    ${({ priority }) => priority === 1 && css`
        color: ${({ theme }) => theme.color.blaze};
    `}
    ${({ priority }) => priority === 2 && css`
        color: ${({ theme }) => theme.color.supernova};
    `}
    ${({ priority }) => priority === 3 && css`
        color: ${({ theme }) => theme.color.green};
    `}
    ${({ priority }) => priority === 4 && css`
        color: ${({ theme }) => theme.color.grey};
    `}
`;

export const TaskContentButton = styled.button`
    border: none;
    background: ${({ theme }) => theme.color.white};
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
    &:hover {
        border: 1px solid  ${({ theme }) => theme.color.mercury};
        border-radius: 5px;
    }
`;

export const TaskContentInput = styled.input`
    border: 1px solid ${({ theme }) => theme.color.mercury};
    width: 50%;
    border-radius: 5px;
`;

export const DueDateButton = styled.button`
    background: ${({ theme }) => theme.color.white};
    border: none;
    &:hover {
        border: 1px solid ${({ theme }) => theme.color.mercury};
        border-radius: 5px;
    }
`;

export const DueDateInput = styled.input.attrs({ type: "date" })`
    border: 1px solid black;
`;
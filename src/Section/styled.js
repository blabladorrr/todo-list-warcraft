import styled from "styled-components";

export const SectionWrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 2px ${({ theme }) => theme.color.gallery};
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 10px 0;
    border: 1px solid ${({ theme }) => theme.color.mercury};
    padding: 5px 20px;
`;


export const SectionHeader = styled.header`
    font-weight: 700;
    @media (max-width: ${({ theme }) => theme.devicePort.mobile}px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 20px;
    margin: 0;
`;

export const SectionBody = styled.div`
    padding: 20px;
`;
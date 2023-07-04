import styled from "styled-components";

export const SectionWrapper = styled.section`
    background-color: #fff;
    box-shadow: 0 2px #eee;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 10px 0;
    border: 1px solid #e2e2e2;
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
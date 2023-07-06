import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
    background: ${({ theme }) => theme.color.navy};
    color: ${({ theme }) => theme.color.white};
    padding: 10px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

export const NavHome = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const NavLinksWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const NavListPoints = styled.li`
    font-size: 14px;
    gap: 20px;
    &:hover {
        filter: brightness(90%);
    }
`;

export const StyledNavLink = styled(NavLink)`
    padding: 0 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
`;
import { StyledNav, NavList, NavListPoints, StyledNavLink, NavHome, NavLinksWrapper } from "./styled";

const Navigation = () => {
    return (
        <StyledNav>
            <NavHome>
                <StyledNavLink to="/">Home Page</StyledNavLink>
            </NavHome>
            <NavLinksWrapper>
                <NavList>
                        <NavListPoints>
                            <StyledNavLink to="/to-do-list">To Do List</StyledNavLink>
                        </NavListPoints>
                </NavList>
            </NavLinksWrapper>
        </StyledNav>
    );
}

export default Navigation;
import styled from "styled-components"
import moon from "../../assets/icon-moon.svg";
import { LightMode} from "../../shared/styles/colors";
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    height: 10%;
`

const NavText = styled.h1`
    font-size: 26px;
    font-weight: 700;
    line-height: 38px;
    border: 1px solid green;
    margin: 0;
    align-self: center;
`;

const NavSwitchMode = styled.div`
   color: ${LightMode.secondary_grey};
    align-self: center;
    border: 1px solid green;
   
`;

const NavSwitchModeText = styled.span`
    text-transform: uppercase;
    margin-right: 1rem;
    letter-spacing: 0.2rem;
`;

const NavSwitchModeIcon = styled.img.attrs(props => ({
    src: moon ,
}))`
    
`


export { Nav, NavText, NavSwitchMode, NavSwitchModeText, NavSwitchModeIcon };
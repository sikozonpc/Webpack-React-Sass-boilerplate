import { styled } from 'theme'

export const Layout = styled.div`
   position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: ${props => props.theme.color.danger};
`

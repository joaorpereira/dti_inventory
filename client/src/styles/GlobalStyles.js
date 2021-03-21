import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        width: 100vw;
        height: 100vh;
        background-color: ${props => props.theme.colors.background};
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
    input, button, select{
        outline: none;
        border: none;      
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
        outline: none;
    }
    ul li {
        text-decoration: none;
        list-style-type: none;
    }
`

export default GlobalStyle

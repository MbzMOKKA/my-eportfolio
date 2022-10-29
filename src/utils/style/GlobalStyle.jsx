//Imports
//import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

//Render
const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: sans-serif;
        font-size: 18px;
        font-weight: 400;
        margin: 0;
        padding: 0;
        color: rgb(240,240,240);
    }
    body {
        width:100%;
        min-height: 100vh;
    }
    main{
        //padding-top: 17vh;
    }
    h1{
        font-size : 36px;
        font-weight: bold;
    }
    p{
        font-size : 18px;
    }
    em{
        color: ${colors.primary};
        font-style: normal;
    }
    .section-end-line{
        background-color: white;
        width: 50%;
        border-radius: 20px;
        height: 5px;
        margin: auto;
        margin-top: 36px;
    }
`;

//Exports

function GlobalStyle() {
    return <StyledGlobalStyle />;
}
export default GlobalStyle;

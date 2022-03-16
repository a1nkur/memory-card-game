import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        font-family: 'Roboto', sans-serif;        
       
    
   }

   :root {
       
   }

   a {
       color: #555;
       text-decoration: none;
   }


    
`;

export default GlobalStyle;

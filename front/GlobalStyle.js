import styled, {createGlobalStyle} from 'styled-components';

 const GlobalStyle = createGlobalStyle `
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family:'Montserrat', sanis-sarif;
}
html,body{
 overflow-x:hidden;
}
`;


export const Container = styled.div `
z-index:999;
width:100%;
max-width:1300px;
margin-left:auto;
margin-right:auto;
padding-left:50px;
padding-right:50px;

@media screen and (max-width:960px){
    padding-left:30px;
    padding-right:30px;
}
`;

export const Button = styled.button `
border-radius :4px;
background:${({primary})=>(primary ? '#4B59F7':'#0467FB')};
white-space: nowrap;
padding :${({big})=>(big ? '12px 64px': '10px 20px')};
font-size:${({fontBig})=>(fontBig ? '20px':'16px')};
outline:none;
border:none;
cursor: pointer;

&:hover{
    transition: 0.3s  ease-in-out;
    background:#fff;
    background:${({primary})=>(primary ? '#0467FB ':'#4B59F7')};
}

@media scree and (max-width:960px){
    width:100%;
}
`;

export default GlobalStyle ;
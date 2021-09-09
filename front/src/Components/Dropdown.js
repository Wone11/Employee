import React from 'react'
import styled from 'styled-components';
 import SidebarData from '../Data/Sidebardata';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import {FaTimesCircle} from 'react-icons/fa'

const DropDownContainer = styled.div `
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#0097A7;
display:grid;
align-items:center;

top:0;
left:0;
transition:0.3s ease-in-out;
/*opacity:${({isOpen})=>(isOpen? '0':'-100%')};*/

 opacity:${({isOpen})=>(isOpen? '100%':'0')};
 top:${({isOpen})=>(isOpen ? '0':'-100%')};


@media screen and (max-width:768px){
    opacity:${({isOpen})=>(isOpen? '1':'100%')};
}
`;

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;
const CloseIcon = styled(FaTimesCircle)`
color: #fff;
`;
const DropDownWrapper = styled.div`
padding :16px 16px;
`;

const DropDownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(8, 60px);
text-align: center;
margin-bottom: 10rem;

@media screen and (max-width:768px){
    grid-template-rows: repeat(8, 60px);
} 
`;

const DropDownLink =styled(Link)`
 display: flex;
 align-items: center;
 justify-content: center;
 color: #fff;
 font-size: 1.2rem;
 text-decoration: none;
 list-style : none;
 color :#fff;
 cursor : pointer;
 transition : 0.2s ease-in-out;

 &:hover{
     color: #A21FA0;
 }

`;
const BtnWrap = styled.div`
display:flex;
justify-content:center;
`;

const Dropdown=({isOpen,toggle}) => {
    return (
        <div>
            <DropDownContainer  isOpen ={isOpen} onClick = {toggle}>
                <Icon onClick = {toggle}>
                    <CloseIcon />
                    </Icon>
                        <DropDownWrapper >
                            <DropDownMenu>
                                {SidebarData.map((item,index)=>(
                                    <DropDownLink to ={item.link} key = {index}>
                                        {item.icon} {'  '} {item.title}
                                     </DropDownLink>
                                ))}
                            </DropDownMenu>
                            <BtnWrap>
                                <Button Success = 'true' round ='true' big ='true' to='/contact'>
                                   Contact Us
                                </Button>
                            </BtnWrap>
                        </DropDownWrapper>
                    
            </DropDownContainer>
        </div>
    )
}

export default Dropdown;
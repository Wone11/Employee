import React from 'react'
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as TiIcons from "react-icons/ti"

  const SidebarData= [
    {
     title:'Home',
     link:'Home',
     path:'/',
     icon:<AiIcons.AiFillHome />,
     cName:'nav-text'
    },
    {
        title:'About EMGT',
        link:'About',
        path:'/about',
        icon:<IoIcons.IoLogoDesignernews />,
        cName:'nav-text'
       },
       {
        title:'Experience',
        link:'Experience',
        path:'/experience',
        icon:<IoIcons.IoAddCircleSharp/>,
        cName:'nav-text'
       },
       {
        title:'Add Employee',
        link:'Add Employee',
        path:'/add',
        icon:<BsIcons.BsFillQuestionCircleFill />,
        cName:'nav-text'
       },
       {
        title:'Update',
        link:'Update',
        path:'/update',
        icon:<BsIcons.BsNewspaper />,
        cName:'nav-text'
       },
       {
        title:'Delete',
        link:'Delete',
        path:'/delete',
        icon:<AiIcons.AiFillFile />,
        cName:'nav-text'
       },
       {
        title:'Designs',
        link:'Designs',
        path:'/designs',
        icon:<TiIcons.TiContacts />,
        cName:'nav-text'
       },

       {
        title:' Developers',
        link:'Developers',
        path:'/developers',
        icon:<AiIcons.AiTwotoneSetting />,
        cName:'nav-text'
       },
  ]

  export default SidebarData;
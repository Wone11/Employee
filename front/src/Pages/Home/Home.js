import React from 'react'
import {useState} from 'react'
import Navbar from '../../Components/Navbar';
import Dropdown from '../../Components/Dropdown';



const Home = () => {
const [isOpen, setIsOpen] = useState(false);
 const toggle =()=>{
   setIsOpen(!isOpen)
 }
    return (
        <>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            
        </>
    )
}
export default Home
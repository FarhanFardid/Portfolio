import { Button, Navbar } from 'flowbite-react';
import logo from '../../assets/images/logo-1.png'

const Navigation = () => {
    return (
        
<Navbar
      fluid
      rounded
      className='max-w-screen-2xl bg-slate-900 p-4 bg-opacity-70 fixed top-0 w-full z-10'
    >
      <Navbar.Brand href="#">
        <img
          alt="Logo"
          className="mr-3 h-16 w-20 p-1 "
          src={logo}
        />
        <span className="self-center  whitespace-nowrap text-xl md:text-3xl text-white font-bold dark:text-white">
          Farhan Fardid
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <a href='https://drive.google.com/file/d/1Zn60edlY3t7iHKcr7ekMTeQbTnrIBgU8/view' target='blank'><Button className= 'btn-xs md:btn-md  bg-purple-700 hover:bg-purple-900'>
          View Resume
        </Button></a>  
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link
      
          href="#"
        
        >
          <p   className='text-white hover:text-purple-400 font-medium text-lg'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#" >
         <p className='text-white hover:text-purple-400 font-medium text-lg'> Projects</p> 
        </Navbar.Link>
        {/* <Navbar.Link href="#">
        <p className='text-white hover:text-purple-400 font-medium text-lg'> About Me</p> 
        </Navbar.Link> */}
       
        {/* <Navbar.Link href="#" >
        <p className='text-white hover:text-purple-400 font-medium text-lg'> Contact</p> 
        </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>



        
    );
};

export default Navigation;
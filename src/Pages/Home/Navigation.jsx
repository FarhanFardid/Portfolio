import { Button, Navbar } from 'flowbite-react';
import logo from '../../assets/images/logo-1.png'

const Navigation = () => {
    return (
        
<Navbar
      fluid
      rounded
      className='max-w-screen-2xl bg-black p-4'
    >
      <Navbar.Brand href="#">
        <img
          alt="Logo"
          className="mr-3 h-16 w-20 p-1 "
          src={logo}
        />
        <span className="self-center  whitespace-nowrap text-3xl text-purple-700 font-bold dark:text-white">
          Farhan Fardid
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className='bg-purple-700 hover:bg-purple-900'>
          Download Resume
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link
      
          href="#"
        
        >
          <p   className='text-purple-600 hover:text-purple-400 font-medium text-lg'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#" >
         <p className='text-purple-600 hover:text-purple-400 font-medium text-lg'> Projects</p> 
        </Navbar.Link>
        <Navbar.Link href="#">
        <p className='text-purple-600 hover:text-purple-400 font-medium text-lg'> About Me</p> 
        </Navbar.Link>
       
        <Navbar.Link href="#" >
        <p className='text-purple-600 hover:text-purple-400 font-medium text-lg'> Contact</p> 
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>



        
    );
};

export default Navigation;
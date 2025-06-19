import Link from 'next/link';
import React from 'react'
import './navbar.css';
import { Button } from '@/components/ui/button';

function Navbar() {
  return (

    <div id='mainnav' >

            <div >
              <ul className='navs'  style={{display:'flex',flexDirection:'row',listStyleType:'none',justifyContent:'space-around',color:'black',paddingBottom:'16px',paddingTop:'16px'}}>
              <li className='bar'><Link href="/">Home</Link></li>
              <li className='bar'><Link href="/create">Create</Link></li>
              <li className='bar'><Link href="/ai">AI</Link></li>
              <li className='bar'><Link href="/admin">Admin</Link></li>
              </ul>
            </div>
            <div id='buttons'>   
            <ul className='navs'  style={{display:'flex',flexDirection:'row',listStyleType:'none',justifyContent:'space-around',color:'black',paddingBottom:'16px',paddingTop:'16px'}}>
              <Button ><Link href="/login">Cart</Link></Button>
              <Button ><Link href="/signup">Sign Up</Link></Button>
            </ul>
            </div>

            
    </div>
  )
}

export default Navbar;

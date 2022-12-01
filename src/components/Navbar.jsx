import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-white-200 w-full p-3 pr-[5%] pt-[2%]'>
      <div className='pl-[5%]'>
        <h4 className="font-playfair text-2xl font-bold">FLEX</h4>
        <p>platfoams</p>
      </div>
      <Link to='/'>Home</Link>
      <Link to='/oursolution'>Our Solution</Link>
      <Link to='/ourpartners'>Our Partners</Link>
      <Link to='/team'>Team</Link>
      <Link to='/getintouch'>Get In Touch</Link>

      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
    </div>
  );
};

export default Navbar;

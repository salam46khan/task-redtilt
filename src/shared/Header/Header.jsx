import React, { useEffect, useState } from 'react';
import logo from '../../assets/image/logo.png'
import { FaRegMoon } from 'react-icons/fa';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { FiMoon } from 'react-icons/fi';
import { ImSun } from 'react-icons/im';
const Header = () => {
    const [openNav, setOpenNav] = useState(false);


    const [mood, setMood] = useState('light')

    // for dark mood -----------
    const html = document.documentElement;
    const handleMood = () => {
        if (mood == 'light') {
            html.classList.remove('light')
            html.classList.add('dark')
            setMood('dark')
            localStorage.setItem('mood', 'dark')
        } else {
            html.classList.remove('dark')
            html.classList.add('light')
            setMood('light')
            localStorage.setItem('mood', 'light')
        }
    }
    useEffect(() => {
        const currentMood = localStorage.getItem('mood') || 'light';
        setMood(currentMood)
        html.classList.add(currentMood)
    }, [html])


    return (
        <nav className='bg-dark p-3'>
            <div className="container flex items-center justify-between">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className={`nav-item text-white bg-dark absolute tablet:top-0 flex flex-col tablet:flex-row gap-2 tablet:relative duration-100 ${openNav ? 'top-16' : '-top-[300px]'}`}>
                    <li>
                        <a className='py-2 px-4 hover:text-red-500 duration-200' href="#">L</a>
                    </li>
                    <li>
                        <a className='py-2 px-4 hover:text-red-500 duration-200' href="#">Service</a>
                    </li>
                    <li>
                        <a className='py-2 px-4 hover:text-red-500 duration-200' href="#">Reviews</a>
                    </li>
                    <li>
                        <a className='py-2 px-4 hover:text-red-500 duration-200' href="#">Blog</a>
                    </li>
                    <li>
                        <a className='py-2 px-4 hover:text-red-500 duration-200' href="#">Jobs</a>
                    </li>
                    <li className='block tablet:hidden'>
                        <button className='h-11 flex justify-center items-center  border border-[#9203035e] p-4 text-white bg-red-600 rounded'>
                            Start a Project
                        </button>
                    </li>
                </ul>
                <div className='flex gap-3'>
                    <button className='h-11 flex justify-center items-center w-11 border border-[#920303a2] rounded' onClick={handleMood}>
                        <div className='bg-red-700 bg-opacity-80 h-8 flex justify-center items-center w-8 rounded-full text-white'>
                            {
                                mood == "light" ? <FiMoon></FiMoon> : <ImSun></ImSun>
                            }
                        </div>
                    </button>

                    <button className='h-11 flex justify-center items-center w-11 border border-[#920303a2] rounded tablet:hidden' onClick={() => setOpenNav(!openNav)}>
                        <HiMiniBars3CenterLeft className='text-red-700 duration-200 hover:text-red-500 text-2xl' />
                    </button>

                    <button className='h-11 tablet:flex justify-center items-center  border border-[#9203035e] p-4 hidden text-white bg-red-600 rounded'>
                        Start a Project
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
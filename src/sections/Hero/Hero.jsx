import React from 'react';
import './Hero.css'
import { MdCall } from 'react-icons/md';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { CiDesktopMouse2 } from 'react-icons/ci';
import HeroUserIcon from '../../components/HeroUserIcon';
import HeroGrowIcon from '../../components/HeroGrowIcon';
import drow from '../../assets/image/drow.png'
const Hero = () => {
    return (
        <div className='h-screen w-full dark:bg-dark bg-lignt relative z-10'>

            <div className="container h-full flex justify-center items-center relative">

                <div className='absolute top-1/2 -translate-y-1/2 left-0 tablet:-translate-x-1/4 -translate-x-1/2 '>
                    <HeroUserIcon/>
                </div>
                <div className='absolute top-1/2 -translate-y-1/2 right-0 tablet:translate-x-1/4 translate-x-1/2'>
                    <HeroGrowIcon />
                </div>

                <div className='text-center relative z-20 p-3'>
                    <h1 className='text-4xl font-semibold dark:text-white text-black tablet:text-5xl desktop:text-7xl'>From Concept to Code</h1>
                    <h1 className='text-4xl tablet:text-5xl desktop:text-7xl font-semibold py-3 gradient-text relative'>We Make IT Happen
                        <div className='absolute w-10 tablet:w-12 opacity-40 left-1/2 -translate-x-1/2 -bottom-1'>
                            <img className='w-full' src={drow} alt="" />
                        </div>
                    </h1>

                    <p className='py-3 dark:text-slate-300 text-slate-700 w-full text-[14px] tablet:text-[16px] max-w-md mx-auto'>
                        We Helps Brands and B2B Enterprises Build Amazing Website That Convert Their Visitors to paying Custimers.
                    </p>

                    <div className='flex justify-center py-3'>
                        <button className='hero-btn flex justify-center gap-1 items-center'>
                            <MdCall />
                            <span>Let's have a call</span>
                        </button>
                    </div>
                </div>

                <div className='absolute bottom-0 left-1/2 -translate-x-1/2  flex flex-col items-center'>
                    <CiDesktopMouse2 className='text-slate-400 -translate-y-2' />
                    <svg height="140" width="5">
                        <line x1="3" y1="0" x2="3" y2="140" className='stroke-slate-400 opacity-30' />
                    </svg>
                    <HiOutlineChevronDown className='text-slate-400 opacity-30 text-[12px] -translate-y-1.5' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
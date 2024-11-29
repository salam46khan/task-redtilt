import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';

const HeroGrowIcon = () => {
    return (
        <div className=' h-[300px] w-[300px] flex justify-center items-center'>
            <div className='h-[300px] w-[300px] justify-center items-center flex hero-right-border'>
                <div className='h-[250px] w-[250px] flex justify-center items-center hero-right-border'>
                    <div className='h-[200px] w-[200px] border flex justify-center items-center hero-right-border'>
                        <div className='h-[150px] w-[150px] hero-right-border relative' >
                            <div className='h-[70px] w-[70px] flex justify-center items-center rounded-full hero-icon absolute left-2 top-1/2 -translate-y-1/4'>
                                <FaArrowTrendUp className='text-3xl dark:text-white text-slate-800' />
                            </div>
                            <div className='h-[30px] w-[30px] flex justify-center items-center rounded-full hero-icon absolute right-7 top-1/2 -translate-y-2/3'>
                                <BsCurrencyDollar className='text-[14px] dark:text-slate-300 text-slate-800' />
                            </div>
                            <div className='h-[40px] w-[40px] flex justify-center items-center rounded-full hero-icon absolute right-7 left-1/3 -translate-x-4/1 top-3'>
                                <IoEyeOutline className='text-2xl dark:text-slate-300 text-slate-800' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroGrowIcon;
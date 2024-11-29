import React from 'react';
import { FaUsers } from 'react-icons/fa';

const HeroUserIcon = () => {
    return (
        <div className=' h-[300px] w-[300px] flex justify-center items-center'>
            <div className='h-[300px] w-[300px] justify-center items-center flex hero-left-border'>
                <div className='h-[250px] w-[250px] flex justify-center items-center hero-left-border'>
                    <div className='h-[200px] w-[200px] border flex justify-center items-center hero-left-border'>
                        <div className='h-[150px] w-[150px] flex justify-center items-center hero-left-border' >
                            <div className='h-[80px] w-[80px] flex justify-center items-center rounded-full hero-icon'>
                                <FaUsers className='text-4xl dark:text-white text-slate-800' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroUserIcon;
import React from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './Yourself.css'
const Yourself = () => {
    return (
        <div className='py-10 bg-dark'>
            <div className="container flex flex-col tablet:flex-row">
                <div className='w-full tablet:w-1/2'>
                    <div className='w-full max-w-sm p-3'>
                        <h3 className=" text-gray-300">Got a project in mind</h3>
                        <h2 className='text-3xl text-white w-full py-2 max-w-md'>Reserve a Call</h2>
                        <ul className='py-5'>
                            <li className='yourself-list'>
                                <FaCheckCircle className='text-red-500 text-xl' />
                                An in depth session to understand your needs
                            </li>
                            <li className='yourself-list'>
                                <FaCheckCircle className='text-red-500 text-xl' />
                                Learn which plan is right for your team
                            </li>
                            <li className='yourself-list'>
                                <FaCheckCircle className='text-red-500 text-xl' />
                                Get onboarding help
                            </li>
                        </ul>

                        <p className='text-gray-300'>Technical suooirt or some query?</p>
                        <button className='flex items-center gap-2 text-gray-300 hover:text-red-500 duration-200'>
                            Contact support <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className='w-full tablet:w-1/2 flex tablet:justify-end'>
                    <div className='w-full max-w-xl p-3'>
                        <form className='border border-[#aaa5] rounded-2xl'>
                            <h3 className='text-xl text-white p-4'>Tell us about yourself</h3>
                            <hr className='border-[#aaa5]' />
                            <div className='p-4'>
                                <div className='flex flex-col gap-1 py-2'>
                                    <label className='text-gray-400'>Full Name</label>
                                    <input className='w-full py-2 px-3 focus:outline-none focus:bg-[#fdaaaa35] text-white rounded-md bg-[#fdaaaa15]' type="text" placeholder='TAHA HAIDAR' />
                                </div>
                                <div className='flex flex-col gap-1 py-2'>
                                    <label className='text-gray-400'>Work Email</label>
                                    <input className='w-full py-2 px-3 focus:outline-none focus:bg-[#fdaaaa35] text-white rounded-md bg-[#fdaaaa15]' type="email" placeholder='syed.shah@redtilt.team' />
                                </div>
                                <div className='flex flex-col gap-1 py-2'>
                                    <label className='text-gray-400'>Company Size</label>
                                    <select className='w-full py-2 px-3 focus:outline-none focus:bg-[#fdaaaa35] text-white rounded-md bg-[#fdaaaa15]'>
                                        <option className='bg-slate-600' value="1-20">1-20</option>
                                        <option  className='bg-slate-600' value="21-30">21-30</option>
                                        <option  className='bg-slate-600' value="31-40">31-40</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-1 py-2'>
                                    <label className='text-gray-400'>How Can We Help</label>
                                    <textarea className='w-full py-2 px-3 focus:outline-none focus:bg-[#fdaaaa35] text-white rounded-md bg-[#fdaaaa15]'  placeholder='I am interested in redtilt for my team' />
                                </div>

                                <div className='flex justify-between pt-3 items-center'>
                                    <p className='text-xl text-gray-300'>You Can Also Email Us At apac@redtilt.team</p>
                                    <input className=' p-3 bg-red-700 text-white rounded-md duration-200 hover:bg-white hover:text-red-600' type="submit" value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Yourself;
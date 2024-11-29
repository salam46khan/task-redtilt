import React from 'react';
import './Footer.css'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className='py-5 bg-dark'>
            <div className="container p-3">
                <div className='subscribe flex justify-between items-center p-8'>
                    <div className='text-gray-200'>
                        <p>Newsletter</p>
                        <p>Be the first one to know about insights, technologies and innovations</p>
                    </div>
                    <div>
                        <button className='p-2 bg-red-700 rounded-md text-white'>Subscribe</button>
                    </div>
                </div>

                <div className='flex gap-5 justify-around flex-col mt-10 tablet:flex-row text-white'>
                    <div className=''>
                        <p className='font-semibold mb-3'>Company</p>
                        <ul className='space-y-1'>
                            <li><a className='duration-150 hover:text-red-300' href="#">About</a></li>
                            <li><a className='duration-150 hover:text-red-300' href="#">Service</a></li>
                            <li><a className='duration-150 hover:text-red-300' href="#">Works</a></li>
                            <li><a className='duration-150 hover:text-red-300' href="#">Career</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-semibold mb-3'>Help</p>
                        <ul className='space-y-1'>
                            <li><a className='duration-150 hover:text-red-300' href="#">Customer Support</a></li>
                            <li><a className='duration-150 hover:text-red-300' href="#">Terms & Conditions</a></li>
                            <li><a className='duration-150 hover:text-red-300' href="#">Privicy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-semibold mb-3'>Resources</p>
                        <ul className='space-y-1'>
                            <li><a className='duration-150 hover:text-red-300' href="#">Free eBooks</a></li>
                            <li><a className='duration-150 hover:text-red-300' href="#">Development Tutorial</a></li>
                            <li><a className='duration-150 hover:text-red-300' href="#">How to - Blog</a></li>
                            <li><a className='duration-150 hover:text-red-300' href="#">Career</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex gap-5 justify-center tablet:justify-between items-center flex-col tablet:flex-row mt-5'>
                    <p className='text-[14px] text-gray-400'>© Copyright 2024, All Rights Reserved by Redtilt.</p>
                    <ul className='flex justify-center items-center gap-4'>
                        <li>
                            <a className='h-10 w-10 rounded-full flex justify-center items-center text-white social-icon' href="#">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a className='h-10 w-10 rounded-full flex justify-center items-center text-white social-icon' href="#">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a className='h-10 w-10 rounded-full flex justify-center items-center text-white social-icon' href="#">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a className='h-10 w-10 rounded-full flex justify-center items-center text-white social-icon' href="#">
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
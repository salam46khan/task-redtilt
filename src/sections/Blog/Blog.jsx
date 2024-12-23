import './Blog.css'
import blog from '../../assets/image/blog.png'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { IoArrowForwardOutline } from 'react-icons/io5';
const Blog = () => {
    return (
        <div className="dark:bg-dark bg-lignt py-10">
            <div className="container p-3">
                <h3 className="text-center dark:text-gray-300 text-slate-800">Red Our Blog</h3>
                <div className="flex justify-center">
                    <h2 className='text-3xl dark:text-white text-black text-center w-full py-5 max-w-md'>Read Daily news about startup companies</h2>
                </div>

                <div>
                    <div className="blog-card mt-5 bg-[#0001] dark:bg-[#fff1] flex flex-col justify-center items-stretch tablet:flex-row py-10 px-5 gap-5">
                        <div className='w-full tablet:w-2/5 '>
                            <img className='w-full rounded-xl h-full object-cover' src={blog} alt="blog photo" />
                        </div>
                        <div className='w-full tablet:w-3/5 flex flex-col'>
                            <div className=' flex-1 pb-5'>
                                <h3 className='text-2xl dark:text-white text-black'>Not Another Framework</h3>
                                <p className='dark:text-gray-400 text-slate-800 py-3'>
                                    We brought all the Remix goodies over to React Router and made improvements in the process. Now it's time to bring those improved APIs back over to Remix where the startd!
                                </p>
                                <hr className='border-gray-400' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <ul className='text-slate-700 dark:text-slate-200'>
                                        <li className='blog-list'>
                                            <FaCheckCircle className='text-red-500 text-xl' />
                                            Collaboration tools
                                        </li>
                                        <li className='blog-list'>
                                            <FaCheckCircle className='text-red-500 text-xl' />
                                            Collaboration tools
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div>
                                    <a className='blog-btn group bg-white hover:bg-red-600 text-red-600 hover:text-white duration-150' href="#">
                                        <IoArrowForwardOutline className="text-3xl -rotate-45 group-hover:rotate-0 duration-200" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center pt-10'>
                    <button className='p-2 rounded-md bg-none dark:text-white dark:hover:text-red-600 text-black border border-black dark:border-white duration-150 hover:bg-red-200 hover:text-red-600'>Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
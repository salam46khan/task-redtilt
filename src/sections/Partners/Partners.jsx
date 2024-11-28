import Marquee from 'react-fast-marquee';
import ocence from '../../assets/image/1.png'
import azure from '../../assets/image/2.png'
import github from '../../assets/image/3.png'
import google from '../../assets/image/4.png'
import linode from '../../assets/image/5.png'
import cloud from '../../assets/image/6.png'

const Partners = () => {
    return (
        <div className="py-10 bg-dark">
            <div className="container">
                <h3 className="text-center uppercase text-gray-300">Trusted By Our Partners</h3>

                <div className='py-5'>
                    <Marquee>
                        <img className='w-[200px] tablet:w-[280px]' src={ocence} alt="" />
                        <img className='w-[200px] tablet:w-[280px]' src={azure} alt="" />
                        <img className='w-[200px] tablet:w-[280px]' src={github} alt="" />
                        <img className='w-[200px] tablet:w-[280px]' src={google} alt="" />
                        <img className='w-[200px] tablet:w-[280px]' src={linode} alt="" />
                        <img className='w-[200px] tablet:w-[280px]' src={cloud} alt="" />
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Partners;
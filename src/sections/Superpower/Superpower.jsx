import p1 from '../../assets/image/p-1.png'
import p2 from '../../assets/image/p-2.png'
import p3 from '../../assets/image/p-3.png'
import p4 from '../../assets/image/p-4.png'
import p5 from '../../assets/image/p-5.png'
import p6 from '../../assets/image/p-6.png'
const Superpower = () => {
    return (
        <div className='bg-dark py-10'>
            <div className="container p-3 ">
                <h2 className='text-3xl text-white text-center'>Our Superpower</h2>
                <div className='grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-6 gap-3 mt-6'>
                    <div>
                        <img src={p1} alt="" />
                    </div>
                    <div>
                        <img src={p2} alt="" />
                    </div>
                    <div>
                        <img src={p3} alt="" />
                    </div>
                    <div>
                        <img src={p4} alt="" />
                    </div>
                    <div>
                        <img src={p5} alt="" />
                    </div>
                    <div>
                        <img src={p6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Superpower;
import { BsShieldLock } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDeveloperBoard } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const OfferCard = ({ card }) => {

    return (
        <div className="offar-card w-full tablet:max-w-[310px] max-w-[350px] desktop:max-w-[340px] rounded-[15px] p-2 relative min-h-[400px]">
            <div className="absolute top-0 left-0 -translate-x-3 -translate-y-10">
                <h1 className="text-[180px] font-bold opacity-5 text-white">{card.id}</h1>
            </div>
            <div className="mt-14 px-5 text-3xl text-white flex items-center gap-2">
                {
                    card.name === "Development" ? <MdDeveloperBoard className="text-6xl" /> : ''
                }
                {
                    card.name === "MSP" ? <TbWorld className="text-6xl" /> : ''
                }
                {
                    card.name === "Cloud" ? <IoCloudUploadOutline className="text-6xl" /> : ''
                }
                {
                    card.name === "Cyber" ? <BsShieldLock className="text-6xl" /> : ''
                }

                <h4 className="text-3xl text-white">{card.name}</h4>
            </div>

            <div className="offar-card-inner p-6 w-5/6 min-h-72 relative translate-x-1/3 translate-y-5 rounded-3xl">
                <ul >
                    {card?.cardItem?.map(list => <li className="list-item">
                        <FaCheckCircle className='text-slate-100 text-xl'/>
                        {list}
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default OfferCard;
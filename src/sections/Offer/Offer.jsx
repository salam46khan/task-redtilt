import React from 'react';
import './Offer.css'
import OfferCard from '../../components/OfferCard';
const Offer = () => {
    const offerCard = [
        {
            id: "01",
            name: 'Development',
            cardItem: ['UI/UX', "DevOps", "Web Design", "Frontend Dev", "Beckend Dev"]
        },
        {
            id: "02",
            name: "MSP",
            cardItem: ['Infrastructor managed', "Managed Monitoring", "Business Continuity", "Manage Cyber"]
        },
        {
            id: "03",
            name: "Cloud",
            cardItem: ["AWS", "AZURE", "Multi-Cloud", "SRE Strategy", "Server less", "Hybrid Strategy", "Containerisation"]
        },
        {
            id: "04",
            name: "Cyber",
            cardItem: ["Cyber Audit", "Cyber governance", "Security as a service", "Penetration Testin"]
        }
    ]
    return (
        <div className='py-10 bg-dark'>
            <div className="container p-2">
                <h2 className='text-3xl text-white text-center'>What we Offer</h2>
                <div className='flex justify-center mt-4'>
                    <div className='inline-block border px-4 py-3 rounded-full border-red-600'>
                        <p className='text-slate-300 text-center'>Our Experts Will Help You In Following Fields</p>
                    </div>
                </div>

                <div className='flex flex-wrap gap-5 my-10 justify-center items-center'>
                    {
                        offerCard.map(card => <OfferCard key={card.id} card={card} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Offer;
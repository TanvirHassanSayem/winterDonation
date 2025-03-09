import axios from 'axios'; 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DonationCampaigns() {
    const [donationCampaigns, setDonationCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hoveredCard, setHoveredCard] = useState(null);
    
    useEffect(() => {
        axios.get("/json/donation_campaigns.json")
            .then((response) => {
                setDonationCampaigns(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-[50vh]">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-t-4 border-b-4 border-purple-600 rounded-full animate-spin"></div>
                    <p className="mt-4 text-purple-700 font-medium">Loading campaigns...</p>
                </div>
            </div>
        );
    }
    
    return (
        <section className="bg-gray-50 py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        Winter <span className="text-[#804FEF]">Donation Campaigns</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Help those in need stay warm during the cold winter months by contributing to our donation campaigns.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {donationCampaigns.map((campaign) => (
                        <div 
                            key={campaign.id} 
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                            onMouseEnter={() => setHoveredCard(campaign.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative overflow-hidden h-48 md:h-56">
                                <img
                                    src={campaign.image}
                                    alt={campaign.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${
                                        hoveredCard === campaign.id ? 'scale-110' : 'scale-100'
                                    }`}
                                />
                                <div className="absolute top-3 right-3">
                                    <span
                                        className={`inline-flex items-center px-3 py-1 text-xs font-bold rounded-full ${
                                            campaign.status === 'Urgent'
                                                ? 'bg-red-100 text-red-600'
                                                : 'bg-green-100 text-green-600'
                                        }`}
                                    >
                                        {campaign.status}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-5">
                                <div className="flex items-center mb-3">
                                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-md">
                                        {campaign.division}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{campaign.title}</h3>
                                
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {campaign.description}
                                </p>
                                
                                <div className="pt-2 border-t border-gray-100">
                                    <Link
                                        to={`/donation_campaigns/${campaign.id}`}
                                        className="block w-full text-center py-3 px-4 bg-gradient-to-r from-[#804FEF] to-[#6034c0] text-white font-medium rounded-lg hover:from-[#6034c0] hover:to-[#5026a8] transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                        Donate Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {donationCampaigns.length === 0 && !loading && (
                    <div className="text-center py-12">
                        <h3 className="text-xl text-gray-600">No donation campaigns available at the moment.</h3>
                        <p className="mt-2 text-gray-500">Please check back later for new campaigns.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
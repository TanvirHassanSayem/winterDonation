import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DonationDetailsPage() {
    const [donationCampaigns, setDonationCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDonationForm, setShowDonationForm] = useState(false);
    const [formData, setFormData] = useState({
        quantity: '',
        itemType: '',
        pickupLocation: '',
        additionalNotes: ''
    });

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

    const { id } = useParams();
    const campaign = !loading && donationCampaigns.find((c) => c.id === Number(id));

    if (!campaign) {
        return <div className="text-center text-red-500 text-lg">Campaign not found</div>;
    }

    const handleDonateClick = (e) => {
        e.preventDefault();
        setShowDonationForm(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.quantity.trim() || !formData.itemType.trim() || !formData.pickupLocation.trim()) {
            toast.error("Please fill in all required fields");
            return;
        }
        
        // Show success toast
        toast.success("Thank you! We will reach your destination soon", {
            position: "top-center",
            autoClose: 3000
        });
        
        // Reset form
        setFormData({
            quantity: '',
            itemType: '',
            pickupLocation: '',
            additionalNotes: ''
        });
        
        // Hide form
        setShowDonationForm(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
            <ToastContainer />
            
            <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{campaign.title}</h2>
            <p className="text-gray-600">{campaign.description}</p>
            <div className="text-sm text-gray-500">{campaign.contactInfo}</div>
            <span
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                    campaign.status === "Urgent" ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"
                }`}
            >
                {campaign.status}
            </span>
            
            {!showDonationForm ? (
                <button
                    onClick={handleDonateClick}
                    className="block w-full text-center bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
                >
                    Donate Now
                </button>
            ) : (
                <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Donation Details</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                                Quantity of items *
                            </label>
                            <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder="e.g., 2 jackets, 3 blankets"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="itemType" className="block text-sm font-medium text-gray-700 mb-1">
                                Item type *
                            </label>
                            <select
                                id="itemType"
                                name="itemType"
                                value={formData.itemType}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                                required
                            >
                                <option value="">Select item type</option>
                                <option value="blanket">Blanket</option>
                                <option value="jacket">Jacket</option>
                                <option value="sweater">Sweater</option>
                                <option value="gloves">Gloves</option>
                                <option value="scarf">Scarf</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">
                                Pickup location *
                            </label>
                            <input
                                type="text"
                                id="pickupLocation"
                                name="pickupLocation"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                                Additional notes (optional)
                            </label>
                            <textarea
                                id="additionalNotes"
                                name="additionalNotes"
                                value={formData.additionalNotes}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Any specific instructions or details..."
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                            ></textarea>
                        </div>
                        
                        <div className="flex space-x-3">
                            <button
                                type="submit"
                                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
                            >
                                Submit Donation
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowDonationForm(false)}
                                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
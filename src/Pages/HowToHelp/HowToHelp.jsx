import React from 'react';
import { Link } from 'react-router-dom';

export default function HowToHelp() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">How You Can Help</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Together, we can bring warmth to thousands of people across Bangladesh during the harsh winter months.
            </p>
            <Link
              to="/donation_campaigns"
              className="inline-block bg-white text-purple-800 font-bold px-8 py-3 rounded-full hover:bg-purple-100 transition duration-300"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Ways to Help Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Ways You Can Make a Difference</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-purple-100 p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Donate Winter Clothing</h3>
                <p className="text-gray-600 mb-4">
                  Donate new or gently used winter clothing items such as jackets, sweaters, blankets, socks, gloves, and scarves.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span> Clean, good condition items only
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span> All sizes needed (children to adult)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span> Warm materials like wool, fleece, down
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-purple-100 p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Volunteer Your Time</h3>
                <p className="text-gray-600 mb-4">
                  We need volunteers to help collect, sort, and distribute donations across Bangladesh.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span> Help with donation drives
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span> Assist with sorting and packaging
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span> Participate in distribution events
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-purple-100 p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Financial Support</h3>
                <p className="text-gray-600 mb-4">
                  Your financial contributions help us purchase new items and fund distribution logistics to remote areas.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span> All donations are tax-deductible
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span> 90% goes directly to clothing purchase
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span> Support transportation to remote areas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Process */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Our Donation Process</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
              
              {/* Step 1 */}
              <div className="md:flex mb-12 md:mb-24">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">1. Register and Choose a Campaign</h3>
                  <p className="text-gray-600">
                    Sign up on our platform and browse active donation campaigns in your area or across Bangladesh.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-0 left-0 transform -translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:flex mb-12 md:mb-24">
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-0 right-0 transform translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2. Complete the Donation Form</h3>
                  <p className="text-gray-600">
                    Fill out the donation form with details about your items and schedule a convenient pickup time.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:flex mb-12 md:mb-24">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">3. Item Pickup & Sorting</h3>
                  <p className="text-gray-600">
                    Our volunteers will collect your items, bring them to our centers where they're cleaned and sorted.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-0 left-0 transform -translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:flex">
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-0 right-0 transform translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">4. Distribution to Communities</h3>
                  <p className="text-gray-600">
                    Your donations are distributed to people in need in targeted communities, with priority to vulnerable groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Impact So Far</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">15,000+</div>
                <div className="text-purple-200">Items Donated</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">8,500+</div>
                <div className="text-purple-200">People Helped</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">28</div>
                <div className="text-purple-200">Districts Covered</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
                <div className="text-purple-200">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">What items are most needed?</h3>
              <p className="text-gray-600">
                The most needed items include warm blankets, winter jackets, sweaters, thermal wear, gloves, caps, socks, and scarves. Children's clothing is particularly in demand.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Can I donate used clothing?</h3>
              <p className="text-gray-600">
                Yes, we accept gently used clothing that is clean and in good condition. Items should be washed before donation and free from tears, stains, or excessive wear.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Where do the donations go?</h3>
              <p className="text-gray-600">
                Donations are distributed to vulnerable communities across Bangladesh, with focus on remote northern regions, urban slums, and areas with high rates of poverty.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How can I volunteer?</h3>
              <p className="text-gray-600">
                Register on our platform and navigate to the Volunteer section. You can sign up for various activities including collection drives, sorting sessions, and distribution events.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Ready to Make a Difference?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of compassionate individuals who are helping to keep Bangladesh warm this winter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donation_campaigns"
                className="inline-block bg-purple-600 text-white font-bold px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300"
              >
                Browse Campaigns
              </Link>
              <Link
                to="/register"
                className="inline-block bg-white text-purple-800 font-bold px-8 py-3 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition duration-300"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
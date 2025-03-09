import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// You might want to use AOS for animations as mentioned in the challenges section
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = ({ setTitle }) => {
  const [loading, setLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      setTitle("Homepage");
      // Initialize AOS animation library
      AOS.init({
        duration: 800,
        once: false
      });

      // Fetch donation campaigns data
      fetch('/campaigns.json')
        .then(res => res.json())
        .then(data => {
          setCampaigns(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching campaigns:', error);
          setLoading(false);
        });
    }
  }, [loading, setTitle]);

  // Function to handle navigation to donation campaigns page
  const handleDonateNowClick = () => {
    navigate('/donation_campaigns');
  };

  // Sample slider images - replace with your actual winter-themed images
  const sliderImages = [
    {
      id: 1,
      image: "https://i.ibb.co.com/7xhNLfsy/B1-A7022-1.webp",
      title: "Winter Warmth Drive",
      description: "Help us provide warm clothing to families in rural Bangladesh"
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/nN63RRNP/woman-holding-knitwear.webp",
      title: "Blankets for All",
      description: "Join our mission to distribute 10,000 blankets this winter"
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/kssyv28c/Blanket-Donation-Drive-Large.jpg",
      title: "Protecting Children from Cold",
      description: "Your donations help children stay warm during the coldest months"
    }
  ];

  // Divisions of Bangladesh for the "How It Works" section
  const divisions = [
    "Dhaka", "Chittagong", "Rajshahi", "Khulna",
    "Barisal", "Sylhet", "Rangpur", "Mymensingh"
  ];

  return (
    <div className="home-container m-10">
      {/* Banner/Slider Section */}
      <section className="slider-section">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderImages.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-[70vh] w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">{slide.title}</h1>
                  <p className="text-xl md:text-2xl max-w-3xl text-center" data-aos="fade-up">{slide.description}</p>
                  <button
                    className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300"
                    data-aos="zoom-in"
                    onClick={handleDonateNowClick}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section */}
      <section className="about-section py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" data-aos="fade-down">About Our Mission</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1593113630400-ea4288922497" alt="Donation Mission" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-4">Bringing Warmth to Bangladesh</h3>
              <p className="text-gray-700 mb-4">
                Winter can be harsh for many vulnerable communities across Bangladesh. Our mission is to collect and
                distribute winter clothing to those who need it most, especially in rural and low-income areas.
              </p>
              <p className="text-gray-700 mb-4">
                Through the generosity of donors like you, we've helped thousands of families stay warm during the
                coldest months. Your contributions directly impact lives and provide essential protection from the elements.
              </p>
              <p className="text-gray-700 mb-6">
                Join us in our mission to ensure that no one in Bangladesh has to endure winter without adequate clothing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300">
                  Learn More
                </button>
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition duration-300">
                  Our Impact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-down">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-semibold text-center mb-3">Donate Items</h3>
              <p className="text-gray-700 text-center">
                Choose what winter items you'd like to donate – blankets, jackets, sweaters, socks, or gloves.
                Fill out our donation form with the quantity and type of items.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-semibold text-center mb-3">Schedule Pickup</h3>
              <p className="text-gray-700 text-center">
                Our volunteers will coordinate with you to pick up your donations from your specified location.
                You can also drop off items at our collection points across Bangladesh.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-semibold text-center mb-3">We Distribute</h3>
              <p className="text-gray-700 text-center">
                Our team distributes your donations to those in need across Bangladesh.
                We prioritize remote and underserved areas where winter protection is scarce.
              </p>
            </div>
          </div>

          <div className="collection-points" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-center mb-6">Supported Divisions</h3>
            <p className="text-center mb-8">We operate in all eight divisions of Bangladesh to ensure nationwide support:</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {divisions.map((division, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition duration-300" data-aos="zoom-in" data-aos-delay={index * 50}>
                  <p className="text-blue-700 font-medium">{division}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* First Extra Section - Testimonials */}
      <section className="testimonials-section py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-down">Impact Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Testimonial" className="w-20 h-20 rounded-full object-cover mb-3" />
                <h3 className="text-xl font-semibold">Rahman Ali</h3>
                <p className="text-gray-500">Sylhet Region</p>
              </div>
              <p className="text-gray-700 text-center italic">
                "The blankets we received made all the difference for my family during the harsh winter months.
                My children could sleep comfortably and stay healthy. Thank you for your kindness."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Testimonial" className="w-20 h-20 rounded-full object-cover mb-3" />
                <h3 className="text-xl font-semibold">Fatima Begum</h3>
                <p className="text-gray-500">Rangpur Region</p>
              </div>
              <p className="text-gray-700 text-center italic">
                "As a teacher in a rural school, I've seen how your winter clothing donations have helped my students
                stay in school during winter. When they're warm, they can focus on learning."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
              <div className="flex flex-col items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Testimonial" className="w-20 h-20 rounded-full object-cover mb-3" />
                <h3 className="text-xl font-semibold">Kamal Hossain</h3>
                <p className="text-gray-500">Khulna Region</p>
              </div>
              <p className="text-gray-700 text-center italic">
                "The winter jackets provided to our fishing community have been life-changing. We can now work during
                the cold season without risking our health. Your program has supported our livelihoods."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Extra Section - Statistics/Impact */}
      <section className="impact-section py-20 px-4 bg-gradient-to-r from-pink-800 to-pink-500 text-white relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px"
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="fade-down">
            <span className="inline-block relative">
              Our Impact
              <span className="absolute -bottom-4 left-0 w-full h-1 bg-pink-200 rounded-full"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center transform transition-all duration-500 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                <span className="text-5xl font-bold">25k<span className="text-pink-200">+</span></span>
              </div>
              <p className="text-xl font-medium">Winter Items Distributed</p>
            </div>

            <div className="text-center transform transition-all duration-500 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                <span className="text-5xl font-bold">8</span>
              </div>
              <p className="text-xl font-medium">Divisions Covered</p>
            </div>

            <div className="text-center transform transition-all duration-500 hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                <span className="text-5xl font-bold">500<span className="text-pink-200">+</span></span>
              </div>
              <p className="text-xl font-medium">Volunteers Nationwide</p>
            </div>

            <div className="text-center transform transition-all duration-500 hover:scale-105" data-aos="zoom-in" data-aos-delay="400">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                <span className="text-5xl font-bold">12k<span className="text-pink-200">+</span></span>
              </div>
              <p className="text-xl font-medium">Families Supported</p>
            </div>
          </div>

          <div className="text-center mt-20 max-w-3xl mx-auto p-8 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Join Us This Winter</h3>
            <p className="text-lg mb-8 leading-relaxed">
              Together, we can make this winter warmer for those in need. Every donation, regardless of size,
              makes a significant impact in someone's life during the cold season.
            </p>
            <button
              className="px-8 py-4 bg-white text-pink-700 hover:bg-pink-200 hover:text-pink-800 rounded-lg font-bold text-lg transition duration-300 shadow-lg transform hover:-translate-y-1"
              onClick={handleDonateNowClick}
            >
              Become a Donor Today
            </button>
          </div>
        </div>

        {/* Heart animations instead of snowflakes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="heart" style={{
            position: 'absolute',
            color: 'white',
            fontSize: '1.5rem',
            opacity: '0.2',
            animation: 'fall 8s linear infinite',
            top: '-5%',
            left: '10%'
          }}>❤</div>
          <div className="heart" style={{
            position: 'absolute',
            color: 'white',
            fontSize: '1rem',
            opacity: '0.15',
            animation: 'fall 10s linear infinite',
            top: '-5%',
            left: '25%'
          }}>❤</div>
          <div className="heart" style={{
            position: 'absolute',
            color: 'white',
            fontSize: '1.2rem',
            opacity: '0.2',
            animation: 'fall 12s linear infinite',
            top: '-5%',
            left: '65%'
          }}>❤</div>
          <div className="heart" style={{
            position: 'absolute',
            color: 'white',
            fontSize: '0.8rem',
            opacity: '0.1',
            animation: 'fall 15s linear infinite',
            top: '-5%',
            left: '85%'
          }}>❤</div>
        </div>
      </section>



    </div>
  );
}

export default HomePage;
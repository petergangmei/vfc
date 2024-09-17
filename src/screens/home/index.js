import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4">
      {/* Main Header Section */}

      {/* Main Image with Hero Section */}
      <section className="w-full max-w-6xl relative">
        <div className="relative overflow-hidden bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: 'url(https://i.insider.com/66e3171cd17aa3c7b2b204fd?width=1200&format=jpeg)', height: '400px' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white text-center py-20">
            <h2 className="text-4xl font-semibold mb-4">Explore Change Through Writing and Arts</h2>
            <p className="text-lg mb-6">Discover articles, poetry, opinions, and photography that drive societal transformation.</p>
          </div>
        </div>
      </section>

      {/* Grid Section with Featured Content */}
      <div className='flex flex-col items-center bg-red justify-start mt-12'>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Latest News</h2>
      </div>

      <main className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Articles Section */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src="https://example.com/article-image.jpg" alt="Articles" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Articles</h2>
          <p className="text-gray-700 mb-6">Explore various articles on societal change, history, and culture.</p>
          <Link to="/articles" className="text-blue-500 hover:underline">Read Articles</Link>
        </div>

        {/* Poetry Section */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src="https://example.com/poetry-image.jpg" alt="Poetry" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Poetry</h2>
          <p className="text-gray-700 mb-6">Discover creative poems that reflect the beauty of words.</p>
          <Link to="/poetry" className="text-blue-500 hover:underline">Read Poetry</Link>
        </div>

        {/* Arts & Photography Section */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src="https://example.com/arts-image.jpg" alt="Arts & Photography" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Arts & Photography</h2>
          <p className="text-gray-700 mb-6">Admire stunning arts and photography from various artists.</p>
          <Link to="/arts" className="text-blue-500 hover:underline">View Gallery</Link>
        </div>

     
      </main>

      <div className='flex flex-col items-center bg-red justify-start mt-12'>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Opinion</h2>
      </div>
      <main className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
        {/* Opinion Section */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src="https://example.com/opinion-image.jpg" alt="Opinion" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opinion</h2>
          <p className="text-gray-700 mb-6">Read opinions on societal and cultural issues by various authors.</p>
          <Link to="/opinion" className="text-blue-500 hover:underline">Read Opinions</Link>
        </div>

        {/* Reviews Section */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src="https://example.com/reviews-image.jpg" alt="Reviews" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reviews</h2>
          <p className="text-gray-700 mb-6">Check out our latest reviews on books, arts, and more.</p>
          <Link to="/reviews" className="text-blue-500 hover:underline">Read Reviews</Link>
        </div>

        {/* Short Stories Section */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src="https://example.com/stories-image.jpg" alt="Short Stories" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Short Stories</h2>
          <p className="text-gray-700 mb-6">Enjoy an engaging collection of short stories from various authors.</p>
          <Link to="/stories" className="text-blue-500 hover:underline">Read Stories</Link>
        </div>
      </main>

      <div className='flex flex-col items-center bg-red justify-start mt-12'>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Special Cases</h2>
      </div>
      <main className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
        {/* Opinion Section */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src="https://example.com/opinion-image.jpg" alt="Opinion" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opinion</h2>
          <p className="text-gray-700 mb-6">Read opinions on societal and cultural issues by various authors.</p>
          <Link to="/opinion" className="text-blue-500 hover:underline">Read Opinions</Link>
        </div>

        {/* Reviews Section */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src="https://example.com/reviews-image.jpg" alt="Reviews" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reviews</h2>
          <p className="text-gray-700 mb-6">Check out our latest reviews on books, arts, and more.</p>
          <Link to="/reviews" className="text-blue-500 hover:underline">Read Reviews</Link>
        </div>

        {/* Short Stories Section */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src="https://example.com/stories-image.jpg" alt="Short Stories" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Short Stories</h2>
          <p className="text-gray-700 mb-6">Enjoy an engaging collection of short stories from various authors.</p>
          <Link to="/stories" className="text-blue-500 hover:underline">Read Stories</Link>
        </div>
      </main>


    </div>
  );
};

export default HomeScreen;

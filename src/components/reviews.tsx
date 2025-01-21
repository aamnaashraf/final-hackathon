import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

interface Review {
  name: string;
  rating: number;
  text: string;
}

const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<Review>({ name: '', rating: 0, text: '' });

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews') || '[]') as Review[];
    setReviews(savedReviews);
  }, []);

  const handleReviewSubmit = () => {
    if (newReview.name && newReview.text && newReview.rating > 0) {
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));
      setNewReview({ name: '', rating: 0, text: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="reviews-section mt-10">
      <h2 className="text-3xl font-semibold text-center mb-6">What Our Customers Think About Us</h2>

      {/* Review Submission Form */}
      <section className="mb-6 p-4 bg-gray-100 rounded-md shadow-md">
        <h3>Submit a Review</h3>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded-md mb-2 border-yellow-300"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          />
          <textarea
            placeholder="Add your review"
            className="w-full p-2 border rounded-md mb-2 border-yellow-300"
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
          />
          <div className="flex mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                onClick={() => setNewReview({ ...newReview, rating: star })}
              />
            ))}
          </div>
          <button
            onClick={handleReviewSubmit}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded mt-2"
          >
            Submit Review
          </button>
        </div>
      </section>

      {/* Reviews Slider (Horizontal Scroll) */}
      <div className="reviews-slider overflow-x-scroll flex space-x-6 py-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="review-card bg-white p-4 border-2 border-gray-100 rounded-lg shadow-lg w-72 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-gray-200"
          >
            {/* Rating Stars */}
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`text-${star <= review.rating ? 'yellow-500' : 'gray-300'} mr-1`}
                />
              ))}
            </div>
            {/* Customer Name */}
            <h4 className="font-semibold text-lg">{review.name}</h4>
            {/* Customer Review */}
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Display Total Number of Reviews */}
      <div className="text-center mt-4">
        <p>{`Reviews (${reviews.length})`}</p>
      </div>
    </div>
  );
};

export default ReviewsSection;



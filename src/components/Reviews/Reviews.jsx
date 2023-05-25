import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FetchReviews from 'services/fetchReviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    FetchReviews(movieId).then(r => {
      setReview(r.results);
    });
  }, [movieId]);

  return (
    <div>
      <ul>
        {review.map(review => {
          return (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
              <p>Rating: {review.author_details.rating}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;

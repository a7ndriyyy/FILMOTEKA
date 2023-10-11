import { Container, Section } from 'components/App.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewMovie } from 'services/movie-api';
import ReviewsList from './ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const { results } = await getReviewMovie(id);
        setReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
    };
    fetchData(movieId);
  }, [movieId]);

  return (
    <>
      {loading && (
        <Section>
          <Container>
            {reviews.length === 0 ? (
              <h3>No reviews</h3>
            ) : (
              <ReviewsList reviews={reviews} />
            )}
          </Container>
        </Section>
      )}
    </>
  );
};

export default Reviews;
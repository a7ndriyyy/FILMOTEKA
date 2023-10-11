import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { ListReviews } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <ListReviews>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id} author={author} content={content} />
      ))}
    </ListReviews>
  );
};

export default ReviewsList;
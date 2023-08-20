import { BtnLoadMoreStyled } from './ButtonLoadMore.styled';

export const BtnLoadMore = ({ onClick }) => {
  return (
    <BtnLoadMoreStyled type="button" onClick={onClick}>
      Load More
    </BtnLoadMoreStyled>
  );
};

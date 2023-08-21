import { Loader } from 'components/Loader/Loader';
import { BtnLoadMoreStyled } from './ButtonLoadMore.styled';

export const BtnLoadMore = ({ onClick, loading }) => {
  return (
    <BtnLoadMoreStyled type="button" onClick={onClick}>
      {loading ? <Loader /> : 'Load More'}
    </BtnLoadMoreStyled>
  );
};

import { LoaderStyled, Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <LoaderStyled></LoaderStyled>
      <p>Loading data, please wait...</p>
    </Wrapper>
  );
};

import styled from 'styled-components';

const StyledProductListing = styled.div`
  color: pink;
`;

export function ProductListing() {
  return (
    <StyledProductListing>
      <h1>Welcome to ProductListing!</h1>
    </StyledProductListing>
  );
}

export default ProductListing;

import { render } from '@testing-library/react';

import ProductListing from './product-listing';

describe('ProductListing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductListing />);
    expect(baseElement).toBeTruthy();
  });
});

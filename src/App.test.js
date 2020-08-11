import React from 'react';
import { render } from '@testing-library/react';
import Aiku from './Aiku';

test('renders learn react link', () => {
  const { getByText } = render(<Aiku />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

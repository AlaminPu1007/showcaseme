/**
 * This is the very basic test for our root page/component
 * This will check the existing ness of "Hello" text in home component
 */

import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />); // ARRANGE EVERYTHING FOR THE TEST

    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'Hello world!',
    }); // ACTION WE ARE TAKING

    expect(heading).toBeInTheDocument(); // ASSERT
  });

  // check another heading that belongs to level 2 at dom node
  it('should have heading in level 2', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});

/**
 * This is the very basic test for our root page/component
 * This will check the existing ness of "Hello" text in home component
 */

import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/app/page';

// do setup once, for entire other test files also
// initialize intersection observer

beforeAll(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

// Run test case for page.tsx file
describe('Home', () => {
  it('to check some text are present', () => {
    render(<Home />); // ARRANGE EVERYTHING FOR THE TEST

    const heading = screen.getByText('jon doe', { exact: false }); // ACTION WE ARE TAKING
    const heading2 = screen.getByText('Business development', { exact: true }); // ACTION WE ARE TAKING

    expect(heading).toBeInTheDocument(); // ASSERT
    expect(heading2).toBeInTheDocument(); // ASSERT
  });

  // check another text belong
  it('to check a hello text is present', () => {
    render(<Home />);
    const heading = screen.getByText('Hello', { exact: false });
    expect(heading).toBeInTheDocument();
  });

  /** This will return the element (normally an <img>) that has the given alt text */
  it('a image with alt text', () => {
    render(<Home />);

    // const altTxt = screen.getByAltText(/user-avatar/i);
    const altTxt = screen.getByAltText('user-avatar', { exact: true });
    expect(altTxt).toBeInTheDocument();
  });

  // clicked on button or fire an button event
  it('should have clicked on download resume button', () => {
    render(<Home />);

    // get the button
    const button = screen.getByRole('button', { name: 'Download Resume' });
    // trigger button click event
    fireEvent.click(button);

    // click on another event
    const button2 = screen.getByRole('button', { name: "Let's talk" });
    // trigger button click event
    fireEvent.click(button2);
  });
});

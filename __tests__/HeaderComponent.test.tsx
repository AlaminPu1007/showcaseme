/**
 * Write a test case for header component
 */
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '@/app/components/layouts/header/HeaderComponent';

describe('Header', () => {
  it('should have a contact text', () => {
    render(<Header />);
    const homeTxt = screen.getByText(/contact/i);
    expect(homeTxt).toBeInTheDocument();
  });

  // To check nav have specific color by inherit parent
  it('nav item should have inherit color', () => {
    render(<Header />);

    // get the item from header
    const navItem = screen.getByRole('link', { name: 'Home' });

    // check it has specific color
    expect(navItem).toHaveStyle({ color: 'inherit' });
  });

  // check over effect for an nav item
  test('clicking on nav link', () => {
    // render the component
    render(<Header />);
    // get about route
    const navItem = screen.getByRole('link', { name: 'About' });
    // trigger the event
    fireEvent.click(navItem);
  });
});

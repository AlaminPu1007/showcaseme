/**
 * validate or run a test case for dashboard hero section
 */

import HeroComponent from '@/app/components/home/HeroComponent';
import { fireEvent, render, screen } from '@testing-library/react';

describe('run test for <HeroComponent />', () => {
  it('to check some text are present', () => {
    render(<HeroComponent />); // ARRANGE EVERYTHING FOR THE TEST

    const heading = screen.getByText('Md Alamin', { exact: false }); // ACTION WE ARE TAKING
    const heading2 = screen.getByText('Software Engineer', { exact: true }); // ACTION WE ARE TAKING

    expect(heading).toBeInTheDocument(); // ASSERT
    expect(heading2).toBeInTheDocument(); // ASSERT
  });

  // check another text belong
  it('to check a hello text is present', () => {
    render(<HeroComponent />);
    const heading = screen.getByText('Hello', { exact: false });
    expect(heading).toBeInTheDocument();
  });

  /** This will return the element (normally an <img>) that has the given alt text */
  it('a image with alt text', () => {
    render(<HeroComponent />);

    // const altTxt = screen.getByAltText(/user-avatar/i);
    const altTxt = screen.getByAltText('user-avatar', { exact: true });
    expect(altTxt).toBeInTheDocument();
  });

  // clicked on button or fire an button event
  it('should have clicked on download resume button', () => {
    render(<HeroComponent />);

    const resumeLink = screen.getByRole('link', { name: 'Download Resume' });
    fireEvent.click(resumeLink);
    expect(resumeLink).toHaveAttribute('href', '/assets/resume/alamin.pdf');

    const contactLink = screen.getByRole('link', { name: "Let's talk" });
    fireEvent.click(contactLink);
    expect(contactLink).toHaveAttribute('href', '/#footer-widget');
  });
});

/* Testing footer of our projects */

import Footer from '@/app/components/layouts/footer/FooterComponent';
import { render, screen } from '@testing-library/react';

describe('Testing <Footer />', () => {
  it('test footer nav list has specific css property', () => {
    render(<Footer />);
    const homeElement = screen.getByRole('link', { name: 'Home' });

    expect(homeElement).toHaveStyle({
      color: 'inherit',
      'font-size': '1.125rem;',
      'padding-left': '0.25rem;',
    });
  });

  // check a link has specific href content
  it('validate a link with given href', () => {
    render(<Footer />);
    // get specific link by data-id
    const getGitHubLink = screen.getByTestId('github-link-item');
    // validate those node has valid github url
    expect(getGitHubLink).toHaveAttribute(
      'href',
      'https://github.com/AlaminPu1007'
    );
  });
});

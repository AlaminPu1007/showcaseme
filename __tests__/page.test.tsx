/**
 * This is the very basic test for our root page/component
 * This will check the existing ness of "Hello" text in home component
 */

import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { projectsData, techStacks, workExperience } from '@/app/constant';

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

  // Run test case to validate "WORK EXPERIENCE" objects
  test('validate work experience', () => {
    render(<Home />);
    const workExperienceItem = screen.getAllByTestId('work-experience-card');
    // check except behavior
    expect(workExperienceItem).toHaveLength(workExperience.length);

    // Assert that each card renders the correct content
    workExperience.forEach((item) => {
      // title must be greater than 1
      expect(screen.getAllByText(item.title).length).toBeGreaterThan(1);
      expect(screen.getAllByText(item.organizationName).length).toBeGreaterThan(
        1
      );
      expect(screen.getAllByText(item.location).length).toBeGreaterThan(1);
    });
  });

  // Run a test case that will validate of "MY TECH STACKS"
  test('validate of tech stacks', () => {
    render(<Home />);

    // check renderer item and my predefined item has same length
    const techElement = screen.getAllByTestId('my-tech-stack');
    expect(techElement).toHaveLength(techStacks.length);

    techStacks.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  /** Run test case to validate projects */
  it('validate of projects', () => {
    render(<Home />);
    const projectElement = screen.getAllByTestId('project-data-id');
    expect(projectElement).toHaveLength(projectsData.length);

    projectsData.forEach((item) => {
      expect(screen.getAllByText(item.name).length).toBeGreaterThan(5);
    });
  });
});

/**
 * This will validate some predefined local json in application
 */
import AboutComponent from '@/app/components/home/AboutComponent';
import { techStacks, workExperience } from '@/app/constant';
import { render, screen } from '@testing-library/react';

describe('run test for <AboutComponent />', () => {
  // Run test case to validate "WORK EXPERIENCE" objects
  test('validate work experience', () => {
    render(<AboutComponent />);
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
    render(<AboutComponent />);

    // check renderer item and my predefined item has same length
    const techElement = screen.getAllByTestId('my-tech-stack');
    expect(techElement).toHaveLength(techStacks.length);

    techStacks.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});

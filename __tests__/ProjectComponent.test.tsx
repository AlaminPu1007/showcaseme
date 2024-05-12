/**
 * Run test case for projects in dashboard
 */
'use client';

import ProjectComponent from '@/app/components/layouts/home/ProjectComponent';
import { projectsData } from '@/app/constant';
import { render, screen } from '@testing-library/react';

describe('run test for <ProjectComponent/>', () => {
  /** Run test case to validate projects */
  it('validate of projects', () => {
    render(<ProjectComponent />);
    const projectElement = screen.getAllByTestId('project-data-id');
    expect(projectElement).toHaveLength(projectsData.length);

    projectsData.forEach((item) => {
      expect(screen.getAllByText(item.name).length).toBeGreaterThan(5);
    });
  });
});

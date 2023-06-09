import { render, screen } from '@testing-library/react';
import Home from '../../../../src/pages/jest/index';
import '@testing-library/jest-dom';
 
// 
describe('Home', () => {
  it('Renders the heading', () => {
    render(<Home />);
 
    const heading = screen.getByRole('heading', {
      name: "Here's our testing page!",
    });
 
    expect(heading).toBeInTheDocument();
  });
});
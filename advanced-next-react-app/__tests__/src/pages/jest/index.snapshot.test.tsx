import { render } from '@testing-library/react';
import Home from '../../../../src/pages/jest/index';
 
it('Home component snapshot test', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
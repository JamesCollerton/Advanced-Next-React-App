import { render, screen } from '@testing-library/react';
import Home from '../../../../src/pages/jest/mocks';
import '@testing-library/jest-dom';
import titleProvider from '../../../../src/pages/jest/title-provider';

// Here we mock the dependency and provide a different implementation
// of the title provider function.
jest.mock('../../../../src/pages/jest/title-provider', () => ({
    // Flag to treat it as an ES module
    __esModule: true,
    // Here we override the default export with a mock function
    // providing a different value.
    default: jest.fn(() => 'Here is the mocked title!')
}))

// In order to refer to the mocked function we need to pull
// it from the import and cast it to the mocked type we expect
const mockTitleProvider = titleProvider as jest.MockedFn<() => string>
 
// This works the same as our previous testing
describe('Home', () => {
  it('Renders the heading', () => {
    render(<Home />);
 
    const heading = screen.getByRole('heading', {
      name: "Here is the mocked title!",
    });
 
    expect(heading).toBeInTheDocument();

    // As we have done the cast above we can now refer to
    // this mock and discover a bit more about how it was called.
    expect(mockTitleProvider.mock.calls).toHaveLength(1)
  });
});
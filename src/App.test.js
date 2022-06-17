import { render, screen } from '@testing-library/react';
import App from './App';
//testCase testuoja viena funkcija su vienu imputu, kazka labai konkretaus, viena situacija
test('renders learn react link', () => {
  // given - preconditions, create what is needed for the test
  render(<App />);
  const linkElement = screen.getByText("learn react");
  // When - actions

  //then - expectations / expected behavior / assertions
  expect(linkElement).toBeInTheDocument();
  //teardown - destroy what was created in the "given" step
  
 
  
});

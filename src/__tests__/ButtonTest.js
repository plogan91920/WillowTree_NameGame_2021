import { render, screen } from '@testing-library/react';
import Button from '../components/Button'

test('Button Function', () => {
  let func = console.log("test")
  render(<Button text="Test Code" action={func} />)
  const textElement = screen.getByText(/Test Code/i);
  expect(textElement).toBeInTheDocument();
})
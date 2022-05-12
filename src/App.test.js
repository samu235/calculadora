import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('view', () => {
  render(<App />);
  const linkElement = screen.getByText("By Samuel");
  expect(linkElement).toBeInTheDocument();
});

test("suma", () => {
  render(<App />);
  
  let buton9 = screen.getByText('9');
  let butonadd = screen.getByText('+');
  let butonEnt = screen.getByText('Enter');

  fireEvent.click(buton9);
  fireEvent.click(butonadd);
  fireEvent.click(buton9);
  fireEvent.click(butonEnt);

  
  expect(screen.getByText('18')).toBeInTheDocument();
});

test("resta", () => {
  render(<App />);

  let buton3 = screen.getByText('3');
  let butonrest = screen.getByText('-');
  let butonEnt = screen.getByText('Enter');

  fireEvent.click(buton3);
  fireEvent.click(buton3);
  fireEvent.click(butonrest);
  fireEvent.click(buton3);
  fireEvent.click(butonEnt);

  
  expect(screen.getByText('30')).toBeInTheDocument();
});

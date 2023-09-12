import { render, screen } from '@testing-library/react';
import App from './App'; // 테스트할 React 앱의 주 진입 파일

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import './location-item.css';
import { render, screen } from '@testing-library/react';
import {LocationItem} from './location-item';

describe('Component: LocationItem', () => {
  it('should render correctly', () => {
    const mockActiveKey = 2;
    const mockId = 1;
    const mockTitle = 'Paris';
    const mockHandleClick = vi.fn();

    render(<LocationItem id={mockId} title={mockTitle} activeKey={mockActiveKey} onClick={mockHandleClick}/>);

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('tabs__item--active');
    expect(screen.getByRole('li')).toHaveClass('locations__item');
    expect(mockHandleClick).toBeCalledTimes(1);
  });
  it('should render correctly not active class', () => {
    const mockActiveKey = 2;
    const mockId = 1;
    const mockTitle = 'Paris';

    render(<LocationItem id={mockId} title={mockTitle} activeKey={mockActiveKey}/>);
    expect(screen.getByRole('button')).not.toHaveClass('tabs__item--active');
  });
});

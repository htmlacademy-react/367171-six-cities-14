import './location-item.css';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {LocationItem} from './location-item';

describe('Component: LocationItem', () => {
  it('should render correctly', async () => {
    const mockActiveKey = 1;
    const mockId = 1;
    const mockTitle = 'Paris';
    const mockHandleClick = vi.fn();

    render(<LocationItem id={mockId} title={mockTitle} activeKey={mockActiveKey} onClick={mockHandleClick}/>);

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('tabs__item--active');

    fireEvent(screen.getByRole('button'), new Event('click'));
    await userEvent.click(screen.getByRole('button'));

    expect(mockHandleClick).toBeCalledTimes(1);
  });
  it('should render correctly not active class', () => {
    const mockActiveKey = 2;
    const mockId = 1;
    const mockTitle = 'Paris';

    const mockHandleClick = vi.fn();

    render(<LocationItem id={mockId} title={mockTitle} activeKey={mockActiveKey} onClick={mockHandleClick}/>);
    expect(screen.getByRole('button')).not.toHaveClass('tabs__item--active');
  });
});

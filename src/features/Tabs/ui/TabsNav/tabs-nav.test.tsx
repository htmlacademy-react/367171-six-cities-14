import {render, screen} from '@testing-library/react';
import {withHistory} from '../../../../routes/history-route.tsx';
import {TabsNav} from './tabs-nav.tsx';

describe('Component: TabsNav', () => {
  it('should render correctly', () => {

    const mockItems = [
      {id: 1, title: 'Paris'},
      {id: 2, title: 'Rome'},
      {id: 3, title: 'Amsterdam'},
    ];

    const mockActiveKey = 2;
    const mockDefaultKey = 1;
    const mockHandleClick = vi.fn();

    const tabsTestId = 'tabs';
    const locationsContainerTestId = 'locations-container';
    const locationsListTestId = 'locations-list';

    render(withHistory(<TabsNav items={mockItems} activeKey={mockActiveKey} defaultActiveKey={mockDefaultKey} onClick={mockHandleClick}/>));

    expect(screen.getByText(mockItems[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockItems[1].title)).toBeInTheDocument();
    expect(screen.getByText(mockItems[2].title)).toBeInTheDocument();

    expect(screen.getByText(mockItems[1].title)).toHaveClass('tabs__item--active');
    expect(screen.getByText(mockItems[0].title)).not.toHaveClass('tabs__item--active');
    expect(screen.getByText(mockItems[2].title)).not.toHaveClass('tabs__item--active');

    expect(screen.getByTestId(tabsTestId)).toBeInTheDocument();
    expect(screen.getByTestId(locationsContainerTestId)).toBeInTheDocument();
    expect(screen.getByTestId(locationsListTestId)).toBeInTheDocument();
  });
});

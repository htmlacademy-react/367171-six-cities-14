import {NotFoundPage} from './not-found-page';
import {withHistory} from '../../routes/history-route';
import { render, screen } from '@testing-library/react';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const expectedText = 'Page Not Found';
    const expectedLinkText = 'Come back to main page';

    render(withHistory(<NotFoundPage />));

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});

import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {routeConfig} from './routes';
import {render} from 'react-dom';
import {it, expect} from 'vitest';
import {waitFor} from '@testing-library/react';

const setupMyTest = () => {
  const router = createMemoryRouter(routeConfig,{
    initialEntries: ['/'],
    initialIndex: 0,
  });

  render(<RouterProvider router={router} />)

  // Objectify the router so we can explicitly pull when calling setupMyTest
  return { router }
};

it('tests react router dom v6.4.0 navigates properly', async () => {
  const { router } = setupMyTest();

  // Given we do start where we want to start
  // expect(router.state.location.pathname).toEqual('/starting/path')


  // Don't forget to await the update since not all actions are immediate
  await waitFor(() => {
    expect(router.state.location.pathname).toBe('/');
  });
});



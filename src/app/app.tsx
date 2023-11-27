import {AppRouter, StoreProvider} from '../providers/RouterProvider';

export default function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>

  );
}

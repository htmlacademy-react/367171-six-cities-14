import { AppRouter } from '../providers/router-provider';
import {StoreProvider} from '../providers/store-provider.tsx';

export default function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>

  );
}

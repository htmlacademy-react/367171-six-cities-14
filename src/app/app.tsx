import {AppRouter, StoreProvider} from "../providers";

export default function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>

  );
}

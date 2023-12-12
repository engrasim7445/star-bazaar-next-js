'use client';
import { Provider } from 'react-redux';
import { store } from './store';

// Create a Layer around React App for Redux
export function Providers({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}

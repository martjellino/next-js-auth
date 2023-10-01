'use client';

import { Provider } from 'jotai';
import { Toaster } from 'react-hot-toast';


export const RootProvider = ({ children }) => {
	return (
        <Provider>
          <div>{children}</div>
          <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        </Provider>
      );
};
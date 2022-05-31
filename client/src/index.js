import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./feature/users.slice"
import {QueryClient, QueryClientProvider} from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const queryClient = new QueryClient()

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);

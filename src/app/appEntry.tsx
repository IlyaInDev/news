import { ThemeProvider } from "@/app/providers/ThemeProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore";
import { appRouter } from "./appRouter";
import { RouterProvider } from "react-router-dom";
import "@/shared/index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ThemeProvider>
          <Provider store={store}>
            <RouterProvider router={appRouter} />
          </Provider>
      </ThemeProvider>
    </React.StrictMode>,
  )
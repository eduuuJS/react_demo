import "reflect-metadata";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { NextUIProvider } from "@nextui-org/react";
import './index.css'
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="light text-foreground bg-background h-screen w-full">
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>,
  // <NextUIProvider>
  //   <div className="dark text-foreground bg-background h-screen w-full">
  //     <App />
  //   </div>
  // </NextUIProvider>
)

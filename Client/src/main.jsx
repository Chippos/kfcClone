import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

const customTheme = { 
  drawer: {
    styles: {
      base: {
        overlay: {
          position: "fixed",
        },
      },
    },
  },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider value={customTheme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
)

import App from './routers';
import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line import/no-relative-packages
import '../../src/styles/main.scss'; // 不要修改或删除

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(<App />);

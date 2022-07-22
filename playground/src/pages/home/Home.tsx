import React from 'react';
import { Demo, REACT_TEST } from 'custom-package-name';

export default function Home() {
  return (
    <div>
      home
      {' '}
      <span className="demo">
        { REACT_TEST.demo }
      </span>
      <Demo />
    </div>
  );
}

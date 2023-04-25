import React, { useState } from 'react';

const test = null;

export function Demo() {
  const [count] = useState(0);
  const b = '5'.padStart(2, '1');
  const c = test ?? 'hello';
  const d = {} as Record<string, any>;

  return (
    <div>
      <p>
        count in jsx component:
        {' '}
        {count}
      </p>
      <p>
        {b}
      </p>
      <p>
        {c}
      </p>
      <p>
        {d}
      </p>
    </div>
  );
}

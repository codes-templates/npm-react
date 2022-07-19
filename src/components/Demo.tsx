import React, { useState } from 'react';

export function Demo() {
  const [a] = useState(0);

  return (
    <div>
      count:
      {' '}
      {a}
    </div>
  );
}

import React, { Dispatch, SetStateAction, useState } from 'react';

export const TestNavBar = (): JSX.Element => {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav>
        <a href="#a">a</a>
        <a href="#b">b</a>
        <a href="#c">c</a>
      </nav>
    </header>
  );
};

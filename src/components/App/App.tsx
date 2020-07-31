import React, { ReactElement } from 'react';
import ava from 'assets/img/avatar.png';

export const App = (): ReactElement => {
  return (
    <>
      <img src={ ava } alt="ava"/>
      <h1>Hello World</h1>
    </>
  );
};

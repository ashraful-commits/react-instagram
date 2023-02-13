import React from 'react';
import Counter from '../Counter/Counter';

import Middle from '../Middle/Middle';
import SideLeft from '../Sideleft/SideLeft';
import { SideRight } from '../SideRight/SideRight';
import './Main.scss';
function Main() {
  return (
    <>
      <div className="container">
        <div className="left">
          <SideLeft />
        </div>
        <div className="middle">
          <Middle />
        </div>
        <div className="right">
          <SideRight />
        </div>
      </div>

      <Counter />
    </>
  );
}

export default Main;


import React from 'react'
import {h, render} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

export default function BigTitle(props) {
  return (
    <div>
      <Gradient name="rainbow">
        <BigText text="unicorns"/>
      </Gradient>
    </div>
  )
}

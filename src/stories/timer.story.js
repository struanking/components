import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Timer from '../components/Timer/index.jsx';

storiesOf('Timer', module)
  .add('10 second countdown', () => (
    <div>
      <h2>Timer</h2>
      <h3>10 second countdown</h3>
      <Timer start={10} />
    </div>
  ))
  .add('Auto start countdown', () => (
    <div>
      <h2>Timer</h2>
      <h3>Auto start 10 second countdown</h3>
      <Timer autostart start={10} />
    </div>
  ))
  ;

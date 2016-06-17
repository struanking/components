import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Tabset, { TabPanel } from '../components/Tabset/index.jsx';

storiesOf('Accessible Tabset', module)
  .add('3 simple tabs', () => (
    <div>
      <h2>Tabset</h2>
      <h3>3 Simple tabs</h3>
      <p>A simple tabset component which is keyboard accessible and uses
        appropriate ARIA roles to improve accessibility.</p>
      <p>Draws on <a href="http://heydonworks.com/practical_aria_examples/#tab-interface">Practical ARIA examples</a> and <a href="http://simplyaccessible.com/article/danger-aria-tabs/">Danger! Aria tabs</a>.</p>
      <p>To do:</p>
      <ul>
        <li>Allow custom styles to be applied.</li>
        <li>Custom positioning of tabs i.e. top, bottom, left, right.</li>
      </ul>
      <Tabset>
        <TabPanel id="t1" title="Tab one">Panel 1</TabPanel>
        <TabPanel id="t2" title="Tab two">
          <h2>Panel 2</h2>
          <input type="text" />
        </TabPanel>
        <TabPanel id="t3" title="Tab three">Panel 3</TabPanel>
      </Tabset>
    </div>
  ))
  ;

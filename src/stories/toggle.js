const React = require('react');
import {storiesOf, action} from '@kadira/storybook';

import Story from '../index';

var belle = require('belle');

import {Toggle} from 'belle';

storiesOf('滑动开关 (toggle)', module)
  .add('基本 (base)', () => {
    const info = `
      ---
      ### Name: belle-toggle
      #### Source: [Belle](https://github.com/nikgraf/belle)
      #### Install: 
      \`\`\`
      npm install belle
      \`\`\`
      
      #### Require/Import: 
      \`\`\`
      import {Toggle} from 'belle';
      \`\`\`
      
      ---
    `;
    return (
      <Story info={info} showInline="true">
        <Toggle></Toggle>
      </Story>
    )
  });

const React = require('react');
import {storiesOf, action} from '@kadira/storybook';

import Story from '../index';

import {Rating} from 'belle';

storiesOf('等级 (rating)', module)
  .add('基本 (base)', () => {
    const info = `
      ---
      ### Name: belle-rating
      #### Source: [Belle](https://github.com/nikgraf/belle)
      #### Install: 
      \`\`\`
      npm install belle
      \`\`\`
      
      #### Require/Import: 
      \`\`\`
      import {Rating} from 'belle';
      \`\`\`
      
      ---
    `;
    return (
      <Story info={info} showInline="true">
        <Rating defaultValue={3}></Rating>
      </Story>
    )
  });

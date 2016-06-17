const React = require('react');
import {storiesOf, action} from '@kadira/storybook';

import Story from '../index';

const Value = require('grommet/components/Value');
var Cube = require('grommet/components/icons/base/Cube');
var LinkUp = require('grommet/components/icons/base/LinkUp');
var LinkDown = require('grommet/components/icons/base/LinkDown');

import 'grommet/grommet.min.css'

storiesOf('度量数值 (value)', module)
  .add('基本 (base)', () => {
    const info = `
      ---
      #### Name: gromment-value dataviz widget 
      #### Source: [HPE Grommet](https://github.com/grommet/grommet)
      #### Install: 
      \`\`\`
      npm install grommet
      \`\`\`
      
      #### Require/Import: 
      \`\`\`
      const Value = require('grommet/components/Value');
      var Cube = require('grommet/components/icons/base/Cube');
      var LinkUp = require('grommet/components/icons/base/LinkUp');
      var LinkDown = require('grommet/components/icons/base/LinkDown');
      
      require('grommet/grommet.min.css');
      \`\`\`
    `;
    return (
      <Story info={info} showInline="true">
          <Value value={90} units="%"
                 icon={<Cube size="large" colorIndex="ok" />}
                 trendIcon={<LinkUp size="large" colorIndex="ok" />}
                 label="虚拟机负荷" size="large" colorIndex="ok"/>
      </Story>
    )
  });

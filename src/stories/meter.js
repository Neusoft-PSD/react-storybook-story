const React = require('react');
import {storiesOf, action} from '@kadira/storybook';

import Story from '../index';

const Meter = require('grommet/components/Meter');
require('grommet/grommet.min.css');

const info = `
          ---
          ### Name: gromment-meter dataviz widget 
          #### Source: [HPE Grommet](https://github.com/grommet/grommet)
          #### Install: 
          \`\`\`
          npm install grommet
          \`\`\`
          #### Require/Import: 
          \`\`\`
          const Meter = require('grommet/components/Meter');
          require('grommet/grommet.min.css');
          \`\`\`
        `;

storiesOf('度量表 (meter)', module)
    .add('基本 (base)', () => {

        return (
            <Story info={info} showInline="true">
                <Meter value={82} total={100} units="Mb" colorIndex="ok"/>
            </Story>
        )
    })
    .add('横向条形 (horz)', () => {
        return (
            <Story info={info} showInline="true">
                <Meter legend={{"placement": "inline"}} series={[
                  {"label": "Gen 7", "value": 50, "colorIndex": "ok"},
                  {"label": "Gen 8", "value": 200, "colorIndex": "warning"},
                  {"label": "Gen 9", "value": 100, "colorIndex": "critical"},
                  {"label": "Gen 10", "value": 300, "colorIndex": "error"}
                ]} a11yTitleId="meter-title-12" a11yDescId="meter-desc-12"/>
            </Story>
        )
    })
    .add('弧形 (arc)', () => {
        return (
            <Story info={info} showInline="true">
                <Meter type="arc" legend={true} series={[
                  {"label": "Physical", "value": 700, "colorIndex": "ok"},
                  {"label": "Subscribed", "value": 1200, "colorIndex": "warning"},
                  {"label": "Allocated", "value": 500, "colorIndex": "critical"}
                ]} vertical={true} units="TB" a11yTitleId="meter-title-15" a11yDescId="meter-desc-15"/>
            </Story>
        )
    });

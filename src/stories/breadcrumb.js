import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Story from '../index';

import {Breadcrumb} from 'react-bootstrap';


storiesOf('面包屑导航 (breadCrumb)', module)
    .add('基本 (base)', () => {
        const info = `
      ---
      ### Name: react-bootstrap button
      #### Source: [react-bootstrap](https://github.com/react-bootstrap)
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
                <Breadcrumb>
                    <Breadcrumb.Item href="#">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Data
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Story>
        );
    });

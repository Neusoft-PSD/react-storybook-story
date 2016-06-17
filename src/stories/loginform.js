const React = require('react');
import {storiesOf, action} from '@kadira/storybook';

import Story from '../index';

const LoginForm = require('grommet/components/LoginForm');

import 'grommet/grommet.min.css'

storiesOf('登录页 (grommet-loginform)', module)
    .add('base', () => {
        const info = `
          ---
          #### Name: gromment-loginform
          #### Source: [HPE Grommet](https://github.com/grommet/grommet)
          #### Install: 
          \`\`\`
          npm install grommet
          \`\`\`
          
          #### Require/Import: 
          \`\`\`
          const LoginForm = require('grommet/components/LoginForm');
          \`\`\`
        `;
        return (
            <Story info={info} showInline="true">
                <LoginForm title="POC4Next"
                           secondaryText="Welcome To The NextUI World"
                           rememberMe="true"
                           forgotPassword={<a><b>Forgot password?</b></a>}
                           defaultValues={{
                            username: 'wangw@neusoft.com',
                            rememberMe: true
                          }}
                />
            </Story>
        )
    });

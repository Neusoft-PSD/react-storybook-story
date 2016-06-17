import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Story from '../index';

import {Button,ButtonToolbar} from 'react-bootstrap';

const stories = storiesOf('按钮 (buttons)', module);

stories.add('组合 (group)', function (context) {
    const info = `
    ---
      ### Name: react-bootstrap button
      #### Source: [react-bootstrap](https://github.com/react-bootstrap)
      #### Install: 
      \`\`\`
      npm install react-bootstrap
      \`\`\`
      
      #### Require/Import: 
      \`\`\`
      import {Button,ButtonToolbar} from 'react-bootstrap';
      \`\`\`
    `;
    return (
        <Story info={info} showInline={true}>
            <ButtonToolbar>
                {/* Standard button */}
                <Button>Default</Button>

                {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                <Button bsStyle="primary">Primary</Button>

                {/* Indicates a successful or positive action */}
                <Button bsStyle="success">Success</Button>

                {/* Contextual button for informational alert messages */}
                <Button bsStyle="info">Info</Button>

                {/* Indicates caution should be taken with this action */}
                <Button bsStyle="warning">Warning</Button>

                {/* Indicates a dangerous or potentially negative action */}
                <Button bsStyle="danger">Danger</Button>

                {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                <Button bsStyle="link">Link</Button>
            </ButtonToolbar>
        </Story>
    );
});


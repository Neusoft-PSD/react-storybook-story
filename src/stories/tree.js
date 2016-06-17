const React = require('react');
import { storiesOf, action } from '@kadira/storybook';

import Story from '../index';

import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

import 'antd/dist/antd.min.css';

const TreeView = React.createClass({
  getDefaultProps() {
    return {
      keys: ['0-0-0', '0-0-1'],
    };
  },
  getInitialState() {
    const keys = this.props.keys;
    return {
      defaultExpandedKeys: keys,
      defaultSelectedKeys: keys,
      defaultCheckedKeys: keys,
    };
  },
  onExpand(treeNode, expand, expandedKeys) {
    console.log('onExpand', expand, expandedKeys);
  },
  onSelect(info) {
    console.log('selected', info);
  },
  onCheck(info) {
    console.log('onCheck', info);
  },
  render() {
    return (
      <Tree className="myCls" showLine multiple checkable
            defaultExpandedKeys={this.state.defaultExpandedKeys}
            onExpand={this.onExpand}
            defaultSelectedKeys={this.state.defaultSelectedKeys}
            defaultCheckedKeys={this.state.defaultCheckedKeys}
            onSelect={this.onSelect} onCheck={this.onCheck}>
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  },
});


storiesOf('树 (tree)', module)
  .add('基本(base)', () => {
    const info = `
      ---
      ### Name: antd-tree 
      #### Source: [Ant Design](https://github.com/ant-design/ant-design)
      
      #### Install: 
      \`\`\`
      npm install antd
      \`\`\`
      
      #### Require/Import: 
      \`\`\`
      import { Tree } from 'antd';
      const TreeNode = Tree.TreeNode;
      import 'antd/style/index.less';
      \`\`\`
      
      ---
    `;
    return (
      <Story info={info} showInline="true">
          <TreeView></TreeView>
      </Story>
    )
  });

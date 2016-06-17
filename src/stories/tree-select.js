const React = require('react');
import {storiesOf, action} from '@kadira/storybook';
import Story from '../index';

import {TreeSelect} from 'antd';
import 'antd/dist/antd.min.css';

const TreeNode = TreeSelect.TreeNode;

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [{
  label: '节点一',
  value: '0-0',
  key: '0-0',
  children: [{
    label: '子节点一',
    value: '0-0-0',
    key: '0-0-0',
  }, {
    label: '子节点二',
    value: '0-0-1',
    key: '0-0-1',
  }],
}, {
  label: '节点二',
  value: '0-1',
  key: '0-1',
  children: [{
    label: '子节点三',
    value: '0-1-0',
    key: '0-1-0',
  }, {
    label: '子节点四',
    value: '0-1-1',
    key: '0-1-1',
  }],
}];

const TreeSelectTag = React.createClass({
  getInitialState() {
    return {
      value: ['0-0-0']
    };
  },
  onChange(value) {
    console.log('onChange ', value, arguments);
    this.setState({value});
  },
  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: '请选择',
      style: {
        width: 300
      }
    };
    return <TreeSelect {...tProps} />;
  }
});


storiesOf('下拉选择树 (treeSelect)', module)
  .add('基本(base)', () => {
    const info = `
      ---
      ### Name: antd-tree-select
      #### Source: [Ant Design](https://github.com/ant-design/ant-design)
      
      #### Install: 
      \`\`\`
      npm install antd
      \`\`\`
      
      #### Require/Import: 
      \`\`\`
      import { TreeSelect } from 'antd';
      import 'antd/style/index.less';
      \`\`\`
      
      ---
    `;
    return (
      <Story info={info} showInline="true">
        <TreeSelect style={{ width: 300 }}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="请选择"
                    allowClear
                    treeDefaultExpandAll>
          <TreeNode value="parent 1" title="parent 1" key="0-1">
            <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
              <TreeNode value="leaf1" title="my leaf" key="random"/>
              <TreeNode value="leaf2" title="your leaf" key="random1"/>
            </TreeNode>
            <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
              <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3"/>
            </TreeNode>
          </TreeNode>
        </TreeSelect>
      </Story>
    )
  })
  .add('多选(multi-choose)', () => {
    const info = `
      ---
      ### Name: antd-tree-select
      #### Source: [Ant Design](https://github.com/ant-design/ant-design)
      #### Install: 
      \`\`\`
      npm install antd
      \`\`\`
      
      #### Require/Import: 
      \`\`\`
      import { TreeSelect } from 'antd';
      import 'antd/style/index.less';
      \`\`\`
      
      ---
    `;
    return (
      <Story info={info} showInline="true">
        <TreeSelectTag></TreeSelectTag>
      </Story>
    )
  });

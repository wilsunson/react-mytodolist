import React from 'react'
import { Icon, List, Button,Tooltip} from 'antd'

let showIcon=true;
class AppList extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      data: this.props.tododata
    }
  }
  handleClick(index) {
    console.log('key', index);
    this.props.handleclick(index);
  }
  handleIconClick(val) {
    console.log(val);
    this.props.onDelete(val);
  }

  getAllList(){
  this.setState({
    data: this.props.tododata
  });
  showIcon=true;
  }

  getActiveList(){
    this.setState({
      data: this.props.tododata.filter((e)=>{
        return e.completed==false;
      })
    });
    showIcon=false;
  }

  getCompletedList(){
    this.setState({
      data: this.props.tododata.filter((e)=>{
        return e.completed==true;
      })
    });
    showIcon=false;
  }

  render() {
    return (
      <div>
        <List
          header={<div>待办事项</div>}
          footer={
            <div>
              <Button type="default" style={{ margin: '0px 5px' }} onClick={this.getAllList.bind(this)}>
                全部
              </Button>
              <Button type="danger" style={{ margin: '0px 5px' }} onClick={this.getActiveList.bind(this)}>
                未完成
              </Button>
              <Button type="dashed" style={{ margin: '0px 5px' }} onClick={this.getCompletedList.bind(this)}>
                已完成
              </Button>
            </div>
          }
          bordered
          dataSource={this.state.data}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <div onClick={this.handleIconClick.bind(this, item.id)} className={showIcon?'':'showIcon'}>
                  <Tooltip placement="right" title="删除">
                  <Icon type="close-circle" theme="twoTone" twoToneColor="rgb(219, 114, 114)" />
                  </Tooltip>
                </div>
              ]}
            >
              <div
              style={{cursor:'pointer'}}
                onClick={this.handleClick.bind(this, item.id)}
                className={item.completed ? 'disClass' : ''}
              >
                {index + 1}.{item.text}&nbsp;&nbsp;
                {item.completed ? '（已完成）' : '（未完成）'}
              </div>
            </List.Item>
          )}
        />
      </div>
    )
  }

  //子组件接收父组件修改state 中的 data
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.tododata
    });
    showIcon=true;
  }

}

export default AppList

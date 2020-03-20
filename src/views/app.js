import React, {Component} from 'react';
import Utils from '../utils';
import Header from './templates/header';
import Input from './templates/input';
import List from './templates/list';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList : []
    }
  }

  render() {
    const {
      taskList
    } = this.state;

    let taskCount = taskList.filter((item)=>!item.checked).length;
    return (
      <div className="container">
        <Header name="Константин" taskCount={taskCount} />
        <Input 
          autoFocus={true} 
          style={{width:250,height:30,outline:"none",margin:"10px 0",paddingLeft:5}} 
          onKeyUp={
            (e)=>{
              let val = Utils.trim(e.target.value);
              if(val && e.keyCode === 13) {
                this.setState({
                  taskList:Utils.addItem(taskList,val)
                })
                e.target.value = "";
              }
              if(!val && e.keyCode === 13) {
                e.target.value = "";
              }
            }
          }
        />
        <List 
          taskList={taskList} 
          toggleItemList={
            (id)=>{
              this.setState({
                taskList:Utils.toggleItemList(taskList,id)
              });
            }
          }
          editItemList={
            (id,val)=>{
              this.setState({
                taskList:Utils.editItemList(taskList,id,val)
              })
            }
          }
          delItemList={
            (id)=>{
              this.setState({
                taskList:Utils.delItemList(taskList,id)
              })
            }
          }
        />
      </div>
    )
  }

  componentWillMount() {
    fetch('task.json')
    .then((data) => {
      return data.json();
    })
    .then((taskList) => {
      this.setState({
        taskList
      })
    })
  }
}

export default App;
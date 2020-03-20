import React, {Component} from 'react';
import Utils from '../../utils';
import Input from './input';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing:false
    };
  }

  static get defaultProps() {
    return {
      id:1,
      content:"default task name",
      checked:false,
      toggleItem:()=>{},
      editItem:()=>{},
      delItem:()=>{},
    };
  }

  changeEditState() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    const {
      id,
      content,
      checked,
      toggleItem,
      editItem,
      delItem
    }=this.props;

    let taskHtml,
      isEditing = this.state.isEditing;
    
    if(isEditing) {
      taskHtml = <Input 
        autoFocus={true}
        defaultValue={content}
        style={{width:200,height:30,outline:"none"}}
        onBlur={
          (e)=>{
            let val = Utils.trim(e.target.value);
            if(!val) {
              return this.changeEditState();
            }
            editItem(id,val);
            this.changeEditState();
          }
        }
        onKeyUp={
          (e) => {
            let val = Utils.trim(e.target.value);
            if(val && e.keyCode === 13) {
              editItem(id,val);
              this.changeEditState();
            }
            if(!val && e.keyCode === 13) {
              this.changeEditState();
            }
          }
        }
      />
    }else{
      taskHtml = 
        <span
          onDoubleClick={
            ()=>{
              this.changeEditState();
            }
          }
        >{content}</span>
    }

    return (
      <div className="d-flex justify-content-between align-items-center">
        <div>
        <Input 
          id={id}
          type="checkbox"
          checked={checked}
          onChange={
            ()=> {
              toggleItem(id);
            }
          }
        />
        {taskHtml}
        </div>
        <button onClick={
          ()=>{
            delItem(id);
          }
        } className="btn btn-primary btn-sm">Удалить</button>
      </div>
    )
  }
}

export default ListItem;
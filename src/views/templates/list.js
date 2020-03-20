import React, {Component} from 'react';
import ListItem from './list-item';

class List extends Component {
    static get defaultProps() {
      return {
        taskList:[],
        toggleItemList:()=>{},
        editItemList:()=>{},
        delItemList:()=>{}
      }
    }
    // taskList
    render() {
      const {
        taskList,
        toggleItemList,
        editItemList,
        delItemList
      } = this.props;
      return (
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group d-flex justify-content-between">
              {
                taskList.map((item)=>{
                  return(
                    <li key={item.id} className="list-group-item d-block">
                      <ListItem
                        id={item.id}
                        content={item.content}
                        checked={item.checked}
                        toggleItem={
                          (id)=>{
                            toggleItemList(id);
                          }
                        }
                        editItem={
                          (id, val)=>{
                            editItemList(id, val);
                          }
                        }
                        delItem={
                          (id)=>{
                            delItemList(id);
                          }
                        }
                      />
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      )
    }
}

export default List;
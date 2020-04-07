import React , {Component} from 'react';
import Task from './Task';
import '../css/example.css';
import Example from './Example'
import Data from './Data';
class Div extends Component {
    render(){
        return (
            <div class="acko">
                <Example></Example>
                <div class="grid-container">
                    <div class="item1"><h3>Studies &emsp; &emsp;&emsp; &emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp; &emsp; 
                         <button class="ui primary button">
                        Create New Study
                        </button></h3><Data></Data></div>
                    <div class="item2"><h3>Task</h3>&nbsp;<Task></Task></div>
                </div>
            </div>
        )
    }
}
export default Div;
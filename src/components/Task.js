import React , {Component} from 'react';
import Cards from './Cards';
// import Cards from './Feed';
import '../css/task.css';
class Task extends Component {
    render() {
        return (
            <div class="cards">
                
            <Cards width="489.5px" height="200px" header="CIDD03108D  &nbsp; &emsp; &emsp; Study 102" image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" description="Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore.',
            " icon1="exclamation circle" status="4 days due" icon="user circle" complete="26-05-2020"/>
            <Cards width="489.5px" height="200px" header="CIDD03108D  &nbsp; &emsp; &emsp; Study 102" image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" description="Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore.',
            " icon1="exclamation circle" status="2 days due" icon="user circle" complete="26-05-2020"/>
            <Cards width="489.5px" height="200px" header="CIDD03108D  &nbsp; &emsp; &emsp; Study 102" image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" description="Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore
            " icon1="exclamation circle" status="completed" icon="user circle" complete="26-05-2020"/>
            
            </div>
        );
    }
}
export default Task;
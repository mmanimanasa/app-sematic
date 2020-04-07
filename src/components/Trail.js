import React , {Component} from 'react';
import logo1 from './logo1.png';
import '../css/trail.css';
class Trail extends Component {
    render(){
        return (
            <div class="ui grid">
                <div class="four wide column">
                <img src={logo1} alt="logo"></img>
                
                </div>
                <div class="one wide column"><h4>ACCELERATE</h4></div>
                <div class="four wide column">
                
                </div>
                <div class="six wide column">
                <i class="large search icon">Search</i> &nbsp;
                <i class=" large bell outline icon"></i>
                <i class="large user icon"></i>
                <i class="large angle down icon"></i>
                </div>
            </div>
        )
    }
}
export default Trail;
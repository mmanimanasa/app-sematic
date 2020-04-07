import React, {Component} from "react";
import { Card, Icon, Feed } from 'semantic-ui-react'

export const Cards = (props) => { // Your button component in somewhere
    return (
        // <button style={{width: `${props.width}`, height: `${props.height}`}}>{props.label}</button>
    <Card style={{width: `${props.width}`, height: `${props.height}`}}>
        <Card.Content>
        <Feed>
                        <Feed.Event>
                            <Feed.Label image={props.image} />
                        <Feed.Content>
                            <Feed.Date content={props.header} /><br></br><br></br>
                            <Feed.Summary>
                             {props.description} 
                            </Feed.Summary></Feed.Content>
                        </Feed.Event>
                        <Icon name={props.icon}></Icon> &emsp;Andy.G &emsp;
                            <Icon name={props.icon1}></Icon> {props.status} &emsp;
                             Completed by : {props.complete}  
                    </Feed>
                    
      </Card.Content>
    </Card>
    )
}
export default Cards;
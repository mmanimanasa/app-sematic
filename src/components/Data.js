import React , {Component} from 'react';
import { Card, Icon, Feed } from 'semantic-ui-react'

const CardExampleExtraContent = () => (
    <Card style={{width: `489.5px`, height: `640px`}}>
      <Card.Content> <Feed.Event>
          <Feed.Content>
            <Feed.Date content='CIDD03108D  &nbsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp; In build' />
            <br></br><br></br><br></br>
            <Feed.Summary>
            Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore
            </Feed.Summary> <br></br><br></br>
            <Card.Content extra>
            <Icon name='comment outline' /> &emsp;3 Comments
            </Card.Content>
          </Feed.Content>
        </Feed.Event> </Card.Content>
      <Card.Content >
      <Feed.Event>
          <Feed.Content>
            <Feed.Date content='CIDD03108D  &nbsp; &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; In review' />
             <br></br><br></br><br></br>
            <Feed.Summary>
            Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore
            </Feed.Summary> <br></br><br></br>
            <Card.Content extra>
            <Icon name='comment outline' /> &emsp;4 Comments
            </Card.Content>
          </Feed.Content>
        </Feed.Event>
      </Card.Content>
      <Card.Content >
      <Feed.Event>
          <Feed.Content>
            <Feed.Date content='CIDD03108D  &nbsp; &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp; In build' /> 
            <br></br><br></br><br></br>
            <Feed.Summary>
            Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore
            </Feed.Summary> <br></br><br></br>
            <Card.Content extra>
            <Icon name='comment outline' /> &emsp;5 Comments
            </Card.Content>
          </Feed.Content>
        </Feed.Event>
      </Card.Content>
    </Card>
  )
  
  export default CardExampleExtraContent
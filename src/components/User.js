import React from 'react'
import { Card } from 'semantic-ui-react'
import { UserConsumer } from '../providers/UserProvider';

const User = () => (
  <UserConsumer>
    {value => (
  <Card>
    <Card.Content>
      <Card.Header>{ value.username }</Card.Header>
      <Card.Meta>{ value.Email }</Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>Avatar: { value.avatar }</p>
    </Card.Content>
  </Card>
    )}
  </UserConsumer>
)

export default User;

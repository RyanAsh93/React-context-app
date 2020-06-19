import React from 'react'
import { Form } from 'semantic-ui-react'
import { UserConsumer } from '../providers/UserProvider'

class UserForm extends React.Component {
  state = { 
    username: this.props.username, 
    email: this.props.email,
    avatar: this.props.avatar, 
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value }) 
  
  handleSubmit = (e) => {
    e.preventDefault()
    const user = { ...this.state }
    this.props.updateUser(user)
}

render() {
  const { username, email, avatar } = this.state
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input 
        label="Enter Name"
        type='text'
        name='username'
        value={username}
        onChange={this.handleChange}
      />
      <Form.Input 
        label="Enter Email"
        type='text'
        name='email'
        value={email}
        onChange={this.handleChange}
      />
      <Form.Select 
        label='Pick A Avatar'
        name='avatar'
        value={avatar}
        onChange={this.handleChange}
        options={avatarOptions}
      />
      <Form.Button color='blue'>Save</Form.Button>
    </Form>
    )
  }
}

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm 
          {...props}
          username={value.username}
          email={value.email}
          avatar={value.avatar}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

const avatarOptions = [
  {key: 'a', text: 'Air', value: 'Air' },
  {key: 'e', text: 'Earth', value: 'Earth' },
  {key: 'f', text: 'Fire', value: 'Fire' },
  {key: 'w', text: 'Water', value: 'Water' },
]

export default ConnectedUserForm;
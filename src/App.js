import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import UserProfile from './components/UserProfile'
import styled from 'styled-components'

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path='/'render={() => <h1>Welcome to the Home</h1>} />
          <Route exact path='/user/profile'render={() => <UserProfile />} />
        </Switch>
      </Container>
    </AppContainer>
  );
}

const AppContainer = styled.div`
background: linear-gradient(to bottom right, #003973, #e5e5be);
min-height: 100vh;
padding: 20px;
`;

export default App;

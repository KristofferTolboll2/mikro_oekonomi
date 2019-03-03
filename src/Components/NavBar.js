import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'
import Content from './Content'
import TestExam from './Exam/TestExam'
import  {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

export default class NavBar extends Component {




  
render() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <>
 <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/exam">Prøveeksamen</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>;
<Switch>
<Route exact path="/" render={router => <Content router={router} />} />
<Route exact path="/exam" render={router => <TestExam router={router} />} /> 
</Switch>
</>
    </Router>
  )
}
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 
  Button, Modal, ModalHeader, ModalBody, ModalFooter, 
  Form, FormGroup, Label, Input
} from 'reactstrap';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = props => {
  return (
    <TopBarWrapper>
      <TopBarContent>
        <TopBarLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarLeft>
        <TopBarCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBarCenter>
        <TopBarRight>
          <span onClick={props.toggleModal}>
            <Button 
              color="primary" 
              style={localStorage.getItem('User')? {display: 'none'} : {display: 'inline'}}
            >
              Log In
            </Button>
          </span>
          <span>
            <Button 
              color="danger" 
              style={localStorage.getItem('User')? {display: 'inline'} : {display: 'none'}}
              onClick={props.logoutHandler}
            >
              Log Out
            </Button>
          </span>
        </TopBarRight>
      </TopBarContent>
      <Modal isOpen={props.modal} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal}>Log In to View Content</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="User">Email</Label>
              <Input type="email" name="email" id="User" placeholder="example@email.com" value={props.value} onChange={props.handleChanges}/>
            </FormGroup>
            <FormGroup>
              <Label for="FakePassword">Password</Label>
              <Input type="password" name="password" id="FakePassword" placeholder="fake password..." />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.submitHandler}>Continue</Button>{' '}
          <Button color="danger" onClick={props.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </TopBarWrapper>
  )
}

/** Styled Components **/
const TopBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  z-index: 1000;
`;

const TopBarContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TopBarLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  
  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;

const TopBarCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
    margin-right: 5%;
    
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TopBarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }
`;

TopBar.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired
}

export default TopBar;
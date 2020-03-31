import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalFooter, ModalBody, ModalHeader, ListGroupItem, ListGroup } from 'reactstrap';
import { useState } from 'react';
import { setInterval } from 'timers';
import { IPerson } from '../domain/IPerson';

interface Iprops {
  children: never[]; // weird stuff 
  open: boolean;
  modalstate: (open: boolean) => void;
  person: IPerson;
}
const PersonDetails = ({person, open, modalstate}: Iprops) => {
  
  const [modal, setModal] = useState(open);

  const toggle = () =>{
    setModal(!modal)
    modalstate(modal);
  };
  
  return (
    <div>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {person.firstName} {person.lastName}
      </ModalHeader>
      <ModalBody>
      <ListGroup>
          <ListGroupItem>MiddleName: {person.middleName}</ListGroupItem>
          <ListGroupItem>Birth of date: {person.dateOfBirth}</ListGroupItem>
          <ListGroupItem>Sex: {person.sex === 0 ? "Unknown": (person.sex === 1 ? "Female" : "Male")}</ListGroupItem>
          <ListGroupItem>IDCode: {person.sex === 0 ? "Unknown": (person.sex === 1 ? "Female" : "Male")}</ListGroupItem>
          <ListGroupItem>placeOfBirth: {person.sex === 0 ? "Unknown": (person.sex === 1 ? "Female" : "Male")}</ListGroupItem>
          
        </ListGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Edit
          </Button>{' '}
        <Button color="secondary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default connect()(PersonDetails);

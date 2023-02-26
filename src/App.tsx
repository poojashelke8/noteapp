import React, { useState } from 'react';
import { note } from './Modals/note.modal';
import './App.css';
import Header from './Components/Headers';
import NotesList from './Components/NotesList';
import { Col,Container, Row } from 'react-bootstrap';
import CreateNotes from './Components/CreateNotes';





function App() {

  const [notes,setNotes] = useState<note[]>([{
    id:(new Date()).toString(),
    title:"Poject work",
    text:"work on noteapp project",
    color:"#dfdfdf",
    date:(new Date()).toString(),
  }])



  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={ setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={ setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
      
    
  );
}

export default App;

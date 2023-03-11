import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" style={{ width: '100%' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center text-uppercase mb-4 contact_title">Contact Us</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className='label'><span className='label'>Name</span></Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className='label'><span className='label'>Email</span></Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label ><span className='label'>Message</span> </Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

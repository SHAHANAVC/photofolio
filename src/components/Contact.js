import React from 'react'
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <>
    <div className='m-auto text-center w-50 mt-5'>
      <h1>CONTACT</h1>
      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.

      </p>

      
    </div>
    <div className='w-75 text-center m-auto'>
    <Form className='mt-5'>
      <Row className='mb-3'>
        <Col>
    <Form.Control type="email" placeholder="Your Name" className='bg-dark'/>
    </Col>
    <Col>
    <Form.Control type="email" placeholder="Your email" className='bg-dark' />
    </Col>
    </Row>
    <Form.Control type="email" placeholder="subject" className='bg-dark' />

    <Form.Control as="textarea"  placeholder="Message" rows={4} className='mt-3 bg-dark' />
    </Form>

    </div>
    <div className=' text-center'>
    <Button variant="success" className='p-3 mb-5  mt-4'>SEND MESSAGE</Button>
    </div>
    </>
  )
}

export default Contact
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';


function About() {
  return (
    <>
     <div className='w-50 text-center m-auto mt-4'>
      <h2>ABOUT</h2>
      <p>
      Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
      </p>
      <Button variant="success" className='p-3 mb-5 mt-4'>Avaliable for Hire</Button>
     </div>
     <div className='w-75 m-auto'>
        <Row>
          <Col className='ms-5'>
            <Image src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width:"80%",height:"90%"}} rounded />
          </Col>
          <Col >
          <h3>Professional Photographer from New York</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <ul className='mt-5'>
            <li>
            Birthday: 1 May 1995

            </li>
            <li>Website:www.example.com</li>
            <li>Phone:+123 456 7890</li>
            <li>City:New York, USA</li>
            <li>Age:30</li>
            <li>Degree:Master</li>
            <li>PhEmailone:email@example.com</li>
            <li>Freelance:Available</li>
          </ul>
          <p className='mt-2'>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>



          </Col>
        </Row>
     
     </div>
     <div>
      <h2 className='fw-5'>What they are saying</h2>
     </div>
     <Carousel className='w-75 m-auto mt-5'>
      <Carousel.Item >
        {/* card of review */}
   <Row>
     <Col>   <Card className='text-center' style={{ width: '18rem',height:'23rem' }}>
      
       <Card.Body>
        <Card.Title><i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg"  className='rounded-circle' style={{width:'75%' ,height:'150px'}}/>
      </Card.Body>
    </Card>
    </Col>
    {/* second card */}
    <Col>
    <Card className='text-center' style={{ width: '18rem' ,height:'23rem' }}>
      
      <Card.Body>
        <Card.Title>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/handsome-man-suit-look-camera-handsome-man-suit-tie-look-camera-hands-crossed-chest-isolated-background-white-101055155.jpg"  className='rounded-circle' style={{width:'75%' ,height:'150px'}}/>
      </Card.Body>
    </Card>
    </Col>
    {/* third card */}
    <Col>
    <Card className='text-center' style={{ width: '18rem',height:'23rem' }}>
      
      <Card.Body>
        <Card.Title><i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/handsome-businessman-portrait-outdoor-55711262.jpg"  className='rounded-circle' style={{width:'75%' ,height:'150px'}}/>
      </Card.Body>
    </Card>
    </Col>
     </Row>
      </Carousel.Item>
      
      {/* second carousel */}
      
      <Carousel.Item>
      {/* first card */}
      <Row>
        <Col>
      <Card className='text-center' style={{ width: '18rem',height:'23rem' }}>
      
      <Card.Body>
        <Card.Title><i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?rs=1&pid=ImgDetMain"  className='rounded-circle' style={{width:'75%' ,height:'150px'}}/>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className='text-center' style={{ width: '18rem',height:'23rem' }}>
      <Card.Body>
        <Card.Title><i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" src="https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0"  className='rounded-circle' style={{width:'75%' ,height:'150px'}}/>
      </Card.Body>
    </Card>
    
    </Col>

    <Col>
    <Card className='text-center' style={{ width: '18rem',height:'23rem' }}>
      
      <Card.Body>
        <Card.Title><i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.ZP-E8ZFH11wb1XSm0dn-5wHaJQ?rs=1&pid=ImgDetMain"  className='rounded-circle' style={{width:'75%' ,height:'150px'}}/>
      </Card.Body>
    </Card>
    
    
    
    </Col>
    </Row>
      </Carousel.Item>
      {/* third carousel */}
      <Carousel.Item>
        {/* first card */}
        <Row>
        <Col>
        <Card className='text-center' style={{ width: '18rem',height:'23rem' }}>
            <Card.Body>
        <Card.Title><i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:2400/0*RaZupFN9SD3Qwy1r.jpg"  className='rounded-circle' style={{width:'75%' ,height:'150px'}}/>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className='text-center' style={{ width: '18rem',height:'23rem' }}>
      
      <Card.Body>
        <Card.Title><i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.sje3Qv4uNhShS5WOxc3xTgHaEM?w=1392&h=788&rs=1&pid=ImgDetMain"  className='rounded-circle' style={{width:'75%' ,height:'150px'}}/>
      </Card.Body>
    </Card>

    </Col>
    <Col>
    <Card className='text-center' style={{ width: '18rem',height:'23rem' }}>
      
      <Card.Body>
        <Card.Title><i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i></Card.Title>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.OB8fZBMtLZD6VMfENy0PJAHaE8?rs=1&pid=ImgDetMain"  className='rounded-circle' style={{width:'75%' ,height:'150px'}}/>
      </Card.Body>
    </Card>

    </Col>
    </Row>
          </Carousel.Item>
    </Carousel>
    </>
  )
}

export default About
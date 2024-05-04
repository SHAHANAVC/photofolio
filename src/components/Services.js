import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Table from 'react-bootstrap/Table';

function Services() {
  return (
    <div>
      <div className='mt-5 m-auto text-center w-50'>
      <h2>SERVICES</h2>
      <p>
      Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
      </p>
      </div>
      <div>
        <h3 className='mb-5'>Check my adorable pricing</h3>
           <Table striped hover className='w-50 m-auto '>
             <tr >
                <td>Porttrait Photography</td>
                <td>$160.00</td>

             </tr>
             <tr >
             <td>Sports photography</td>
             <td>$540.00</td>
             </tr>
             <tr>
             <td>Wedding photograpgy</td>
             <td>$650.00</td></tr>
             <tr ><td>fashion photography</td>
             <td>$370.00</td></tr>
             <tr >
             <td>Sports photography</td>
             <td>$540.00</td>
             </tr>
             <tr >
             <td>Sports photography</td>
             <td>$540.00</td>
             </tr>
           </Table>
      </div>






      {/* carousel */}
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
    </div>
    )
    }

export default Services
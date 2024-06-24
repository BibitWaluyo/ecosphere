import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import iconP from '../../assets/img/Rectangle 64.png';
import cardImage1 from '../../assets/img/Image1.png'; // Ensure these paths are correct
import cardImage2 from '../../assets/img/Image2.png';
import cardImage3 from '../../assets/img/Image3.png';
import './Pengaduan1.css';


const Pengaduan1 = () => {
  return (
    <div>
      <header>
        <Container>
          <Row>
            <Col lg="6" className='justify-content-center d-flex'>
              <img src={iconP} alt="" className="w-100 min-vh-100" />
            </Col>
            <Col lg="6">
              <h1 className="mb-4 color">Pengenalan Jenis Sampah</h1>
              <p className="mb-4">
                Yuk, teman-teman! Lesson ini cuma <br />
                mau bahas sampah tanpa drama. <br />
                Apa aja jenis dari sampah?
              </p>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="mt-5">
        <Container>
          <Row>
            <Col md="12">
              <Card className="mb-3">
                <Row className="no-gutters">
                  <Col md="2">
                    <img src={cardImage1} alt="Card 1" className="card-img" />
                  </Col>
                  <Col md="8">
                    <Card.Body>
                    <Card.Text>
                        <span className="icon-with-number">
                          <FontAwesomeIcon icon={faCircle} size="2x" />
                          <span className="number">1</span>
                        </span>
                      </Card.Text>
                      <Card.Text>Pengenalan Jenis Sampah
                      <br />
                      <FontAwesomeIcon icon={faClock} className="mr-2" /> 5 min
                      </Card.Text>
                      <Button variant="success" className="round-button">
                        <FontAwesomeIcon icon={faPlay} />
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-3">
                <Row className="no-gutters">
                  <Col md="2">
                    <img src={cardImage2} alt="Card 2" className="card-img" />
                  </Col>
                  <Col md="8">
                    <Card.Body>
                    <Card.Text>
                        <span className="icon-with-number">
                          <FontAwesomeIcon icon={faCircle} size="2x" />
                          <span className="number">2</span>
                        </span>
                      </Card.Text>
                      <Card.Text>Limbah Organik - Apa itu dan Mengapa Penting?
                      <br />
                      <FontAwesomeIcon icon={faClock} className="mr-2" /> 8 min
                      </Card.Text>
                      <Button variant="success" className="round-button">
                        <FontAwesomeIcon icon={faPlay} />
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-3">
                <Row className="no-gutters">
                  <Col md="2">
                    <img src={cardImage3} alt="Card 3" className="card-img" />
                  </Col>
                  <Col md="8">
                    <Card.Body>
                    <Card.Text>
                        <span className="icon-with-number">
                          <FontAwesomeIcon icon={faCircle} size="2x" />
                          <span className="number">3</span>
                        </span>
                      </Card.Text>
                      <Card.Text>Limbah Anorganik - Mengidentifikasi Jenis dan Pengelolaannya
                      <br />
                      <FontAwesomeIcon icon={faClock} className="mr-2" /> 10 min
                      </Card.Text>
                      <Button variant="success" className="round-button">
                        <FontAwesomeIcon icon={faPlay} />
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>

  )
}

export default Pengaduan1
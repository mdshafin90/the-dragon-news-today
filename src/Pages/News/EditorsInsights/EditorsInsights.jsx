import React from 'react';
import { Button, Card } from 'react-bootstrap';
import image1 from '../../../assets/editorsInsight1.png'
import image2 from '../../../assets/editorsInsight2.png'
import image3 from '../../../assets/editorsInsight3.png'

const EditorsInsights = () => {
    return (
        <div className='d-flex justify-content-between mt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    <Card.Title>This is Form Editors Insights</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the This is Form Editors Insights and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                    <Card.Title>This is Form Editors Insights</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the This is Form Editors Insights and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                    <Card.Title>This is Form Editors Insights</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the This is Form Editors Insights and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default EditorsInsights;
import React from "react";
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <Container className="mt-4">
            {/* Title */}
            <h1 className="text-center mb-4">SWAPI</h1>

            {/* URL Input Field */}
            <Row className="mb-3">
                <Col md={10}>
                    <Form.Control type="text" value="https://swapi.dev/api/people/1/" readOnly/>
                </Col>
                <Col md={2}>
                    <Button variant="secondary" className="w-100">
                        Get info
                    </Button>
                </Col>
            </Row>

            {/* Buttons */}
            <Row className="mb-3">
                <Col>
                    <Button variant="dark" className="me-2" disabled>
                        people
                    </Button>
                </Col>
            </Row>

            {/* Placeholder JSON */}
            <Row>
                <Col>
                    <div className="json-container p-3 border rounded">
            <pre>
              {`{
  "message": "ok",
  "result": {
    "properties": {
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "created": "2024-12-16T14:35:40.966Z",
      "edited": "2024-12-16T14:35:40.966Z",
      "name": "Luke Skywalker",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "url": "https://www.swapi.tech/api/people/1"
    },
    "description": "A person within the Star Wars universe",
    "_id": "5f63a36eee9fd7000499be42",
    "uid": "1",
    "__v": 0
  }
}`}
            </pre>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;

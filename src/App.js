
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'

// initial state
const _state = [
  {
    issue: "",
    laborCost: 0.00,
    materialCost: 0.00
  },
];
// Calculator app
const ExpenseCalculator = () => {
  const [costs, setCosts] = useState(_state);

  // When data is entered will assign current costs to _tempCosts
  // the target.dataset.id will be the index from the inputs data-id 
  // the name will be the input name field
  const handleInputChange = event => {
    const _tempCosts = [...costs];
    _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;

    setCosts(_tempCosts);
  };

  // Adds a new row
  const addNewRow = () => {
    setCosts(prevCosts => [...prevCosts, { issue: "", laborCost: 0, materialCost: 0 }]);
  };

  // Sums all the values 
  const getTotalCosts = () => {
    return costs.reduce((total, item) => {
      return total + Number(item.laborCost) + Number(item.materialCost);
    }, 0);
  };

  return (
    <Container >
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}><h1>Expense Calculator</h1></Col>
      </Row>
      <br/>
      <Row>
        <Col><b>Issue</b></Col>
        <Col><b>Labor Cost</b></Col>
        <Col><b>Material Cost</b></Col>
      </Row>
      {costs.map((item, index) => (
        <Row key={index}>
          <Col>
            <input
              name="issue"
              data-id={index}
              type="text"
              value={item.issue}
              onChange={handleInputChange}
            />
          </Col>
          <Col>
            <input
              name="laborCost"
              data-id={index}
              type="number"
              value={item.laborCost}
              onChange={handleInputChange}
            />
          </Col>
          <Col>
            <input
              name="materialCost"
              data-id={index}
              type="number"
              value={item.materialCost}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        ))}
        <br/>
        <Row>
          <Col sm="12">
            <Button color="primary" onClick={addNewRow}>Add Issue</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md="1">
            <b>Total:</b>
          </Col>
          <Col><b>${getTotalCosts()}</b></Col>
        </Row>
    </Container>
  );
};

export default ExpenseCalculator;
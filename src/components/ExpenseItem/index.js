import { Button, Card, Row, Col } from "react-bootstrap";
import "./style.css";
function ExpenseItem({ expense }) {
  return (
    <Col xs={10} md={6}>
      <Card border="primary" bg="dark" text="light" className="m-2 text-center">
        <Card.Header>
          <Card.Title>{expense.title.toUpperCase()}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Card
                border="primary"
                bg="light"
                text="dark"
                className="m-2 text-center"
              >
                <Card.Body>
                  <h3>
                    {expense.date.toLocaleString("en-US", { month: "long" })}
                  </h3>
                  <h4>
                    {expense.date.toLocaleString("en-US", { day: "2-digit" })}
                  </h4>
                  <h4>{expense.date.getFullYear()}</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Button className="w-75" variant="danger">
                {expense.amount}
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default ExpenseItem;

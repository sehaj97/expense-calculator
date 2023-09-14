import { Col, Row } from "react-bootstrap";
import ExpenseItem from "../ExpenseItem";
function ExpensesList({ list }) {
  return list.map((item) => {
    return (
      <Row>
        <Col></Col>
        <ExpenseItem expense={item} />

        <Col></Col>
      </Row>
    );
  });
}
export default ExpensesList;

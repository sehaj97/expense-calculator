import ExpenseItem from "../ExpenseItem/index.js";
function ExpensesList({ list }) {
  return (
    <div className="md:mx-40">
      {list && list.map((item) => <ExpenseItem expense={item} />)}
    </div>
  );
}
export default ExpensesList;

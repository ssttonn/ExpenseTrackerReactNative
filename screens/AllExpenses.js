import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
  let expenseContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expenseContext.expenses}
      expensesPeriod={"Total"}
      fallbackText="No registered expenses found"
    />
  );
}

export default AllExpenses;

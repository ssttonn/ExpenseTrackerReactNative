import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={(data) => {
        let props = {
          ...data.item,
        };
        return <ExpenseItem {...props} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;

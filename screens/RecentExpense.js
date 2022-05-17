import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../component/ExpensesOutput/ExpensesOutput";
const RecentExpense = () => {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
};

export default RecentExpense;

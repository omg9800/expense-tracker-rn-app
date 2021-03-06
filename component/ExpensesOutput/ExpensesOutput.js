import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";

import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "./../../constants/styles";

const ExpensesOutput = ({ expensesPeriod }) => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19"),
    },
    {
      id: "e2",
      description: "A pair of trousers",
      amount: 89.29,
      date: new Date("2022-01-22"),
    },
    {
      id: "e3",
      description: "Some bananas",
      amount: 9.99,
      date: new Date("2021-12-01"),
    },
    {
      id: "e4",
      description: "A book",
      amount: 15.69,
      date: new Date("2022-02-19"),
    },
    {
      id: "e5",
      description: "Another book",
      amount: 19.99,
      date: new Date("2022-02-19"),
    },
    {
      id: "e6",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19"),
    },
    {
      id: "e7",
      description: "A pair of trousers",
      amount: 89.29,
      date: new Date("2022-01-22"),
    },
    {
      id: "e8",
      description: "Some bananas",
      amount: 9.99,
      date: new Date("2021-12-01"),
    },
    {
      id: "e9",
      description: "A book",
      amount: 15.69,
      date: new Date("2022-02-19"),
    },
    {
      id: "e10",
      description: "Another book",
      amount: 19.99,
      date: new Date("2022-02-19"),
    },
  ];

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 24,
  },
});

export default ExpensesOutput;

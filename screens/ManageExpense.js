import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const editExpenseId = route.params?.expenseId;

  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  return <Text>ManageExpense</Text>;
};

export default ManageExpense;

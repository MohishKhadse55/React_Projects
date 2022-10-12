import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChar from "./ExpensesChar";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChar expenses={filteredExpenses}></ExpensesChar>
            <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
    );
}

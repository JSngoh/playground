const expenseForm = document.getElementById('expense-form');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');

let expenses = [];

function addExpense(e) {
    e.preventDefault();

    if (expenseName.value === '' || expenseAmount.value === '') {
        return;
    }

    const expense = {
        id: Math.random(),
        name: expenseName.value,
        amount: +expenseAmount.value
    };

    expenses.push(expense);
    updateUI();

    expenseName.value = '';
    expenseAmount.value = '';
}

function updateUI() {
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${expense.name} <span>$${expense.amount.toFixed(2)}</span>
        `;
        expenseList.appendChild(li);
    });
}

expenseForm.addEventListener('submit', addExpense);

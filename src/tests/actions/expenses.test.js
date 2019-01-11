import { addExpense, editExpense, removeExpense } from "../../../src/actions/expenses"

//TC1
test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
}); 

//TC2
test('should setup edit expense object',() => {
    const action = editExpense('123abc',{ note: 'New note value'});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates: {
            note: "New note value"
        }
    });
});

//TC3
test('should setup add expense action object', () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: "This was last months rent"
    };

    const action = addExpense(expenseData); 
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

//TC4
test('should setup add expense action object with default values', () => {
    const action = addExpense(); 
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    });
});
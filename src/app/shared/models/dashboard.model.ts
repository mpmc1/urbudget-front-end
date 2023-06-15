export interface budgetForm{
    year: number,
    ammount: number,
    monthIncomes :number,
    monthOutcomes:number
}
export interface budget{
    data: {
        id: string,
        year: number,
        ammount: number,
        monthIncomes: number,
        mothOutcomes: number,
        user: any
    },
    message: []
}
export interface transaction{
    data: individualTransaction[],
    message: string[]
}

export interface transactionForm{
    ammount: number,
    description: string
}

export interface individualTransaction{
    id: string,
    dateOfTransaction: Date,
    ammount: number, 
    description: string, 
    budget: budget
}
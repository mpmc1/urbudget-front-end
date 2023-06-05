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
        user: {}
    },
    message: []
}
export interface transaction{}

export interface transactionForm{
    
}
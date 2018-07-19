import {Day} from '../models/day'

export class Month{
    
        income?: number;
        savingNeed?:number;
        earlyExpense?:any[];
        limitExpense?:number;
        day?:Day[];
        moneyLeft?:number;
        isSuccess:boolean;
    
        constructor() {
            this.income = 0; 
            this.savingNeed = 0;
            this.earlyExpense = null;
            this.limitExpense = 0 ;
            this.day = null;
            this.moneyLeft = 0;
            this.isSuccess = false;
    
        
        }
    }
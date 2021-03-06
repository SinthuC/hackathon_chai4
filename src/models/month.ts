import {Day} from '../models/day'

export class Month{
        month?:number;
        income?: number;
        savingNeed?:number;
        earlyExpense?:any[];
        limitExpense?:number;
        day?:Day[];
        moneyLeft?:number;
        isSuccess:boolean;
        startDay?:number
        dayInMonth?:number
    
        constructor() {
            this.month = null;
            this.income = 0; 
            this.savingNeed = 0;
            this.earlyExpense = null;
            this.limitExpense = 0 ;
            this.day = null;
            this.moneyLeft = 0;
            this.isSuccess = false;
            this.startDay = null;
            this.dayInMonth = null;
        
        }
    }
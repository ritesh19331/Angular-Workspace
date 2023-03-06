export namespace ProjectA{

   export namespace Contracts
   {
        export interface ProductContract 
        {
            Name:string;
            Price:string;
            Qty:string;
            Total():number;
            Print():void;
        }
   }
}
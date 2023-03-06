///<reference path="../contracts/ProductContract.ts"/>

export namespace ProjectA
{
    export namespace Templates
    {
        export abstract class ProductTemplate implements ProjectA.Contracts.ProductContract
        {
            public Name:string = "";
            public Price:number = 0;
            public Qty:number = 0;
            public abstract Total(): number;
            public abstract Print(): void;
        }
    }
}
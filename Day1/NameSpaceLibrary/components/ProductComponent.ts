///<reference path="../templates/ProductTemplate.ts" />

export namespace ProjectA{
    
    export namespace Components
    {
        export class ProductComponent extends ProjectA.Templates.ProductTemplate
        {
        
            Name = "Samsung Tv";
            Price = 45000;
            Qty = 2;
            Total() {
                return this.Qty*this.Price;
            }
        
            Print() {
                console.log(`Name=${this.Name}\nPrice${this.Price}\n${this.Qty}`);
            }
        }
    }
}
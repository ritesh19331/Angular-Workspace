import { ProductTemplate } from "../template/productTemplate";


export class productComponent extends ProductTemplate{
    Name = "Samsung TV";
    Price = 45000;
    Qty = 2;
    CategoryName = "Electronics";
    Total() {
        return this.Qty*this.Price;
    }

    public Print(): void {
        console.log(`Name:${this.Name}\nPrice=${this.Price}`)
    }

}
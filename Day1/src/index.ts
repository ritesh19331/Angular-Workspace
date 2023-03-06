interface product  {
    Name:string,
    Price:number
    Stock:boolean
}

interface category{
    categoryId:number,
    categoryName:string
}

interface productMethod{
    print?():void,
    check(): boolean
}

interface productDetails extends product , category , productMethod {

}

let Tv:productDetails ={

    Name:"Samsung Tv",
    Price:30000,
    categoryId:1,
    categoryName:"Digital",
    Stock: true,
    check: function(){
        return this.Stock?true:false;
    },
    print:  function(){
        console.log(`
        Name: ${this.Name}\n
        Price: ${this.Price}\n
        categoryId:${this.categoryId}\n
        categoryName: ${this.categoryName}\n
        `)
    }
}
Tv.check;
Tv.print();
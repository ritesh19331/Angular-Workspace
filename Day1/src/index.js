var Tv = {
    Name: "Samsung Tv",
    Price: 30000,
    categoryId: 1,
    categoryName: "Digital",
    Stock: true,
    check: function () {
        return this.Stock ? true : false;
    },
    print: function () {
        console.log("\n        Name: ".concat(this.Name, "\n\n        Price: ").concat(this.Price, "\n\n        categoryId:").concat(this.categoryId, "\n\n        categoryName: ").concat(this.categoryName, "\n\n        "));
    }
};
Tv.check;
Tv.print();

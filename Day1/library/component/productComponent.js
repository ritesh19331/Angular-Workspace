"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.productComponent = void 0;
var productTemplate_1 = require("../template/productTemplate");
var productComponent = /** @class */ (function (_super) {
    __extends(productComponent, _super);
    function productComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "Samsung TV";
        _this.Price = 45000;
        _this.Qty = 2;
        _this.CategoryName = "Electronics";
        return _this;
    }
    productComponent.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    productComponent.prototype.Print = function () {
        console.log("Name:".concat(this.Name, "\nPrice=").concat(this.Price));
    };
    return productComponent;
}(productTemplate_1.ProductTemplate));
exports.productComponent = productComponent;

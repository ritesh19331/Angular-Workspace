"use strict";
///<reference path="../templates/ProductTemplate.ts" />
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
exports.ProjectA = void 0;
var ProjectA;
(function (ProjectA) {
    var Components;
    (function (Components) {
        var ProductComponent = /** @class */ (function (_super) {
            __extends(ProductComponent, _super);
            function ProductComponent() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.Name = "Samsung Tv";
                _this.Price = 45000;
                _this.Qty = 2;
                return _this;
            }
            ProductComponent.prototype.Total = function () {
                return this.Qty * this.Price;
            };
            ProductComponent.prototype.Print = function () {
                console.log("Name=".concat(this.Name, "\nPrice").concat(this.Price, "\n").concat(this.Qty));
            };
            return ProductComponent;
        }(ProjectA.Templates.ProductTemplate));
        Components.ProductComponent = ProductComponent;
    })(Components = ProjectA.Components || (ProjectA.Components = {}));
})(ProjectA = exports.ProjectA || (exports.ProjectA = {}));

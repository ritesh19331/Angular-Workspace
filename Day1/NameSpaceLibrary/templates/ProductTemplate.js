"use strict";
///<reference path="../contracts/ProductContract.ts"/>
exports.__esModule = true;
exports.ProjectA = void 0;
var ProjectA;
(function (ProjectA) {
    var Templates;
    (function (Templates) {
        var ProductTemplate = /** @class */ (function () {
            function ProductTemplate() {
                this.Name = "";
                this.Price = 0;
                this.Qty = 0;
            }
            return ProductTemplate;
        }());
        Templates.ProductTemplate = ProductTemplate;
    })(Templates = ProjectA.Templates || (ProjectA.Templates = {}));
})(ProjectA = exports.ProjectA || (exports.ProjectA = {}));

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
var EmployeeTemplate_1 = require("../template/EmployeeTemplate");
var EmployeeComponent = /** @class */ (function (_super) {
    __extends(EmployeeComponent, _super);
    function EmployeeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Raj Kumar";
        _this.LastName = "Sah";
        _this.Designation = "Manager";
        return _this;
    }
    EmployeeComponent.prototype.Print = function () {
        console.log("".concat(this.FirstName, "\n").concat(this.LastName));
    };
    return EmployeeComponent;
}(EmployeeTemplate_1.EmployeeTemplate));
exports["default"] = EmployeeComponent;

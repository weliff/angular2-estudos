"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OutputPropertyComponent = (function () {
    function OutputPropertyComponent() {
        this.valor = 0;
        this.valorMudou = new core_1.EventEmitter();
    }
    OutputPropertyComponent.prototype.incrementa = function () {
        this.valor++;
        this.valorMudou.emit({ "novoValor": this.valor });
    };
    OutputPropertyComponent.prototype.decrementa = function () {
        this.valor--;
        this.valorMudou.emit({ "novoValor": this.valor });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OutputPropertyComponent.prototype, "valor", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], OutputPropertyComponent.prototype, "valorMudou", void 0);
    OutputPropertyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contador',
            template: "\n        <div>\n            <button (click)=\"decrementa()\" class=\"btn btn-primary\" type=\"button\">-</button>\n            <input type=\"text\" [value]=\"valor\" readOnly/>\n            <button (click)=\"incrementa()\" class=\"btn btn-primary\" type=\"button\">+</button>\n        </div>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], OutputPropertyComponent);
    return OutputPropertyComponent;
}());
exports.OutputPropertyComponent = OutputPropertyComponent;
//# sourceMappingURL=output-property.component.js.map
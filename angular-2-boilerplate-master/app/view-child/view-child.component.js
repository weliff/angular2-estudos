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
var ViewChildComponent = (function () {
    function ViewChildComponent() {
    }
    ViewChildComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        console.log(this.variavel);
    };
    ViewChildComponent.prototype.ngOnChanges = function () {
        console.log('ngOnChanges');
        console.log(this.variavel);
    };
    ViewChildComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
        console.log(this.variavel);
    };
    ViewChildComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
        console.log(this.variavel);
    };
    ViewChildComponent.prototype.ngAfterViewChecked = function () {
        console.log('ngAfterViewChecked');
        console.log(this.variavel);
    };
    ViewChildComponent.prototype.ngDoCheck = function () {
        console.log('ngDoCheck');
        console.log(this.variavel);
    };
    ViewChildComponent.prototype.ngAfterContentChecked = function () {
        console.log('ngAfterContentChecked');
        console.log(this.variavel);
    };
    __decorate([
        core_1.ViewChild('variavelP'), 
        __metadata('design:type', HTMLElement)
    ], ViewChildComponent.prototype, "variavel", void 0);
    ViewChildComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'view-child',
            template: "\n        <p #variavelP>Exemplo de acesso a variavel local do template no componente</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ViewChildComponent);
    return ViewChildComponent;
}());
exports.ViewChildComponent = ViewChildComponent;
//# sourceMappingURL=view-child.component.js.map
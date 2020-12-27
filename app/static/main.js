(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VhL":
/*!********************************************************!*\
  !*** ./src/app/search-input/search-input.component.ts ***!
  \********************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/backend-api/backend-api.service */ "3Ff/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = ["inputField"];
function SearchInputComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.clearInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchInputComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_li_14_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ticker_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.updateSelectedTicker(ticker_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ticker_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ticker_r5.symbol || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ticker_r5.name || "", "");
} }
const _c1 = function (a0) { return { "border": a0 }; };
class SearchInputComponent {
    constructor(backendApiService) {
        this.backendApiService = backendApiService;
        this.title = 'Ticker symbol (e.g. SPY)';
        this.name = '';
        this.subscriptions = [];
        this.isFocusInput = false;
        this.tickers = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.subscriptions && this.subscriptions.length !== 0) {
            this.subscriptions.forEach((value) => value.unsubscribe());
        }
    }
    ngAfterViewInit() {
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.inputField.nativeElement, 'focusin').subscribe(value => {
            this.isFocusInput = true;
            this.isTransformLabel(true);
        }));
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.inputField.nativeElement, 'focusout').subscribe(value => {
            this.isTransformLabel(false);
            this.isFocusInput = false;
        }));
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.inputField.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => event.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(value => this.backendApiService.backendApi.getTickersBySymbol(value)))
            .subscribe((data) => {
            this.tickers = data;
        }));
    }
    isTransformLabel(inFocus) {
        return inFocus;
    }
    get changeLabelStyle() {
        return this.isFocusInput || this.name.length > 0 ? 'changed-label-style' : '';
    }
    get showClearButton() {
        return this.name && this.name.length > 0;
    }
    clearInput() {
        this.name = '';
        this.tickers = [];
    }
    updateSelectedTicker(ticker) {
        this.name = ticker.symbol.toLocaleUpperCase();
        this.tickers = [];
    }
}
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["BackendApiService"])); };
SearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchInputComponent, selectors: [["app-search-input"]], viewQuery: function SearchInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputField = _t.first);
    } }, decls: 15, vars: 8, consts: [[1, "row"], [1, "col-8"], [1, "main-input", 3, "ngStyle"], [3, "ngClass"], [2, "width", "100%"], [3, "ngModel", "ngModelChange"], ["inputField", ""], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "col-4"], [1, "btn", "btn-dark", "btn-lg"], [1, "list-group", "ticker-table"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "clear-button", 3, "click"], [1, "list-group-item", 3, "click"]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_6_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchInputComponent_div_8_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Find similar assets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SearchInputComponent_li_14_Template, 4, 2, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.isFocusInput ? "2px solid black" : "1px solid rgba(0, 0, 0, 0.54)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.changeLabelStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClearButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tickers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["label[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n    margin: 0.4rem;\r\n    height: inherit;\r\n    bottom: 0;\r\n\tcolor: rgba(0, 0, 0, 0.54);\r\n\tfont-weight:100;\r\n\tposition:absolute;\r\n    pointer-events:none;\r\n    background-color: #fff;\r\n transition: .2s cubic-bezier(0.0, 0, 0.2, 1) 0ms all;\r\n}\r\n\r\n.changed-label-style[_ngcontent-%COMP%] {\r\n    bottom:30px;\r\n    z-index: 10;\r\n    color: black;\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n transition: .2s cubic-bezier(0.0, 0, 0.2, 1) 0ms all;\r\n}\r\n\r\n.main-input[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    position: relative;\r\n    vertical-align: top;\r\n    font-size: 24px;\r\n    background-color: #fff;\r\n    width: 100%;\r\n    border-radius: 4px;\r\n}\r\n\r\n.clear-button[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border: none;\r\n}\r\n\r\n.clear-button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    font: inherit;\r\n    width: 100%;\r\n    border: 0;\r\n    height: 1.1875em;\r\n    margin: 0;\r\n    display: block;\r\n    padding: 6px 0 7px;\r\n    min-width: 0;\r\n    background: none;\r\n    box-sizing: content-box;\r\n    -webkit-tap-highlight-color: transparent;\r\n    padding: 9.5px 4px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n    outline: unset;\r\n}\r\n\r\n.ticker-table[_ngcontent-%COMP%] {\r\n    max-height: 400px;\r\n    position: absolute;\r\n    width: auto;\r\n    overflow: auto;\r\n    width: inherit;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]:hover {\r\n    background-color: grey;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsU0FBUztDQUNaLDBCQUEwQjtDQUMxQixlQUFlO0NBQ2YsaUJBQWlCO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtDQUl0QixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBSWhCLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix3Q0FBd0M7SUFDeEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkIiLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwLjRyZW07XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBib3R0b206IDA7XHJcblx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcblx0Zm9udC13ZWlnaHQ6MTAwO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnMgY3ViaWMtYmV6aWVyKDAuMCwgMCwgMC4yLCAxKSAwbXMgYWxsO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllcigwLjAsIDAsIDAuMiwgMSkgMG1zIGFsbDtcclxuXHQtby10cmFuc2l0aW9uOiAuMnMgY3ViaWMtYmV6aWVyKDAuMCwgMCwgMC4yLCAxKSAwbXMgYWxsO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllcigwLjAsIDAsIDAuMiwgMSkgMG1zIGFsbDtcclxufVxyXG5cclxuLmNoYW5nZWQtbGFiZWwtc3R5bGUge1xyXG4gICAgYm90dG9tOjMwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllcigwLjAsIDAsIDAuMiwgMSkgMG1zIGFsbDtcclxuXHQtbW96LXRyYW5zaXRpb246IC4ycyBjdWJpYy1iZXppZXIoMC4wLCAwLCAwLjIsIDEpIDBtcyBhbGw7XHJcblx0LW8tdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllcigwLjAsIDAsIDAuMiwgMSkgMG1zIGFsbDtcclxuICAgIHRyYW5zaXRpb246IC4ycyBjdWJpYy1iZXppZXIoMC4wLCAwLCAwLjIsIDEpIDBtcyBhbGw7XHJcbn1cclxuXHJcbi5tYWluLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNsZWFyLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5jbGVhci1idXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaGVpZ2h0OiAxLjE4NzVlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNnB4IDAgN3B4O1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDkuNXB4IDRweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiB1bnNldDtcclxufVxyXG5cclxuLnRpY2tlci10YWJsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-input',
                templateUrl: './search-input.component.html',
                styleUrls: ['./search-input.component.css']
            }]
    }], function () { return [{ type: src_services_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["BackendApiService"] }]; }, { inputField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputField']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\flask_test\app\website-app\src\main.ts */"zUnb");


/***/ }),

/***/ "3Ff/":
/*!*********************************************************!*\
  !*** ./src/services/backend-api/backend-api.service.ts ***!
  \*********************************************************/
/*! exports provided: BackendApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendApiService", function() { return BackendApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend-api-http.service */ "zCfw");



class BackendApiService {
    constructor(injector) {
        this.injector = injector;
        this._backendApi = injector.get(_backend_api_http_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiHttpService"]);
    }
    get backendApi() {
        return this._backendApi;
    }
}
BackendApiService.ɵfac = function BackendApiService_Factory(t) { return new (t || BackendApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
BackendApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendApiService, factory: BackendApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PSnI":
/*!******************************!*\
  !*** ./src/configuration.ts ***!
  \******************************/
/*! exports provided: baseHttpUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseHttpUrl", function() { return baseHttpUrl; });
const baseUrl = `${location.hostname}:${location.port}`;
const baseHttpUrl = `${location.protocol}//${baseUrl}`;


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-input/search-input.component */ "+VhL");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 0, consts: [[1, "container"], [1, "h-75", "container"], [1, "mt-5", "mb-5"], [1, "mt-2", "mb-2"], [1, ""], [1, "container-fluid", "bg-dark", "text-light"], [1, "100"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Find similar assets for tax-loss harvesting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-search-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, ea!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae reiciendis excepturi rerum odit, enim cum et maxime sint quod vitae debitis sequi laboriosam cumque sapiente amet ab exercitationem officia totam dolore, laudantium tenetur! Quaerat corporis possimus rerum tempore omnis ipsa similique error at exercitationem, magnam dignissimos laborum maiores nisi saepe fugit voluptates expedita sequi ea tempora est assumenda. Sunt eius illum itaque maiores magni debitis nesciunt dolores sequi porro adipisci, ipsa laborum molestias tempora? Alias nobis sit adipisci hic facere! Fuga, excepturi? Facere inventore mollitia atque sequi eos eum cupiditate asperiores voluptas dignissimos delectus obcaecati modi consequatur aspernatur beatae, debitis iusto autem libero praesentium? Ex, magni nesciunt. Nobis maxime, eos inventore officiis at id nesciunt eaque error voluptates repellat, modi fugiat. Dolor dolores quasi maxime voluptatum recusandae corrupti tempora nemo autem enim ipsa labore omnis laudantium commodi, adipisci voluptatem ipsam veniam illo hic quibusdam ad ex nihil eum. Quas aut distinctio libero voluptatibus minima molestias facilis impedit quam ex, neque nisi enim unde ad accusantium deleniti pariatur iure nam maiores accusamus quisquam eos fugiat sit sed? Nobis commodi modi beatae distinctio aliquam voluptatem cumque reiciendis, soluta quasi voluptas necessitatibus reprehenderit aliquid molestias fugiat deserunt inventore tenetur mollitia velit! Quos doloribus aut dolor delectus voluptate, magni distinctio quibusdam. Tenetur, esse. Exercitationem doloremque eveniet quia facilis totam laboriosam quis cumque, mollitia maxime, dolorem veritatis nesciunt dignissimos nobis ullam temporibus officiis repellendus nam ex rem tempora quasi labore debitis perferendis. Facilis libero itaque labore aliquid. Earum ipsa vitae iure, eligendi id quos ducimus obcaecati dolores necessitatibus mollitia, atque quam ex aliquid voluptatibus itaque ab. Ipsa, nemo itaque quas hic quasi, adipisci mollitia aliquid blanditiis placeat officia dolor repellendus ea velit pariatur voluptas fuga asperiores nisi dignissimos commodi saepe quae officiis nihil! Eveniet aperiam, delectus totam sed reiciendis animi qui ipsum. Laudantium, a consequatur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis placeat voluptatibus ea fugit totam nemo fugiat laborum debitis distinctio dolorum error consequuntur sit quibusdam voluptatem, quae, aliquid nihil aliquam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_1__["SearchInputComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UvGp":
/*!******************************!*\
  !*** ./src/models/ticker.ts ***!
  \******************************/
/*! exports provided: Ticker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticker", function() { return Ticker; });
class Ticker {
    constructor(name, symbol) {
        this._name = name;
        this._symbol = symbol;
    }
    get name() {
        return this._name;
    }
    get symbol() {
        return this._symbol;
    }
    static createFromAny(object) {
        if (object == null) {
            return null;
        }
        return new Ticker(object.name, object.symbol);
    }
    static createFromAnyArray(array) {
        if (!array) {
            return [];
        }
        return array.map(this.createFromAny).filter((item) => item != null);
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-input/search-input.component */ "+VhL");
/* harmony import */ var src_services_backend_api_backend_api_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/backend-api/backend-api-http.service */ "zCfw");
/* harmony import */ var src_services_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/backend-api/backend-api.service */ "3Ff/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        src_services_backend_api_backend_api_http_service__WEBPACK_IMPORTED_MODULE_6__["BackendApiHttpService"],
        src_services_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_7__["BackendApiService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_5__["SearchInputComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_5__["SearchInputComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ],
                providers: [
                    src_services_backend_api_backend_api_http_service__WEBPACK_IMPORTED_MODULE_6__["BackendApiHttpService"],
                    src_services_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_7__["BackendApiService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");





const routes = [
    { path: 'index', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: '**', redirectTo: '/index' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zCfw":
/*!**************************************************************!*\
  !*** ./src/services/backend-api/backend-api-http.service.ts ***!
  \**************************************************************/
/*! exports provided: BackendApiHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendApiHttpService", function() { return BackendApiHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configuration */ "PSnI");
/* harmony import */ var src_models_ticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/ticker */ "UvGp");








class BackendApiHttpService {
    constructor(http) {
        this.http = http;
    }
    getTickersBySymbol(symbol) {
        if (!symbol) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Headers': 'Accept',
        });
        return this.http.get(`${this.apiUrl}/ticker/${symbol}`, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(values => {
            return src_models_ticker__WEBPACK_IMPORTED_MODULE_5__["Ticker"].createFromAnyArray(values);
        }));
    }
    get apiUrl() {
        return `${_configuration__WEBPACK_IMPORTED_MODULE_4__["baseHttpUrl"]}`;
    }
}
BackendApiHttpService.ɵfac = function BackendApiHttpService_Factory(t) { return new (t || BackendApiHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BackendApiHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendApiHttpService, factory: BackendApiHttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendApiHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/blockchain-viewer/blockchain-viewer.component */ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts");
/* harmony import */ var _components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/block-view/block-view.component */ "./src/app/components/block-view/block-view.component.ts");





var routes = [
    { path: 'blockViewer', component: _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_3__["BlockchainViewerComponent"] },
    { path: 'blockView', component: _components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_4__["BlockViewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    ZherexCoin\n  </a>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Coin-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/blockchain-viewer/blockchain-viewer.component */ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts");
/* harmony import */ var _components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/block-view/block-view.component */ "./src/app/components/block-view/block-view.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_5__["BlockchainViewerComponent"],
                _components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_6__["BlockViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/block-view/block-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/block-view/block-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [class.border-primary]=\"isSelectedBlock()\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Block {{ getBlockNumber() }} <small class=\"text-muted\" *ngIf=\"block.previousHash == 0\">(Genesis block)</small></h5>\n    </div>\n\n     <ul class=\"list-group list-group-flush\">\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Hash</span>\n\t    \t<br>\n\t    \t<div class=\"text-truncate\" [style.color]=\"'#' + block.hash.substring(0,6)\">\n\t    \t\t<small>{{ block.hash }}</small>\n\t    \t</div>\n\n\t\t\t<br>\n\t\t\t<span class=\"\">Hash of previous block</span>\n\t    \t<br>\n\n\t    \t<div class=\"text-truncate\" [style.color]=\"'#' + block.previousHash.substring(0,6)\">\n\t    \t\t<small>{{ block.previousHash }}</small>\n\t    \t</div>\n\t    </li>\n\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Sero</span><br>\n\t    \t<div class=\"text-truncate text-muted\">\n\t    \t\t<small>{{ block.sero }}</small>\n\t    \t</div>\n\t    </li>\n\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Timestamp</span><br>\n\t    \t<div class=\"text-truncate text-muted\">\n\t    \t\t<small>{{ block.timestamp }}</small>\n\t    \t</div>\n\t    </li>\n\t  </ul>\n\n\t  <!-- <div class=\"card-body\"> -->\n\t  \t<!-- <span class=\"card-link\" *ngIf=\"!blockHasTx()\">Block has no transactions</span> -->\n\t  \t<!-- <span class=\"card-link\" *ngIf=\"blockHasTx()\">Contains {{block.transactions.length}} transactions</span> -->\n\t  <!-- </div> -->\n  </div>"

/***/ }),

/***/ "./src/app/components/block-view/block-view.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/block-view/block-view.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 18rem;\n  display: inline-block;\n  margin: 0 10px 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpZWdvL0NvaW4tZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2Jsb2NrLXZpZXcvYmxvY2stdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jsb2NrLXZpZXcvYmxvY2stdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcblx0d2lkdGg6IDE4cmVtO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjogMCAxMHB4IDAgMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/block-view/block-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/block-view/block-view.component.ts ***!
  \***************************************************************/
/*! exports provided: BlockViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockViewComponent", function() { return BlockViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockViewComponent = /** @class */ (function () {
    function BlockViewComponent() {
    }
    BlockViewComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockViewComponent.prototype, "block", void 0);
    BlockViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-view',
            template: __webpack_require__(/*! ./block-view.component.html */ "./src/app/components/block-view/block-view.component.html"),
            styles: [__webpack_require__(/*! ./block-view.component.scss */ "./src/app/components/block-view/block-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockViewComponent);
    return BlockViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/blockchain-viewer/blockchain-viewer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>Blocks on chain</h1>\n\t<p>Each card represents a blcok on the chain</p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/blockchain-viewer/blockchain-viewer.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2NrY2hhaW4tdmlld2VyL2Jsb2NrY2hhaW4tdmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts ***!
  \************************************************************************/
/*! exports provided: BlockchainViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainViewerComponent", function() { return BlockchainViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blockchain.service */ "./src/app/services/blockchain.service.ts");



var BlockchainViewerComponent = /** @class */ (function () {
    // dependency injection
    function BlockchainViewerComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocks = [];
        this.blocks = blockchainService.getBlocks();
    }
    BlockchainViewerComponent.prototype.ngOnInit = function () {
    };
    BlockchainViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blockchain-viewer',
            template: __webpack_require__(/*! ./blockchain-viewer.component.html */ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.html"),
            styles: [__webpack_require__(/*! ./blockchain-viewer.component.scss */ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
    ], BlockchainViewerComponent);
    return BlockchainViewerComponent;
}());



/***/ }),

/***/ "./src/app/services/blockchain.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/blockchain.service.ts ***!
  \************************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var node_modules_workspace_Blockchain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node_modules/workspace/Blockchain */ "./node_modules/workspace/Blockchain.js");
/* harmony import */ var node_modules_workspace_Blockchain__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_modules_workspace_Blockchain__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_3__);



//import { Block } from 'node_modules/workspace/Block';

var BlockchainService = /** @class */ (function () {
    function BlockchainService() {
        this.blockchainInstance = new node_modules_workspace_Blockchain__WEBPACK_IMPORTED_MODULE_2__["Blockchain"]();
        //public blockInstance = new Block();
        this.walletKeys = [];
        //alert("hola");
        this.blockchainInstance.difficulty = 1;
        this.blockchainInstance.minePendingTransactions('my-wallet-address');
        this.generateWalletKeys();
    }
    BlockchainService.prototype.getBlocks = function () {
        return this.blockchainInstance.chain;
    };
    BlockchainService.prototype.generateWalletKeys = function () {
        var ec = new elliptic__WEBPACK_IMPORTED_MODULE_3___default.a.ec('secp256k1');
        var key = ec.genKeyPair();
        this.walletKeys.push({
            keyObj: key,
            publicKey: key.getPublic('hex'),
            privateKey: key.getPrivate('hex'),
        });
        console.log(this.walletKeys);
    };
    BlockchainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockchainService);
    return BlockchainService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/diego/Coin-frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
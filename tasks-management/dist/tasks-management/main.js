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
/* harmony import */ var _tasks_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/tasks/tasks.component */ "./src/app/tasks/tasks/tasks.component.ts");




var routes = [
    { path: "", component: _tasks_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__["TasksComponent"] },
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'tasks-management';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _tasks_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks/tasks.component */ "./src/app/tasks/tasks/tasks.component.ts");
/* harmony import */ var _tasks_tasks_menu_tasks_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks-menu/tasks-menu.component */ "./src/app/tasks/tasks-menu/tasks-menu.component.ts");
/* harmony import */ var _tasks_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/user-list/user-list.component */ "./src/app/tasks/user-list/user-list.component.ts");
/* harmony import */ var _tasks_tasks_content_tasks_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks/tasks-content/tasks-content.component */ "./src/app/tasks/tasks-content/tasks-content.component.ts");
/* harmony import */ var _common_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/table/table.component */ "./src/app/common/table/table.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _tasks_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"],
                _tasks_tasks_menu_tasks_menu_component__WEBPACK_IMPORTED_MODULE_6__["TasksMenuComponent"],
                _tasks_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"],
                _tasks_tasks_content_tasks_content_component__WEBPACK_IMPORTED_MODULE_8__["TasksContentComponent"],
                _common_table_table_component__WEBPACK_IMPORTED_MODULE_9__["TableComponent"]
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

/***/ "./src/app/common/table/table.component.css":
/*!**************************************************!*\
  !*** ./src/app/common/table/table.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n    display: flex;\n}\n\n.header-row, .table-item {\n    padding: var(--space1);\n    border-bottom: 1px solid var(--tableBorderColor);\n}\n\n.header-row {\n    color: var(--tableHeaderColor);\n}\n\n.table > div:nth-child(1) {\n    margin-right: var(--space1);\n    width: 10rem;\n}\n\n.table > div:nth-child(2) {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oZWFkZXItcm93LCAudGFibGUtaXRlbSB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UxKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGFibGVCb3JkZXJDb2xvcik7XG59XG5cbi5oZWFkZXItcm93IHtcbiAgICBjb2xvcjogdmFyKC0tdGFibGVIZWFkZXJDb2xvcik7XG59XG5cbi50YWJsZSA+IGRpdjpudGgtY2hpbGQoMSkge1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2UxKTtcbiAgICB3aWR0aDogMTByZW07XG59XG5cbi50YWJsZSA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/table/table.component.html":
/*!***************************************************!*\
  !*** ./src/app/common/table/table.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"table\">\n  <div>\n    <div class=\"header-row\">\n      Attributes\n    </div>\n    <div *ngFor=\"let dataItem of data | keyvalue\" class=\"table-item\">\n      {{dataItem.key}}\n    </div>\n  </div>\n  \n  <div>\n    <div class=\"header-row\">\n      Values\n    </div>\n    <div *ngFor=\"let dataItem of data | keyvalue\" class=\"table-item\">\n      {{dataItem.value}}\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/common/table/table.component.ts":
/*!*************************************************!*\
  !*** ./src/app/common/table/table.component.ts ***!
  \*************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "data", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/common/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/common/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/user.ts":
/*!************************************!*\
  !*** ./src/app/interfaces/user.ts ***!
  \************************************/
/*! exports provided: UserEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEntity", function() { return UserEntity; });
var TODAY = Date.now();
var UserEntity = /** @class */ (function () {
    function UserEntity() {
        this.id = '';
        this.isDeveloper = false;
        this.devices = 0;
        this.sessions = [];
        this.location = 'Unknown';
        this.created = TODAY;
        this.channels = {
            push: true,
            email: false,
            webhook: true,
            appInbox: true
        };
        this.events = 0;
        this.bucket = 0;
        this.attributes = {};
    }
    return UserEntity;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserService = /** @class */ (function () {
    function UserService() {
        this.data = this.generateSampleData();
    }
    UserService.prototype.generateSampleData = function () {
        var locations = ['Sofia', 'San Francisco', 'Amsterdam', 'Singapore'];
        var YEAR_MS = 365 * 24 * 60 * 60 * 1000;
        var NOW = Date.now();
        return new Array(100).fill(0).map(function (_, i) { return ({
            id: 'usr_' + i,
            isDeveloper: i % 5 === 0,
            devices: i % 3 + 1,
            sessions: new Array((i % 5) * 3 + 2).fill({}),
            location: locations[i % locations.length],
            created: NOW - (i % 5) * YEAR_MS,
            events: i * 3 % 7,
            bucket: i % 100,
            channels: {
                push: false,
                email: true,
                webhook: true,
                appInbox: true
            },
            attributes: {
                email: "usr_" + i + "@example.com",
            }
        }); });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/tasks/tasks-content/tasks-content.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/tasks/tasks-content/tasks-content.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header {\n    margin: var(--space4);\n}\n\n.userId {\n    font-size: var(--titleFontSize);\n}\n\n.userInfo {\n    font-size: var(--subTitleFontSize);\n    color: var(--subtitleColor);\n    margin-bottom: var(--space4);\n}\n\n.tiles-wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n}\n\n.tile {\n    width: 9rem;\n    background: var(--tileBackground);\n    border-radius: var(--borderRadius);\n    padding: var(--space4);\n}\n\n.tile-header {\n    color: var(--subtitleColor);\n    padding-bottom: var(--space2);\n}\n\ntable {\n    width: 100%;\n    margin-top: var(--space4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MtY29udGVudC90YXNrcy1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLWNvbnRlbnQvdGFza3MtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVyIHtcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlNCk7XG59XG5cbi51c2VySWQge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGl0bGVGb250U2l6ZSk7XG59XG5cbi51c2VySW5mbyB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdWJUaXRsZUZvbnRTaXplKTtcbiAgICBjb2xvcjogdmFyKC0tc3VidGl0bGVDb2xvcik7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2U0KTtcbn1cblxuLnRpbGVzLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udGlsZSB7XG4gICAgd2lkdGg6IDlyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGlsZUJhY2tncm91bmQpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2U0KTtcbn1cblxuLnRpbGUtaGVhZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tc3VidGl0bGVDb2xvcik7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNlMik7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZTQpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tasks/tasks-content/tasks-content.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tasks/tasks-content/tasks-content.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.user\" class=\"content-header\">\n  <div class=\"userId\">{{user.id}}</div>\n  <div class=\"userInfo\">{{date}} - {{user.location}}</div>\n\n  <div class=\"tiles-wrapper\">\n    <div class=\"tile\">\n      <div class=\"tile-header\">Devices</div>\n      <div class=\"tile-content\">{{user.devices}}</div>\n    </div>\n  \n    <div class=\"tile\">\n      <div class=\"tile-header\">Sessions</div>\n      <div class=\"tile-content\">{{user.sessions.length}}</div>\n    </div>\n  \n    <div class=\"tile\">\n      <div class=\"tile-header\">Events</div>\n      <div class=\"tile-content\">{{user.events}}</div>\n    </div>\n  </div>\n\n  <table [data]=\"user.attributes\"></table>\n  \n</div>"

/***/ }),

/***/ "./src/app/tasks/tasks-content/tasks-content.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tasks/tasks-content/tasks-content.component.ts ***!
  \****************************************************************/
/*! exports provided: TasksContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksContentComponent", function() { return TasksContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_interfaces_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/user */ "./src/app/interfaces/user.ts");



var TasksContentComponent = /** @class */ (function () {
    function TasksContentComponent() {
    }
    TasksContentComponent.prototype.ngOnInit = function () {
    };
    TasksContentComponent.prototype.ngOnChanges = function () {
        if (this.user) {
            var date = new Date(this.user.created);
            this.date = date.toString().substring(0, date.toString().indexOf("GMT"));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_interfaces_user__WEBPACK_IMPORTED_MODULE_2__["UserEntity"])
    ], TasksContentComponent.prototype, "user", void 0);
    TasksContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tasks-content',
            template: __webpack_require__(/*! ./tasks-content.component.html */ "./src/app/tasks/tasks-content/tasks-content.component.html"),
            styles: [__webpack_require__(/*! ./tasks-content.component.css */ "./src/app/tasks/tasks-content/tasks-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksContentComponent);
    return TasksContentComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks-menu/tasks-menu.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tasks/tasks-menu/tasks-menu.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tasks-menu {\n    background: var(--tileBackground);\n    height: 100%;\n}\n\n.header-wrapper {\n    padding: var(--space4);\n    border-bottom: 1px solid var(--tableBorderColor);\n    margin-bottom: var(--space4);\n}\n\n.header-wrapper > header {\n    font-size: var(--titleFontSize);\n    margin-bottom: var(--space2);\n}\n\n.header-wrapper > div {\n    font-size: var(--subTitleFontSize);\n    color: var(--subtitleColor);\n}\n\nuser-list {\n    height: calc(100vh - 150px);\n    display: block;\n    overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MtbWVudS90YXNrcy1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnREFBZ0Q7SUFDaEQsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLW1lbnUvdGFza3MtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2tzLW1lbnUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRpbGVCYWNrZ3JvdW5kKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXItd3JhcHBlciB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2U0KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGFibGVCb3JkZXJDb2xvcik7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2U0KTtcbn1cblxuLmhlYWRlci13cmFwcGVyID4gaGVhZGVyIHtcbiAgICBmb250LXNpemU6IHZhcigtLXRpdGxlRm9udFNpemUpO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlMik7XG59XG5cbi5oZWFkZXItd3JhcHBlciA+IGRpdiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdWJUaXRsZUZvbnRTaXplKTtcbiAgICBjb2xvcjogdmFyKC0tc3VidGl0bGVDb2xvcik7XG59XG5cbnVzZXItbGlzdCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/tasks/tasks-menu/tasks-menu.component.html":
/*!************************************************************!*\
  !*** ./src/app/tasks/tasks-menu/tasks-menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"tasks-menu\">\n  <div class=\"header-wrapper\">\n    <header>Users in audience</header>\n    <div>Total Users - Showing 100 matching users</div>\n  </div>\n\n  <user-list (userSelected)=\"handleUserSelection($event)\"></user-list>\n</section>"

/***/ }),

/***/ "./src/app/tasks/tasks-menu/tasks-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tasks/tasks-menu/tasks-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: TasksMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksMenuComponent", function() { return TasksMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TasksMenuComponent = /** @class */ (function () {
    function TasksMenuComponent() {
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TasksMenuComponent.prototype.ngOnInit = function () {
    };
    TasksMenuComponent.prototype.handleUserSelection = function (event) {
        this.userSelected.emit(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksMenuComponent.prototype, "userSelected", void 0);
    TasksMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tasks-menu',
            template: __webpack_require__(/*! ./tasks-menu.component.html */ "./src/app/tasks/tasks-menu/tasks-menu.component.html"),
            styles: [__webpack_require__(/*! ./tasks-menu.component.css */ "./src/app/tasks/tasks-menu/tasks-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksMenuComponent);
    return TasksMenuComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks/tasks.component.css":
/*!*************************************************!*\
  !*** ./src/app/tasks/tasks/tasks.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tasks {\n    height: 100%;\n    display: flex;\n}\n\ntasks-menu {\n    width: 40%;\n    max-width: 25rem;\n}\n\n.tasks-content {\n    flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90YXNrcy90YXNrcy90YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2tzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxudGFza3MtbWVudSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xufVxuXG4udGFza3MtY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tasks/tasks/tasks.component.html":
/*!**************************************************!*\
  !*** ./src/app/tasks/tasks/tasks.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tasks\">\n  <tasks-menu (userSelected)=\"handleUserSelection($event)\"></tasks-menu>\n\n  <section class=\"tasks-content\">\n    <tasks-content [user]=\"this.currentUser\"></tasks-content>\n  </section>\n\n</div>"

/***/ }),

/***/ "./src/app/tasks/tasks/tasks.component.ts":
/*!************************************************!*\
  !*** ./src/app/tasks/tasks/tasks.component.ts ***!
  \************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent.prototype.handleUserSelection = function (event) {
        this.currentUser = event;
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks/tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/tasks/user-list/user-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tasks/user-list/user-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".usersWrapper {\n    max-height: 100%;\n    overflow-y: auto;\n}\n\n.user {\n    padding: var(--space3);\n    margin: 0 var(--space3);\n    border: 1px solid transparent;\n}\n\n.user:hover {\n    cursor: pointer;\n}\n\n.user.selectedUser {\n    border: 1px solid black;\n    border-radius: var(--borderRadius);\n}\n\n.userId {\n    font-size: var(--titleFontSize);\n}\n\n.userInfo {\n    font-size: var(--subTitleFontSize);\n    color: var(--subtitleColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvdGFza3MvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzV3JhcHBlciB7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4udXNlciB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UzKTtcbiAgICBtYXJnaW46IDAgdmFyKC0tc3BhY2UzKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnVzZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXIuc2VsZWN0ZWRVc2VyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xufVxuXG4udXNlcklkIHtcbiAgICBmb250LXNpemU6IHZhcigtLXRpdGxlRm9udFNpemUpO1xufVxuXG4udXNlckluZm8ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViVGl0bGVGb250U2l6ZSk7XG4gICAgY29sb3I6IHZhcigtLXN1YnRpdGxlQ29sb3IpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tasks/user-list/user-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tasks/user-list/user-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"usersWrapper\">\n  <div\n    *ngFor=\"let user of users\"\n    class=\"user\"\n    [class.selectedUser]=\"user === this.selectedUser\"\n    (click)=\"handleUserClick(user)\"\n  >\n    <div class=\"userId\">{{user.id}}</div>\n    <div class=\"userInfo\">{{user.devices}} Devices - {{user.sessions.length}} Sessions - {{user.location}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tasks/user-list/user-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tasks/user-list/user-list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.users = this.userService.generateSampleData();
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.prototype.handleUserClick = function (user) {
        this.selectedUser = user;
        this.userSelected.emit(this.selectedUser);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserListComponent.prototype, "userSelected", void 0);
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/tasks/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/tasks/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
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

module.exports = __webpack_require__(/*! /Users/i352919/Documents/repos/tasks-management/tasks-management/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
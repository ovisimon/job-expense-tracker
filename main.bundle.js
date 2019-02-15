webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__company_service__ = __webpack_require__("./src/app/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__job_service__ = __webpack_require__("./src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stage_service__ = __webpack_require__("./src/app/stage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__expense_service__ = __webpack_require__("./src/app/expense.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__company_view_company_view_component__ = __webpack_require__("./src/app/company-view/company-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__job_view_job_view_component__ = __webpack_require__("./src/app/job-view/job-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__company_view_company_view_component__["a" /* CompanyViewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__job_view_job_view_component__["a" /* JobViewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__navigation_navigation_component__["a" /* NavigationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* appRoutes */], { useHash: true, enableTracing: false }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__company_service__["a" /* CompanyService */],
                __WEBPACK_IMPORTED_MODULE_9__job_service__["a" /* JobService */],
                __WEBPACK_IMPORTED_MODULE_10__stage_service__["a" /* StageService */],
                __WEBPACK_IMPORTED_MODULE_11__expense_service__["a" /* ExpenseService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_view_company_view_component__ = __webpack_require__("./src/app/company-view/company-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_view_job_view_component__ = __webpack_require__("./src/app/job-view/job-view.component.ts");



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_1__company_view_company_view_component__["a" /* CompanyViewComponent */] },
    { path: 'company/:id', component: __WEBPACK_IMPORTED_MODULE_1__company_view_company_view_component__["a" /* CompanyViewComponent */] },
    { path: 'job', component: __WEBPACK_IMPORTED_MODULE_2__job_view_job_view_component__["a" /* JobViewComponent */] },
    { path: 'job/:id', component: __WEBPACK_IMPORTED_MODULE_2__job_view_job_view_component__["a" /* JobViewComponent */] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "./src/app/company-view/company-view.component.css":
/***/ (function(module, exports) {

module.exports = ".add-job {\r\n\tdisplay: none;\r\n}"

/***/ }),

/***/ "./src/app/company-view/company-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container mt-5\">\n\t<h2 class=\"mb-5\">Company Home</h2>\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<h5>Company Name: {{company.name}}</h5>\n\t\t\t<h5>Address: {{company.address}}</h5>\n\t\t</div>\n\t</div>\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-md\">\n\t\t\t<h6 class=\"text-center\">(click on row to go to job home)</h6>\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead class=\"thead-dark\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Job Title</th>\n\t\t\t\t\t\t<th>Client Name</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let job of company.jobs\" routerLink=\"/job/{{job._id}}\">\n\t\t\t\t\t\t<td>{{job.projectTitle}}</td>\n\t\t\t\t\t\t<td>{{job.clientName}}</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-success\" (click)=\"soon($event)\">Edit</button></td>\n\t\t\t\t\t\t<td><button class=\"btn btn-danger\" (click)=\"deleteJob(job._id, company._id, $event)\">Delete</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td colspan=\"2\"><button class=\"btn btn-primary\" (click)=\"showForm()\">Add new job</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<form [class.add-job]=\"addForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"job.projectTitle\" type=\"text\" class=\"form-control mt-2\" name=\"title\" placeholder=\"Project Title\">\n\t\t\t\t\t<input [(ngModel)]=\"job.clientName\" type=\"text\" class=\"form-control mt-2\" name=\"clientName\" placeholder=\"Client Name\">\n\t\t\t\t\t<input [(ngModel)]=\"job.projectContact\" type=\"text\" class=\"form-control mt-2\" name=\"projectContact\" placeholder=\"Project Contact\">\n\t\t\t\t\t<input [(ngModel)]=\"job.phone\" type=\"text\" class=\"form-control mt-2\" name=\"phone\" placeholder=\"Phone\">\n\t\t\t\t\t<input [(ngModel)]=\"job.email\" type=\"text\" class=\"form-control mt-2\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t<input [(ngModel)]=\"job.location\" type=\"text\" class=\"form-control mt-2\" name=\"location\" placeholder=\"Location\">\n\t\t\t\t\t<input [(ngModel)]=\"job.room\" type=\"text\" class=\"form-control mt-2\" name=\"room\" placeholder=\"Room\">\n\t\t\t\t\t<input [(ngModel)]=\"job.driveName\" type=\"text\" class=\"form-control mt-2\" name=\"driveName\" placeholder=\"Drive name\">\n\t\t\t\t\t<input [(ngModel)]=\"job.dueDate\" type=\"date\" class=\"form-control mt-2\" name=\"dueDate\" placeholder=\"Due date\">\n\t\t\t\t\t<input [(ngModel)]=\"job.shootDate\" type=\"date\" class=\"form-control mt-2\" name=\"shootDate\" placeholder=\"Shoot date\">\n\t\t\t\t\t<input [(ngModel)]=\"job.billingContact\" type=\"text\" class=\"form-control mt-2\" name=\"billingContact\" placeholder=\"Billing contact\">\n\t\t\t\t\t<input [(ngModel)]=\"job.cameras\" type=\"text\" class=\"form-control mt-2\" name=\"cameras\" placeholder=\"Cameras\">\n\t\t\t\t\t<input [(ngModel)]=\"job.itemsNeeded\" type=\"text\" class=\"form-control mt-2\" name=\"itemsNeeded\" placeholder=\"Items needed\">\n\t\t\t\t\t<textarea [(ngModel)]=\"job.notes\" type=\"text\" class=\"form-control mt-2\" name=\"notes\" placeholder=\"Notes\"></textarea>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"saveJob($event)\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/company-view/company-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_service__ = __webpack_require__("./src/app/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_service__ = __webpack_require__("./src/app/job.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyViewComponent = /** @class */ (function () {
    function CompanyViewComponent(companyService, jobService, route, router) {
        this.companyService = companyService;
        this.jobService = jobService;
        this.route = route;
        this.router = router;
        this.company = {};
        this.job = {};
        this.addForm = true;
    }
    CompanyViewComponent.prototype.ngOnInit = function () {
        this.getCompany();
    };
    CompanyViewComponent.prototype.getCompany = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.companyService.getCompany(params.id); })
            .subscribe(function (res) { return _this.company = res.company; });
    };
    CompanyViewComponent.prototype.saveJob = function () {
        var _this = this;
        this.job.company = this.company._id;
        this.jobService.addJob(this.job).subscribe(function (x) { return _this.companyService.addJobToCompany(x.id, x.company)
            .subscribe(function (x) {
            console.log('comp id', _this.company._id);
            _this.getCompany();
            _this.job = {};
        }); });
    };
    CompanyViewComponent.prototype.deleteJob = function (compId, job, $event) {
        var _this = this;
        $event.stopPropagation();
        this.companyService.deleteJobFromCompany(compId, job).subscribe(function (x) {
            _this.jobService.deleteJob(job).subscribe(function (x) {
                console.log('Job deleted from Company');
                _this.getCompany();
            });
        });
    };
    CompanyViewComponent.prototype.showForm = function () {
        this.addForm = !this.addForm;
    };
    CompanyViewComponent.prototype.soon = function ($event) {
        alert('functionality will be added soon');
        $event.stopPropagation();
    };
    CompanyViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-view',
            template: __webpack_require__("./src/app/company-view/company-view.component.html"),
            styles: [__webpack_require__("./src/app/company-view/company-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_4__job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CompanyViewComponent);
    return CompanyViewComponent;
}());



/***/ }),

/***/ "./src/app/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/shareReplay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
    }
    CompanyService.prototype.getCompanies = function () {
        return this.http.get("https://job-expense-tracker.herokuapp.com/api/companies").shareReplay();
    };
    CompanyService.prototype.getCompany = function (id) {
        return this.http.get("https://job-expense-tracker.herokuapp.com/api/companies/" + id).shareReplay();
    };
    CompanyService.prototype.addCompany = function (company) {
        return this.http.post("https://job-expense-tracker.herokuapp.com/api/companies", company);
    };
    CompanyService.prototype.updateCompany = function (company) {
        return this.http.patch("https://job-expense-tracker.herokuapp.com/api/companies", company);
    };
    CompanyService.prototype.addJobToCompany = function (job, compId) {
        var j = {};
        j._id = job;
        return this.http.put("https://job-expense-tracker.herokuapp.com/api/companies/" + compId, j);
    };
    CompanyService.prototype.deleteJobFromCompany = function (jobId, compId) {
        return this.http.delete("https://job-expense-tracker.herokuapp.com/api/companies/" + compId + "/" + jobId);
    };
    CompanyService.prototype.deleteCompany = function (id) {
        return this.http.delete("https://job-expense-tracker.herokuapp.com/api/companies/" + id);
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/expense.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/shareReplay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExpenseService = /** @class */ (function () {
    function ExpenseService(http) {
        this.http = http;
    }
    ExpenseService.prototype.getJobs = function () {
        return this.http.get("https://job-expense-tracker.herokuapp.com/api/expenses").shareReplay();
    };
    ExpenseService.prototype.getExpense = function (id) {
        return this.http.get("https://job-expense-tracker.herokuapp.com/api/expenses/" + id).shareReplay();
    };
    ExpenseService.prototype.addExpense = function (expense) {
        return this.http.post("https://job-expense-tracker.herokuapp.com/api/expenses", expense);
    };
    ExpenseService.prototype.addExpenseToStage = function (expense, staId) {
        return this.http.put("https://job-expense-tracker.herokuapp.com/api/expenses/" + staId, expense);
    };
    ExpenseService.prototype.addActualTime = function (expId, staId, time) {
        return this.http.post("https://job-expense-tracker.herokuapp.com/api/expenses/" + expId + "/" + staId, { time: time });
    };
    ExpenseService.prototype.deleteActualTime = function (timeId, expId, staId) {
        return this.http.delete("https://job-expense-tracker.herokuapp.com/api/expenses/" + timeId + "/" + expId + "/" + staId);
    };
    ExpenseService.prototype.updateExpense = function (expense) {
        return this.http.patch("https://job-expense-tracker.herokuapp.com/api/expenses", expense);
    };
    ExpenseService.prototype.deleteExpense = function (expId, staId) {
        return this.http.delete("https://job-expense-tracker.herokuapp.com/api/expenses/" + expId + "/" + staId);
    };
    ExpenseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], ExpenseService);
    return ExpenseService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".col-centered {\r\n\tfloat: none;\r\n\tmargin: auto;\r\n\tmax-width: 500px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm col-centered\">\n\t\t\t<h3 class=\"text-center mb-5\">Companies</h3>\n\t\t\t<h6 class=\"text-center\">(click on row to go to company home)</h6>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"text-center\">\n\t\t\t\t\t\t<th>Company Name</th>\n\t\t\t\t\t\t<th>Company Address</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let company of companies\" routerLink=\"/company/{{company._id}}\">\n\t\t\t\t\t\t<td>{{company.name}}</td>\n\t\t\t\t\t\t<td>{{company.address}}</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-success\" (click)=\"soon($event)\">Edit</button></td>\n\t\t\t\t\t\t<td><button class=\"btn btn-danger\" (click)=\"deleteCompany(company._id, $event); $event.stopPropagation()\">Delete</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm col-centered\">\n\t\t\t<h3 class=\"text-center mb-5 mt-5\">Create new company</h3>\n\t\t\t<form>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"companyName\" type=\"text\" class=\"form-control\" name=\"companyname\" placeholder=\"Company name\">\n\t\t\t\t\t<input [(ngModel)]='companyAddress' type=\"text\" class=\"form-control mt-3\" name=\"companyaddress\" placeholder=\"Company address\">\n\t\t\t\t\t<button class=\"btn btn-primary mt-3\" (click)=\"saveCompany($event)\">Create Company</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_service__ = __webpack_require__("./src/app/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/shareReplay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(service, http, router) {
        this.service = service;
        this.http = http;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    HomeComponent.prototype.getCompanies = function () {
        var _this = this;
        this.service.getCompanies().subscribe(function (comp) { return _this.companies = comp.companies; });
        console.log(this.companies);
    };
    HomeComponent.prototype.saveCompany = function () {
        var _this = this;
        var compa = {};
        compa.name = this.companyName;
        compa.address = this.companyAddress;
        this.service.addCompany(compa).subscribe(function (x) {
            _this.router.navigate(['/home']);
            _this.getCompanies();
            _this.companyName = null;
            _this.companyAddress = null;
        });
    };
    HomeComponent.prototype.deleteCompany = function (id, $event) {
        var _this = this;
        this.service.deleteCompany(id).subscribe(function (x) {
            $event.stopPropagation();
            _this.getCompanies();
        });
    };
    HomeComponent.prototype.soon = function ($event) {
        alert('Functionality will be added soon');
        $event.stopPropagation();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/job-view/job-view.component.css":
/***/ (function(module, exports) {

module.exports = ".add-stage {\r\n\tdisplay: none;\r\n}\r\n\r\n.hiddenRow {\r\n    padding: 0 !important;\r\n}"

/***/ }),

/***/ "./src/app/job-view/job-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<h2 *ngIf=\"job.projectTitle\">Project title: {{job.projectTitle}}</h2>\n\t\t\t<h4 *ngIf=\"job.clientName\">Client name: {{job.clientName}}</h4>\n\t\t\t<h4 *ngIf=\"job.projectContact\">Project Contact: {{job.projectContact}}</h4>\n\t\t\t<h4 *ngIf=\"job.phone\">Phone: {{job.phone}}</h4>\n\t\t\t<h4 *ngIf=\"job.email\">Email: {{job.email}}</h4>\n\t\t\t<h4 *ngIf=\"job.room\">Room: {{job.room}}</h4>\n\t\t\t<h4 *ngIf=\"job.drive\">Drive: {{job.drive}}</h4>\n\t\t\t<h4 *ngIf=\"job.dueDate\">Due date: {{job.dueDate | date: \"MMM dd yyyy\"}}</h4>\n\t\t\t<h4 *ngIf=\"job.shootDate\">Shoot date: {{job.shootDate | date: \"MMM dd yyyy\"}}</h4>\n\t\t\t<h4 *ngIf=\"job.billingContact\">Billing Contact: {{job.billingContact}}</h4>\n\t\t\t<h4 *ngIf=\"job.cameras\">Cameras: {{job.cameras}}</h4>\n\t\t\t<h4 *ngIf=\"job.itemsNeeded\">Items Needed: {{job.itemsNeeded}}</h4>\n\t\t\t<h4 *ngIf=\"job.notes\">Notes: {{job.notes}}</h4>\n\t\t</div>\n\t</div>\n\t<div class=\"row mt-5 mb-5\">\n\t\t<div class=\"col-md\">\n\t\t\t<table class=\"table table-striped table-hover table-info text-center\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Quote</th>\n\t\t\t\t\t<th>Budget</th>\n\t\t\t\t\t<th>Actual</th>\n\t\t\t\t\t<th>Add-ons</th>\n\t\t\t\t\t<th>Grand Total</th>\n\t\t\t\t\t<th>Invoiced</th>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td>{{budget}}</td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td [ngClass]=\"{'text-success': total < budget, 'text-danger': total > budget, 'text-primary': total == budget}\">{{total}}</td>\n\t\t\t\t\t<td></td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<div *ngFor=\"let stage of job.stages\">\n\t\t\t\t<h2 class=\"text-center\">{{stage.name}}</h2>\n\t\t\t\t<h6 class=\"text-center\">(click on row to expand and add time)</h6>\n\t\t\t\t<table class=\"table table-striped table-hover text-center\" style=\"border-collapse: collapse;\">\n\t\t\t\t\t<thead class=\"thead-dark\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Expense name</th>\n\t\t\t\t\t\t\t<th>Est. hrs</th>\n\t\t\t\t\t\t\t<th>Hourly rate</th>\n\t\t\t\t\t\t\t<th>Est. days</th>\n\t\t\t\t\t\t\t<th>Day rate</th>\n\t\t\t\t\t\t\t<th>Est. man hrs</th>\n\t\t\t\t\t\t\t<th>Est. total</th>\n\t\t\t\t\t\t\t<th>Total hrs</th>\n\t\t\t\t\t\t\t<th>Total</th>\n\t\t\t\t\t\t\t<th colspan=\"2\"><button class=\"btn btn-danger\" (click)=\"deleteStage(stage._id)\">Delete Stage</button></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody *ngFor=\"let expense of stage.expenses\">\n\t\t\t\t\t\t<tr data-toggle=\"collapse\" [attr.data-target]=\"eliminateSpace('#' + expense._id)\" class=\"accordion-toggle clickable\">\n\t\t\t\t\t\t\t<td>{{expense.name}}</td>\n\t\t\t\t\t\t\t<td>{{expense.estimatedHours}}</td>\n\t\t\t\t\t\t\t<td>{{expense.hourlyRate}}</td>\n\t\t\t\t\t\t\t<td>{{expense.estimatedDays}}</td>\n\t\t\t\t\t\t\t<td>{{expense.dailyRate}}</td>\n\t\t\t\t\t\t\t<td>{{calculateEstimatedManHours(expense.estimatedHours, expense.estimatedDays)}}</td>\n\t\t\t\t\t\t\t<td>{{calculateEstimatedTotal(expense.estimatedHours, expense.hourlyRate, expense.estimatedDays, expense.dailyRate)}}</td>\n\t\t\t\t\t\t\t<td [ngClass]=\"{'text-success': calculateTotalHours(expense.actualTime) < calculateEstimatedManHours(expense.estimatedHours, expense.estimatedDays), 'text-danger': calculateTotalHours(expense.actualTime) > calculateEstimatedManHours(expense.estimatedHours, expense.estimatedDays), 'text-primary': calculateTotalHours(expense.actualTime) == calculateEstimatedManHours(expense.estimatedHours, expense.estimatedDays)}\">{{calculateTotalHours(expense.actualTime)}}</td>\n\t\t\t\t\t\t\t<td [ngClass]=\"{'text-success': calculateTotal(expense) < calculateEstimatedTotal(expense.estimatedHours, expense.hourlyRate, expense.estimatedDays, expense.dailyRate), 'text-danger': calculateTotal(expense) > calculateEstimatedTotal(expense.estimatedHours, expense.hourlyRate, expense.estimatedDays, expense.dailyRate), 'text-primary': calculateTotal(expense) == calculateEstimatedTotal(expense.estimatedHours, expense.hourlyRate, expense.estimatedDays, expense.dailyRate) }\">{{calculateTotal(expense)}}</td>\n\t\t\t\t\t\t\t<td><button class=\"btn btn-success\" (click)=\"editExpense(expense._id); soon($event)\">Edit</button></td>\n\t\t\t\t\t\t\t<td><button class=\"btn btn-danger\" (click)=\"deleteExpense(expense._id, stage._id)\">Delete</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n            \t<td colspan=\"7\" class=\"hiddenRow\">\n            \t\t<div class=\"accordion-body collapse in\" [attr.id]=\"eliminateSpace(expense._id)\">\n            \t\t\t<div *ngIf=\"expense.actualTime.length > 0\" class=\"row\">\n            \t\t\t\t<div class=\"col-md text-center font-weight-bold\">Hours</div>\n            \t\t\t\t<div class=\"col-md text-center font-weight-bold\">Days</div>\n            \t\t\t\t<div class=\"col-md text-center font-weight-bold\">Date</div>\n            \t\t\t\t<div class=\"col-md text-center font-weight-bold\"></div>\n            \t\t\t</div>\n            \t\t\t<div *ngFor=\"let time of expense.actualTime\" class=\"row\">\n            \t\t\t\t<div class=\"col-md text-center\">{{time.hours}}</div>\n            \t\t\t\t<div class=\"col-md text-center\">{{time.days}}</div>\n            \t\t\t\t<div class=\"col-md text-center\">{{time.date | date: 'MMM/dd/yyyy'}}</div>\n            \t\t\t\t<div class=\"col-md text-center\"><button class=\"btn btn-danger mb-1\" (click)=\"soon($event)\">Delete</button></div>\n            \t\t\t</div>\n            \t\t\t<div class=\"row mt-2 mb-2\">\n            \t\t\t\t<div class=\"col-md\"><input [(ngModel)]=\"actualTime.hours\" type=\"number\" name=\"actualHours\" class=\"form-control\" placeholder=\"Hours\"></div>\n            \t\t\t\t<div class=\"col-md\"><input [(ngModel)]=\"actualTime.days\" type=\"number\" min=\"0\" max=\"1\" name=\"actualDays\" class=\"form-control\" placeholder=\"Days\"></div>\n            \t\t\t\t<div class=\"col-md\"><input [(ngModel)]=\"actualTime.date\" type=\"date\" name=\"actualDate\" class=\"form-control\" placeholder=\"Date\"></div>\n            \t\t\t\t<div class=\"col-md\"><button class=\"btn btn-primary\" (click)=\"saveActualTime(expense._id, stage._id)\">Add time</button></div>\n            \t\t\t</div>\n            \t\t</div>\n            \t</td>\n        \t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr class=\"table-info\">\n\t\t\t\t\t\t\t<th>Sub Total</th>\n\t\t\t\t\t\t\t<td>{{calculateSTEH(stage)}}</td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td>{{calculateSTMH(stage)}}</td>\n\t\t\t\t\t\t\t<td>{{calculateSTET(stage)}}</td>\n\t\t\t\t\t\t\t<td [ngClass]=\"{'text-success': calculateSTTH(stage) < calculateSTMH(stage), 'text-danger': calculateSTTH(stage) > calculateSTMH(stage), 'text-primary': calculateSTTH(stage) == calculateSTMH(stage)}\">{{calculateSTTH(stage)}}</td>\n\t\t\t\t\t\t\t<td [ngClass]=\"{'text-success': calculateSTET(stage) > calculateSTT(stage), 'text-danger': calculateSTET(stage) < calculateSTT(stage), 'text-primary': calculateSTET(stage) == calculateSTT(stage) }\">{{calculateSTT(stage)}}</td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><input [(ngModel)]=\"newExpense.name\" type=\"text\" name=\"expenseName\" class=\"form-control\" placeholder=\"Name\"></td>\n\t\t\t\t\t\t\t<td><input [(ngModel)]=\"newExpense.estimatedHours\" type=\"text\" name=\"estimatedHours\" class=\"form-control\" placeholder=\"Hours\"></td>\n\t\t\t\t\t\t\t<td><input [(ngModel)]=\"newExpense.hourlyRate\" type=\"text\" name=\"hourlyRate\" class=\"form-control\" placeholder=\"Rate /h\"></td>\n\t\t\t\t\t\t\t<td><input [(ngModel)]=\"newExpense.estimatedDays\" type=\"text\" name=\"estimatedDays\" class=\"form-control\" placeholder=\"Days\"></td>\n\t\t\t\t\t\t\t<td><input [(ngModel)]=\"newExpense.dailyRate\" type=\"text\" name=\"dailyRate\" class=\"form-control\" placeholder=\"Rate /d\"></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td colspan=\"2\"><button class=\"btn btn-primary\" (click)=\"saveExpense(stage._id)\">Add expense</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-primary mb-5\" (click)=\"showForm()\">Add new stage</button>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<form [class.add-stage]=\"addForm\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"stage.name\" type=\"text\" class=\"form-control mt-2\" name=\"name\" placeholder=\"Stage Name\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"saveStage()\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/job-view/job-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_service__ = __webpack_require__("./src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stage_service__ = __webpack_require__("./src/app/stage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expense_service__ = __webpack_require__("./src/app/expense.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobViewComponent = /** @class */ (function () {
    function JobViewComponent(jobService, stageService, expenseService, route, router) {
        this.jobService = jobService;
        this.stageService = stageService;
        this.expenseService = expenseService;
        this.route = route;
        this.router = router;
        this.job = {};
        this.stage = {};
        this.addForm = true;
        this.newExpense = {};
        this.actualTime = {};
    }
    JobViewComponent.prototype.ngOnInit = function () {
        this.showJob();
    };
    JobViewComponent.prototype.showJob = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.jobService.getJob(params.id); })
            .subscribe(function (res) {
            _this.job = res.job;
            _this.budget = _this.calculateBudget(_this.job);
            _this.total = _this.calculateGrandTotal(_this.job);
        });
    };
    JobViewComponent.prototype.saveStage = function () {
        var _this = this;
        this.stage.job = this.job._id;
        this.stageService.addStage(this.stage).subscribe(function (x) { return _this.jobService.addStageToJob(x.id, x.job)
            .subscribe(function (res) { return _this.showJob(); }); });
        this.stage = {};
    };
    JobViewComponent.prototype.deleteStage = function (id) {
        var _this = this;
        this.stageService.deleteStage(id).subscribe(function (x) { return _this.showJob(); });
    };
    JobViewComponent.prototype.showForm = function () {
        this.addForm = !this.addForm;
    };
    JobViewComponent.prototype.saveExpense = function (id) {
        var _this = this;
        this.expenseService.addExpenseToStage(this.newExpense, id).subscribe(function (x) { return _this.showJob(); });
        this.newExpense = {};
    };
    JobViewComponent.prototype.editExpense = function (id) {
        console.log('edit', id);
    };
    JobViewComponent.prototype.deleteExpense = function (expense, stage) {
        var _this = this;
        this.expenseService.deleteExpense(expense, stage).subscribe(function (x) { return _this.showJob(); });
    };
    JobViewComponent.prototype.saveActualTime = function (expense, stage) {
        var _this = this;
        this.expenseService.addActualTime(expense, stage, this.actualTime).subscribe(function (x) { return _this.showJob(); });
        this.actualTime = {};
    };
    JobViewComponent.prototype.deleteActualTime = function (time, expense, stage) {
        var _this = this;
        this.expenseService.deleteActualTime(time, expense, stage).subscribe(function (x) { return _this.showJob(); });
    };
    JobViewComponent.prototype.calculateEstimatedManHours = function (estimatedHours, estimatedDays) {
        if (!estimatedHours && !estimatedDays)
            return 0;
        if (estimatedHours && !estimatedDays)
            return estimatedHours;
        if (!estimatedHours && estimatedDays)
            return estimatedDays * 10;
        if (estimatedHours && estimatedDays)
            return estimatedHours + estimatedDays * 10;
    };
    JobViewComponent.prototype.calculateEstimatedTotal = function (estimatedHours, hourlyRate, estimatedDays, dailyRate) {
        if (!estimatedHours && !estimatedDays)
            return 0;
        if (estimatedHours && !estimatedDays)
            return estimatedHours * hourlyRate;
        if (!estimatedHours && estimatedDays)
            return estimatedDays * dailyRate;
        if (estimatedHours && estimatedDays)
            return estimatedHours * hourlyRate + estimatedDays * dailyRate;
    };
    JobViewComponent.prototype.calculateTotalHours = function (actualTime) {
        var actualHours = 0;
        var actualDays = 0;
        actualTime.forEach(function (element) {
            if (element.hours)
                actualHours = actualHours + element.hours;
            if (element.days)
                actualDays = actualDays + element.days;
        });
        if (actualTime.length < 1)
            return 0;
        if (!actualHours && !actualDays)
            return 0;
        if (actualHours && !actualDays)
            return actualHours;
        if (!actualHours && actualDays)
            return actualDays * 10;
        if (actualHours && actualDays)
            return actualHours + actualDays * 10;
    };
    JobViewComponent.prototype.calculateTotal = function (expense) {
        var actualHours = 0;
        var actualDays = 0;
        var dailyRate = expense.dailyRate;
        var hourlyRate = expense.hourlyRate;
        expense.actualTime.forEach(function (element) {
            if (element.hours)
                actualHours = actualHours + element.hours;
            if (element.days)
                actualDays = actualDays + element.days;
        });
        if (expense.actualTime.length < 1)
            return 0;
        if (!actualHours && !actualDays)
            return 0;
        if (actualHours && !actualDays)
            return actualHours * hourlyRate;
        if (!actualHours && actualDays)
            return dailyRate * actualDays;
        if (actualHours && actualDays)
            return hourlyRate * actualHours + dailyRate * actualDays;
    };
    JobViewComponent.prototype.eliminateSpace = function (string) {
        return string.replace(/\s/g, '');
    };
    JobViewComponent.prototype.soon = function ($event) {
        alert('Functionality will be added soon');
        $event.stopPropagation();
    };
    JobViewComponent.prototype.calculateSTEH = function (stage) {
        var result = 0;
        stage.expenses.forEach(function (element) {
            if (element.estimatedHours) {
                result = result + element.estimatedHours;
            }
        });
        return result;
    };
    JobViewComponent.prototype.calculateSTMH = function (stage) {
        var _this = this;
        var result = 0;
        stage.expenses.forEach(function (element) {
            if (element.estimatedHours || element.estimatedDays) {
                result = result + _this.calculateEstimatedManHours(element.estimatedHours, element.estimatedDays);
            }
        });
        return result;
    };
    JobViewComponent.prototype.calculateSTET = function (stage) {
        var _this = this;
        var result = 0;
        stage.expenses.forEach(function (element) {
            if (element.estimatedHours || element.estimatedDays) {
                result = result + _this.calculateEstimatedTotal(element.estimatedHours, element.hourlyRate, element.estimatedDays, element.dailyRate);
            }
        });
        return result;
    };
    JobViewComponent.prototype.calculateSTTH = function (stage) {
        var _this = this;
        var result = 0;
        stage.expenses.forEach(function (element) {
            if (element.actualTime) {
                result = result + _this.calculateTotalHours(element.actualTime);
            }
        });
        return result;
    };
    JobViewComponent.prototype.calculateSTT = function (stage) {
        var _this = this;
        var result = 0;
        stage.expenses.forEach(function (element) {
            if (element) {
                result = result + _this.calculateTotal(element);
            }
        });
        return result;
    };
    JobViewComponent.prototype.calculateBudget = function (job) {
        var _this = this;
        var result = 0;
        job.stages.forEach(function (element) {
            if (element) {
                result = result + _this.calculateSTET(element);
            }
        });
        return result;
    };
    JobViewComponent.prototype.calculateGrandTotal = function (job) {
        var _this = this;
        var result = 0;
        job.stages.forEach(function (element) {
            if (element) {
                result = result + _this.calculateSTT(element);
            }
        });
        return result;
    };
    JobViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job-view',
            template: __webpack_require__("./src/app/job-view/job-view.component.html"),
            styles: [__webpack_require__("./src/app/job-view/job-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_4__stage_service__["a" /* StageService */],
            __WEBPACK_IMPORTED_MODULE_5__expense_service__["a" /* ExpenseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], JobViewComponent);
    return JobViewComponent;
}());



/***/ }),

/***/ "./src/app/job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/shareReplay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobService = /** @class */ (function () {
    function JobService(http) {
        this.http = http;
    }
    JobService.prototype.getJobs = function () {
        return this.http.get("https://job-expense-tracker.herokuapp.com/api/jobs").shareReplay();
    };
    JobService.prototype.getJob = function (id) {
        return this.http.get("https://job-expense-tracker.herokuapp.com/api/jobs/" + id).shareReplay();
    };
    JobService.prototype.addJob = function (job) {
        return this.http.post("https://job-expense-tracker.herokuapp.com/api/jobs", job);
    };
    JobService.prototype.updateJob = function (job) {
        return this.http.patch("https://job-expense-tracker.herokuapp.com/api/jobs", job);
    };
    JobService.prototype.addStageToJob = function (stage, joId) {
        var s = {};
        s._id = stage;
        return this.http.put("https://job-expense-tracker.herokuapp.com/api/jobs/" + joId, s);
    };
    JobService.prototype.deleteJob = function (id) {
        return this.http.delete("https://job-expense-tracker.herokuapp.com/api/jobs/" + id);
    };
    JobService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md mb-5\" routerLink=\"/\">\n\t\t\t<h1>Home</h1>\n\t\t</div>\n\t\t\n\t</div>\n\t\n</div>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/stage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/shareReplay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StageService = /** @class */ (function () {
    function StageService(http) {
        this.http = http;
    }
    StageService.prototype.getStages = function () {
        return this.http.get("https://job-expense-tracker.herokuapp.com/api/stages").shareReplay();
    };
    StageService.prototype.getStage = function (id) {
        return this.http.get("https://job-expense-tracker.herokuapp.com/api/stages/" + id).shareReplay();
    };
    StageService.prototype.addStage = function (stage) {
        return this.http.post("https://job-expense-tracker.herokuapp.com/api/stages", stage);
    };
    StageService.prototype.addExpenseToStage = function (expense, staId) {
        var e = {};
        e._id = expense;
        return this.http.put("https://job-expense-tracker.herokuapp.com/api/jobs/" + staId, e);
    };
    StageService.prototype.updateStage = function (stage) {
        return this.http.patch("https://job-expense-tracker.herokuapp.com/api/stages", stage);
    };
    StageService.prototype.deleteStage = function (id) {
        return this.http.delete("https://job-expense-tracker.herokuapp.com/api/stages/" + id);
    };
    StageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], StageService);
    return StageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    Api_Url: 'http://localhost:3000',
    DB_URL: 'mongodb://localhost:27017/nodeDB'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
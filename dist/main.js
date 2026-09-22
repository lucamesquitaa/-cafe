"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["main"],{

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/component.base */ 125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9714);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/header/header.component */ 9381);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 1765);








function AppComponent_app_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r0.context.pageTitle);
  }
}
function AppComponent_app_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-footer", 6);
  }
}
class AppComponent extends _shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  constructor(injector, ngbConfig, router) {
    super(injector);
    this.injector = injector;
    this.router = router;
    this.menusVisivel = true;
    this.textSaudacao = "Olá";
    this.showHeaderFooter = true;
    ngbConfig.animation = false;
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        // Esconde header e footer na página de login
        this.showHeaderFooter = !event.url.includes('/login');
      }
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 2,
      consts: [[1, "app-container"], ["class", "header1", 3, "title", 4, "ngIf"], [1, "telas"], [1, "page-container"], ["class", "footer1", 4, "ngIf"], [1, "header1", 3, "title"], [1, "footer1"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_app_header_1_Template, 1, 1, "app-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_app_footer_5_Template, 1, 0, "app-footer", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showHeaderFooter);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showHeaderFooter);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
      styles: ["*[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  line-height: 1.6;\n  color: #2C1810;\n  background: #FAFAFA;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.header1[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  width: 100%;\n}\n\n.telas[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  background: linear-gradient(135deg, #FAFAFA 0%, #F5F5DC 100%);\n}\n@media (max-width: 768px) {\n  .telas[_ngcontent-%COMP%] {\n    padding-bottom: 90px;\n  }\n}\n.telas[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.footer1[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: auto;\n}\n@media (min-width: 769px) {\n  .footer1[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n@media (max-width: 768px) {\n  .footer1[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    z-index: 1000;\n  }\n}\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n*[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #8B4513;\n  outline-offset: 2px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-weight: 700;\n  line-height: 1.2;\n  color: #2C1810;\n}\n\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #6B4423;\n}\n\na[_ngcontent-%COMP%] {\n  color: #8B4513;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #654321;\n  text-decoration: underline;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 25px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #8B4513;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #654321;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #F5F5DC;\n  color: #8B4513;\n  border: 2px solid #E0E0E0;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #EEEEEE;\n  border-color: #D2B48C;\n}\n\n@media (max-width: 1200px) {\n  .telas[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .telas[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%] {\n    padding: 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsdUZBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUZGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO0FBSEY7QUFNRTtFQU5GO0lBT0ksb0JBQUE7RUFIRjtBQUNGO0FBTUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBSko7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFMRjtBQVFFO0VBTEY7SUFNSSxrQkFBQTtFQUxGO0FBQ0Y7QUFRRTtFQVZGO0lBV0ksZUFBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0VBTEY7QUFDRjs7QUFTQTtFQUNFLHVCQUFBO0FBTkY7O0FBVUE7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVJGOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBUkY7O0FBWUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQVRGO0FBV0U7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUFUSjs7QUFjQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtBQVhGO0FBYUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFYSjtBQWFJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FBWE47QUFlRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBYko7QUFlSTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFiTjs7QUFtQkE7RUFDRTtJQUNFLGVBQUE7RUFoQkY7QUFDRjtBQW1CQTtFQUNFO0lBQ0UsWUFBQTtFQWpCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyBSZXNldCBnbG9iYWxcclxuKiwgYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgY29sb3I6ICMyQzE4MTA7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxufVxyXG5cclxuLy8gTGF5b3V0IHByaW5jaXBhbFxyXG4uYXBwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uaGVhZGVyMSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRlbGFzIHtcclxuICBmbGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGQUZBRkEgMCUsICNGNUY1REMgMTAwJSk7XHJcbiAgXHJcbiAgLy8gUGFkZGluZyBwYXJhIG1vYmlsZSAoY29tIGJvdHRvbSBuYXYpXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOTBweDtcclxuICB9XHJcbiAgXHJcbiAgLy8gQ29udGFpbmVyIHJlc3BvbnNpdm9cclxuICAucGFnZS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyMSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBcclxuICAvLyBEZXNrdG9wOiBmb290ZXIgbm9ybWFsXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE1vYmlsZTogYm90dG9tIG5hdmlnYXRpb24gZml4YVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNtb290aCBzY3JvbGxpbmdcclxuaHRtbCB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi8vIE1lbGhvcmFyIGZvY28gcGFyYSBhY2Vzc2liaWxpZGFkZVxyXG4qOmZvY3VzIHtcclxuICBvdXRsaW5lOiAycHggc29saWQgIzhCNDUxMztcclxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59XHJcblxyXG4vLyBUaXBvZ3JhZmlhIGdsb2JhbCBtZWxob3JhZGFcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGNvbG9yOiAjMkMxODEwO1xyXG59XHJcblxyXG5wIHtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIGNvbG9yOiAjNkI0NDIzO1xyXG59XHJcblxyXG4vLyBFc3RpbG9zIHBhcmEgbGlua3NcclxuYSB7XHJcbiAgY29sb3I6ICM4QjQ1MTM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjU0MzIxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCb3TDg8K1ZXMgZ2xvYmFpc1xyXG4uYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICYuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogIzhCNDUxMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2NTQzMjE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNURDO1xyXG4gICAgY29sb3I6ICM4QjQ1MTM7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjRDJCNDhDO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2aWRhZGUgZ2xvYmFsXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAudGVsYXMgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50ZWxhcyAucGFnZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 635
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4727);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 495);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ 9213);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 4363);














class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__.CookieService
      // {
      //   provide: HTTP_INTERCEPTORS,
      //   useClass: AuthInterceptor,
      //   multi: true
      // },
      ],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__.ROUTES), _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule.forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule]
  });
})();

/***/ },

/***/ 2181
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'home',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_catalogo_catalogo_module_ts"), __webpack_require__.e("src_app_features_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/home/home.module */ 2829)).then(m => m.HomeModule)
}, {
  path: 'catalogo',
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_features_catalogo_catalogo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/catalogo/catalogo.module */ 535)).then(m => m.CatalogoModule)
}, {
  path: 'cafeteria/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_cafeteria_cafeteria_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/cafeteria/cafeteria.module */ 1273)).then(m => m.CafeteriaModule)
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/login/login.module */ 6065)).then(m => m.LoginModule)
}, {
  path: 'logs',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_logs_logs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/logs/logs.module */ 1157)).then(m => m.LogsModule)
}];

/***/ },

/***/ 125
/*!*****************************************************!*\
  !*** ./src/app/shared/components/component.base.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentBase: () => (/* binding */ ComponentBase)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/context.service */ 7337);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 9213);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4363);






/**
 * @description
 *
 * Componente básico
 */
class ComponentBase {
  get loading() {
    return this._loading;
  }
  constructor(injector) {
    this.injector = injector;
    this.literals = {};
    /**
     * Exibe ou não a animação de espera de consulta
     */
    this._loading = false;
    this._loadingCount = 0;
    this.http = injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient);
    this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
    this.activatedRoute = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute);
    this.cookieService = injector.get(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService);
    this.toastr = injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService);
    // Carrega o contexto global do usuário
    this.context = _services_context_service__WEBPACK_IMPORTED_MODULE_2__.ContextService.getContext();
  }
  ngOnInit() {}
  ngOnDestroy() {}
  /**
   * Exibe a animação de espera
   */
  showLoading() {
    if (this._loadingCount === 0) {
      this._loading = true;
    }
    this._loadingCount++;
  }
  /**
   * Esconde a animação de espera
   */
  hideLoading() {
    if (this._loadingCount > 0) {
      this._loadingCount--;
    }
    if (this._loadingCount === 0) {
      this._loading = false;
    }
  }
  static {
    this.ɵfac = function ComponentBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ComponentBase)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: ComponentBase,
      factory: ComponentBase.ɵfac
    });
  }
}

/***/ },

/***/ 1765
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component.base */ 125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);


class FooterComponent extends _component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  navigateTo(route) {
    this.router.navigate([route]);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵFooterComponent_BaseFactory;
      return function FooterComponent_Factory(__ngFactoryType__) {
        return (ɵFooterComponent_BaseFactory || (ɵFooterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FooterComponent)))(__ngFactoryType__ || FooterComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 62,
      vars: 0,
      consts: [[1, "modern-footer"], [1, "desktop-footer"], [1, "footer-container"], [1, "footer-section", "company-info"], [1, "footer-logo"], ["src", "assets/gra-logo.png", "alt", "Logo", "width", "200px", 1, "logo-img"], [1, "company-description"], [1, "social-links"], ["href", "#", 1, "social-link"], [1, "bi", "bi-instagram"], [1, "bi", "bi-facebook"], [1, "bi", "bi-twitter"], [1, "bi", "bi-whatsapp"], [1, "footer-section"], [1, "footer-links"], ["href", "#"], [1, "contact-info"], [1, "contact-item"], [1, "bi", "bi-geo-alt"], [1, "bi", "bi-telephone"], [1, "bi", "bi-envelope"], [1, "footer-bottom"], [1, "footer-badges"], [1, "badge"], [1, "bi", "bi-shield-check"], [1, "bi", "bi-award"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Clube Cafe\u00EDna");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Conectando voc\u00EA aos melhores caf\u00E9s da cidade. Descubra novos sabores, acumule pontos e desfrute de experi\u00EAncias \u00FAnicas. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Suporte");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 14)(23, "li")(24, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Central de Ajuda");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Termos de Uso");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Pol\u00EDtica de Privacidade");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Contato");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13)(36, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Contato");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16)(39, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Belo Horizonte, MG");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "(31) 9 9999-9999");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "contatocafeconnect.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 21)(52, "div", 2)(53, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u00A9 2025 Caf\u00E9 Connect. Todos os direitos reservados.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22)(56, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Pagamento Seguro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Qualidade Garantida ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  --primary-color: #03318C;\n  --primary-light: #426A8C;\n  --primary-dark: #1C4D8C;\n  --secondary-color: #F5F5DC;\n  --accent-color: #f58b44;\n  --text-dark: #3b3b3b;\n  --text-light: #919191;\n  --white: #FFFFFF;\n  --gray-50: #FAFAFA;\n  --gray-100: #F5F5F5;\n  --gray-200: #EEEEEE;\n  --gray-300: #E0E0E0;\n  --gray-500: #9E9E9E;\n  --gray-700: #374151;\n  --gray-800: #1F2937;\n  --gray-900: #111827;\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  --border-radius: 12px;\n  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.modern-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.desktop-footer[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--gray-900) 0%, var(--gray-800) 100%);\n  color: var(--white);\n}\n@media (max-width: 768px) {\n  .desktop-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 3rem 2rem 2rem;\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr;\n  gap: 2rem;\n}\n@media (max-width: 1024px) {\n  .desktop-footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n  }\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: var(--white);\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n  text-decoration: none;\n  transition: var(--transition);\n  font-size: 0.9rem;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n  padding-left: 0.25rem;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  color: var(--gray-300);\n  font-size: 0.9rem;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  color: var(--accent-color);\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section.company-info[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section.company-info[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background-color: white;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section.company-info[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  background: var(--accent-color);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section.company-info[_ngcontent-%COMP%]   .company-description[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  color: var(--gray-300);\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section.company-info[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section.company-info[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  text-decoration: none;\n  transition: var(--transition);\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section.company-info[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  transform: translateY(-2px);\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-section.company-info[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--gray-700);\n  padding: 1.5rem 0;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n  grid-template-columns: none;\n}\n@media (max-width: 768px) {\n  .desktop-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--gray-300);\n  font-size: 0.9rem;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .footer-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .footer-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 20px;\n  font-size: 0.8rem;\n  color: var(--gray-300);\n}\n.desktop-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .footer-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n\n.mobile-bottom-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: var(--white);\n  border-top: 1px solid var(--gray-200);\n  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n@media (min-width: 769px) {\n  .mobile-bottom-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0.75rem 0 calc(0.8rem + env(safe-area-inset-bottom, 20px));\n  max-width: 600px;\n  margin: 0 auto;\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem;\n  border: none;\n  background: none;\n  color: var(--gray-500);\n  transition: var(--transition);\n  cursor: pointer;\n  min-width: 60px;\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  transition: var(--transition);\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  transition: var(--transition);\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n  transform: translateY(-2px);\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 20px;\n  height: 3px;\n  background: var(--primary-color);\n  border-radius: 2px;\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:active {\n  position: relative;\n  overflow: hidden;\n}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:active::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(139, 69, 19, 0.3);\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_ripple 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_ripple {\n  to {\n    width: 80px;\n    height: 80px;\n    opacity: 0;\n  }\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    padding-bottom: calc(80px + env(safe-area-inset-bottom, 20px));\n  }\n}\n*[_ngcontent-%COMP%] {\n  transition: background-color var(--transition), color var(--transition), border-color var(--transition);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSw4Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxQkFBQTtFQUNBLG1EQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUlBO0VBQ0UsNkVBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFKRjtJQUtJLGFBQUE7RUFBRjtBQUNGO0FBRUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFNBQUE7QUFBSjtBQUVJO0VBUkY7SUFTSSw4QkFBQTtJQUNBLFNBQUE7RUFDSjtBQUNGO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUROO0FBSUk7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRk47QUFJTTtFQUNFLHFCQUFBO0FBRlI7QUFJUTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBRlY7QUFJVTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUFGWjtBQVNNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQVBSO0FBU1E7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUFQVjtBQWFNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBWFI7QUFhUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQVhWO0FBY1E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FBWlY7QUFnQk07RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFkUjtBQWlCTTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBZlI7QUFpQlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQWZWO0FBaUJVO0VBQ0UsZ0NBQUE7RUFDQSwyQkFBQTtBQWZaO0FBa0JVO0VBQ0UsaUJBQUE7QUFoQlo7QUF1QkU7RUFDRSxxQ0FBQTtFQUNBLGlCQUFBO0FBckJKO0FBdUJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFyQk47QUF1Qk07RUFQRjtJQVFJLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0VBcEJOO0FBQ0Y7QUFzQk07RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQXBCUjtBQXVCTTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBckJSO0FBdUJRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFyQlY7QUF1QlU7RUFDRSwwQkFBQTtBQXJCWjs7QUE4QkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUEzQkY7QUE2QkU7RUFYRjtJQVlJLGFBQUE7RUExQkY7QUFDRjtBQTRCRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUExQko7QUE0Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBMUJOO0FBNEJNO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQTFCUjtBQTZCTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQTNCUjtBQThCTTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUE1QlI7QUErQk07RUFDRSwyQkFBQTtBQTdCUjtBQStCUTtFQUNFLHFCQUFBO0FBN0JWO0FBZ0NRO0VBQ0UsZ0JBQUE7QUE5QlY7QUFpQ1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBL0JWO0FBb0NNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQWxDUjtBQW9DUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQWxDVjs7QUEwQ0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQXZDRjtBQUNGO0FBMkNBO0VBQ0U7SUFDRSw4REFBQTtFQXpDRjtBQUNGO0FBNkNBO0VBQ0UsdUdBQUE7QUEzQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWYXJpw4PCoXZlaXMgZG8gZGVzaWduIHN5c3RlbVxyXG46aG9zdCB7XHJcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDMzMThDO1xyXG4gIC0tcHJpbWFyeS1saWdodDogIzQyNkE4QztcclxuICAtLXByaW1hcnktZGFyazogIzFDNEQ4QztcclxuICAtLXNlY29uZGFyeS1jb2xvcjogI0Y1RjVEQztcclxuICAtLWFjY2VudC1jb2xvcjogI2Y1OGI0NDtcclxuICAtLXRleHQtZGFyazogIzNiM2IzYjtcclxuICAtLXRleHQtbGlnaHQ6ICM5MTkxOTE7XHJcbiAgLS13aGl0ZTogI0ZGRkZGRjtcclxuICAtLWdyYXktNTA6ICNGQUZBRkE7XHJcbiAgLS1ncmF5LTEwMDogI0Y1RjVGNTtcclxuICAtLWdyYXktMjAwOiAjRUVFRUVFO1xyXG4gIC0tZ3JheS0zMDA6ICNFMEUwRTA7XHJcbiAgLS1ncmF5LTUwMDogIzlFOUU5RTtcclxuICAtLWdyYXktNzAwOiAjMzc0MTUxO1xyXG4gIC0tZ3JheS04MDA6ICMxRjI5Mzc7XHJcbiAgLS1ncmF5LTkwMDogIzExMTgyNztcclxuICAtLXNoYWRvdy1zbTogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAtLXNoYWRvdy1tZDogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC0tc2hhZG93LWxnOiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAtLXNoYWRvdy14bDogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIC0tdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLm1vZGVybi1mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi8vIERlc2t0b3AgRm9vdGVyXHJcbi5kZXNrdG9wLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tZ3JheS05MDApIDAlLCB2YXIoLS1ncmF5LTgwMCkgMTAwJSk7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogM3JlbSAycmVtIDJyZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnI7XHJcbiAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgIGdhcDogMnJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb290ZXItc2VjdGlvbiB7XHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbGlua3Mge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8ge1xyXG4gICAgICAuY29udGFjdC1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktMzAwKTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuY29tcGFueS1pbmZvIHtcclxuICAgICAgLmZvb3Rlci1sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgIC5sb2dvLWltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbXBhbnktZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zb2NpYWwtbGlua3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG5cclxuICAgICAgICAuc29jaWFsLWxpbmsge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb290ZXItYm90dG9tIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuXHJcbiAgICAuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG5vbmU7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS0zMDApO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9vdGVyLWJhZGdlcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktMzAwKTtcclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNb2JpbGUgQm90dG9tIE5hdmlnYXRpb25cclxuLm1vYmlsZS1ib3R0b20tbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBib3gtc2hhZG93OiAwIC00cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5ib3R0b20tbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAgY2FsYygwLjhyZW0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSwgMjBweCkpO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMC4yNXJlbTtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XHJcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG1pbi13aWR0aDogNjBweDtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogLTAuNXJlbTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEVmZWl0byByaXBwbGUgYW8gdG9jYXJcclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMzksIDY5LCAxOSwgMC4zKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiByaXBwbGUgMC42cyBlYXNlLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFuaW1hw4PCp8ODwrVlc1xyXG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XHJcbiAgdG8ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRpY2lvbmFyIHBhZGRpbmcgYm90dG9tIG5vIGJvZHkgcGFyYSBjb21wZW5zYXIgbyBmb290ZXIgZml4byBtb2JpbGVcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoODBweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tLCAyMHB4KSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTbW9vdGggdHJhbnNpdGlvbnMgcGFyYSBtdWRhbsODwqdhcyBkZSB0ZW1hXHJcbioge1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgdmFyKC0tdHJhbnNpdGlvbiksIGNvbG9yIHZhcigtLXRyYW5zaXRpb24pLCBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbik7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 9381
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component.base */ 125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _ng_bootstrap_ng_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/dropdown */ 4727);




function HeaderComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Conectando voc\u00EA aos melhores estabelecimentos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class HeaderComponent extends _component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  constructor() {
    super(...arguments);
    this.title = 'Clube Cafeína';
    this.isLoved = false;
  }
  toggleLove() {
    this.isLoved = !this.isLoved;
  }
  routerHome() {
    this.router.navigate(['/home']);
  }
  irParaLogs() {
    this.router.navigate(['/logs']);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵHeaderComponent_BaseFactory;
      return function HeaderComponent_Factory(__ngFactoryType__) {
        return (ɵHeaderComponent_BaseFactory || (ɵHeaderComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](HeaderComponent)))(__ngFactoryType__ || HeaderComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        title: "title"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 68,
      vars: 2,
      consts: [[1, "modern-header"], [1, "navbar"], [1, "navbar-container"], [1, "brand-section"], [1, "logo-container"], ["src", "assets/gra-logo.png", "alt", "Logo Caf\u00E9", 1, "logo"], [1, "logo-animation"], [1, "brand-info"], [1, "brand-title"], ["class", "brand-subtitle", 4, "ngIf"], [1, "header-actions"], ["ngbDropdown", "", 1, "user-menu-dropdown"], ["id", "dropdownForm1", "ngbDropdownToggle", "", 1, "user-menu-btn"], [1, "user-avatar"], ["src", "assets/eu-foto-whats.jpg", "alt", "Avatar", 1, "avatar-img"], [1, "online-indicator"], [1, "user-info"], [1, "user-name"], [1, "user-points"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownForm1", 1, "modern-dropdown"], [1, "dropdown-header"], [1, "user-profile"], ["src", "assets/eu-foto-whats.jpg", "alt", "Avatar", 1, "profile-img"], [1, "profile-info"], [1, "dropdown-section"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item"], [1, "bi", "bi-person"], [1, "bi", "bi-star"], [1, "bi", "bi-currency-dollar"], [1, "points-badge"], [1, "bi", "bi-clock-history"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-terminal"], [1, "bi", "bi-gear"], [1, "bi", "bi-question-circle"], [1, "dropdown-footer"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item", "logout-btn"], [1, "bi", "bi-box-arrow-right"], [1, "brand-subtitle"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeaderComponent_span_10_Template, 2, 0, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "button", 12)(14, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 14)(16, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16)(18, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Luca");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "1.250 pts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19)(23, "div", 20)(24, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 23)(27, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Luca Mesquita");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "lucamesquitaa@gmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24)(32, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Meu Perfil");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Meus Favoritos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Meus Pontos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "1.250");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Hist\u00F3rico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 24)(51, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_51_listener() {
            return ctx.irParaLogs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Logs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Configura\u00E7\u00F5es");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Ajuda");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 35)(64, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Sair");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title == "Clube do Cafe\u00EDna");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_bootstrap_ng_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownButtonItem],
      styles: ["[_nghost-%COMP%] {\n  --primary-color: #03318C;\n  --primary-light: #426A8C;\n  --primary-dark: #1C4D8C;\n  --secondary-color: #F5F5DC;\n  --accent-color: #f58b44;\n  --text-dark: #3b3b3b;\n  --text-light: #919191;\n  --white: #FFFFFF;\n  --gray-50: #FAFAFA;\n  --gray-100: #F5F5F5;\n  --gray-200: #EEEEEE;\n  --gray-300: #E0E0E0;\n  --gray-500: #9E9E9E;\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  --border-radius: 12px;\n  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.modern-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: var(--white);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-bottom: 1px solid var(--gray-200);\n  box-shadow: var(--shadow-md);\n}\n.modern-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.modern-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .modern-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n    gap: 1rem;\n  }\n}\n.modern-header[_ngcontent-%COMP%]   .brand-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n.modern-header[_ngcontent-%COMP%]   .brand-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.modern-header[_ngcontent-%COMP%]   .brand-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  transition: var(--transition);\n}\n.modern-header[_ngcontent-%COMP%]   .brand-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05) rotate(5deg);\n  box-shadow: var(--shadow-md);\n}\n.modern-header[_ngcontent-%COMP%]   .brand-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-animation[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  border-radius: 14px;\n  background: linear-gradient(45deg, var(--primary-color), var(--accent-color), var(--primary-light));\n  opacity: 0;\n  z-index: -1;\n  transition: var(--transition);\n}\n.modern-header[_ngcontent-%COMP%]   .brand-section[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .modern-header[_ngcontent-%COMP%]   .brand-section[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    color: var(--text-dark);\n  }\n}\n@media (max-width: 480px) {\n  .modern-header[_ngcontent-%COMP%]   .brand-section[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.modern-header[_ngcontent-%COMP%]   .brand-section[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n  font-weight: 500;\n}\n.modern-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  border: 2px solid var(--gray-200);\n  border-radius: 25px;\n  transition: var(--transition);\n  cursor: pointer;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n  background: var(--gray-50);\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  position: relative;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   .online-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -1px;\n  right: -1px;\n  width: 10px;\n  height: 10px;\n  background: #10b981;\n  border: 2px solid var(--white);\n  border-radius: 50%;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n@media (max-width: 480px) {\n  .modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--text-dark);\n  line-height: 1;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-points[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--accent-color);\n  font-weight: 600;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%] {\n  min-width: 280px;\n  border: none;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow-xl);\n  padding: 0;\n  margin-top: 0.5rem;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%] {\n    min-width: 320px;\n    max-width: calc(100vw - 2rem);\n    position: fixed !important;\n    right: 1rem !important;\n    left: auto !important;\n    top: 4.5rem !important;\n    transform: none !important;\n    z-index: 1050;\n  }\n  .modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.3);\n    z-index: -1;\n    -webkit-backdrop-filter: blur(2px);\n            backdrop-filter: blur(2px);\n  }\n}\n@media (max-width: 480px) {\n  .modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%] {\n    min-width: calc(100vw - 2rem);\n    max-width: calc(100vw - 2rem);\n    right: 1rem !important;\n    left: 1rem !important;\n  }\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));\n  color: var(--white);\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  opacity: 0.8;\n  margin: 0;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-section[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--gray-200);\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1.5rem;\n  color: var(--text-dark);\n  text-decoration: none;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  transition: var(--transition);\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n  color: var(--primary-color);\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  font-size: 1rem;\n  color: var(--gray-500);\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .points-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--accent-color);\n  color: var(--white);\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-item.logout-btn[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-item.logout-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-item.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(231, 76, 60, 0.1);\n}\n.modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%]   .dropdown-footer[_ngcontent-%COMP%] {\n  padding: 0.5rem 0 0 0;\n}\n\n@media (max-width: 768px) {\n  .modern-header[_ngcontent-%COMP%] {\n    padding-top: env(safe-area-inset-top, 20px);\n  }\n  .modern-header[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .modern-header[_ngcontent-%COMP%]   .user-menu-dropdown[_ngcontent-%COMP%]   .modern-dropdown[_ngcontent-%COMP%] {\n    position: fixed !important;\n    top: 4.5rem !important;\n    right: 1rem !important;\n    left: auto !important;\n    transform: none !important;\n    margin-top: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLHdCQUFBO0VBQ0Msd0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSw4Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxQkFBQTtFQUNBLG1EQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtBQUFGO0FBRUU7RUFDRSxVQUFBO0FBQUo7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUFOO0FBRU07RUFWRjtJQVdJLGFBQUE7SUFDQSxTQUFBO0VBQ047QUFDRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFGSjtBQUlJO0VBQ0Usa0JBQUE7QUFGTjtBQUlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFGUjtBQUlRO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtBQUZWO0FBTU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1HQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUpSO0FBWU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBVlI7QUFZUTtFQU5GO0lBT0ksa0JBQUE7SUFDQSx1QkFBQTtFQVRSO0FBQ0Y7QUFhVTtFQURKO0lBRU0sYUFBQTtFQVZWO0FBQ0Y7QUFPTTtFQUlFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVJSO0FBY0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBWko7QUFnQkU7RUFDRSxrQkFBQTtBQWRKO0FBZ0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUVBLDZCQUFBO0VBQ0EsZUFBQTtBQWZOO0FBaUJNO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtBQWZSO0FBa0JNO0VBQ0Usa0JBQUE7QUFoQlI7QUFrQlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFoQlY7QUFtQlE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFqQlY7QUFxQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQW5CUjtBQXFCUTtFQUxGO0lBTUksYUFBQTtFQWxCUjtBQUNGO0FBb0JRO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWxCVjtBQXFCUTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQW5CVjtBQXdCSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXRCTjtBQXdCTTtFQVRGO0lBVUksZ0JBQUE7SUFDQSw2QkFBQTtJQUNBLDBCQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsMEJBQUE7SUFDQSxhQUFBO0VBckJOO0VBd0JNO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsOEJBQUE7SUFDQSxXQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQXRCUjtBQUNGO0FBeUJNO0VBakNGO0lBa0NJLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0VBdEJOO0FBQ0Y7QUF3Qk07RUFDRSxlQUFBO0VBQ0EsOEVBQUE7RUFDQSxtQkFBQTtBQXRCUjtBQXdCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF0QlY7QUF3QlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUF0Qlo7QUEwQlk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQXhCZDtBQTJCWTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUF6QmQ7QUErQk07RUFDRSxpQkFBQTtFQUNBLHdDQUFBO0FBN0JSO0FBK0JRO0VBQ0UsbUJBQUE7QUE3QlY7QUFpQ007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUEvQlI7QUFpQ1E7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FBL0JWO0FBa0NRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQWhDVjtBQW1DUTtFQUNFLDJCQUFBO0FBakNWO0FBb0NRO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsQ1Y7QUFxQ1E7RUFDRSxjQUFBO0FBbkNWO0FBcUNVO0VBQ0UsY0FBQTtBQW5DWjtBQXNDVTtFQUNFLGtDQUFBO0FBcENaO0FBeUNNO0VBQ0UscUJBQUE7QUF2Q1I7O0FBNkNBO0VBQ0U7SUFDRSwyQ0FBQTtFQTFDRjtFQTJDRTtJQUNFLGVBQUE7RUF6Q0o7RUE0Q0U7SUFDRSxrQkFBQTtFQTFDSjtFQTRDSTtJQUNFLDBCQUFBO0lBQ0Esc0JBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsMEJBQUE7SUFDQSx3QkFBQTtFQTFDTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVmFyacODwqF2ZWlzIGRvIGRlc2lnbiBzeXN0ZW1cclxuOmhvc3Qge1xyXG4gLS1wcmltYXJ5LWNvbG9yOiAjMDMzMThDO1xyXG4gIC0tcHJpbWFyeS1saWdodDogIzQyNkE4QztcclxuICAtLXByaW1hcnktZGFyazogIzFDNEQ4QztcclxuICAtLXNlY29uZGFyeS1jb2xvcjogI0Y1RjVEQztcclxuICAtLWFjY2VudC1jb2xvcjogI2Y1OGI0NDtcclxuICAtLXRleHQtZGFyazogIzNiM2IzYjtcclxuICAtLXRleHQtbGlnaHQ6ICM5MTkxOTE7XHJcbiAgLS13aGl0ZTogI0ZGRkZGRjtcclxuICAtLWdyYXktNTA6ICNGQUZBRkE7XHJcbiAgLS1ncmF5LTEwMDogI0Y1RjVGNTtcclxuICAtLWdyYXktMjAwOiAjRUVFRUVFO1xyXG4gIC0tZ3JheS0zMDA6ICNFMEUwRTA7XHJcbiAgLS1ncmF5LTUwMDogIzlFOUU5RTtcclxuICAtLXNoYWRvdy1zbTogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAtLXNoYWRvdy1tZDogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC0tc2hhZG93LWxnOiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAtLXNoYWRvdy14bDogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIC0tdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLm1vZGVybi1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQnJhbmQgU2VjdGlvblxyXG4gIC5icmFuZC1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgLmxvZ28tY29udGFpbmVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBcclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHJvdGF0ZSg1ZGVnKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9nby1hbmltYXRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgbGVmdDogLTJweDtcclxuICAgICAgICByaWdodDogLTJweDtcclxuICAgICAgICBib3R0b206IC0ycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1hY2NlbnQtY29sb3IpLCB2YXIoLS1wcmltYXJ5LWxpZ2h0KSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYnJhbmQtaW5mbyB7XHJcbiAgICBcclxuXHJcbiAgICAgIC5icmFuZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJyYW5kLXN1YnRpdGxlIHtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktNjAwKTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBIZWFkZXIgQWN0aW9uc1xyXG4gIC5oZWFkZXItYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcblxyXG4gIC8vIFVzZXIgTWVudVxyXG4gIC51c2VyLW1lbnUtZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC51c2VyLW1lbnUtYnRuIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBcclxuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS01MCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51c2VyLWF2YXRhciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuYXZhdGFyLWltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9ubGluZS1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMGI5ODE7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci1wb2ludHMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tb2Rlcm4tZHJvcGRvd24ge1xyXG4gICAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDJyZW0pO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogMTA1MDtcclxuXHJcbiAgICAgICAgLy8gQmFja2Ryb3AgcGFyYSBtb2JpbGVcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XHJcbiAgICAgICAgcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kcm9wZG93bi1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdmFyKC0tcHJpbWFyeS1kYXJrKSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICAgICAgLnVzZXItcHJvZmlsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICAgICAgICAucHJvZmlsZS1pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJvZmlsZS1pbmZvIHtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZHJvcGRvd24tc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMC43NXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTUwKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciBpIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb2ludHMtYmFkZ2Uge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmxvZ291dC1idG4ge1xyXG4gICAgICAgICAgY29sb3I6ICNlNzRjM2M7XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTc0YzNjO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRyb3Bkb3duLWZvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAgMCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubW9kZXJuLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3AsIDIwcHgpO1xyXG4gICAgLm5hdmJhci1jb250YWluZXIge1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItbWVudS1kcm9wZG93biB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgIC5tb2Rlcm4tZHJvcGRvd24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 1285
/*!**********************************************************!*\
  !*** ./src/app/shared/components/item/item.component.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemComponent: () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var _models_photo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/photo.model */ 6722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);


class ItemComponent {
  toggleFavorite(event) {
    event.stopPropagation();
    this.cafeteria.fav = !this.cafeteria.fav;
  }
  /** Se a URL do bucket falhar, volta para o placeholder em vez de mostrar imagem quebrada. */
  usarPlaceholder() {
    if (this.cafeteria.image !== _models_photo_model__WEBPACK_IMPORTED_MODULE_0__.FOTO_PLACEHOLDER) {
      this.cafeteria.image = _models_photo_model__WEBPACK_IMPORTED_MODULE_0__.FOTO_PLACEHOLDER;
    }
  }
  static {
    this.ɵfac = function ItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ItemComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ItemComponent,
      selectors: [["app-item"]],
      inputs: {
        cafeteria: "cafeteria"
      },
      standalone: false,
      decls: 30,
      vars: 10,
      consts: [[1, "modern-cafeteria-card"], [1, "card-image-container"], ["loading", "lazy", 1, "card-image", 3, "error", "src", "alt"], [1, "image-overlay"], ["type", "button", 1, "favorite-btn", 3, "click"], [1, "bi"], [1, "card-content"], [1, "card-header"], [1, "cafeteria-name"], [1, "rating"], [1, "stars"], [1, "bi", "bi-star-fill"], [1, "bi", "bi-star"], [1, "rating-text"], [1, "card-details"], [1, "cafeteria-description"], [1, "detail-item"], [1, "bi", "bi-geo-alt"], [1, "card-actions"], [1, "action-btn", "primary"], [1, "bi", "bi-arrow-right"]],
      template: function ItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function ItemComponent_Template_img_error_2_listener() {
            return ctx.usarPlaceholder();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_4_listener($event) {
            return ctx.toggleFavorite($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11)(13, "i", 11)(14, "i", 11)(15, "i", 11)(16, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "(4.2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "1.2 km");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18)(27, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Ver Card\u00E1pio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.cafeteria.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.cafeteria.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.cafeteria.fav);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-heart", !ctx.cafeteria.fav)("bi-heart-fill", ctx.cafeteria.fav);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cafeteria.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cafeteria.description);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  --primary-color: #03318C;\n  --primary-light: #426A8C;\n  --primary-dark: #1C4D8C;\n  --secondary-color: #F5F5DC;\n  --accent-color: #f58b44;\n  --text-dark: #3b3b3b;\n  --text-light: #919191;\n  --white: #FFFFFF;\n  --gray-50: #FAFAFA;\n  --gray-100: #F5F5F5;\n  --gray-200: #EEEEEE;\n  --gray-300: #E0E0E0;\n  --gray-500: #9E9E9E;\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  --border-radius: 12px;\n  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.modern-cafeteria-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transition: var(--transition);\n  cursor: pointer;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-xl);\n  transform: translateY(-4px);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]:hover   .favorite-btn[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  transition: var(--transition);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(139, 69, 19, 0.2) 100%);\n  opacity: 0;\n  transition: var(--transition);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%]:hover   .image-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%]   .favorite-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 40px;\n  height: 40px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: var(--transition);\n  cursor: pointer;\n  z-index: 10;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%]   .favorite-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--gray-500);\n  transition: var(--transition);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%]   .favorite-btn[_ngcontent-%COMP%]:hover {\n  background: var(--white);\n  transform: scale(1.1);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%]   .favorite-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%]   .favorite-btn.active[_ngcontent-%COMP%] {\n  background: #e74c3c;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%]   .favorite-btn.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .cafeteria-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n  line-height: 1.3;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   i.bi-star-fill[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   i.bi-star[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rating-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-light);\n  font-weight: 500;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .cafeteria-description[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  line-height: 1.5;\n  margin-bottom: 1rem;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-light);\n  padding: 0px 10px;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  font-size: 0.875rem;\n  color: var(--primary-color);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .price-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .price-info[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .price-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--primary-color);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: var(--white);\n  border: none;\n  padding: 0.75rem 1.25rem;\n  border-radius: 25px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: var(--transition);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(2px);\n}\n.modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: var(--transition);\n}\n\n@media (max-width: 768px) {\n  .modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n  .modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .modern-cafeteria-card[_ngcontent-%COMP%]   .card-image-container[_ngcontent-%COMP%] {\n    height: 140px;\n  }\n  .modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n  }\n  .modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .cafeteria-name[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .modern-cafeteria-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Msd0JBQUE7RUFDQyx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLHFCQUFBO0VBQ0EsbURBQUE7QUFBRjs7QUFHQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFGO0FBRUU7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0FBQUo7QUFFSTtFQUNFLHNCQUFBO0FBQU47QUFHSTtFQUNFLHFCQUFBO0FBRE47QUFLRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSEo7QUFLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBSE47QUFNSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9IQUFBO0VBTUEsVUFBQTtFQUNBLDZCQUFBO0FBVE47QUFZSTtFQUNFLFVBQUE7QUFWTjtBQWFJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBWE47QUFhTTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQVhSO0FBY007RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0FBWlI7QUFjUTtFQUNFLGNBQUE7QUFaVjtBQWdCTTtFQUNFLG1CQUFBO0FBZFI7QUFnQlE7RUFDRSxtQkFBQTtBQWRWO0FBb0JFO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFsQko7QUFvQkk7RUFDRSxtQkFBQTtBQWxCTjtBQW9CTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFsQlI7QUFxQk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBbkJSO0FBcUJRO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFuQlY7QUFxQlU7RUFDRSxtQkFBQTtBQW5CWjtBQXFCWTtFQUNFLGNBQUE7QUFuQmQ7QUFzQlk7RUFDRSxzQkFBQTtBQXBCZDtBQXlCUTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQXZCVjtBQTRCSTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTFCTjtBQTZCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQTNCTjtBQTZCTTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQTNCUjtBQTRCUTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBMUJWO0FBK0JJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUE3Qk47QUErQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUE3QlI7QUErQlE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBN0JWO0FBZ0NRO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBOUJWO0FBa0NNO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQWhDUjtBQWtDUTtFQUNFLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQWhDVjtBQWtDVTtFQUNFLDBCQUFBO0FBaENaO0FBb0NRO0VBQ0UsNkJBQUE7QUFsQ1Y7O0FBMENBO0VBRUk7SUFDRSxhQUFBO0VBeENKO0VBMkNFO0lBQ0UsYUFBQTtFQXpDSjtFQTJDSTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUF6Q047RUE0Q0k7SUFDRSxzQkFBQTtJQUNBLFNBQUE7SUFDQSxvQkFBQTtFQTFDTjtFQTRDTTtJQUNFLFdBQUE7SUFDQSx1QkFBQTtFQTFDUjtBQUNGO0FBZ0RBO0VBRUk7SUFDRSxhQUFBO0VBL0NKO0VBa0RFO0lBQ0UsaUJBQUE7RUFoREo7RUFrREk7SUFDRSxpQkFBQTtFQWhETjtFQW1ESTtJQUNFLG1CQUFBO0VBakROO0VBbURNO0lBQ0UsaUJBQUE7RUFqRFI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFZhcmnDg8KhdmVpc1xyXG46aG9zdCB7XHJcbiAtLXByaW1hcnktY29sb3I6ICMwMzMxOEM7XHJcbiAgLS1wcmltYXJ5LWxpZ2h0OiAjNDI2QThDO1xyXG4gIC0tcHJpbWFyeS1kYXJrOiAjMUM0RDhDO1xyXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjRjVGNURDO1xyXG4gIC0tYWNjZW50LWNvbG9yOiAjZjU4YjQ0O1xyXG4gIC0tdGV4dC1kYXJrOiAjM2IzYjNiO1xyXG4gIC0tdGV4dC1saWdodDogIzkxOTE5MTtcclxuICAtLXdoaXRlOiAjRkZGRkZGO1xyXG4gIC0tZ3JheS01MDogI0ZBRkFGQTtcclxuICAtLWdyYXktMTAwOiAjRjVGNUY1O1xyXG4gIC0tZ3JheS0yMDA6ICNFRUVFRUU7XHJcbiAgLS1ncmF5LTMwMDogI0UwRTBFMDtcclxuICAtLWdyYXktNTAwOiAjOUU5RTlFO1xyXG4gIC0tc2hhZG93LXNtOiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIC0tc2hhZG93LW1kOiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgLS1zaGFkb3ctbGc6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC0tc2hhZG93LXhsOiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgLS10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubW9kZXJuLWNhZmV0ZXJpYS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICAgIFxyXG4gICAgLmNhcmQtaW1hZ2Uge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmF2b3JpdGUtYnRuIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2FyZC1pbWFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxuICAgIC5jYXJkLWltYWdlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltYWdlLW92ZXJsYXkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDEzNWRlZyxcclxuICAgICAgICByZ2JhKDEzOSwgNjksIDE5LCAwLjEpIDAlLFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4wNSkgNTAlLFxyXG4gICAgICAgIHJnYmEoMTM5LCA2OSwgMTksIDAuMikgMTAwJVxyXG4gICAgICApO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJjpob3ZlciAuaW1hZ2Utb3ZlcmxheSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mYXZvcml0ZS1idG4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMXJlbTtcclxuICAgICAgcmlnaHQ6IDFyZW07XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktNTAwKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICBcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjZTc0YzNjO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgXHJcbiAgICAgIC5jYWZldGVyaWEtbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5yYXRpbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAuc3RhcnMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGdhcDogMnB4O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYuYmktc3Rhci1maWxsIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmYzEwNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi5iaS1zdGFyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS0zMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yYXRpbmctdGV4dCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhZmV0ZXJpYS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtZGV0YWlscyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIFxyXG4gICAgICAuZGV0YWlsLWl0ZW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC1hY3Rpb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIC5wcmljZS1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnByaWNlLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hY3Rpb24tYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgZGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2Rlcm4tY2FmZXRlcmlhLWNhcmQge1xyXG4gICAgLmNhcmQtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIFxyXG4gICAgICAuY2FyZC1kZXRhaWxzIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY2FyZC1hY3Rpb25zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBcclxuICAgICAgICAuYWN0aW9uLWJ0biB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLm1vZGVybi1jYWZldGVyaWEtY2FyZCB7XHJcbiAgICAuY2FyZC1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMC44NzVyZW07XHJcbiAgICAgIFxyXG4gICAgICAuY2FmZXRlcmlhLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY2FyZC1kZXRhaWxzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5kZXRhaWwtaXRlbSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 6722
/*!**********************************************!*\
  !*** ./src/app/shared/models/photo.model.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOTO_PLACEHOLDER: () => (/* binding */ FOTO_PLACEHOLDER),
/* harmony export */   escolherCapa: () => (/* binding */ escolherCapa)
/* harmony export */ });
/** Imagem exibida quando a cafeteria ainda não tem fotos ou a URL do bucket falha. */
const FOTO_PLACEHOLDER = 'assets/chHD.jpg';
/**
 * Foto de capa da galeria: a marcada como destaque (stared) ou, na falta, a primeira.
 */
function escolherCapa(fotos) {
  return fotos.find(foto => !!foto.stared) ?? fotos[0];
}

/***/ },

/***/ 7337
/*!****************************************************!*\
  !*** ./src/app/shared/services/context.service.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextService: () => (/* binding */ ContextService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);

class ContextService {
  static {
    this.context = {
      usuarioAutenticado: false,
      token: "",
      usuario: {
        id: "",
        email: "",
        username: ""
      },
      cart: {
        number: 0,
        products: []
      },
      pageTitle: "Clube Cafeína"
    };
  }
  static getContext() {
    return ContextService.context;
  }
  static {
    this.ɵfac = function ContextService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContextService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContextService,
      factory: ContextService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 3887
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4727);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4131);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 9381);
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/item/item.component */ 1285);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ 1765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4363);







class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownConfig],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTypeaheadModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTypeaheadModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_item_item_component__WEBPACK_IMPORTED_MODULE_6__.ItemComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTypeaheadModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTypeaheadModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule, _components_item_item_component__WEBPACK_IMPORTED_MODULE_6__.ItemComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent]
  });
})();

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1643), __webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
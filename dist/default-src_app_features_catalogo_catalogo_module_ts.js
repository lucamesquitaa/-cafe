"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["default-src_app_features_catalogo_catalogo_module_ts"],{

/***/ 6382
/*!**************************************************************!*\
  !*** ./src/app/features/catalogo/catalogo-routing.module.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogoRoutingModule: () => (/* binding */ CatalogoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _catalogo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogo.component */ 856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4363);




const routes = [{
  path: '',
  component: _catalogo_component__WEBPACK_IMPORTED_MODULE_1__.CatalogoComponent
}];
class CatalogoRoutingModule {
  static {
    this.ɵfac = function CatalogoRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CatalogoRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CatalogoRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CatalogoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 856
/*!*********************************************************!*\
  !*** ./src/app/features/catalogo/catalogo.component.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogoComponent: () => (/* binding */ CatalogoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/component.base */ 125);
/* harmony import */ var src_app_shared_models_photo_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/photo.model */ 6722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var src_app_shared_services_cafeteria_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/cafeteria.service */ 3648);
/* harmony import */ var src_app_shared_services_photos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/photos.service */ 251);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _shared_components_item_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/item/item.component */ 1285);









function CatalogoComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CatalogoComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const searchInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](searchInput_r2.value = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CatalogoComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CatalogoComponent_div_29_Template_div_click_0_listener() {
      const cafeteria_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.onCafeteriaClick(cafeteria_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cafeteria_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cafeteria", cafeteria_r4);
  }
}
function CatalogoComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CatalogoComponent_div_30_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.carregarMais());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Carregar mais");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CatalogoComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Carregando cafeterias...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CatalogoComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Nenhum local encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Tente ajustar os filtros ou buscar por outro termo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Limpar Filtros");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class CatalogoComponent extends src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_3__.ComponentBase {
  constructor(injector, cafeteriaService, photosService, cdr) {
    super(injector);
    this.injector = injector;
    this.cafeteriaService = cafeteriaService;
    this.photosService = photosService;
    this.cdr = cdr;
    this.cafeterias = [];
    this.temMais = false;
    this.pagina = 1;
    this.tamanhoPagina = 20;
    this.assinaturas = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    this.context.pageTitle = "Clube Cafeína";
    this.carregarCafeterias();
  }
  ngOnDestroy() {
    this.assinaturas.unsubscribe();
  }
  carregarMais() {
    this.pagina++;
    this.carregarCafeterias();
  }
  carregarCafeterias() {
    this.showLoading();
    this.cafeteriaService.getAll(this.pagina, this.tamanhoPagina).subscribe({
      next: retorno => {
        this.hideLoading();
        const lista = retorno.data ?? [];
        const novos = lista.map(cafeteria => ({
          id: cafeteria.id,
          fav: false,
          name: cafeteria.nome,
          description: `${cafeteria.endereco}, ${cafeteria.numero}`,
          image: cafeteria.fotoPrincipal || src_app_shared_models_photo_model__WEBPACK_IMPORTED_MODULE_4__.FOTO_PLACEHOLDER
        }));
        this.cafeterias = [...this.cafeterias, ...novos];
        // A API não devolve o total: só há próxima página se esta veio cheia
        this.temMais = lista.length === this.tamanhoPagina;
        this.preencherCapas(novos.filter(card => card.image === src_app_shared_models_photo_model__WEBPACK_IMPORTED_MODULE_4__.FOTO_PLACEHOLDER));
        this.cdr.markForCheck();
      },
      error: erro => {
        this.hideLoading();
        this.toastr.error(erro.error?.mensagem ?? 'Não foi possível carregar as cafeterias.');
        this.cdr.markForCheck();
      }
    });
  }
  /**
   * Cards sem fotoPrincipal recebem a capa da galeria (API de fotos) sem bloquear a lista:
   * o placeholder aparece na hora e é trocado assim que a foto chega.
   */
  preencherCapas(cards) {
    if (!cards.length) {
      return;
    }
    const buscas = cards.map(card => this.photosService.getCapa(card.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(url => ({
      card,
      url
    }))));
    this.assinaturas.add((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.merge)(...buscas).subscribe(({
      card,
      url
    }) => {
      if (url) {
        card.image = url;
        this.cdr.markForCheck();
      }
    }));
  }
  onCafeteriaClick(cafeteria) {
    this.context.pageTitle = cafeteria.name;
    this.router.navigate(['/cafeteria', cafeteria.id]);
  }
  static {
    this.ɵfac = function CatalogoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CatalogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_cafeteria_service__WEBPACK_IMPORTED_MODULE_8__.CafeteriaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_photos_service__WEBPACK_IMPORTED_MODULE_9__.PhotosService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CatalogoComponent,
      selectors: [["app-catalogo"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
      decls: 33,
      vars: 5,
      consts: [["searchInput", ""], [1, "containerCatalogo"], [1, "search-section"], [1, "search-container"], [1, "search-title"], [1, "search-wrapper"], [1, "search-input-group"], [1, "bi", "bi-search", "search-icon"], ["type", "text", "placeholder", "Digite o nome...", 1, "search-input"], ["class", "clear-btn", "type", "button", 3, "click", 4, "ngIf"], [1, "filter-buttons"], ["type", "button", 1, "filter-btn", "active"], [1, "bi", "bi-grid"], ["type", "button", 1, "filter-btn"], [1, "bi", "bi-heart"], [1, "bi", "bi-geo-alt"], [1, "cafeterias-section"], [1, "cafeterias-grid"], ["class", "cafeteria-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "load-more", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["type", "button", 1, "clear-btn", 3, "click"], [1, "bi", "bi-x"], [1, "cafeteria-card", 3, "click"], [3, "cafeteria"], [1, "load-more"], ["type", "button", 1, "btn-reset", 3, "click"], [1, "loading-state"], [1, "loading-spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "bi", "bi-cup-hot"], ["type", "button", 1, "btn-reset"]],
      template: function CatalogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Busque a melhor Cafeteria");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Use os filtros para personalizar sua busca");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 7)(11, "input", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CatalogoComponent_button_13_Template, 2, 0, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Todos");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Favoritos");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Pr\u00F3ximos");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 16)(28, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, CatalogoComponent_div_29_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, CatalogoComponent_div_30_Template, 3, 0, "div", 19)(31, CatalogoComponent_div_31_Template, 4, 0, "div", 20)(32, CatalogoComponent_div_32_Template, 9, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const searchInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", searchInput_r2.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.cafeterias);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.temMais && !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.cafeterias.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_item_item_component__WEBPACK_IMPORTED_MODULE_11__.ItemComponent],
      styles: ["@charset \"UTF-8\";\n[_ngcontent-%COMP%]:root {\n  --primary-color: #03318C;\n  --primary-light: #426A8C;\n  --primary-dark: #1C4D8C;\n  --secondary-color: #F5F5DC;\n  --accent-color: #f58b44;\n  --text-dark: #3b3b3b;\n  --text-light: #919191;\n  --white: #FFFFFF;\n  --gray-50: #FAFAFA;\n  --gray-100: #F5F5F5;\n  --gray-200: #EEEEEE;\n  --gray-300: #E0E0E0;\n  --gray-500: #9E9E9E;\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  --border-radius: 12px;\n  --border-radius-lg: 16px;\n  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.containerCatalogo[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  background: linear-gradient(135deg, var(--gray-50) 0%, var(--secondary-color) 100%);\n  min-height: 100vh;\n}\n\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);\n  color: var(--white);\n  padding: 4rem 2rem 2rem;\n  text-align: center;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url('data:image/svg+xml,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23ffffff\" fill-opacity=\"0.05\"><circle cx=\"30\" cy=\"30\" r=\"1\"/></g></svg>');\n  animation: _ngcontent-%COMP%_float 20s ease-in-out infinite;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  background: linear-gradient(45deg, var(--white), var(--accent-color));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_slideInDown 0.8s ease-out;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  opacity: 0.9;\n  margin-bottom: 2rem;\n  animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out 0.2s both;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out 0.4s both;\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    gap: 2rem;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--white);\n  margin-bottom: 0.25rem;\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  opacity: 0.8;\n  color: var(--white);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 500;\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  height: 60px;\n  background: linear-gradient(to bottom, transparent, var(--gray-50));\n}\n\n.carousel-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-xl);\n  height: 400px;\n}\n@media (max-width: 768px) {\n  .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n    height: 300px;\n    margin: 0 1rem;\n  }\n}\n.carousel-container[_ngcontent-%COMP%]   .carousel-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.carousel-container[_ngcontent-%COMP%]   .carousel-image-wrapper[_ngcontent-%COMP%]   .carousel-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  transition: var(--transition);\n}\n.carousel-container[_ngcontent-%COMP%]   .carousel-image-wrapper[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, rgba(139, 69, 19, 0.3) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(139, 69, 19, 0.6) 100%);\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-caption[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: var(--border-radius);\n  margin: 0 2rem 2rem;\n  padding: 2rem;\n  text-align: left;\n  color: var(--text-dark);\n  box-shadow: var(--shadow-lg);\n}\n@media (max-width: 768px) {\n  .carousel-container[_ngcontent-%COMP%]   .modern-caption[_ngcontent-%COMP%] {\n    margin: 0 1rem 1rem;\n    padding: 1.5rem;\n  }\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-caption[_ngcontent-%COMP%]   .caption-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--accent-color);\n  color: var(--white);\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-caption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: var(--primary-dark);\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: var(--text-light);\n  line-height: 1.6;\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-caption[_ngcontent-%COMP%]   .btn-explore[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: var(--white);\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 600;\n  transition: var(--transition);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-caption[_ngcontent-%COMP%]   .btn-explore[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-caption[_ngcontent-%COMP%]   .btn-explore[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: var(--transition);\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-caption[_ngcontent-%COMP%]   .btn-explore[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-indicators[_ngcontent-%COMP%] {\n  bottom: -3rem;\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-indicators[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin: 0 4px;\n  background: var(--gray-300);\n  border: none;\n  transition: var(--transition);\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-indicators[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  transform: scale(1.2);\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-control[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-control[_ngcontent-%COMP%]   .control-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: var(--transition);\n  box-shadow: var(--shadow-md);\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-control[_ngcontent-%COMP%]   .control-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--primary-color);\n}\n.carousel-container[_ngcontent-%COMP%]   .modern-control[_ngcontent-%COMP%]:hover   .control-icon[_ngcontent-%COMP%] {\n  background: var(--white);\n  transform: scale(1.1);\n  box-shadow: var(--shadow-lg);\n}\n\n.search-section[_ngcontent-%COMP%] {\n  background-color: #8a3105;\n  padding: 3rem 2rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.search-section[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--white);\n  margin-bottom: 0.5rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-size: 1.1rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n@media (min-width: 768px) {\n  .search-section[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n.search-section[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n}\n.search-section[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-color);\n  z-index: 2;\n}\n.search-section[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  border: 2px solid var(--gray-200);\n  border-radius: 50px;\n  font-size: 1rem;\n  transition: var(--transition);\n  background: var(--white);\n}\n.search-section[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(139, 69, 19, 0.1);\n}\n.search-section[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray-500);\n}\n.search-section[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--gray-200);\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: var(--transition);\n}\n.search-section[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:hover {\n  background: var(--gray-300);\n}\n.search-section[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n@media (min-width: 768px) {\n  .search-section[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n  }\n}\n.search-section[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 25px;\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--white);\n  font-weight: 500;\n  transition: var(--transition);\n  white-space: nowrap;\n}\n.search-section[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background: rgba(139, 69, 19, 0.2);\n  color: var(--white);\n}\n.search-section[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  border-color: var(--primary-color);\n  color: var(--white);\n}\n.search-section[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.cafeterias-section[_ngcontent-%COMP%] {\n  padding: 3rem 2rem;\n}\n.cafeterias-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.cafeterias-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--text-dark);\n}\n.cafeterias-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--gray-200);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.cafeterias-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  background: var(--white);\n  color: var(--gray-500);\n  transition: var(--transition);\n}\n.cafeterias-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n}\n.cafeterias-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .view-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: var(--white);\n}\n.cafeterias-section[_ngcontent-%COMP%]   .cafeterias-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .cafeterias-section[_ngcontent-%COMP%]   .cafeterias-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n.cafeterias-section[_ngcontent-%COMP%]   .cafeteria-card[_ngcontent-%COMP%] {\n  transition: var(--transition);\n  cursor: pointer;\n}\n.cafeterias-section[_ngcontent-%COMP%]   .cafeteria-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n}\n.cafeterias-section[_ngcontent-%COMP%]   .cafeteria-card.featured[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cafeterias-section[_ngcontent-%COMP%]   .cafeteria-card.featured[_ngcontent-%COMP%]::before {\n  content: \"\u2B50 Destaque\";\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: var(--accent-color);\n  color: var(--white);\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  z-index: 10;\n}\n\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%], \n.load-more[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.load-more[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%], \n.load-more[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--gray-300);\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.load-more[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.load-more[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  margin-bottom: 2rem;\n}\n.loading-state[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%], \n.load-more[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: var(--white);\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 25px;\n  font-weight: 600;\n  transition: var(--transition);\n}\n.loading-state[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%]:hover, \n.empty-state[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%]:hover, \n.load-more[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n}\n\n.cafeteria-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n.cafeteria-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.cafeteria-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.cafeteria-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.cafeteria-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.cafeteria-card[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.cafeteria-card[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.6s;\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  animation: _ngcontent-%COMP%_inputFocus 0.3s ease-out;\n}\n\n.filter-btn[_ngcontent-%COMP%]:active {\n  animation: _ngcontent-%COMP%_buttonPress 0.15s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_inputFocus {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_buttonPress {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  [_ngcontent-%COMP%]:root {\n    --white: #1a1a1a;\n    --gray-50: #2a2a2a;\n    --gray-100: #333333;\n    --gray-200: #404040;\n    --gray-300: #525252;\n    --text-dark: #ffffff;\n    --text-light: #cccccc;\n    --secondary-color: #2a2a2a;\n  }\n}\n.search-input[_ngcontent-%COMP%]:focus, \n.filter-btn[_ngcontent-%COMP%]:focus, \n.view-btn[_ngcontent-%COMP%]:focus, \n.btn-reset[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--primary-color);\n  outline-offset: 2px;\n}\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n@media (max-width: 1024px) {\n  .containerCatalogo[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 2rem 1rem 1rem;\n  }\n  .carousel-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .cafeterias-section[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .search-wrapper[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n    min-width: 0;\n  }\n  .search-wrapper[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2F0YWxvZ28vY2F0YWxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0Msd0JBQUE7RUFDQyx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtREFBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1GQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esc0ZBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNk9BQUE7RUFDQSx5Q0FBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FBSEo7QUFLSTtFQVZGO0lBV0ksZUFBQTtFQUZKO0FBQ0Y7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0FBSko7QUFNSTtFQU5GO0lBT0ksU0FBQTtFQUhKO0FBQ0Y7QUFLSTtFQUNFLGtCQUFBO0FB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QUNFLFNBQUE7RUE3REY7QUFDRjtBQWdFQTtFQUNFO0lBQ0UsdUJBQUE7RUE5REY7RUFpRUE7SUFDRSxhQUFBO0VBL0RGO0VBa0VBO0lBQ0Usa0JBQUE7RUFoRUY7RUFtRUE7SUFDRSxrQkFBQTtFQWpFRjtBQUNGO0FBb0VBO0VBR007SUFDRSxPQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0VBcEVOO0VBc0VNO0lBQ0UsYUFBQTtFQXBFUjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVmFyacODwqF2ZWlzIGRlIGRlc2lnblxyXG46cm9vdCB7XHJcbiAtLXByaW1hcnktY29sb3I6ICMwMzMxOEM7XHJcbiAgLS1wcmltYXJ5LWxpZ2h0OiAjNDI2QThDO1xyXG4gIC0tcHJpbWFyeS1kYXJrOiAjMUM0RDhDO1xyXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjRjVGNURDO1xyXG4gIC0tYWNjZW50LWNvbG9yOiAjZjU4YjQ0O1xyXG4gIC0tdGV4dC1kYXJrOiAjM2IzYjNiO1xyXG4gIC0tdGV4dC1saWdodDogIzkxOTE5MTtcclxuICAtLXdoaXRlOiAjRkZGRkZGO1xyXG4gIC0tZ3JheS01MDogI0ZBRkFGQTtcclxuICAtLWdyYXktMTAwOiAjRjVGNUY1O1xyXG4gIC0tZ3JheS0yMDA6ICNFRUVFRUU7XHJcbiAgLS1ncmF5LTMwMDogI0UwRTBFMDtcclxuICAtLWdyYXktNTAwOiAjOUU5RTlFO1xyXG4gIC0tc2hhZG93LXNtOiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIC0tc2hhZG93LW1kOiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgLS1zaGFkb3ctbGc6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC0tc2hhZG93LXhsOiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzLWxnOiAxNnB4O1xyXG4gIC0tdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLy8gQ29udGFpbmVyIHByaW5jaXBhbFxyXG4uY29udGFpbmVyQ2F0YWxvZ28ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdyYXktNTApIDAlLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDEwMCUpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vLyBIZXJvIFNlY3Rpb25cclxuLmhlcm8tc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAlLCB2YXIoLS1wcmltYXJ5LWRhcmspIDEwMCUpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtIDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiB2aWV3Qm94PVwiMCAwIDYwIDYwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxnIGZpbGw9XCIlMjNmZmZmZmZcIiBmaWxsLW9wYWNpdHk9XCIwLjA1XCI+PGNpcmNsZSBjeD1cIjMwXCIgY3k9XCIzMFwiIHI9XCIxXCIvPjwvZz48L3N2Zz4nKTtcclxuICAgIGFuaW1hdGlvbjogZmxvYXQgMjBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAuaGVyby1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZXJvLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS13aGl0ZSksIHZhcigtLWFjY2VudC1jb2xvcikpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBhbmltYXRpb246IHNsaWRlSW5Eb3duIDAuOHMgZWFzZS1vdXQ7XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5oZXJvLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuOHMgZWFzZS1vdXQgMC4ycyBib3RoO1xyXG4gIH1cclxuICBcclxuICAuaGVyby1zdGF0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDNyZW07XHJcbiAgICBhbmltYXRpb246IHNsaWRlSW5VcCAwLjhzIGVhc2Utb3V0IDAuNHMgYm90aDtcclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgIGdhcDogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0YXQtaXRlbSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIC5zdGF0LW51bWJlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc3RhdC1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmhlcm8tZ3JhZGllbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHZhcigtLWdyYXktNTApKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENhcm91c2VsIG1vZGVybm9cclxuLmNhcm91c2VsLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBcclxuICAuY2Fyb3VzZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1sZyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNhcm91c2VsLWltYWdlLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICAuY2Fyb3VzZWwtaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1hZ2Utb3ZlcmxheSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgNDVkZWcsXHJcbiAgICAgICAgcmdiYSgxMzksIDY5LCAxOSwgMC4zKSAwJSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMSkgNTAlLFxyXG4gICAgICAgIHJnYmEoMTM5LCA2OSwgMTksIDAuNikgMTAwJVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubW9kZXJuLWNhcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgbWFyZ2luOiAwIDJyZW0gMnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luOiAwIDFyZW0gMXJlbTtcclxuICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FwdGlvbi1iYWRnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGg0IHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1leHBsb3JlIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJjpob3ZlciBpIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubW9kZXJuLWluZGljYXRvcnMge1xyXG4gICAgYm90dG9tOiAtM3JlbTtcclxuICAgIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTMwMCk7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICAgIFxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2Rlcm4tY29udHJvbCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgXHJcbiAgICAuY29udHJvbC1pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xyXG4gICAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6aG92ZXIgLmNvbnRyb2wtaWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gU2XDg8Knw4PCo28gZGUgYnVzY2FcclxuLnNlYXJjaC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGEzMTA1O1xyXG4gIHBhZGRpbmc6IDNyZW0gMnJlbTtcclxuICBcclxuICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIFxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleDogMTtcclxuICAgIFxyXG4gICAgLnNlYXJjaC1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gM3JlbTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTM5LCA2OSwgMTksIDAuMSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jbGVhci1idG4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMjAwKTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB3aWR0aDogMzJweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMzAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZmlsdGVyLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXItYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTM5LCA2OSwgMTksIDAuMik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFNlw4PCp8ODwqNvIGRlIGNhZmV0ZXJpYXNcclxuLmNhZmV0ZXJpYXMtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogM3JlbSAycmVtO1xyXG4gIFxyXG4gIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudmlldy10b2dnbGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZpZXctYnRuIHtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xyXG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNhZmV0ZXJpYXMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdhcDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNhZmV0ZXJpYS1jYXJkIHtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmZlYXR1cmVkIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnw6LCrcKQIERlc3RhcXVlJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRXN0YWRvcyBkZSBsb2FkaW5nIGUgdmF6aW9cclxuLmxvYWRpbmctc3RhdGUsXHJcbi5lbXB0eS1zdGF0ZSxcclxuLmxvYWQtbW9yZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBcclxuICAubG9hZGluZy1zcGlubmVyIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmVtcHR5LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXktMzAwKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tcmVzZXQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFuaW1hw4PCp8ODwrVlcyBkZSBlbnRyYWRhIHBhcmEgb3MgY2FyZHNcclxuLmNhZmV0ZXJpYS1jYXJkIHtcclxuICBhbmltYXRpb246IGZhZGVJblVwIDAuNnMgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgJjpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IDAuMXM7IH1cclxuICAmOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxyXG4gICY6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XHJcbiAgJjpudGgtY2hpbGQoNCkgeyBhbmltYXRpb24tZGVsYXk6IDAuNHM7IH1cclxuICAmOm50aC1jaGlsZCg1KSB7IGFuaW1hdGlvbi1kZWxheTogMC41czsgfVxyXG4gICY6bnRoLWNoaWxkKDYpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOyB9XHJcbn1cclxuXHJcbi8vIE1pY3JvaW50ZXJhw4PCp8ODwrVlc1xyXG4uc2VhcmNoLWlucHV0IHtcclxuICAmOmZvY3VzIHtcclxuICAgIGFuaW1hdGlvbjogaW5wdXRGb2N1cyAwLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlci1idG4ge1xyXG4gICY6YWN0aXZlIHtcclxuICAgIGFuaW1hdGlvbjogYnV0dG9uUHJlc3MgMC4xNXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBbmltYcODwqfDg8K1ZXNcclxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbnB1dEZvY3VzIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidXR0b25QcmVzcyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlSW5VcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdCB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVsaG9yaWFzIGRlIGFjZXNzaWJpbGlkYWRlIGUgVVhcclxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuICAqLFxyXG4gICo6OmJlZm9yZSxcclxuICAqOjphZnRlciB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEYXJrIG1vZGUgc3VwcG9ydCAocHJlcGFyYcODwqfDg8KjbyBwYXJhIGZ1dHVybylcclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gIDpyb290IHtcclxuICAgIC0td2hpdGU6ICMxYTFhMWE7XHJcbiAgICAtLWdyYXktNTA6ICMyYTJhMmE7XHJcbiAgICAtLWdyYXktMTAwOiAjMzMzMzMzO1xyXG4gICAgLS1ncmF5LTIwMDogIzQwNDA0MDtcclxuICAgIC0tZ3JheS0zMDA6ICM1MjUyNTI7XHJcbiAgICAtLXRleHQtZGFyazogI2ZmZmZmZjtcclxuICAgIC0tdGV4dC1saWdodDogI2NjY2NjYztcclxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMmEyYTJhO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRm9jdXMgc3RhdGVzIG1lbGhvcmFkb3MgcGFyYSBhY2Vzc2liaWxpZGFkZVxyXG4uc2VhcmNoLWlucHV0OmZvY3VzLFxyXG4uZmlsdGVyLWJ0bjpmb2N1cyxcclxuLnZpZXctYnRuOmZvY3VzLFxyXG4uYnRuLXJlc2V0OmZvY3VzIHtcclxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxufVxyXG5cclxuLy8gU21vb3RoIHNjcm9sbGluZ1xyXG5odG1sIHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLy8gUmVzcG9uc2l2aWRhZGUgYXByaW1vcmFkYVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNvbnRhaW5lckNhdGFsb2dvIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5oZXJvLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMnJlbSAxcmVtIDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhZmV0ZXJpYXMtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgLmZpbHRlci1idXR0b25zIHtcclxuICAgICAgLmZpbHRlci1idG4ge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 535
/*!******************************************************!*\
  !*** ./src/app/features/catalogo/catalogo.module.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogoModule: () => (/* binding */ CatalogoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _catalogo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogo-routing.module */ 6382);
/* harmony import */ var _catalogo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogo.component */ 856);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4363);





class CatalogoModule {
  static {
    this.ɵfac = function CatalogoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CatalogoModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: CatalogoModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _catalogo_routing_module__WEBPACK_IMPORTED_MODULE_1__.CatalogoRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CatalogoModule, {
    declarations: [_catalogo_component__WEBPACK_IMPORTED_MODULE_2__.CatalogoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _catalogo_routing_module__WEBPACK_IMPORTED_MODULE_1__.CatalogoRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
    exports: [_catalogo_component__WEBPACK_IMPORTED_MODULE_2__.CatalogoComponent]
  });
})();

/***/ },

/***/ 3648
/*!******************************************************!*\
  !*** ./src/app/shared/services/cafeteria.service.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeteriaService: () => (/* binding */ CafeteriaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _generic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic.service */ 2987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);



class CafeteriaService extends _generic_service__WEBPACK_IMPORTED_MODULE_1__.ServiceGeneric {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.urlServiceREST = "/api/Cafeterias";
  }
  getAll(page = 1, pageSize = 20) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page).set('pageSize', pageSize);
    return this.http.get(this.getFullUrl(), {
      params
    });
  }
  getById(id) {
    return this.http.get(`${this.getFullUrl()}/${id}`);
  }
  static {
    this.ɵfac = function CafeteriaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CafeteriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CafeteriaService,
      factory: CafeteriaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 2987
/*!****************************************************!*\
  !*** ./src/app/shared/services/generic.service.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceGeneric: () => (/* binding */ ServiceGeneric)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/context.service */ 7337);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 9213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4363);




/**
 * @description
 *
 * Serviço REST genérico
 */
class ServiceGeneric {
  constructor(injector) {
    this.injector = injector;
    /**
      * Labels traduzidos
      */
    this.literals = {};
    this.http = this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient);
    this.cookieService = injector.get(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService);
    this.context = this.objContext;
  }
  /**
   * Contexto do usuário
   */
  get objContext() {
    if (!this.context) {
      this.context = _services_context_service__WEBPACK_IMPORTED_MODULE_1__.ContextService.getContext();
    }
    return this.context;
  }
  set objContext(value) {
    this.context = value;
  }
  getBaseUrl() {
    return "http://localhost:8080";
  }
  getFullUrl() {
    return `${this.getBaseUrl()}${this.urlServiceREST}`;
  }
  static {
    this.ɵfac = function ServiceGeneric_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServiceGeneric)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ServiceGeneric,
      factory: ServiceGeneric.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 251
/*!***************************************************!*\
  !*** ./src/app/shared/services/photos.service.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotosService: () => (/* binding */ PhotosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _generic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generic.service */ 2987);
/* harmony import */ var _models_photo_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/photo.model */ 6722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4363);






/**
 * Cliente do PhotosController (api/Photos).
 */
class PhotosService extends _generic_service__WEBPACK_IMPORTED_MODULE_4__.ServiceGeneric {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.urlServiceREST = "/api/Photos";
  }
  /** GET api/Photos/cafeteria/{cafeteriaId} — endpoint público. */
  getByCafeteria(cafeteriaId) {
    return this.http.get(this.urlCafeteria(cafeteriaId));
  }
  /**
   * URL da foto de capa da cafeteria (destaque ou primeira), ou null se não houver fotos
   * ou a chamada falhar. Nunca emite erro: serve para preencher cards sem travar a listagem.
   */
  getCapa(cafeteriaId) {
    return this.getByCafeteria(cafeteriaId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(retorno => (0,_models_photo_model__WEBPACK_IMPORTED_MODULE_5__.escolherCapa)(retorno.data ?? [])?.url ?? null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null)));
  }
  /**
   * POST api/Photos/cafeteria/{cafeteriaId} — multipart com o campo "files".
   * Exige usuário logado com acesso à cafeteria ([Authorize] + [ValidateCafeteriaAccess]).
   */
  enviar(cafeteriaId, arquivos) {
    const form = new FormData();
    arquivos.forEach(arquivo => form.append('files', arquivo, arquivo.name));
    return this.http.post(this.urlCafeteria(cafeteriaId), form, {
      headers: this.cabecalhoAutenticado()
    });
  }
  /**
   * DELETE api/Photos/cafeteria/{cafeteriaId} — corpo JSON com a lista de ids das fotos.
   * Exige usuário logado com acesso à cafeteria.
   */
  excluir(cafeteriaId, fotoIds) {
    return this.http.delete(this.urlCafeteria(cafeteriaId), {
      headers: this.cabecalhoAutenticado(),
      body: fotoIds
    });
  }
  urlCafeteria(cafeteriaId) {
    return `${this.getFullUrl()}/cafeteria/${encodeURIComponent(cafeteriaId)}`;
  }
  /** O projeto não tem interceptor de autenticação: o token salvo no login vai no header. */
  cabecalhoAutenticado() {
    const token = this.cookieService.get('access_token');
    return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      Authorization: `Bearer ${token}`
    }) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
  }
  static {
    this.ɵfac = function PhotosService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PhotosService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: PhotosService,
      factory: PhotosService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=default-src_app_features_catalogo_catalogo_module_ts.js.map
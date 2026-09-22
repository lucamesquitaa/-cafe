"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["src_app_features_logs_logs_module_ts"],{

/***/ 9348
/*!******************************************************!*\
  !*** ./src/app/features/logs/logs-routing.module.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsRoutingModule: () => (/* binding */ LogsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _logs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs.component */ 549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4363);




const routes = [{
  path: '',
  component: _logs_component__WEBPACK_IMPORTED_MODULE_1__.LogsComponent
}];
class LogsRoutingModule {
  static {
    this.ɵfac = function LogsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: LogsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LogsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 549
/*!*************************************************!*\
  !*** ./src/app/features/logs/logs.component.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsComponent: () => (/* binding */ LogsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/component.base */ 125);
/* harmony import */ var src_app_shared_models_log_entry_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/log-entry.model */ 3341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var src_app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/logs.service */ 1517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);







function LogsComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LogsComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.reconectarManualmente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LogsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.mensagemErro);
  }
}
function LogsComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LogsComponent_button_16_Template_button_click_0_listener() {
      const tipo_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFiltroChange(tipo_r4.valor));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.filtroTipo === tipo_r4.valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", tipo_r4.valor !== "todos" ? ctx_r1.classeRoutingKey(tipo_r4.valor) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", tipo_r4.label, " ");
  }
}
function LogsComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LogsComponent_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.limparBusca());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LogsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LogsComponent_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.alternarPausa());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r1.novosDesdePausa, " ", ctx_r1.novosDesdePausa === 1 ? "novo log" : "novos logs", " enquanto pausado \u2014 clique para retomar ");
  }
}
function LogsComponent_div_30_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Aguardando logs...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LogsComponent_div_30_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Nenhum log corresponde aos filtros atuais.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LogsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LogsComponent_div_30_p_2_Template, 2, 0, "p", 35)(3, LogsComponent_div_30_p_3_Template, 2, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.logs.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.logs.length > 0);
  }
}
function LogsComponent_div_31_pre_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "pre", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const log_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formatarPayload(log_r8));
  }
}
function LogsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LogsComponent_div_31_Template_div_click_0_listener() {
      const log_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selecionarLog(log_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 37)(2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, LogsComponent_div_31_pre_12_Template, 2, 1, "pre", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const log_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("expandido", ctx_r1.logSelecionadoId === log_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.classeRoutingKey(log_r8.routingKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 9, log_r8.recebidoEmLocal, "HH:mm:ss.SSS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r8.routingKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r8.fila);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r8.payloadTexto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.logSelecionadoId === log_r8.id ? "bi-chevron-up" : "bi-chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.logSelecionadoId === log_r8.id);
  }
}
const TAMANHO_MAXIMO_BUFFER = 800;
class LogsComponent extends src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_1__.ComponentBase {
  constructor(injector, logsService, cdr) {
    super(injector);
    this.injector = injector;
    this.logsService = logsService;
    this.cdr = cdr;
    this.TAMANHO_MAXIMO_BUFFER = TAMANHO_MAXIMO_BUFFER;
    this.tiposFiltro = [{
      valor: 'todos',
      label: 'Todos'
    }, {
      valor: 'cafeteria.post',
      label: 'Post'
    }, {
      valor: 'cafeteria.put',
      label: 'Put'
    }, {
      valor: 'cafeteria.error',
      label: 'Error'
    }];
    this.estadoLabels = {
      conectando: 'Conectando...',
      conectado: 'Conectado',
      reconectando: 'Reconectando...',
      desconectado: 'Desconectado'
    };
    /** Buffer completo (limitado), sempre atualizado mesmo enquanto pausado. */
    this.logs = [];
    /** Recorte visível (filtro + busca aplicados); congelado enquanto pausado. */
    this.logsExibidos = [];
    this.estadoConexao = 'desconectado';
    this.mensagemErro = null;
    this.filtroTipo = 'todos';
    this.textoBusca = '';
    this.pausado = false;
    this.novosDesdePausa = 0;
    this.logSelecionadoId = null;
    this.assinaturas = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  ngOnInit() {
    this.context.pageTitle = 'Logs em Tempo Real';
    this.assinaturas.add(this.logsService.log$.subscribe(log => this.receberLog(log)));
    this.assinaturas.add(this.logsService.estado$.subscribe(estado => {
      this.estadoConexao = estado;
      if (estado === 'conectado') {
        this.mensagemErro = null;
      }
      this.cdr.markForCheck();
    }));
    this.assinaturas.add(this.logsService.erro$.subscribe(mensagem => {
      this.mensagemErro = mensagem;
      this.toastr.error(mensagem);
      this.cdr.markForCheck();
    }));
    this.logsService.conectar();
  }
  ngOnDestroy() {
    this.assinaturas.unsubscribe();
    this.logsService.desconectar();
  }
  onFiltroChange(tipo) {
    this.filtroTipo = tipo;
    this.aplicarFiltro();
  }
  onBuscaChange() {
    this.aplicarFiltro();
  }
  limparBusca() {
    this.textoBusca = '';
    this.aplicarFiltro();
  }
  alternarPausa() {
    this.pausado = !this.pausado;
    if (!this.pausado) {
      this.novosDesdePausa = 0;
      this.aplicarFiltro();
    }
  }
  selecionarLog(log) {
    this.logSelecionadoId = this.logSelecionadoId === log.id ? null : log.id;
  }
  reconectarManualmente() {
    this.logsService.desconectar();
    this.logsService.conectar();
  }
  limparBuffer() {
    this.logs = [];
    this.logsExibidos = [];
    this.novosDesdePausa = 0;
    this.logSelecionadoId = null;
  }
  formatarPayload(log) {
    return (0,src_app_shared_models_log_entry_model__WEBPACK_IMPORTED_MODULE_2__.formatarPayload)(log);
  }
  classeRoutingKey(routingKey) {
    switch (routingKey) {
      case 'cafeteria.post':
        return 'tipo-post';
      case 'cafeteria.put':
        return 'tipo-put';
      case 'cafeteria.error':
        return 'tipo-error';
      default:
        return 'tipo-outro';
    }
  }
  trackByLogId(_index, log) {
    return log.id;
  }
  receberLog(log) {
    this.logs = [log, ...this.logs].slice(0, TAMANHO_MAXIMO_BUFFER);
    if (this.pausado) {
      this.novosDesdePausa++;
      this.cdr.markForCheck();
      return;
    }
    this.aplicarFiltro();
  }
  aplicarFiltro() {
    const busca = this.textoBusca.trim().toLowerCase();
    this.logsExibidos = this.logs.filter(log => {
      const combinaTipo = this.filtroTipo === 'todos' || log.routingKey === this.filtroTipo;
      if (!combinaTipo) {
        return false;
      }
      if (!busca) {
        return true;
      }
      return log.payloadTexto.toLowerCase().includes(busca) || log.fila.toLowerCase().includes(busca);
    });
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function LogsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_6__.LogsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LogsComponent,
      selectors: [["app-logs"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 35,
      vars: 18,
      consts: [[1, "logs-container"], [1, "logs-header"], [1, "logs-title"], [1, "bi", "bi-terminal"], [1, "connection-status", 3, "ngClass"], [1, "status-dot"], ["type", "button", "class", "btn-icon", "title", "Reconectar agora", 3, "click", 4, "ngIf"], ["class", "alerta-erro", 4, "ngIf"], [1, "logs-toolbar"], [1, "filtro-tipos"], ["type", "button", "class", "filtro-btn", 3, "ngClass", "active", "click", 4, "ngFor", "ngForOf"], [1, "busca-wrapper"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Buscar no payload ou na fila...", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-btn", 3, "click", 4, "ngIf"], [1, "acoes"], ["type", "button", 1, "btn-acao", 3, "click"], [1, "bi", 3, "ngClass"], [1, "bi", "bi-trash3"], ["class", "novos-banner", 3, "click", 4, "ngIf"], [1, "logs-lista"], ["class", "logs-vazio", 4, "ngIf"], ["class", "log-item", 3, "ngClass", "expandido", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "logs-rodape"], ["type", "button", "title", "Reconectar agora", 1, "btn-icon", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [1, "alerta-erro"], [1, "bi", "bi-exclamation-triangle-fill"], ["type", "button", 1, "filtro-btn", 3, "click", "ngClass"], ["type", "button", 1, "clear-btn", 3, "click"], [1, "bi", "bi-x"], [1, "novos-banner", 3, "click"], [1, "bi", "bi-arrow-up-circle-fill"], [1, "logs-vazio"], [1, "bi", "bi-inbox"], [4, "ngIf"], [1, "log-item", 3, "click", "ngClass"], [1, "log-linha"], [1, "log-horario"], [1, "log-badge"], [1, "log-fila"], [1, "log-resumo"], [1, "bi", "log-chevron", 3, "ngClass"], ["class", "log-payload", 4, "ngIf"], [1, "log-payload"]],
      template: function LogsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Logs em Tempo Real");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Eventos das filas RabbitMQ transmitidos via WebSocket (/ws/logs)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, LogsComponent_button_12_Template, 2, 0, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, LogsComponent_div_13_Template, 4, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, LogsComponent_button_16_Template, 2, 4, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function LogsComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.textoBusca, $event) || (ctx.textoBusca = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LogsComponent_Template_input_ngModelChange_19_listener() {
            return ctx.onBuscaChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, LogsComponent_button_20_Template, 2, 0, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LogsComponent_Template_button_click_22_listener() {
            return ctx.alternarPausa();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LogsComponent_Template_button_click_25_listener() {
            return ctx.limparBuffer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Limpar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, LogsComponent_div_28_Template, 3, 2, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, LogsComponent_div_30_Template, 4, 2, "div", 21)(31, LogsComponent_div_31_Template, 13, 12, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 23)(33, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "status-" + ctx.estadoConexao);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.estadoLabels[ctx.estadoConexao]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.estadoConexao !== "conectado");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mensagemErro);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tiposFiltro);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.textoBusca);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.textoBusca);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.pausado);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.pausado ? "bi-play-fill" : "bi-pause-fill");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.pausado ? "Retomar" : "Pausar", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pausado && ctx.novosDesdePausa > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.logsExibidos.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.logsExibidos)("ngForTrackBy", ctx.trackByLogId);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", ctx.logsExibidos.length, " / ", ctx.logs.length, " logs no buffer (m\u00E1x. ", ctx.TAMANHO_MAXIMO_BUFFER, ")");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #03318C;\n  --primary-dark: #1C4D8C;\n  --text-dark: #3b3b3b;\n  --text-light: #767676;\n  --white: #FFFFFF;\n  --gray-50: #FAFAFA;\n  --gray-100: #F5F5F5;\n  --gray-200: #EEEEEE;\n  --gray-300: #E0E0E0;\n  --border-radius: 12px;\n  --border-radius-lg: 16px;\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --transition: all 0.2s ease;\n  --cor-post: #1a9c4b;\n  --cor-post-bg: #e6f7ec;\n  --cor-put: #0d6efd;\n  --cor-put-bg: #e7f0ff;\n  --cor-error: #dc3545;\n  --cor-error-bg: #fdeaea;\n  --cor-outro: #6c757d;\n  --cor-outro-bg: #f1f1f1;\n}\n\n.logs-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.5rem;\n}\n\n.logs-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.logs-header[_ngcontent-%COMP%]   .logs-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin: 0;\n}\n.logs-header[_ngcontent-%COMP%]   .logs-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  margin: 0.25rem 0 0;\n  font-size: 0.9rem;\n}\n\n.connection-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  background: var(--gray-100);\n  color: var(--text-dark);\n}\n.connection-status[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--cor-outro);\n}\n.connection-status[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: inherit;\n  display: flex;\n  align-items: center;\n  padding: 0;\n  margin-left: 0.25rem;\n  cursor: pointer;\n}\n.connection-status[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.connection-status.status-conectado[_ngcontent-%COMP%] {\n  background: var(--cor-post-bg);\n  color: var(--cor-post);\n}\n.connection-status.status-conectado[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--cor-post);\n}\n.connection-status.status-conectando[_ngcontent-%COMP%], .connection-status.status-reconectando[_ngcontent-%COMP%] {\n  background: #fff6e0;\n  color: #a06a00;\n}\n.connection-status.status-conectando[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%], .connection-status.status-reconectando[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #f0ad00;\n  animation: _ngcontent-%COMP%_pulse 1.2s ease-in-out infinite;\n}\n.connection-status.status-desconectado[_ngcontent-%COMP%] {\n  background: var(--cor-error-bg);\n  color: var(--cor-error);\n}\n.connection-status.status-desconectado[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--cor-error);\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.8);\n  }\n}\n.alerta-erro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--cor-error-bg);\n  color: var(--cor-error);\n  border: 1px solid rgba(220, 53, 69, 0.25);\n  border-radius: var(--border-radius);\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 0.9rem;\n}\n\n.logs-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n\n.filtro-tipos[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n\n.filtro-btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.9rem;\n  border-radius: 20px;\n  border: 1px solid var(--gray-300);\n  background: var(--white);\n  color: var(--text-dark);\n  font-weight: 600;\n  font-size: 0.85rem;\n  transition: var(--transition);\n}\n.filtro-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n}\n.filtro-btn.active[_ngcontent-%COMP%] {\n  color: var(--white);\n  border-color: transparent;\n  background: var(--primary-color);\n}\n.filtro-btn.tipo-post.active[_ngcontent-%COMP%] {\n  background: var(--cor-post);\n}\n.filtro-btn.tipo-put.active[_ngcontent-%COMP%] {\n  background: var(--cor-put);\n}\n.filtro-btn.tipo-error.active[_ngcontent-%COMP%] {\n  background: var(--cor-error);\n}\n\n.busca-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 220px;\n}\n.busca-wrapper[_ngcontent-%COMP%]   i.bi-search[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-light);\n}\n.busca-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 2.25rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 20px;\n  font-size: 0.9rem;\n}\n.busca-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n}\n.busca-wrapper[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.4rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background: var(--gray-200);\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.btn-acao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 0.9rem;\n  border-radius: 20px;\n  border: 1px solid var(--gray-300);\n  background: var(--white);\n  color: var(--text-dark);\n  font-weight: 600;\n  font-size: 0.85rem;\n  transition: var(--transition);\n}\n.btn-acao[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n}\n.btn-acao.active[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  border-color: var(--primary-color);\n  color: var(--white);\n}\n\n.novos-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  justify-content: center;\n  background: var(--primary-color);\n  color: var(--white);\n  border-radius: var(--border-radius);\n  padding: 0.5rem 1rem;\n  margin-bottom: 0.75rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.novos-banner[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n\n.logs-lista[_ngcontent-%COMP%] {\n  border: 1px solid var(--gray-200);\n  border-radius: var(--border-radius);\n  background: var(--white);\n  min-height: 200px;\n  max-height: 65vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-sm);\n}\n\n.logs-vazio[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: var(--text-light);\n}\n.logs-vazio[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 0.5rem;\n  color: var(--gray-300);\n}\n\n.log-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--gray-100);\n  padding: 0.55rem 0.9rem;\n  cursor: pointer;\n  border-left: 3px solid transparent;\n  transition: var(--transition);\n}\n.log-item[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n}\n.log-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.log-item.tipo-post[_ngcontent-%COMP%] {\n  border-left-color: var(--cor-post);\n}\n.log-item.tipo-put[_ngcontent-%COMP%] {\n  border-left-color: var(--cor-put);\n}\n.log-item.tipo-outro[_ngcontent-%COMP%] {\n  border-left-color: var(--cor-outro);\n}\n.log-item.tipo-error[_ngcontent-%COMP%] {\n  border-left-color: var(--cor-error);\n  background: var(--cor-error-bg);\n}\n.log-item.tipo-error[_ngcontent-%COMP%]:hover {\n  background: #fbd7db;\n}\n.log-item.expandido[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n}\n\n.log-linha[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.85rem;\n}\n\n.log-horario[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n  color: var(--text-light);\n  white-space: nowrap;\n}\n\n.log-badge[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.55rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  white-space: nowrap;\n  background: var(--cor-outro-bg);\n  color: var(--cor-outro);\n}\n\n.tipo-post[_ngcontent-%COMP%]   .log-badge[_ngcontent-%COMP%] {\n  background: var(--cor-post-bg);\n  color: var(--cor-post);\n}\n\n.tipo-put[_ngcontent-%COMP%]   .log-badge[_ngcontent-%COMP%] {\n  background: var(--cor-put-bg);\n  color: var(--cor-put);\n}\n\n.tipo-error[_ngcontent-%COMP%]   .log-badge[_ngcontent-%COMP%] {\n  background: var(--cor-error);\n  color: var(--white);\n}\n\n.log-fila[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-dark);\n  white-space: nowrap;\n}\n\n.log-resumo[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  color: var(--text-light);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: \"Courier New\", monospace;\n}\n\n.log-chevron[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  flex-shrink: 0;\n}\n\n.log-payload[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  padding: 0.75rem;\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  max-height: 320px;\n  overflow-y: auto;\n}\n\n.logs-rodape[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  text-align: right;\n  font-size: 0.8rem;\n  color: var(--text-light);\n}\n\n@media (max-width: 768px) {\n  .logs-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .log-linha[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .log-resumo[_ngcontent-%COMP%] {\n    white-space: normal;\n    order: 4;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbG9ncy9sb2dzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRDQUFBO0VBQ0EsOENBQUE7RUFDQSwyQkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFGTjtBQUlJO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRk47O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBSkY7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUpKO0FBT0U7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUxKO0FBT0k7RUFDRSwyQkFBQTtBQUxOO0FBU0U7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FBUEo7QUFRSTtFQUFjLDJCQUFBO0FBTGxCO0FBUUU7RUFFRSxtQkFBQTtFQUNBLGNBQUE7QUFQSjtBQVFJO0VBQ0UsbUJBQUE7RUFDQSwwQ0FBQTtBQU5OO0FBVUU7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0FBUko7QUFTSTtFQUFjLDRCQUFBO0FBTmxCOztBQVVBO0VBQ0U7SUFBVyxVQUFBO0lBQVksbUJBQUE7RUFMdkI7RUFNQTtJQUFNLFlBQUE7SUFBYyxxQkFBQTtFQUZwQjtBQUNGO0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUpGO0FBTUU7RUFDRSxrQ0FBQTtBQUpKO0FBT0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFMSjtBQVFFO0VBQXFCLDJCQUFBO0FBTHZCO0FBTUU7RUFBb0IsMEJBQUE7QUFIdEI7QUFJRTtFQUFzQiw0QkFBQTtBQUR4Qjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUZKO0FBSUk7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7QUFGTjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBTEY7QUFPRTtFQUNFLGtDQUFBO0FBTEo7QUFRRTtFQUNFLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFSRjtBQVVFO0VBQ0UsK0JBQUE7QUFSSjs7QUFhQTtFQUNFLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBVkY7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFWRjtBQVlFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQVZKOztBQWNBO0VBQ0Usd0NBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FBWEY7QUFhRTtFQUNFLDBCQUFBO0FBWEo7QUFjRTtFQUNFLG1CQUFBO0FBWko7QUFlRTtFQUFjLGtDQUFBO0FBWmhCO0FBYUU7RUFBYSxpQ0FBQTtBQVZmO0FBV0U7RUFBZSxtQ0FBQTtBQVJqQjtBQVdFO0VBQ0UsbUNBQUE7RUFDQSwrQkFBQTtBQVRKO0FBV0k7RUFDRSxtQkFBQTtBQVROO0FBYUU7RUFDRSwwQkFBQTtBQVhKOztBQWVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBWkY7O0FBZUE7RUFDRSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFaRjs7QUFlQTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0FBWkY7O0FBZUE7RUFBd0IsOEJBQUE7RUFBZ0Msc0JBQUE7QUFWeEQ7O0FBV0E7RUFBdUIsNkJBQUE7RUFBK0IscUJBQUE7QUFOdEQ7O0FBT0E7RUFBeUIsNEJBQUE7RUFBOEIsbUJBQUE7QUFGdkQ7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtBQURGOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsYUFBQTtFQURGO0VBSUE7SUFDRSxlQUFBO0VBRkY7RUFLQTtJQUNFLG1CQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7RUFIRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICMwMzMxOEM7XG4gIC0tcHJpbWFyeS1kYXJrOiAjMUM0RDhDO1xuICAtLXRleHQtZGFyazogIzNiM2IzYjtcbiAgLS10ZXh0LWxpZ2h0OiAjNzY3Njc2O1xuICAtLXdoaXRlOiAjRkZGRkZGO1xuICAtLWdyYXktNTA6ICNGQUZBRkE7XG4gIC0tZ3JheS0xMDA6ICNGNUY1RjU7XG4gIC0tZ3JheS0yMDA6ICNFRUVFRUU7XG4gIC0tZ3JheS0zMDA6ICNFMEUwRTA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3JkZXItcmFkaXVzLWxnOiAxNnB4O1xuICAtLXNoYWRvdy1zbTogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgLS1zaGFkb3ctbWQ6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gIC0tY29yLXBvc3Q6ICMxYTljNGI7XG4gIC0tY29yLXBvc3QtYmc6ICNlNmY3ZWM7XG4gIC0tY29yLXB1dDogIzBkNmVmZDtcbiAgLS1jb3ItcHV0LWJnOiAjZTdmMGZmO1xuICAtLWNvci1lcnJvcjogI2RjMzU0NTtcbiAgLS1jb3ItZXJyb3ItYmc6ICNmZGVhZWE7XG4gIC0tY29yLW91dHJvOiAjNmM3NTdkO1xuICAtLWNvci1vdXRyby1iZzogI2YxZjFmMTtcbn1cblxuLmxvZ3MtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMS41cmVtO1xufVxuXG4vLyBDYWJlw4PCp2FsaG9cbi5sb2dzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG5cbiAgLmxvZ3MtdGl0bGUge1xuICAgIGgyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICBtYXJnaW46IDAuMjVyZW0gMCAwO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICB9XG59XG5cbi5jb25uZWN0aW9uLXN0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuXG4gIC5zdGF0dXMtZG90IHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvci1vdXRybyk7XG4gIH1cblxuICAuYnRuLWljb24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAmLnN0YXR1cy1jb25lY3RhZG8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvci1wb3N0LWJnKTtcbiAgICBjb2xvcjogdmFyKC0tY29yLXBvc3QpO1xuICAgIC5zdGF0dXMtZG90IHsgYmFja2dyb3VuZDogdmFyKC0tY29yLXBvc3QpOyB9XG4gIH1cblxuICAmLnN0YXR1cy1jb25lY3RhbmRvLFxuICAmLnN0YXR1cy1yZWNvbmVjdGFuZG8ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY2ZTA7XG4gICAgY29sb3I6ICNhMDZhMDA7XG4gICAgLnN0YXR1cy1kb3Qge1xuICAgICAgYmFja2dyb3VuZDogI2YwYWQwMDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICB9XG4gIH1cblxuICAmLnN0YXR1cy1kZXNjb25lY3RhZG8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvci1lcnJvci1iZyk7XG4gICAgY29sb3I6IHZhcigtLWNvci1lcnJvcik7XG4gICAgLnN0YXR1cy1kb3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb3ItZXJyb3IpOyB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjU7IHRyYW5zZm9ybTogc2NhbGUoMC44KTsgfVxufVxuXG4vLyBBbGVydGEgZGUgZXJyb1xuLmFsZXJ0YS1lcnJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvci1lcnJvci1iZyk7XG4gIGNvbG9yOiB2YXIoLS1jb3ItZXJyb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMCwgNTMsIDY5LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi8vIEJhcnJhIGRlIGZlcnJhbWVudGFzXG4ubG9ncy10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNzVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi5maWx0cm8tdGlwb3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNHJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsdHJvLWJ0biB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjlyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMzAwKTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgfVxuXG4gICYudGlwby1wb3N0LmFjdGl2ZSB7IGJhY2tncm91bmQ6IHZhcigtLWNvci1wb3N0KTsgfVxuICAmLnRpcG8tcHV0LmFjdGl2ZSB7IGJhY2tncm91bmQ6IHZhcigtLWNvci1wdXQpOyB9XG4gICYudGlwby1lcnJvci5hY3RpdmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb3ItZXJyb3IpOyB9XG59XG5cbi5idXNjYS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDIyMHB4O1xuXG4gIGkuYmktc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMC43NXJlbTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAyLjI1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMzAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAuY2xlYXItYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAuNHJlbTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMjAwKTtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi5hY29lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYnRuLWFjYW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNHJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuOXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS0zMDApO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB9XG59XG5cbi8vIEJhbm5lciBkZSBub3ZvcyBsb2dzIChwYXVzYWRvKVxuLm5vdm9zLWJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XG4gIH1cbn1cblxuLy8gTGlzdGEgZGUgbG9nc1xuLmxvZ3MtbGlzdGEge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiA2NXZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xufVxuXG4ubG9ncy12YXppbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XG4gIH1cbn1cblxuLmxvZy1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcbiAgcGFkZGluZzogMC41NXJlbSAwLjlyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS01MCk7XG4gIH1cblxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuICAmLnRpcG8tcG9zdCB7IGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1jb3ItcG9zdCk7IH1cbiAgJi50aXBvLXB1dCB7IGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1jb3ItcHV0KTsgfVxuICAmLnRpcG8tb3V0cm8geyBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tY29yLW91dHJvKTsgfVxuXG4gIC8vIGNhZmV0ZXJpYS5lcnJvciDDg8KpIG8gY2FzbyBtYWlzIGNyw4PCrXRpY286IGRlc3RhcXVlIGRlIGZ1bmRvLCBuw4PCo28gc8ODwrMgYSBib3JkYVxuICAmLnRpcG8tZXJyb3Ige1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1jb3ItZXJyb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvci1lcnJvci1iZyk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmYmQ3ZGI7XG4gICAgfVxuICB9XG5cbiAgJi5leHBhbmRpZG8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktNTApO1xuICB9XG59XG5cbi5sb2ctbGluaGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLmxvZy1ob3JhcmlvIHtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubG9nLWJhZGdlIHtcbiAgcGFkZGluZzogMC4xNXJlbSAwLjU1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvci1vdXRyby1iZyk7XG4gIGNvbG9yOiB2YXIoLS1jb3Itb3V0cm8pO1xufVxuXG4udGlwby1wb3N0IC5sb2ctYmFkZ2UgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb3ItcG9zdC1iZyk7IGNvbG9yOiB2YXIoLS1jb3ItcG9zdCk7IH1cbi50aXBvLXB1dCAubG9nLWJhZGdlIHsgYmFja2dyb3VuZDogdmFyKC0tY29yLXB1dC1iZyk7IGNvbG9yOiB2YXIoLS1jb3ItcHV0KTsgfVxuLnRpcG8tZXJyb3IgLmxvZy1iYWRnZSB7IGJhY2tncm91bmQ6IHZhcigtLWNvci1lcnJvcik7IGNvbG9yOiB2YXIoLS13aGl0ZSk7IH1cblxuLmxvZy1maWxhIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5sb2ctcmVzdW1vIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xufVxuXG4ubG9nLWNoZXZyb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubG9nLXBheWxvYWQge1xuICBtYXJnaW46IDAuNXJlbSAwIDA7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktNTApO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbWF4LWhlaWdodDogMzIwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5sb2dzLXJvZGFwZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9ncy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAubG9nLWxpbmhhIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAubG9nLXJlc3VtbyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvcmRlcjogNDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 1157
/*!**********************************************!*\
  !*** ./src/app/features/logs/logs.module.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsModule: () => (/* binding */ LogsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _logs_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs-routing.module */ 9348);
/* harmony import */ var _logs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logs.component */ 549);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4363);





class LogsModule {
  static {
    this.ɵfac = function LogsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: LogsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _logs_routing_module__WEBPACK_IMPORTED_MODULE_1__.LogsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LogsModule, {
    declarations: [_logs_component__WEBPACK_IMPORTED_MODULE_2__.LogsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _logs_routing_module__WEBPACK_IMPORTED_MODULE_1__.LogsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
    exports: [_logs_component__WEBPACK_IMPORTED_MODULE_2__.LogsComponent]
  });
})();

/***/ },

/***/ 3341
/*!**************************************************!*\
  !*** ./src/app/shared/models/log-entry.model.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   criarLogEntry: () => (/* binding */ criarLogEntry),
/* harmony export */   formatarPayload: () => (/* binding */ formatarPayload)
/* harmony export */ });
function criarLogEntry(envelope, id) {
  return {
    ...envelope,
    id,
    recebidoEmLocal: new Date(envelope.recebidoEm),
    payloadTexto: typeof envelope.payload === 'string' ? envelope.payload : JSON.stringify(envelope.payload)
  };
}
function formatarPayload(log) {
  if (typeof log.payload === 'string') {
    return log.payload;
  }
  try {
    return JSON.stringify(log.payload, null, 2);
  } catch {
    return log.payloadTexto;
  }
}

/***/ },

/***/ 1517
/*!*************************************************!*\
  !*** ./src/app/shared/services/logs.service.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsService: () => (/* binding */ LogsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _models_log_entry_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/log-entry.model */ 3341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4363);



/** Sem autenticação: o endpoint /ws/logs é público. */
const WS_URL = 'ws://localhost:8080/ws/logs';
const RECONEXAO_DELAY_MS = 4000;
/**
 * Cliente do WebSocket /ws/logs (broadcast de eventos das filas RabbitMQ).
 * Expõe o stream de logs e o estado da conexão como Observables; reconecta
 * automaticamente com um delay fixo enquanto conectar() não for desfeito
 * por desconectar().
 */
class LogsService {
  constructor() {
    this.socket = null;
    this.reconexaoTimer = null;
    this.fechadoManualmente = true;
    this.proximoId = 1;
    this.logSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.log$ = this.logSubject.asObservable();
    this.estadoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('desconectado');
    this.estado$ = this.estadoSubject.asObservable();
    this.erroSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.erro$ = this.erroSubject.asObservable();
  }
  /** Idempotente: chamar de novo enquanto já há conexão/reconexão em curso não faz nada. */
  conectar() {
    if (this.socket || this.reconexaoTimer) {
      return;
    }
    this.fechadoManualmente = false;
    this.abrirConexao();
  }
  /** Fecha a conexão e cancela qualquer reconexão agendada. */
  desconectar() {
    this.fechadoManualmente = true;
    if (this.reconexaoTimer) {
      clearTimeout(this.reconexaoTimer);
      this.reconexaoTimer = null;
    }
    this.socket?.close();
    this.socket = null;
    this.estadoSubject.next('desconectado');
  }
  abrirConexao() {
    this.estadoSubject.next(this.estadoSubject.value === 'desconectado' ? 'conectando' : 'reconectando');
    let socket;
    try {
      socket = new WebSocket(WS_URL);
    } catch {
      this.erroSubject.next('Não foi possível iniciar a conexão com o servidor de logs.');
      this.agendarReconexao();
      return;
    }
    this.socket = socket;
    socket.onopen = () => {
      this.estadoSubject.next('conectado');
    };
    socket.onmessage = event => {
      this.processarMensagem(event.data);
    };
    socket.onerror = () => {
      this.erroSubject.next('Erro na conexão com o servidor de logs.');
    };
    socket.onclose = () => {
      this.socket = null;
      if (this.fechadoManualmente) {
        this.estadoSubject.next('desconectado');
        return;
      }
      this.estadoSubject.next('reconectando');
      this.agendarReconexao();
    };
  }
  processarMensagem(data) {
    let envelope;
    try {
      envelope = JSON.parse(data);
    } catch {
      this.erroSubject.next('Uma mensagem recebida estava em formato inválido e foi descartada.');
      return;
    }
    this.logSubject.next((0,_models_log_entry_model__WEBPACK_IMPORTED_MODULE_2__.criarLogEntry)(envelope, this.proximoId++));
  }
  agendarReconexao() {
    if (this.reconexaoTimer || this.fechadoManualmente) {
      return;
    }
    this.reconexaoTimer = setTimeout(() => {
      this.reconexaoTimer = null;
      if (!this.fechadoManualmente) {
        this.abrirConexao();
      }
    }, RECONEXAO_DELAY_MS);
  }
  static {
    this.ɵfac = function LogsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: LogsService,
      factory: LogsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_logs_logs_module_ts.js.map
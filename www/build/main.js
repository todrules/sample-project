webpackJsonp([0],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lstm__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetComponent = (function () {
    function NetComponent(element, d3Service) {
        this.colorScheme = 'vivid';
        this.autoScale = true;
        this.stats = [
            {
                'name': 'Loss', 'series': [
                    { name: '0', value: 0 }, { name: '1', value: 1 }
                ]
            },
            {
                'name': 'Learning Rate', 'series': [
                    { name: '0', value: 0 }, { name: '1', value: 1 }
                ]
            }
        ];
        this.view = [700, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Time';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Stats';
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
        this.graph = { nodes: [], links: [] };
        Object.assign(this, this.stats);
    }
    NetComponent.prototype.ngOnInit = function () {
    };
    NetComponent.prototype.createNetwork = function (inputSize, outputSize, numMemBlocks, MemBlockSize) {
        if (inputSize === void 0) { inputSize = 2; }
        if (outputSize === void 0) { outputSize = 1; }
        if (numMemBlocks === void 0) { numMemBlocks = 3; }
        if (MemBlockSize === void 0) { MemBlockSize = 4; }
        this.myNetwork = new __WEBPACK_IMPORTED_MODULE_2__lstm__["a" /* LSTM */](inputSize, outputSize, numMemBlocks, MemBlockSize);
        console.log(this.myNetwork);
        this.initGraphs();
    };
    NetComponent.prototype.initGraphs = function () {
        var _this = this;
        this.stats[0].series = this.myNetwork.loss;
        this.stats[1].series = this.myNetwork.lr;
        var sub = this.myNetwork.stat$.subscribe(function (stats) {
            _this.stats[0].series = stats.loss;
            _this.stats[1].series = stats.lr;
            _this.stats = _this.stats.slice();
            var loss = stats.loss[stats.loss.length - 1];
            _this.loss = loss.value;
            var lr = stats.lr[stats.lr.length - 1];
            _this.lr = lr.value;
            _this.iter = lr.name;
        });
        this.myNetwork.neurons.forEach(function (obj, index) {
            var neuron = { id: obj.uuid, group: obj.guid };
            _this.graph.nodes.push(neuron);
        });
        this.myNetwork.connections.forEach(function (obj, index) {
            var conn = {
                source: obj.origNode.uuid,
                target: obj.destNode.uuid,
                value: Math.sqrt(obj.weight * obj.weight)
            };
            _this.graph.links.push(conn);
        });
        this.svg = this.d3.select('#mynet');
        this.width = +this.svg.attr('width');
        this.height = +this.svg.attr('height');
        this.color = this.d3.scaleOrdinal(this.d3.schemeCategory20);
        this.simulation = this.d3.forceSimulation()
            .force('link', this.d3.forceLink()
            .id(function (d) {
            var id = d;
            return id.id;
        })
            .distance(15)
            .strength(0.1))
            .force('charge', this.d3.forceManyBody())
            .force('center', this.d3.forceCenter(this.width / 2, this.height / 2));
        this.render(this.graph);
    };
    NetComponent.prototype.ticked = function () {
        this.link
            .attr('x1', function (d) { return d.source.x; })
            .attr('y1', function (d) { return d.source.y; })
            .attr('x2', function (d) { return d.target.x; })
            .attr('y2', function (d) { return d.target.y; });
        this.node
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; });
    };
    NetComponent.prototype.render = function (graph) {
        var _this = this;
        this.link = this.svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(graph.links)
            .enter().append('line')
            .attr('stroke-width', function (d) { return Math.sqrt(d.value); });
        this.node = this.svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(graph.nodes)
            .enter().append('circle')
            .attr('r', 5)
            .attr('fill', function (d) { return _this.color(d.group); })
            .call(this.d3.drag()
            .on('start', function (d) { return _this.dragstarted(d); })
            .on('drag', function (d) { return _this.dragged(d); })
            .on('end', function (d) { return _this.dragended(d); }));
        this.node.append('title')
            .text(function (d) { return d.id; });
        this.simulation
            .nodes(graph.nodes)
            .on('tick', function () { return _this.ticked(); });
        this.simulation.force('link')
            .links(graph.links);
    };
    NetComponent.prototype.dragged = function (d) {
        d.fx = this.d3.event.x;
        d.fy = this.d3.event.y;
    };
    NetComponent.prototype.dragended = function (d) {
        if (!this.d3.event.active) {
            this.simulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
    };
    NetComponent.prototype.dragstarted = function (d) {
        if (!this.d3.event.active) {
            this.simulation.alphaTarget(0.3).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
    };
    return NetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mycanvas'),
    __metadata("design:type", Object)
], NetComponent.prototype, "mycanvas", void 0);
NetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-net',template:/*ion-inline-start:"/Users/gtgoodwin/solar/src/widgets/neuralnet/net.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Create Neural Network</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style="border-top: 1px solid rgba(224,224,224,1);" padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h4>Create Neural Network</h4>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label color="primary" stacked>Input Size</ion-label>\n          <ion-input type="number" #inputsize value="2"></ion-input>\n        </ion-col>\n        <ion-col>\n              <ion-label color="primary" stacked>Output Size</ion-label>\n              <ion-input type="number" #outputsize value="1"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n              <ion-label color="primary" stacked># Of Mem. Blocks</ion-label>\n              <ion-input type="number" #nummemblocks value="3"></ion-input>\n        </ion-col>\n        <ion-col>\n              <ion-label color="primary" stacked>Size of Mem. Blks</ion-label>\n              <ion-input type="number" #memblocksize value="4"></ion-input>\n          <button ion-button padding color="secondary" (click)="createNetwork(inputsize.value, outputsize.value, nummemblocks.value, memblocksize.value)">Create Network\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <svg class="draw" id="mynet" width="400" height="400"></svg>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/solar/src/widgets/neuralnet/net.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]])
], NetComponent);

//# sourceMappingURL=net.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__neuron__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_config__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_seedrandom__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_seedrandom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_seedrandom__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Group = Group_1 = (function () {
    function Group(size) {
        //   console.log('creating Group');
        this.neurons = [];
        this.connections = {
            in: [],
            out: [],
            self: []
        };
        for (var i = 0; i < size; i++) {
            this.neurons.push(new __WEBPACK_IMPORTED_MODULE_1__neuron__["a" /* Neuron */]());
        }
    }
    Group.prototype.set = function (values) {
        this.rand = __WEBPACK_IMPORTED_MODULE_3_seedrandom__["alea"](Math.random());
        this.uuid = this.rand();
        for (var i = 0; i < this.neurons.length; i++) {
            if (values.bias) {
                this.neurons[i].bias = values.bias;
            }
            this.neurons[i].squash = values.squash || this.neurons[i].squash;
            this.neurons[i].type = values.type || this.neurons[i].type;
            this.neurons[i].guid = this.uuid;
        }
    };
    Group.prototype.connectGroup = function (target, method, weight) {
        //  console.warn('Connecting Group');
        var connections = [];
        if (target instanceof Group_1) {
            if (method === __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL || method === __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ELSE) {
                for (var i = 0; i < this.neurons.length; i++) {
                    for (var j = 0; j < target.neurons.length; j++) {
                        if (method === __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ELSE && this.neurons[i] === target.neurons[j]) {
                            continue;
                        }
                        var connection = this.neurons[i].connectNeurons(target.neurons[j], weight);
                        this.connections.out.push(connection[0]);
                        target.connections.in.push(connection[0]);
                        connections.push(connection[0]);
                    }
                }
            }
            else if (method === __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ONE_TO_ONE) {
                if (this.neurons.length !== target.neurons.length) {
                    throw new Error('From and To group must be the same size!');
                }
                for (var i = 0; i < this.neurons.length; i++) {
                    var connection = this.neurons[i].connectNeurons(target.neurons[i], weight);
                    this.connections.self.push(connection[0]);
                    connections.push(connection[0]);
                }
            }
        }
        else {
            for (var i = 0; i < this.neurons.length; i++) {
                var connection = this.neurons[i].connectNeurons(target, weight);
                this.connections.out.push(connection[0]);
                connections.push(connection[0]);
            }
        }
        return connections;
    };
    Group.prototype.gate = function (connections, method) {
        //    console.group();
        //   console.log('starting gate');
        //    console.log(connections);
        if (!Array.isArray(connections)) {
            connections = [connections];
        }
        var neurons1 = [];
        var neurons2 = [];
        for (var i = 0; i < connections.length; i++) {
            var connection = connections[i];
            //      console.log(connection);
            //     console.log(connection.originatingNode);
            //      console.log(connection.destinationNode);
            if (!neurons1.includes(connection.originatingNode)) {
                neurons1.push(connection.originatingNode);
            }
            if (!neurons2.includes(connection.destinationNode)) {
                neurons2.push(connection.destinationNode);
            }
        }
        switch (method) {
            case __WEBPACK_IMPORTED_MODULE_2__data_config__["c" /* StaticGating */].INPUT:
                for (var i = 0; i < neurons2.length; i++) {
                    var node = neurons2[i];
                    var gater = this.neurons[i % this.neurons.length];
                    for (var j = 0; j < node.connections.in.length; j++) {
                        var conn = node.connections.in[j];
                        if (connections.includes(conn)) {
                            gater.gate(conn);
                        }
                    }
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__data_config__["c" /* StaticGating */].OUTPUT:
                for (var i = 0; i < neurons1.length; i++) {
                    var node = neurons1[i];
                    var gater = this.neurons[i % this.neurons.length];
                    for (var j = 0; j < node.connections.out.length; j++) {
                        var conn = node.connections.out[j];
                        if (connections.includes(conn)) {
                            gater.gate(conn);
                        }
                    }
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__data_config__["c" /* StaticGating */].SELF:
                for (var i = 0; i < neurons1.length; i++) {
                    var node = neurons1[i];
                    var gater = this.neurons[i % this.neurons.length];
                    if (connections.includes(node.connections.self)) {
                        gater.gate(node.connections.self);
                    }
                }
        }
        //    console.groupEnd();
    };
    return Group;
}());
Group = Group_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [Object])
], Group);

var Group_1;
//# sourceMappingURL=group.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var initialState = {
    activation: 0
};
var ActivationActions = (function () {
    function ActivationActions(storage) {
        var _this = this;
        this.storage = storage;
        this.tanh = function (x, derivate) {
            var fx = Math.tanh(x);
            if (derivate) {
                fx = 1 - Math.pow(fx, 2);
            }
            _this._tanh(fx);
            return fx;
        };
        this.identity = function (x, derivate) {
            var fx = x;
            if (derivate) {
                fx = 1;
            }
            _this._identity(fx);
            return fx;
        };
        this.step = function (x, derivate) {
            var fx = x;
            if (derivate) {
                fx = 0;
            }
            else {
                fx = fx > 0 ? 1 : 0;
            }
            _this._step(fx);
            return fx;
        };
        this.relu = function (x, derivate) {
            var fx = x;
            if (derivate) {
                fx = fx > 0 ? 1 : 0;
            }
            else {
                fx = fx > 0 ? fx : 0;
            }
            _this._relu(fx);
            return fx;
        };
        this.softsign = function (x, derivate) {
            var fx = 1 + Math.abs(x);
            if (derivate) {
                fx = x / Math.pow(fx, 2);
            }
            else {
                fx = x / fx;
            }
            _this._softsign(fx);
            return fx;
        };
        this.sinusoid = function (x, derivate) {
            var fx;
            if (derivate) {
                fx = Math.cos(x);
            }
            else {
                fx = Math.sin(x);
            }
            _this._sinusoid(fx);
            return fx;
        };
        this.gaussian = function (x, derivate) {
            var fx = Math.exp(-Math.pow(x, 2));
            if (derivate) {
                fx = (-2 * x * fx);
            }
            _this._gaussian(fx);
            return fx;
        };
        this.bentIdentity = function (x, derivate) {
            var fx = Math.sqrt(Math.pow(x, 2) + 1);
            if (derivate) {
                fx = (x / (2 * fx) + 1);
            }
            else {
                fx = ((fx - 1) / 2) + x;
            }
            _this._bentIdentity(fx);
            return fx;
        };
        this.bipolar = function (x, derivate) {
            var fx = 1;
            if (derivate) {
                fx = 0;
            }
            else {
                fx = fx > 0 ? fx : -1;
            }
            _this._bipolar(fx);
            return fx;
        };
        this.bipolarSigmoid = function (x, derivate) {
            var fx = 2 / (1 + Math.exp(-x)) - 1;
            if (derivate) {
                fx = 1 / 2 * (1 + fx) * (1 - fx);
            }
            _this._bipolarSigmoid(fx);
            return fx;
        };
        this.hardTanh = function (x, derivate) {
            var fx;
            if (derivate) {
                fx = (x > -1 && x < 1) ? 1 : 0;
            }
            else {
                fx = Math.max(-1, Math.min(1, x));
            }
            _this._hardTanh(fx);
            return fx;
        };
        this.absolute = function (x, derivate) {
            var fx;
            if (derivate) {
                fx = x < 0 ? -1 : 1;
            }
            else {
                fx = Math.abs(x);
            }
            _this._absolute(fx);
            return fx;
        };
        this.inverse = function (x, derivate) {
            var fx = -1;
            if (!derivate) {
                fx = 1 - x;
            }
            _this._inverse(fx);
            return fx;
        };
        this.selu = function (x, derivate) {
            var alpha = 1.6732632423543772848170429916717;
            var scale = 1.0507009873554804934193349852946;
            var fx = x > 0 ? x : alpha * Math.exp(x) - alpha;
            if (derivate) {
                fx = x > 0 ? scale : (fx + alpha) * scale;
            }
            else {
                fx = fx * scale;
            }
            _this._selu(fx);
            return fx;
        };
    }
    ActivationActions.prototype.initActivation = function (initState) {
        if (initState === void 0) { initState = initialState; }
        if (this._initActivation(initState)) {
            this._initActivationSuccess(initState);
        }
    };
    ;
    ActivationActions.prototype._initActivation = function (initState) {
        //   this.store.dispatch({
        //    type: ActivationActions.INIT_ACTIVATION,
        //     payload: initState
        //   });
        this.storage.set('activation', initState);
        return true;
    };
    ActivationActions.prototype._initActivationSuccess = function (state) {
        //   this.store.dispatch({
        //     type: ActivationActions.INIT_ACTIVATION_SUCCESS,
        //     payload: state
        //   });
    };
    ActivationActions.prototype._initActivationError = function (errMsg) {
        //   this.store.dispatch(ActivationActions.handleError(errMsg, ActivationActions.INIT_ACTIVATION_ERROR));
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(errMsg);
    };
    ActivationActions.prototype._logistic = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.LOGISTIC,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._tanh = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.TANH,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._identity = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.IDENTITY,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._step = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.STEP,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._relu = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.RELU,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._softsign = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.SOFTSIGN,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._sinusoid = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.SINUSOID,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._gaussian = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.GAUSSIAN,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._bentIdentity = function (fx) {
        //    this.store.dispatch({
        //     type: ActivationActions.BENT_IDENTITY,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._bipolar = function (fx) {
        //   this.store.dispatch({
        //      type: ActivationActions.BIPOLAR,
        //      payload: fx
        //    });
    };
    ActivationActions.prototype._bipolarSigmoid = function (fx) {
        //   this.store.dispatch({
        //    type: ActivationActions.BIPOLAR_SIGMOID,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._hardTanh = function (fx) {
        //   this.store.dispatch({
        //    type: ActivationActions.HARD_TANH,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._absolute = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.ABSOLUTE,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._inverse = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.INVERSE,
        //     payload: fx
        //   });
    };
    ActivationActions.prototype._selu = function (fx) {
        //   this.store.dispatch({
        //     type: ActivationActions.SELU,
        //     payload: fx
        //   });
    };
    /****************
     * HELPER METHODS
     ****************/
    ActivationActions.handleError = function (errMsg, type) {
        return {
            type: type,
            payload: errMsg
        };
    };
    return ActivationActions;
}());
/****************
 * INIT Cost
 ****************/
ActivationActions.INIT_ACTIVATION = 'INIT_ACTIVATION';
ActivationActions.INIT_ACTIVATION_SUCCESS = 'INIT_ACTIVATION_SUCCESS';
ActivationActions.INIT_ACTIVATION_ERROR = 'INIT_ACTIVATION_ERROR';
/****************
 * LOGISTIC
 ****************/
ActivationActions.LOGISTIC = function (x, derivate) {
    var fx = 1 / (1 + Math.exp(-x));
    if (derivate) {
        fx = fx * (1 - fx);
    }
    return fx;
};
ActivationActions.logistic = function (x, derivate) {
    var fx = 1 / (1 + Math.exp(-x));
    if (derivate) {
        fx = fx * (1 - fx);
    }
    return fx;
};
/****************
 * TANH
 ****************/
ActivationActions.TANH = 'TANH';
/****************
 * IDENTITY
 ****************/
ActivationActions.IDENTITY = 'IDENTITY';
/****************
 * STEP
 ****************/
ActivationActions.STEP = 'STEP';
/****************
 * RELU
 ****************/
ActivationActions.RELU = 'RELU';
/****************
 * SOFTSIGN
 ****************/
ActivationActions.SOFTSIGN = 'SOFTSIGN';
/****************
 * SINUSOID
 ****************/
ActivationActions.SINUSOID = 'SINUSOID';
/****************
 * GAUSSIAN
 ****************/
ActivationActions.GAUSSIAN = 'GAUSSIAN';
/****************
 * BENT_IDENTITY
 ****************/
ActivationActions.BENT_IDENTITY = 'BENT_IDENTITY';
/****************
 * BIPOLAR
 ****************/
ActivationActions.BIPOLAR = 'BIPOLAR';
/****************
 * BIPOLAR_SIGMOID
 ****************/
ActivationActions.BIPOLAR_SIGMOID = 'BIPOLAR_SIGMOID';
/****************
 * HARD_TANH
 ****************/
ActivationActions.HARD_TANH = 'HARD_TANH';
/****************
 * ABSOLUTE
 ****************/
ActivationActions.ABSOLUTE = 'ABSOLUTE';
/****************
 * INVERSE
 ****************/
ActivationActions.INVERSE = 'INVERSE';
/****************
 * SELU
 * @link https://arxiv.org/pdf/1706.02515.pdf
 ****************/
ActivationActions.SELU = 'SELU';
ActivationActions = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
], ActivationActions);

//# sourceMappingURL=activation.actions.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mutation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Mutation = Mutation_1 = (function () {
    function Mutation() {
    }
    return Mutation;
}());
Mutation.ADD_NODE = {
    name: 'ADD_NODE'
};
Mutation.SUB_NODE = {
    name: 'SUB_NODE',
    keep_gates: true
};
Mutation.ADD_CONN = {
    name: 'ADD_CONN'
};
Mutation.SUB_CONN = {
    name: 'REMOVE_CONN'
};
Mutation.MOD_WEIGHT = {
    name: 'MOD_WEIGHT',
    min: -1,
    max: 1
};
Mutation.MOD_BIAS = {
    name: 'MOD_BIAS',
    min: -1,
    max: 1
};
Mutation.MOD_ACTIVATION = {
    name: 'MOD_ACTIVATION',
    mutateOutput: true,
    allowed: [
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].LOGISTIC,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].TANH,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].RELU,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].IDENTITY,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].STEP,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].SOFTSIGN,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].SINUSOID,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].GAUSSIAN,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].BENT_IDENTITY,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].BIPOLAR,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].BIPOLAR_SIGMOID,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].HARD_TANH,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].ABSOLUTE,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].INVERSE,
        __WEBPACK_IMPORTED_MODULE_0__actions_activation_actions__["a" /* ActivationActions */].SELU
    ]
};
Mutation.ADD_SELF_CONN = {
    name: 'ADD_SELF_CONN'
};
Mutation.SUB_SELF_CONN = {
    name: 'SUB_SELF_CONN'
};
Mutation.ADD_GATE = {
    name: 'ADD_GATE'
};
Mutation.SUB_GATE = {
    name: 'SUB_GATE'
};
Mutation.ADD_BACK_CONN = {
    name: 'ADD_BACK_CONN'
};
Mutation.SUB_BACK_CONN = {
    name: 'SUB_BACK_CONN'
};
Mutation.SWAP_NODES = {
    name: 'SWAP_NODES',
    mutateOutput: true
};
Mutation.ALL = [
    Mutation_1.ADD_NODE,
    Mutation_1.SUB_NODE,
    Mutation_1.ADD_CONN,
    Mutation_1.SUB_CONN,
    Mutation_1.MOD_WEIGHT,
    Mutation_1.MOD_BIAS,
    Mutation_1.MOD_ACTIVATION,
    Mutation_1.ADD_GATE,
    Mutation_1.SUB_GATE,
    Mutation_1.ADD_SELF_CONN,
    Mutation_1.SUB_SELF_CONN,
    Mutation_1.ADD_BACK_CONN,
    Mutation_1.SUB_BACK_CONN,
    Mutation_1.SWAP_NODES
];
Mutation.FFW = [
    Mutation_1.ADD_NODE,
    Mutation_1.SUB_NODE,
    Mutation_1.ADD_CONN,
    Mutation_1.SUB_CONN,
    Mutation_1.MOD_WEIGHT,
    Mutation_1.MOD_BIAS,
    Mutation_1.MOD_ACTIVATION,
    Mutation_1.SWAP_NODES
];
Mutation = Mutation_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], Mutation);

var Mutation_1;
//# sourceMappingURL=mutation.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 273;

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.title = 'Sample Dashboard';
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Q1 2016', 'Q2 2016', 'Q3 2016', 'Q4 2016', 'Q1 2017', 'Q2 2017'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [], label: 'Hamburger Sales' },
            { data: [], label: 'Hot Dog Sales' }
        ];
        this.barChartData0 = [
            { data: [59, 80, 81, 56, 55, 40], label: 'Hamburger Sales' },
            { data: [48, 40, 19, 86, 27, 90], label: 'Hot Dog Sales' }
        ];
        this.barChartData1 = [
            { data: [65, 75, 60, 45, 48, 57], label: 'Hamburger Sales' },
            { data: [52, 38, 40, 71, 42, 78], label: 'Hot Dog Sales' }
        ];
        this.barChartData2 = [
            { data: [71, 65, 70, 75, 40, 80], label: 'Hamburger Sales' },
            { data: [78, 68, 40, 65, 52, 75], label: 'Hot Dog Sales' }
        ];
        this.barSeries = 1;
        this.partial = '45,125,210';
        this.barChartColors = [
            {
                backgroundColor: ["rgba(" + this.partial + ",0.6)", "rgba(" + this.partial + ",0.6)", "rgba(" + this.partial + ",0.6)", "rgba(" + this.partial + ",0.6)", "rgba(" + this.partial + ",0.6)", "rgba(" + this.partial + ",0.6)"],
                borderColor: ["rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)"],
                hoverBackgroundColor: ["rgba(" + this.partial + ",0.7)", "rgba(" + this.partial + ",0.7)", "rgba(" + this.partial + ",0.7)", "rgba(" + this.partial + ",0.7)", "rgba(" + this.partial + ",0.7)", "rgba(" + this.partial + ",0.7)"],
                hoverBorderColor: ["rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)"]
            },
            {
                backgroundColor: ['rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)'],
                borderColor: ['rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)'],
                hoverBackgroundColor: ['rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)'],
                hoverBorderColor: ['rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)']
            }
        ];
        this.doughnutChartLabels = ['Credit Card', 'ACH Debit', 'Bitcoin', 'Apple Pay'];
        this.doughnutChartData = [];
        this.doughnutChartData0 = [220, 12, 64, 45];
        this.doughnutChartData1 = [180, 48, 100, 120];
        this.doughnutChartData2 = [150, 52, 36, 38];
        this.doughSeries = 1;
        this.doughnutChartType = 'doughnut';
        this.doughnutChartColors = [
            {
                backgroundColor: ['rgba(179,186,189,0.6)', 'rgba(49,54,56,0.6)', 'rgba(76,84,87,0.6)', 'rgba(114,126,131,0.6)', 'rgba(28,32,33,0.6)'],
                borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(207,79,156,0.3)'],
                hoverBackgroundColor: ['rgba(179,186,189,0.9)', 'rgba(49,54,56,0.9)', 'rgba(76,84,87,0.9)', 'rgba(114,126,131,0.9)', 'rgba(28,32,33,0.9)'],
                hoverBorderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)']
            }
        ];
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Utilities' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Payroll' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Food Cost' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true,
            series: {
                0: {
                    color: 'rgba(55,34,72,1)'
                },
                1: {
                    color: 'rgba(68,53,91,1)'
                },
                2: {
                    color: 'rgba(61,43,61,1)'
                }
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(55,34,72,0.2)',
                borderColor: 'rgba(55,34,72,1)',
                pointBackgroundColor: 'rgba(55,34,72,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(55,34,72,0.8)'
            },
            {
                backgroundColor: 'rgba(68,53,91,0.2)',
                borderColor: 'rgba(68,53,91,1)',
                pointBackgroundColor: 'rgba(68,53,91,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(68,53,91,1)'
            },
            {
                backgroundColor: 'rgba(61,43,61,0.2)',
                borderColor: 'rgba(61,43,61,1)',
                pointBackgroundColor: 'rgba(61,43,61,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(61,43,61,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    DashboardComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.updatePieChart = function () {
        switch (this.doughSeries) {
            case 0:
                console.log('zero');
                this.doughSeries++;
                return this.doughnutChartData = this.doughnutChartData0;
            case 1:
                this.doughSeries++;
                return this.doughnutChartData = this.doughnutChartData1;
            case 2:
                this.doughSeries = 0;
                return this.doughnutChartData = this.doughnutChartData2;
            default:
                return this.doughnutChartData = this.doughnutChartData0;
        }
    };
    DashboardComponent.prototype.updateBarChart = function () {
        switch (this.barSeries) {
            case 0:
                console.log('zero');
                this.barSeries++;
                return this.barChartData = this.barChartData0;
            case 1:
                this.barSeries++;
                return this.barChartData = this.barChartData1;
            case 2:
                this.barSeries = 0;
                return this.barChartData = this.barChartData2;
            default:
                return this.barChartData = this.barChartData0;
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        Object.assign(this.barChartData, this.barChartData0);
        Object.assign(this.doughnutChartData, this.doughnutChartData0);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dash',template:/*ion-inline-start:"/Users/gtgoodwin/solar/src/widgets/dashboard/dashboard.template.html"*/'<ion-header no-border style="box-shadow: none;">\n  <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span style="font-weight: 400 !important;">{{ title }}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center>\n        <ion-card class="dash-card">\n          <ion-card-title style="color: #666; font-weight: 300;">Monthly Expenses</ion-card-title>\n          <ion-card-content>\n            <div style="display: block;">\n              <canvas baseChart [datasets]="lineChartData" [labels]="lineChartLabels" [options]="lineChartOptions"\n                [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)"\n                (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </ion-card-content>\n          <div>\n            <button ion-button color="secondary" (click)="randomize()">Randomize</button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center>\n        <ion-card class="dash-card">\n          <ion-card-title style="color: #666; font-weight: 300;">Payment Types</ion-card-title>\n          <ion-card-content>\n            <div style="display: block">\n              <canvas baseChart [colors]="doughnutChartColors" [data]="doughnutChartData" [labels]="doughnutChartLabels" [chartType]="doughnutChartType"\n                (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </ion-card-content>\n          <div>\n            <button ion-button color="secondary" (click)="updatePieChart()">Update Data</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col align-self-center>\n        <ion-card class="dash-card" style="width: 100%;">\n          <ion-card-title style="color: #666; font-weight: 300;">Quarterly Sales</ion-card-title>\n          <ion-card-content>\n            <div style="display: block">\n              <canvas baseChart [datasets]="barChartData" [colors]="barChartColors" [labels]="barChartLabels" [options]="barChartOptions"\n                [legend]="barChartLegend" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </ion-card-content>\n          <div>\n            <button ion-button color="secondary" (click)="updateBarChart()">Update Data</button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/Users/gtgoodwin/solar/src/widgets/dashboard/dashboard.template.html"*/
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSpeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_data__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_charts__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageSpeed = (function () {
    function PageSpeed(navCtrl) {
        this.navCtrl = navCtrl;
        this.title = 'Page Speed';
        this.data = __WEBPACK_IMPORTED_MODULE_2__assets_data__["a" /* REPORT */];
        this.sortedResults = [];
        this.score = this.data.ruleGroups.SPEED.score;
        this.gaugeChartData = __WEBPACK_IMPORTED_MODULE_3__config_charts__["d" /* gaugeChartData */];
        this.gaugeChartData.dataTable[1][1] = this.data.ruleGroups.SPEED.score;
    }
    PageSpeed.prototype.ngOnInit = function () {
        var results = [];
        var ruleResults = this.data.formattedResults.ruleResults;
        for (var obj in ruleResults) {
            if (ruleResults.hasOwnProperty(obj)) {
                var ruleResult = ruleResults[obj];
                // Don't display lower-impact suggestions.
                if (ruleResult.ruleImpact < 3.0 || ruleResult.localizedRuleName.length > 26) {
                    continue;
                }
                results.push({
                    name: ruleResult.localizedRuleName,
                    impact: ruleResult.ruleImpact
                });
            }
        }
        this.sortedResults = results.sort(this.sortByImpact);
        console.log(this.sortedResults);
        return this.sortedResults;
    };
    PageSpeed.prototype.sortByImpact = function (a, b) { return b.impact - a.impact; };
    return PageSpeed;
}());
PageSpeed = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-speed',template:/*ion-inline-start:"/Users/gtgoodwin/solar/src/widgets/pagespeed/speed.html"*/'<ion-header no-border style="box-shadow: none;">\n  <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span style="font-weight: 400 !important;">{{ title }}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div padding>\n    <ion-grid>\n      <ion-row text-center align-items-center justify-content-center>\n        <ion-col align-items-center justify-content-center align-self-center text-center>\n          <div class="effect4" style="background-color: #7A7265; min-width: 300px; min-height: 180px; max-width: 300px; margin: 12px 0 12px 0; padding-bottom: 10px;" text-left>\n            <h6 style="color: #fff; font-weight: 400; padding-left: 5px; padding-top: 5px;">OVERALL SCORE</h6>\n            <div class="effect2" style="max-width: 120px; max-height: 110px; min-width: 120px; min-height: 110px; background-color: #fff; color: #7A7265; text-align: center; padding: 0; margin: 10px;">\n\n              <span style="color: #7A7265; font-size: 82px; font-family: \'Kanit Bold\', serif;  text-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3); margin: 0; padding: 0; margin-right: 4px;">{{ score | number: \'1.0-0\' }}</span>\n\n            </div>\n          </div>\n        </ion-col>\n        <ion-col align-items-center justify-content-center align-self-center text-center *ngFor="let results of sortedResults">\n          <div  class="effect4" style="max-width: 300px; min-width: 300px; min-height: 180px; background-color: #83888b; margin: 12px 0 12px 0; padding-bottom: 10px;" text-left>\n            <h6 style="color: #fff; font-weight: 400; padding-left: 5px; padding-top: 5px;">{{ results.name | uppercase }}</h6>\n            <div class="effect2" style="max-width: 120px; max-height: 110px; min-width: 120px; min-height: 110px; background-color: #fff; color: #83888b; text-align: center; padding: 0; margin: 10px;">\n\n                <span style="color: #83888b; font-size: 82px; font-family: \'Kanit Bold\', serif;  text-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3); margin: 0; padding: 0; margin-right: 4px;">{{ results.impact | number: \'1.0-0\' }}</span>\n\n\n            </div>\n          </div>\n\n\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/solar/src/widgets/pagespeed/speed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], PageSpeed);

//# sourceMappingURL=speed.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return gaugeChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PAChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MozRankChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MozTrustChartData; });
/* unused harmony export lineChartData */
var gaugeChartData = {
    chartType: 'Gauge',
    dataTable: [
        ['Label', 'Value'],
        ['Value', 0]
    ],
    options: {
        animation: { easing: 'out' },
        width: 150, height: 150,
        greenFrom: 80, greenTo: 100,
        yellowFrom: 65, yellowTo: 79,
        redFrom: 0, redTo: 64,
        minorTicks: 5,
        min: 0, max: 100,
        majorTicks: ['0', '20', '40', '60', '80', '100'],
        greenColor: '#C6D8D3',
        redColor: '#D85F87',
        yellowColor: '#FDF0D5'
    }
};
var PAChartData = {
    chartType: 'AreaChart',
    dataTable: [
        ['Month', 'Page Authority'],
        ['January', 21],
        ['February', 25],
        ['March', 26],
        ['April', 28],
        ['May', 31],
        ['June', 32]
    ],
    options: {
        curveType: 'function',
        title: 'Page Rank',
        legend: { position: 'none' },
        backgroundColor: { fill: '#657ED4', strokeWidth: 0 },
        chartArea: { backgroundColor: '#657ED4', top: 0, left: 0, width: '100%', height: '100%' },
        colors: ['#ffffff'],
        hAxis: {
            gridlines: { count: 0 },
            minorGridlines: { count: 0 },
            textPosition: 'none',
            title: null
        },
        vAxis: {
            gridlines: { count: 0 },
            minorGridlines: { count: 0 },
            textPosition: 'none',
            title: null
        }
    }
};
var MozRankChartData = {
    chartType: 'AreaChart',
    dataTable: [
        ['Month', 'MozRank'],
        ['January', 3.86],
        ['February', 3.93],
        ['March', 3.96],
        ['April', 4.01],
        ['May', 4.09],
        ['June', 4.12]
    ],
    options: {
        curveType: 'function',
        title: 'Page Rank',
        legend: { position: 'none' },
        backgroundColor: { fill: '#657ED4', strokeWidth: 0 },
        chartArea: { backgroundColor: '#657ED4', top: 0, left: 0, width: '100%', height: '100%' },
        colors: ['#ffffff'],
        hAxis: {
            gridlines: { count: 0 },
            minorGridlines: { count: 0 },
            textPosition: 'none',
            title: null
        },
        vAxis: {
            gridlines: { count: 0 },
            minorGridlines: { count: 0 },
            textPosition: 'none',
            title: null
        }
    }
};
var MozTrustChartData = {
    chartType: 'AreaChart',
    dataTable: [
        ['Month', 'MozTrust'],
        ['January', 3.53],
        ['February', 3.60],
        ['March', 3.65],
        ['April', 3.73],
        ['May', 3.75],
        ['June', 3.81]
    ],
    options: {
        curveType: 'function',
        title: 'Page Rank',
        legend: { position: 'none' },
        backgroundColor: { fill: '#657ED4', strokeWidth: 0 },
        chartArea: { backgroundColor: '#657ED4', top: 0, left: 0, width: '100%', height: '100%' },
        colors: ['#ffffff'],
        hAxis: {
            gridlines: { count: 0 },
            minorGridlines: { count: 0 },
            textPosition: 'none',
            title: null
        },
        vAxis: {
            gridlines: { count: 0 },
            minorGridlines: { count: 0 },
            textPosition: 'none',
            title: null
        }
    }
};
var lineChartData = {
    chartType: 'LineChart',
    dataTable: [
        ['Month', 'Page Authority', 'MozRank', 'MozTrust'],
        ['January', 21, 3.86, 3.53],
        ['February', 25, 3.93, 3.60],
        ['March', 26, 3.96, 3.65],
        ['April', 28, 4.01, 3.73],
        ['May', 31, 4.09, 3.75],
        ['June', 32, 4.12, 3.81]
    ],
    options: { title: 'Company Performance' }
};
//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_charts__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Rank = (function () {
    function Rank(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = 'Website Rank';
        this.paChartData = __WEBPACK_IMPORTED_MODULE_2__config_charts__["c" /* PAChartData */];
        this.mozrankChartData = __WEBPACK_IMPORTED_MODULE_2__config_charts__["a" /* MozRankChartData */];
        this.moztrustChartData = __WEBPACK_IMPORTED_MODULE_2__config_charts__["b" /* MozTrustChartData */];
    }
    return Rank;
}());
Rank = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rank',template:/*ion-inline-start:"/Users/gtgoodwin/solar/src/widgets/rank/rank.html"*/'<ion-header no-border style="box-shadow: none;">\n  <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span style="font-weight: 400 !important;">{{ title }}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <ion-grid>\n      <ion-row text-center align-items-center justify-content-center>\n        <ion-col align-items-center justify-content-center align-self-center text-center>\n          <div style="width: 100%; background-color: #657ED4; padding: 20px; min-width: 350px;" class="effect4">\n            <div style="color: #fff; font-family: \'Kanit Bold\', serif; font-size: 34px;">PAGE AUTHORITY</div>\n            <div style="color: #fff; font-family: \'Kanit Bold\', serif; font-size: 80px; position: absolute; top: 60px; left: 30px; z-index: 100; letter-spacing: 3px;">32</div>\n            <google-chart [data]="paChartData" ></google-chart>\n          </div>\n\n\n        </ion-col>\n        <ion-col align-items-center justify-content-center align-self-center text-center>\n          <div style="width: 100%; background-color: #657ED4; padding: 20px; min-width: 350px;" class="effect4">\n            <div style="color: #fff; font-family: \'Kanit Bold\', serif; font-size: 34px;">MOZ RANK</div>\n            <div style="color: #fff; font-family: \'Kanit Bold\', serif; font-size: 80px; position: absolute; top: 60px; left: 30px; z-index: 100; letter-spacing: 3px;">\n              4.12\n            </div>\n            <google-chart [data]="mozrankChartData"></google-chart>\n          </div>\n\n        </ion-col>\n        <ion-col align-items-center justify-content-center align-self-center text-center>\n          <div style="width: 100%; background-color: #657ED4; padding: 20px; min-width: 350px;" class="effect4">\n            <div style="color: #fff; font-family: \'Kanit Bold\', serif; font-size: 34px;">MOZ TRUST</div>\n            <div style="color: #fff; font-family: \'Kanit Bold\', serif; font-size: 80px; position: absolute; top: 60px; left: 30px; z-index: 100; letter-spacing: 3px;">\n              3.81\n            </div>\n            <google-chart [data]="moztrustChartData"></google-chart>\n          </div>\n\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/solar/src/widgets/rank/rank.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], Rank);

//# sourceMappingURL=rank.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentComponent = (function () {
    function PaymentComponent(_http) {
        this._http = _http;
        this.title = 'Make a Payment';
        this.formCard = {
            number: null,
            exp_month: null,
            exp_year: null,
            cvc: null
        };
        this.http = _http;
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent.prototype.makePayment = function () {
    };
    PaymentComponent.prototype.createToken = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer pk_test_HYN4uPqYEk3NruqHTj6jemDw'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var expire = this.formCard.exp_month.split(' / ');
        this.formCard.exp_month = expire[0];
        this.formCard.exp_year = expire[1];
        var cc = this.formCard.number.split(' ');
        this.formCard.number = cc[0].concat(cc[1]).concat(cc[2]).concat(cc[3]);
        this.diag2 = JSON.stringify(this.formCard);
        var path = 'card[number]=' + this.formCard.number + '&card[cvc]=' + this.formCard.cvc + '&card[exp_month]=' + this.formCard.exp_month + '&card[exp_year]=' + this.formCard.exp_year + '&key=pk_test_HYN4uPqYEk3NruqHTj6jemDw';
        return this.http.post('https://api.stripe.com/v1/tokens?' + path, null, options).subscribe(function (res) {
            var body = res.json();
            _this.diag = JSON.stringify(body);
            console.log(body);
        });
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment',template:/*ion-inline-start:"/Users/gtgoodwin/solar/src/widgets/payment/payment.template.html"*/'<ion-header no-border style="box-shadow: none;">\n  <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span style="font-weight: 400 !important;">{{ title }}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n\n<div fxLayout="column" fxLayoutAlign="stretch center">\n  <ion-card style="width: 100%; max-width: 400px; min-height: 400px; box-shadow: 0 1px 5px rgba(0,0,0,0.07);">\n  <ion-card-content>\n  <ion-card-header>\n    <ion-card-title><h2 style="color: #666;">{{title}}</h2></ion-card-title>\n  </ion-card-header>\n    <form #cardForm="ngForm" (ngSubmit)="createToken()">\n      <div fxLayout="column" fxLayoutAlign="start start" style="margin-top: 30px;">\n        <div fxLayout="row" fxLayoutAlign="start start" style="margin: 5px;">\n          <ion-label style="width: 100px;" stacked >Card number</ion-label>\n            <input name="number" style="width: 200px;" placeholder="4242 4242 4242 4242" type="tel" id="number" [(ngModel)]="formCard.number" ccNumber>\n\n        </div>\n        <div fxLayout="row" fxLayoutAlign="start start" style="margin: 5px;">\n          <ion-label style="width: 100px;" stacked>Expiration Date</ion-label>\n          <input  name="exp_month" placeholder="01/2019" style="width: 200px;" id="exp_month" type="tel" [(ngModel)]="formCard.exp_month" ccExp >\n\n        </div>\n        <div fxLayout="row" fxLayoutAlign="start start" style="margin: 5px;">\n          <ion-label style="width: 100px;" stacked>CVC</ion-label>\n          <input name="cvc" maxlength="4" style="width: 200px;" placeholder="123" id="cvc" autocomplete="off" type="tel" [(ngModel)]="formCard.cvc" ccCVC >\n\n        </div>\n        <div style="width: 100%; " fxLayout="row" fxLayoutAlign="end end">\n          <button color="marine" style="margin-right: 45px; margin-top: 30px;" ion-button type="submit">Submit Payment</button>\n        </div>\n\n      </div>\n    </form>\n\n  </ion-card-content>\n\n\n  </ion-card>\n  <div *ngIf="diag2" style="max-width: 400px; color: #444; margin-top: 8px; overflow: scroll;">\n    Request:\n    <div *ngFor="let items of diag2.split(\',\')">\n      {{ items }}\n    </div>\n  </div>\n  <div *ngIf="diag" style="max-width: 400px; color: #444; margin-top: 4px; overflow: scroll;">\n    Response:\n    <div *ngFor="let items of diag.split(\',\')">\n        {{ items }}\n    </div>\n  </div>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/solar/src/widgets/payment/payment.template.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PaymentComponent);

//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VoiceService = (function () {
    function VoiceService() {
        this.voices = [];
        this.utteranceMaker = SpeechSynthesisUtterance;
        this.synth = window.speechSynthesis;
    }
    VoiceService.prototype.populateVoiceList = function () {
        this.voices = window.speechSynthesis.getVoices();
        if (this.synth.onvoiceschanged === undefined) {
            this.populateVoiceList();
        }
        return this.voices;
    };
    VoiceService.prototype.playChat = function (msg) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(this.createUtterance(msg));
        window.speechSynthesis.resume();
    };
    ;
    VoiceService.prototype.createUtterance = function (text) {
        var utterance = new this.utteranceMaker(text);
        this.voices.forEach(function (voice) {
            if (voice.name === 'Google US English') {
                utterance.voice = voice;
                utterance.pitch = 0.9;
                utterance.rate = 0.9;
                console.log(voice);
                return utterance;
            }
        });
        return utterance;
    };
    return VoiceService;
}());
VoiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], VoiceService);

//# sourceMappingURL=voices.service.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__neuralnet_net_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__neuralnet_train_component__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__neuralnet_net_component__["a" /* NetComponent */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__neuralnet_train_component__["a" /* TrainComponent */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/gtgoodwin/solar/src/widgets/tabs/tabs.html"*/'<ion-tabs color="blank" tabsHighlight="true" no-border>\n  <ion-tab [root]="tab1Root" tabTitle="Create Network" tabIcon="pulse"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Train" tabIcon="analytics"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/gtgoodwin/solar/src/widgets/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LSTM; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_config__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__neuron__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_cost_actions__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_learning_rate_actions__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_seedrandom__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_seedrandom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_seedrandom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LSTM = (function () {
    function LSTM(inputSize, outputSize, numMemoryBlocks, memBlockSize) {
        this.onIteration = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.neurons = [];
        this.connections = [];
        this.gates = [];
        this.selfconns = [];
        this.dropout = 0;
        this.origInput = 0;
        this.origOutput = 0;
        this.stats = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.origInput = inputSize;
        this.origOutput = outputSize;
        this.numMemBlocks = numMemoryBlocks;
        this.memBlockSize = memBlockSize;
        this.lr = [];
        this.loss = [];
        this.stat$ = this.stats.asObservable();
        return this.init(inputSize, outputSize, numMemoryBlocks, memBlockSize);
    }
    LSTM.prototype.init = function (inputSize, outputSize, numMemoryBlocks, memBlockSize) {
        //  console.log('init LSTM');
        //  console.log(inputSize, outputSize);
        //   console.log('create Input layer');
        var inputLayer = new __WEBPACK_IMPORTED_MODULE_1__group__["a" /* Group */](inputSize);
        inputLayer.set({
            type: 'input'
        });
        //   console.log('create Output layer');
        var outputLayer = new __WEBPACK_IMPORTED_MODULE_1__group__["a" /* Group */](outputSize);
        outputLayer.set({
            type: 'output'
        });
        var options = {};
        options.memoryToMemory = false;
        options.outputToMemory = false;
        options.outputToGates = false;
        options.inputToOutput = true;
        options.inputToDeep = true;
        var neurons = [];
        neurons.push(inputLayer);
        var previous = inputLayer;
        for (var i = 0; i < numMemoryBlocks; i++) {
            //   console.log('numMemoryBlocks: ' + numMemoryBlocks);
            //   console.log('memBlockSize: ' + memBlockSize);
            //  console.log('i: ' + i);
            //  console.log('creating Memory Blocks');
            //   console.group();
            //   console.info('creating inputGate');
            var inputGate = new __WEBPACK_IMPORTED_MODULE_1__group__["a" /* Group */](memBlockSize);
            //   console.groupEnd();
            //    console.group();
            //    console.info('creating forgetGate');
            var forgetGate = new __WEBPACK_IMPORTED_MODULE_1__group__["a" /* Group */](memBlockSize);
            //    console.groupEnd();
            //    console.group();
            //    console.info('creating memoryCell');
            var memoryCell = new __WEBPACK_IMPORTED_MODULE_1__group__["a" /* Group */](memBlockSize);
            //   console.groupEnd();
            //    console.group();
            //   console.info('creating outputGate');
            var outputGate = new __WEBPACK_IMPORTED_MODULE_1__group__["a" /* Group */](memBlockSize);
            //    console.groupEnd();
            //    console.group();
            //    console.info('creating outputBlock');
            var outputBlock = i === numMemoryBlocks - 1 ? outputLayer : new __WEBPACK_IMPORTED_MODULE_1__group__["a" /* Group */](memBlockSize);
            //    console.groupEnd();
            inputGate.set({
                bias: 1
            });
            forgetGate.set({
                bias: 1
            });
            outputGate.set({
                bias: 1
            });
            // Connect the input with all the neurons
            var input = previous.connectGroup(memoryCell, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
            previous.connectGroup(inputGate, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
            previous.connectGroup(outputGate, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
            previous.connectGroup(forgetGate, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
            // Set up internal connections
            memoryCell.connectGroup(inputGate, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
            memoryCell.connectGroup(forgetGate, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
            memoryCell.connectGroup(outputGate, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
            var forget = memoryCell.connectGroup(memoryCell, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ONE_TO_ONE);
            var output = memoryCell.connectGroup(outputBlock, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
            // Set up gates
            inputGate.gate(input, __WEBPACK_IMPORTED_MODULE_2__data_config__["c" /* StaticGating */].INPUT);
            forgetGate.gate(forget, __WEBPACK_IMPORTED_MODULE_2__data_config__["c" /* StaticGating */].SELF);
            outputGate.gate(output, __WEBPACK_IMPORTED_MODULE_2__data_config__["c" /* StaticGating */].OUTPUT);
            // Input to all memory cells
            if (options.inputToDeep && i > 0) {
                var inputConn = inputLayer.connectGroup(memoryCell, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
                inputGate.gate(inputConn, __WEBPACK_IMPORTED_MODULE_2__data_config__["c" /* StaticGating */].INPUT);
            }
            // Optional connections
            if (options.memoryToMemory) {
                var inputConn = memoryCell.connectGroup(memoryCell, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ELSE);
                inputGate.gate(inputConn, __WEBPACK_IMPORTED_MODULE_2__data_config__["c" /* StaticGating */].INPUT);
            }
            if (options.outputToMemory) {
                var inputConn = outputLayer.connectGroup(memoryCell, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
                inputGate.gate(inputConn, __WEBPACK_IMPORTED_MODULE_2__data_config__["c" /* StaticGating */].INPUT);
            }
            if (options.outputToGates) {
                outputLayer.connectGroup(inputGate, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
                outputLayer.connectGroup(forgetGate, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
                outputLayer.connectGroup(outputGate, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
            }
            // Add to array
            neurons.push(inputGate);
            neurons.push(forgetGate);
            neurons.push(memoryCell);
            neurons.push(outputGate);
            if (i !== numMemoryBlocks - 1) {
                neurons.push(outputBlock);
            }
            //   console.log(neurons);
            previous = outputBlock;
        }
        // input to output direct connection
        if (options.inputToOutput) {
            inputLayer.connectGroup(outputLayer, __WEBPACK_IMPORTED_MODULE_2__data_config__["a" /* StaticConnection */].ALL_TO_ALL);
        }
        neurons.push(outputLayer);
        //  console.log(neurons);
        return this.create(neurons);
        //  return neurons;
    };
    LSTM.prototype.create = function (list) {
        // Transform all groups into neurons
        var neurons = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i] instanceof __WEBPACK_IMPORTED_MODULE_1__group__["a" /* Group */]) {
                for (var j = 0; j < list[i].neurons.length; j++) {
                    //       console.log('push neuron');
                    neurons.push(list[i].neurons[j]);
                    //       console.log('neurons: ');
                    //       console.log(neurons);
                }
            }
            else if (list[i] instanceof __WEBPACK_IMPORTED_MODULE_3__neuron__["a" /* Neuron */]) {
                //      console.log('push neuron');
                neurons.push(list[i]);
            }
        }
        // Determine input and output neurons
        var inputs = [];
        var outputs = [];
        for (var i = neurons.length - 1; i >= 0; i--) {
            if (neurons[i].type === 'output' || neurons[i].connections.out.length + neurons[i].connections.gated.length === 0) {
                neurons[i].type = 'output';
                this.outputsize++;
                outputs.push(neurons[i]);
                neurons.splice(i, 1);
            }
            else if (neurons[i].type === 'input' || !neurons[i].connections.in.length) {
                neurons[i].type = 'input';
                this.inputsize++;
                inputs.push(neurons[i]);
                neurons.splice(i, 1);
            }
            //     console.log(neurons);
        }
        // Input neurons are always first, output neurons are always last
        neurons = inputs.concat(neurons).concat(outputs);
        //   console.log(neurons);
        if (this.inputsize === 0 || this.outputsize === 0) {
            throw new Error('Given neurons have no clear input/output node!');
        }
        for (var i = 0; i < neurons.length; i++) {
            for (var j = 0; j < neurons[i].connections.out.length; j++) {
                this.connections.push(neurons[i].connections.out[j]);
            }
            for (var j = 0; j < neurons[i].connections.gated.length; j++) {
                this.gates.push(neurons[i].connections.gated[j]);
            }
            if (neurons[i].connections.self.weight !== 0) {
                this.selfconns.push(neurons[i].connections.self);
            }
        }
        this.neurons = neurons;
        //   console.log(this);
        return this;
    };
    LSTM.prototype.train = function (set, options) {
        if (+set[0].input.length !== +this.origInput || +set[0].output.length !== +this.origOutput) {
            console.warn('Dataset input/output size should be same as network input/output size!');
        }
        this.loss = [];
        this.lr = [];
        options = options || {};
        // Configure given options
        var targetError = options.error || 0.05;
        var cost = options.cost || __WEBPACK_IMPORTED_MODULE_4__actions_cost_actions__["a" /* CostActions */].MSE;
        var baseRate = options.rate || 0.3;
        var iterations = options.iterations || 100;
        var dropout = options.dropout || 0;
        var momentum = options.momentum || 0;
        var ratePolicy = options.ratePolicy || __WEBPACK_IMPORTED_MODULE_5__actions_learning_rate_actions__["a" /* LearningRateActions */].INV;
        var gamma = options.gamma || 0.001;
        var power = options.power || 2;
        var start = Date.now();
        this.dropout = dropout;
        console.log(baseRate);
        // Loops the training process
        var currentRate = baseRate;
        var iteration = 0;
        var error = 1;
        while (error > targetError && (iterations === 0 || iteration < iterations)) {
            iteration++;
            //  console.log(iteration);
            // Update the rate
            currentRate = ratePolicy(baseRate, iteration, gamma, power);
            //  console.log('rate: ' + currentRate);
            error = 0;
            error += this._trainSet(set, currentRate, momentum, cost);
            this.loss.push({ name: iteration, value: error });
            this.lr.push({ name: iteration, value: currentRate });
            this.stats.next({
                loss: this.loss,
                lr: this.lr
            });
            //  console.log('error: ' + error);
        }
        console.log('done');
        // Creates an object of the results
        console.log({
            error: error,
            iterations: iteration,
            time: Date.now() - start
        });
        return {
            error: error,
            iterations: iteration,
            time: Date.now() - start
        };
    };
    LSTM.prototype._trainSet = function (set, currentRate, momentum, costFunction) {
        var errorSum = 0;
        for (var i = 0; i < set.length; i++) {
            var input = set[i].input;
            var target = set[i].output;
            var update = (i + 1) === set.length;
            var output = this.activate(input, true);
            this.propagate(currentRate, momentum, update, target);
            errorSum += costFunction(target, output);
        }
        return errorSum / set.length;
    };
    LSTM.prototype.test = function (set, cost) {
        // Check if dropout is enabled, set correct mask
        if (this.dropout) {
            for (var i = 0; i < this.neurons.length; i++) {
                if (this.neurons[i].type === 'hidden' || this.neurons[i].type === 'constant') {
                    this.neurons[i].mask = 1 - this.dropout;
                }
            }
        }
        cost = cost || __WEBPACK_IMPORTED_MODULE_4__actions_cost_actions__["a" /* CostActions */].MSE;
        var error = 0;
        var start = Date.now();
        for (var i = 0; i < set.length; i++) {
            var input = set[i].input;
            var target = set[i].output;
            var output = this.activate(input);
            error += cost(target, output);
        }
        error /= set.length;
        return {
            error: error,
            time: Date.now() - start
        };
    };
    LSTM.prototype.clear = function () {
        for (var i = 0; i < this.neurons.length; i++) {
            this.neurons[i].clear();
        }
    };
    LSTM.prototype.activate = function (input, training) {
        var output = [];
        // Activate neurons chronologically
        for (var i = 0; i < this.neurons.length; i++) {
            if (this.neurons[i].type === 'input') {
                this.neurons[i].activateNeuron(input[i]);
            }
            else if (this.neurons[i].type === 'output') {
                var activation = this.neurons[i].activateNeuron();
                output.push(activation);
            }
            else {
                var rand = __WEBPACK_IMPORTED_MODULE_6_seedrandom__["alea"](Math.random());
                if (training) {
                    this.neurons[i].mask = 1;
                }
                this.neurons[i].activateNeuron();
            }
        }
        return output;
    };
    /**
     * Backpropagate the network
     */
    LSTM.prototype.propagate = function (rate, momentum, update, target) {
        // console.log('start propagate');
        if (typeof target !== 'undefined' && +target.length !== +this.origOutput) {
            throw new Error('Output target length should match network output length');
        }
        var targetIndex = target.length;
        // console.log(targetIndex);
        //  console.log(rate);
        //  console.log(momentum);
        // Propagate output neurons
        for (var i = this.neurons.length - 1; i >= this.neurons.length - this.origOutput; i--) {
            this.neurons[i].propagateNeuron(rate, momentum, update, target[--targetIndex]);
        }
        // Propagate hidden and input neurons
        for (var i = this.neurons.length - this.origOutput - 1; i >= this.origInput; i--) {
            this.neurons[i].propagateNeuron(rate, momentum, update);
        }
    };
    return LSTM;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LSTM.prototype, "onIteration", void 0);
LSTM = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [Number, Number, Number, Number])
], LSTM);

//# sourceMappingURL=lstm.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__neuron__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Connection = (function () {
    function Connection(origNode, destNode, connectWeight) {
        this.origNode = origNode;
        this.destNode = destNode;
        this.connectWeight = connectWeight;
        this.gater = null;
        this.elegibility = 0;
        this.previousDeltaWeight = 0;
        this.totalDeltaWeight = 0;
        this.xtrace = {
            nodes: [],
            values: []
        };
        //  console.log('Connecting Something');
        if (origNode === destNode) {
            //     console.log('Connecting Self');
        }
        this.originatingNode = origNode;
        this.destinationNode = destNode;
        this.gain = 1;
        if (connectWeight) {
            this.weight = connectWeight;
        }
        else {
            this.weight = Math.random() * 0.2 - 0.1;
        }
    }
    Connection.prototype.toJSON = function () {
        return {
            weight: this.weight
        };
    };
    return Connection;
}());
Connection.innovationId = function (a, b) {
    return 1 / 2 * (a + b) * (a + b + 1) + b;
};
Connection = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__neuron__["a" /* Neuron */], __WEBPACK_IMPORTED_MODULE_2__neuron__["a" /* Neuron */], Object])
], Connection);

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var initialState = {
    error: 0
};
var CostActions = (function () {
    function CostActions(storage) {
        var _this = this;
        this.storage = storage;
        this.localState = { transition: 'in' };
        this.crossEntropy = function (target, output) {
            var error = 0;
            for (var i = 0; i < output.length; i++) {
                error -= target[i] * Math.log(Math.max(output[i], 1e-15)) + (1 - target[i]) * Math.log(1 - Math.max(output[i], 1e-15));
            }
            _this._crossEntropy(error);
            return error;
        };
        this.mse = function (target, output) {
            var error = 0;
            for (var i = 0; i < output.length; i++) {
                error += Math.pow(target[i] - output[i], 2);
            }
            error = error / output.length;
            _this._mse(error);
            return error;
        };
        this.binary = function (target, output) {
            var misses;
            misses = 0;
            for (var i = 0; i < output.length; i++) {
                misses += Math.round(target[i] * 2) !== Math.round(output[i] * 2);
            }
            _this._binary(misses);
            return misses;
        };
        this.mae = function (target, output) {
            var error = 0;
            for (var i = 0; i < output.length; i++) {
                error += Math.abs(target[i] - output[i]);
            }
            error = error / output.length;
            _this._mae(error);
            return error;
        };
        this.mape = function (target, output) {
            var error = 0;
            for (var i = 0; i < output.length; i++) {
                error += Math.abs((output[i] - target[i]) / Math.max(target[i], 1e-15));
            }
            error = error / output.length;
            _this._mape(error);
            return error;
        };
        this.msle = function (target, output) {
            var error = 0;
            for (var i = 0; i < output.length; i++) {
                error += Math.log(Math.max(target[i], 1e-15)) - Math.log(Math.max(output[i], 1e-15));
            }
            _this._msle(error);
            return error;
        };
        this.hinge = function (target, output) {
            var error = 0;
            for (var i = 0; i < output.length; i++) {
                error += Math.max(0, 1 - target[i] * output[i]);
            }
            _this._hinge(error);
            return error;
        };
    }
    CostActions.prototype.initCost = function (initState) {
        if (initState === void 0) { initState = initialState; }
        if (this._initCost(initState)) {
            this._initCostSuccess(initState);
        }
    };
    ;
    CostActions.prototype._initCost = function (initState) {
        //   this.store.dispatch({
        //     type: CostActions.INIT_COST,
        //     payload: initState
        //   });
        this.storage.set('cost', initState);
        return true;
    };
    CostActions.prototype._initCostSuccess = function (state) {
        //   this.store.dispatch({
        //      type: CostActions.INIT_COST_SUCCESS,
        //      payload: state
        //    });
    };
    CostActions.prototype._initCostError = function (errMsg) {
        //    this.store.dispatch(CostActions.handleError(errMsg, CostActions.INIT_COST_ERROR));
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(errMsg);
    };
    CostActions.prototype._crossEntropy = function (error) {
        //   this.store.dispatch({
        //     type: CostActions.CROSS_ENTROPY,
        //     payload: error
        //   });
    };
    CostActions.prototype._mse = function (error) {
        //   this.store.dispatch({
        //     type: CostActions.MSE,
        //     payload: error
        //   });
    };
    CostActions.prototype._binary = function (misses) {
        //   this.store.dispatch({
        //     type: CostActions.BINARY,
        //     payload: misses
        //   });
    };
    CostActions.prototype._mae = function (error) {
        //   this.store.dispatch({
        //     type: CostActions.MAE,
        //     payload: error
        //   });
    };
    CostActions.prototype._mape = function (error) {
        //    this.store.dispatch({
        //     type: CostActions.MAPE,
        //     payload: error
        //    });
    };
    CostActions.prototype._msle = function (error) {
        //    this.store.dispatch({
        //      type: CostActions.MSLE,
        //      payload: error
        //   });
    };
    CostActions.prototype._hinge = function (error) {
        //   this.store.dispatch({
        //     type: CostActions.HINGE,
        //     payload: error
        //   });
    };
    /****************
     * HELPER METHODS
     ****************/
    CostActions.handleError = function (errMsg, type) {
        return {
            type: type,
            payload: errMsg
        };
    };
    return CostActions;
}());
/****************
 * INIT Cost
 ****************/
CostActions.INIT_COST = 'INIT_COST';
CostActions.INIT_COST_SUCCESS = 'INIT_COST_SUCCESS';
CostActions.INIT_COST_ERROR = 'INIT_COST_ERROR';
/****************
 * CROSS ENTROPY
 * Cross Entropy Error
 ****************/
CostActions.CROSS_ENTROPY = 'CROSS_ENTROPY';
/****************
 * MSE
 * Mean Squared Error
 ****************/
CostActions.MSE = function (target, output) {
    var error = 0;
    for (var i = 0; i < output.length; i++) {
        error += Math.pow(target[i] - output[i], 2);
    }
    return error / output.length;
};
/****************
 * BINARY
 * Binary Error
 ****************/
CostActions.BINARY = 'BINARY';
/****************
 * MAE
 * Mean Absolute Error
 ****************/
CostActions.MAE = 'MAE';
/****************
 * MAPE
 * Mean Absolute Percentage Error
 ****************/
CostActions.MAPE = 'MAPE';
/****************
 * MSLE
 * Mean Squared Logarithmic Error
 ****************/
CostActions.MSLE = 'MSLE';
/****************
 * HINGE
 * Hinge Loss - for classifiers
 ****************/
CostActions.HINGE = 'HINGE';
CostActions = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
], CostActions);

//# sourceMappingURL=cost.actions.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearningRateActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { RateState } from './rate.models';
var initialState = {};
var LearningRateActions = (function () {
    function LearningRateActions(storage) {
        this.storage = storage;
    }
    LearningRateActions.prototype.initRate = function (initState) {
        if (initState === void 0) { initState = initialState; }
        if (this._initRate(initState)) {
            this._initRateSuccess(initState);
        }
    };
    LearningRateActions.prototype._initRate = function (initState) {
        //   this.store.dispatch({
        //     type: RateActions.INIT_RATE,
        //      payload: initState
        //    });
        this.storage.set('rate', initState);
        return true;
    };
    LearningRateActions.prototype._initRateSuccess = function (state) {
        //   this.store.dispatch({
        //      type: RateActions.INIT_RATE_SUCCESS,
        //     payload: state
        //   });
    };
    LearningRateActions.prototype._initRateError = function (errMsg) {
        //   this.store.dispatch(RateActions.handleError(errMsg, RateActions.INIT_RATE_ERROR));
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(errMsg);
    };
    LearningRateActions.prototype.fixed = function (baseRate, iteration) {
        this._fixed(baseRate);
        return baseRate;
    };
    LearningRateActions.prototype._fixed = function (baseRate) {
        //  this.store.dispatch({
        //     type: RateActions.FIXED,
        //     payload: baseRate
        //    });
    };
    LearningRateActions.prototype.step = function (gamma, stepSize) {
        var newgamma = gamma || 0.9;
        var newstep = stepSize || 100;
        this._step(gamma);
        return stepSize;
    };
    LearningRateActions.prototype._step = function (baseRate) {
        //    this.store.dispatch({
        //     type: RateActions.STEP,
        //      payload: baseRate
        //   });
    };
    /****************
     * HELPER METHODS
     ****************/
    LearningRateActions.handleError = function (errMsg, type) {
        return {
            type: type,
            payload: errMsg
        };
    };
    return LearningRateActions;
}());
/****************
 * INIT Rate
 ****************/
LearningRateActions.INIT_RATE = 'INIT_RATE';
LearningRateActions.INIT_RATE_SUCCESS = 'INIT_RATE_SUCCESS';
LearningRateActions.INIT_RATE_ERROR = 'INIT_RATE_ERROR';
/****************
 * FIXED
 ****************/
LearningRateActions.FIXED = function () {
    return function (baseRate, iteration) { return baseRate; };
};
/****************
 * STEP
 ****************/
LearningRateActions.STEP = 'STEP';
LearningRateActions.RMSProp = function () {
    return function (cache, decay) {
        cache = decay * cache + (1 - decay);
    };
};
LearningRateActions.INV = function (base, iteration, gamma, power) {
    return base * Math.pow(1 + gamma * iteration, -power);
};
LearningRateActions = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
], LearningRateActions);

//# sourceMappingURL=learning-rate.actions.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_training__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__net_component__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainComponent = (function () {
    function TrainComponent(element, d3Service, Net) {
        this.colorScheme = 'vivid';
        this.autoScale = true;
        this.stats = [
            { 'name': 'Loss',
                'series': [
                    { name: '0', value: 0 },
                    { name: '1', value: 1 }
                ] },
            { 'name': 'Learning Rate',
                'series': [
                    { name: '0', value: 0 },
                    { name: '1', value: 1 }
                ] }
        ];
        this.view = [700, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Time';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Stats';
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
        this.graph = { nodes: [], links: [] };
        Object.assign(this, this.stats);
        this.myNetwork = Net.myNetwork;
    }
    TrainComponent.prototype.ngOnInit = function () {
    };
    TrainComponent.prototype.ticked = function () {
        this.link
            .attr('x1', function (d) { return d.source.x; })
            .attr('y1', function (d) { return d.source.y; })
            .attr('x2', function (d) { return d.target.x; })
            .attr('y2', function (d) { return d.target.y; });
        this.node
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; });
    };
    TrainComponent.prototype.render = function (graph) {
        var _this = this;
        this.link = this.svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(graph.links)
            .enter().append('line')
            .attr('stroke-width', function (d) { return Math.sqrt(d.value); });
        this.node = this.svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(graph.nodes)
            .enter().append('circle')
            .attr('r', 5)
            .attr('fill', function (d) { return _this.color(d.group); })
            .call(this.d3.drag()
            .on('start', function (d) { return _this.dragstarted(d); })
            .on('drag', function (d) { return _this.dragged(d); })
            .on('end', function (d) { return _this.dragended(d); }));
        this.node.append('title')
            .text(function (d) { return d.id; });
        this.simulation
            .nodes(graph.nodes)
            .on('tick', function () { return _this.ticked(); });
        this.simulation.force('link')
            .links(graph.links);
    };
    TrainComponent.prototype.dragged = function (d) {
        d.fx = this.d3.event.x;
        d.fy = this.d3.event.y;
    };
    TrainComponent.prototype.dragended = function (d) {
        if (!this.d3.event.active) {
            this.simulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
    };
    TrainComponent.prototype.dragstarted = function (d) {
        if (!this.d3.event.active) {
            this.simulation.alphaTarget(0.3).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
    };
    TrainComponent.prototype.train = function (iterations, loss, lr, gamma, power) {
        if (iterations === void 0) { iterations = 1000; }
        if (loss === void 0) { loss = 0.03; }
        if (lr === void 0) { lr = 0.7; }
        if (gamma === void 0) { gamma = 0.0002; }
        if (power === void 0) { power = 1.5; }
        this.myNetwork.train(__WEBPACK_IMPORTED_MODULE_2__data_training__["a" /* TRAINING_DATA */], {
            error: loss,
            iterations: iterations,
            rate: lr,
            gamma: gamma,
            power: power
        });
    };
    TrainComponent.prototype.test = function () {
        console.log(this.myNetwork);
        console.log(this.myNetwork.activate([0, 0]));
        console.log(this.myNetwork.activate([0, 1]));
        console.log(this.myNetwork.activate([1, 0]));
        console.log(this.myNetwork.activate([1, 1]));
    };
    return TrainComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mycanvas'),
    __metadata("design:type", Object)
], TrainComponent.prototype, "mycanvas", void 0);
TrainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-train',template:/*ion-inline-start:"/Users/gtgoodwin/solar/src/widgets/neuralnet/train.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Train Network</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style="border-top: 1px solid rgba(224,224,224,1);" padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h4>Train Network</h4>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-list style="max-width: 250px;">\n            <ion-item>\n              <ion-label color="primary" stacked>Iterations</ion-label>\n              <ion-input type="number" #iterations value="1000"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Target Loss</ion-label>\n              <ion-input type="number" #targetloss value="0.03"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Learning Rate</ion-label>\n              <ion-input type="number" #learningrate value="0.7"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Gamma</ion-label>\n              <ion-input type="number" #gamma value="0.0002"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Power</ion-label>\n              <ion-input type="number" #power value="1.5"></ion-input>\n            </ion-item>\n          </ion-list>\n          <button ion-button padding color="primary" disabled (click)="train(iterations.value, targetloss.value, learningrate.value, gamma.value, power.value)">Train\n          </button>\n          <button ion-button padding color="secondary" disabled (click)="test()">Test</button>\n        </ion-col>\n        <ion-col>\n          <ion-card style="background-color: #e1e1e1; border-radius: 4px; border-bottom: 10px solid #f15d24; width: 140px; height: 100px; padding: 14px; box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3);">\n            <h4 style="color: #433E3F; margin: 4px;">ITERATION</h4>\n            <h1 style="color: #433E3F; font-size: 48px; margin-top: 10px;">{{ iter | number: \'.0\' }}</h1>\n\n          </ion-card>\n          <ion-card style="background-color: #e1e1e1; border-radius: 4px; border-bottom: 10px solid #f15d24; width: 140px; height: 100px; padding: 14px; box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3);">\n            <h4 style="color: #433E3F; margin: 4px;">LOSS</h4>\n            <h1 style="color: #433E3F; font-size: 32px; margin-top: 10px;">{{ loss | number: \'1.2-6\' }}</h1>\n\n          </ion-card>\n          <ion-card style="background-color: #e1e1e1; border-radius: 4px; border-bottom: 10px solid #f15d24; width: 140px; height: 100px; padding: 14px; box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3);">\n            <h4 style="color: #433E3F; margin: 4px;">LEARNING RATE</h4>\n            <h1 style="color: #433E3F; font-size: 32px; margin-top: 10px;">{{ lr | number: \'1.2-6\' }}</h1>\n\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ngx-charts-line-chart [view]="view" [scheme]="colorScheme" [results]="stats" [gradient]="gradient" [xAxis]="showXAxis"\n            [yAxis]="showYAxis" [legend]="showLegend" [showXAxisLabel]="showXAxisLabel" [showYAxisLabel]="showYAxisLabel"\n            [xAxisLabel]="xAxisLabel" [yAxisLabel]="yAxisLabel" [autoScale]="autoScale" (select)="onSelect($event)">\n\n          </ngx-charts-line-chart>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/solar/src/widgets/neuralnet/train.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__net_component__["a" /* NetComponent */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */], __WEBPACK_IMPORTED_MODULE_3__net_component__["a" /* NetComponent */]])
], TrainComponent);

//# sourceMappingURL=train.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Network; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_config__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__neuron__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_cost_actions__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_learning_rate_actions__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layer__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__group__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_evo__ = __webpack_require__(999);
/* tslint:disable */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Network = Network_1 = (function () {
    function Network(inputSize, outputSize) {
        this.neurons = [];
        this.connections = [];
        this.gates = [];
        this.selfconns = [];
        this.dropout = 0;
        this.merge = function (network1, network2) {
            // Create a copy of the networks
            network1 = this.network.fromJSON(network1.toJSON());
            network2 = this.network.fromJSON(network2.toJSON());
            // Check if output and input size are the same
            if (network1.output !== network2.input) {
                throw new Error('Output size of network1 should be the same as the input size of network2!');
            }
            // Redirect all connections from network2 input from network1 output
            for (var i = 0; i < network2.connections.length; i++) {
                var conn = network2.connections[i];
                if (conn.from.type === 'input') {
                    var index = network2.nodes.indexOf(conn.from);
                    // redirect
                    conn.from = network1.nodes[network1.nodes.length - 1 - index];
                }
            }
            // Deconste input neurons of network2
            for (var i = network2.input - 1; i >= 0; i--) {
                network2.nodes.splice(i, 1);
            }
            // Change the node type of network1's output neurons (now hidden)
            for (var i = network1.nodes.length - network1.output; i < network1.nodes.length; i++) {
                network1.nodes[i].type = 'hidden';
            }
            // Create one network from both networks
            network1.connections = network1.connections.concat(network2.connections);
            network1.nodes = network1.nodes.concat(network2.nodes);
            return network1;
        };
        if (!inputSize || !outputSize) {
            throw new Error('No input or output size given');
        }
        else {
            this.inputsize = inputSize;
            this.outputsize = outputSize;
        }
        for (var i = 0; i < this.inputsize + this.outputsize; i++) {
            var type = (i < this.inputsize) ? 'input' : 'output';
            this.neurons.push(new __WEBPACK_IMPORTED_MODULE_4__neuron__["a" /* Neuron */](type));
        }
        // Connect input neurons with output neurons directly
        for (var i = 0; i < this.inputsize; i++) {
            for (var j = this.inputsize; j < this.outputsize + this.inputsize; j++) {
                // https://stats.stackexchange.com/a/248040/147931
                var weight = Math.random() * this.inputsize * Math.sqrt(2 / this.inputsize);
                this.connect(this.neurons[i], this.neurons[j], weight);
            }
        }
    }
    Network.create = function (list) {
        // Create a network
        var network = new Network_1(0, 0);
        // Transform all groups into neurons
        var nodes = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i] instanceof __WEBPACK_IMPORTED_MODULE_8__group__["a" /* Group */]) {
                for (var j = 0; j < list[i].nodes.length; j++) {
                    nodes.push(list[i].nodes[j]);
                }
            }
            else if (list[i] instanceof __WEBPACK_IMPORTED_MODULE_7__layer__["a" /* Layer */]) {
                for (var j = 0; j < list[i].nodes.length; j++) {
                    for (var k = 0; k < list[i].nodes[j].nodes.length; k++) {
                        nodes.push(list[i].nodes[j].nodes[k]);
                    }
                }
            }
            else if (list[i] instanceof __WEBPACK_IMPORTED_MODULE_4__neuron__["a" /* Neuron */]) {
                nodes.push(list[i]);
            }
        }
        // Determine input and output neurons
        var inputs = [];
        var outputs = [];
        for (var i = nodes.length - 1; i >= 0; i--) {
            if (nodes[i].type === 'output' || nodes[i].connections.out.length + nodes[i].connections.gated.length === 0) {
                nodes[i].type = 'output';
                network.outputsize++;
                outputs.push(nodes[i]);
                nodes.splice(i, 1);
            }
            else if (nodes[i].type === 'input' || !nodes[i].connections.in.length) {
                nodes[i].type = 'input';
                network.inputsize++;
                inputs.push(nodes[i]);
                nodes.splice(i, 1);
            }
        }
        // Input neurons are always first, output neurons are always last
        nodes = inputs.concat(nodes).concat(outputs);
        if (network.inputsize === 0 || network.outputsize === 0) {
            throw new Error('Given neurons have no clear input/output node!');
        }
        for (var i = 0; i < nodes.length; i++) {
            for (var j = 0; j < nodes[i].connections.out.length; j++) {
                network.connections.push(nodes[i].connections.out[j]);
            }
            for (var j = 0; j < nodes[i].connections.gated.length; j++) {
                network.gates.push(nodes[i].connections.gated[j]);
            }
            if (nodes[i].connections.self.weight !== 0) {
                network.selfconns.push(nodes[i].connections.self);
            }
        }
        network.neurons = nodes;
        return network;
    };
    /**
     * Activates the network
     */
    Network.prototype.activate = function (actInputSize, training) {
        var actOutputSize = [];
        // Activate neurons chronologically
        for (var i = 0; i < this.neurons.length; i++) {
            if (this.neurons[i].type === 'input') {
                this.neurons[i].activate(actInputSize[i]);
            }
            else if (this.neurons[i].type === 'output') {
                var activation = this.neurons[i].activate();
                actOutputSize.push(activation);
            }
            else {
                if (training) {
                    this.neurons[i].mask = Math.random() < this.dropout ? 0 : 1;
                }
                this.neurons[i].activate();
            }
        }
        return actOutputSize;
    };
    /**
     * Backpropagate the network
     */
    Network.prototype.propagate = function (rate, momentum, update, target) {
        if (typeof target !== 'undefined' && target.length !== this.outputsize) {
            throw new Error('Output target length should match network output length');
        }
        var targetIndex = target.length;
        // Propagate output neurons
        for (var i = this.neurons.length - 1; i >= this.neurons.length - this.outputsize; i--) {
            this.neurons[i].propagate(rate, momentum, update, target[--targetIndex]);
        }
        // Propagate hidden and input neurons
        for (var i = this.neurons.length - this.outputsize - 1; i >= this.inputsize; i--) {
            this.neurons[i].propagate(rate, momentum, update);
        }
    };
    /**
     * Clear the context of the network
     */
    Network.prototype.clear = function () {
        for (var i = 0; i < this.neurons.length; i++) {
            this.neurons[i].clear();
        }
    };
    /**
     * Connects the from node to the to node
     */
    Network.prototype.connect = function (from, to, weight) {
        var connections = from.connect(to, weight);
        for (var i = 0; i < connections.length; i++) {
            if (from !== to) {
                this.connections.push(connections[i]);
            }
            else {
                this.selfconns.push(connections[i]);
            }
        }
        return connections;
    };
    /**
     * Disconnects the from node from the to node
     */
    Network.prototype.disconnect = function (from, to) {
        // Deconste the connection in the network's connection array
        var connections = from === to ? this.selfconns : this.connections;
        for (var i = 0; i < connections.length; i++) {
            var connection = connections[i];
            if (connection.from === from && connection.to === to) {
                if (connection.gater !== null) {
                    this.ungate(connection);
                }
                connections.splice(i, 1);
                break;
            }
        }
        // Deconste the connection at the sending and receiving neuron
        from.disconnect(to);
    };
    /**
     * Gate a connection with a node
     */
    Network.prototype.gate = function (node, connection) {
        if (this.neurons.indexOf(node) === -1) {
            throw new Error('This node is not part of the network!');
        }
        else if (connection.gater != null) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('This connection is already gated!');
            }
            return;
        }
        node.gate(connection);
        this.gates.push(connection);
    };
    /**
     *  Remove the gate of a connection
     */
    Network.prototype.ungate = function (connection) {
        var index = this.gates.indexOf(connection);
        if (index === -1) {
            throw new Error('This connection is not gated!');
        }
        this.gates.splice(index, 1);
        connection.gater.ungate(connection);
    };
    /**
     *  Removes a node from the network
     */
    Network.prototype.remove = function (node) {
        var index = this.neurons.indexOf(node);
        if (index === -1) {
            throw new Error('This node does not exist in the network!');
        }
        // Keep track of gaters
        var gaters = [];
        // Remove selfconnections from this.selfconns
        this.disconnect(node, node);
        // Get all its inputting neurons
        var inputs = [];
        for (var i = node.connections.in.length - 1; i >= 0; i--) {
            var connection = node.connections.in[i];
            if (__WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].SUB_NODE.keep_gates && connection.gater !== null && connection.gater !== node) {
                gaters.push(connection.gater);
            }
            inputs.push(connection.from);
            this.disconnect(connection.from, node);
        }
        // Get all its outputing neurons
        var outputs = [];
        for (var i = node.connections.out.length - 1; i >= 0; i--) {
            var connection = node.connections.out[i];
            if (__WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].SUB_NODE.keep_gates && connection.gater !== null && connection.gater !== node) {
                gaters.push(connection.gater);
            }
            outputs.push(connection.to);
            this.disconnect(node, connection.to);
        }
        // Connect the input neurons to the output neurons (if not already connected)
        var connections = [];
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            for (var j = 0; j < outputs.length; j++) {
                var output = outputs[j];
                if (!input.isProjectingTo(output)) {
                    var conn = this.connect(input, output);
                    connections.push(conn[0]);
                }
            }
        }
        // Gate random connections with gaters
        for (var i = 0; i < gaters.length; i++) {
            if (connections.length === 0) {
                break;
            }
            var gater = gaters[i];
            var connIndex = Math.floor(Math.random() * connections.length);
            this.gate(gater, connections[connIndex]);
            connections.splice(connIndex, 1);
        }
        // Remove gated connections gated by this node
        for (var i = node.connections.gated.length - 1; i >= 0; i--) {
            var conn = node.connections.gated[i];
            this.ungate(conn);
        }
        // Remove selfconnection
        this.disconnect(node, node);
        // Remove the node from this.neurons
        this.neurons.splice(index, 1);
    };
    ;
    /**
     * Mutates the network with the given method
     */
    Network.prototype.mutate = function (method) {
        if (typeof method === 'undefined') {
            throw new Error('No (correct) mutate method given!');
        }
        switch (method) {
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].ADD_NODE:
                this.addNode();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].SUB_NODE:
                this.subNode();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].ADD_CONN:
                this.addConn();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].SUB_CONN:
                this.subConn();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].MOD_WEIGHT:
                this.modWeight(method);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].MOD_BIAS:
                this.modBias(method);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].MOD_ACTIVATION:
                this.modActivation(method);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].ADD_SELF_CONN:
                this.addSelfConn();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].SUB_SELF_CONN:
                this.subSelfConn();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].ADD_GATE:
                this.addGate();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].SUB_GATE:
                this.subGate();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].ADD_BACK_CONN:
                this.addBackConn();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].SUB_BACK_CONN:
                this.subBackConn();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].SWAP_NODES:
                this.swapNodes(method);
                break;
            default:
                break;
        }
    };
    Network.prototype.addNode = function () {
        var connection;
        var node;
        // Look for an existing connection and place a node in between
        connection = this.connections[Math.floor(Math.random() * this.connections.length)];
        var gater = connection.gater;
        this.disconnect(connection.from, connection.to);
        // Insert the new node right before the old connection.to
        var toIndex = this.neurons.indexOf(connection.to);
        node = new __WEBPACK_IMPORTED_MODULE_4__neuron__["a" /* Neuron */]('hidden');
        // Random squash function
        node.mutate(__WEBPACK_IMPORTED_MODULE_1__mutation__["a" /* Mutation */].MOD_ACTIVATION);
        // Place it in this.neurons
        var minBound = Math.min(toIndex, this.neurons.length - this.outputsize);
        this.neurons.splice(minBound, 0, node);
        // Now create two new connections
        var newConn1 = this.connect(connection.from, node)[0];
        var newConn2 = this.connect(node, connection.to)[0];
        // Check if the original connection was gated
        if (gater != null) {
            this.gate(gater, Math.random() >= 0.5 ? newConn1 : newConn2);
        }
    };
    Network.prototype.subNode = function () {
        // Check if there are neurons left to remove
        if (this.neurons.length === this.inputsize + this.outputsize) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No more neurons left to remove!');
            }
            return;
        }
        // Select a node which isn't an input or output node
        var index = Math.floor(Math.random() * (this.neurons.length - this.outputsize - this.inputsize) + this.inputsize);
        this.remove(this.neurons[index]);
    };
    Network.prototype.addConn = function () {
        // Create an array of all uncreated (feedforward) connections
        var available = [];
        for (var i = 0; i < this.neurons.length - this.outputsize; i++) {
            var node1 = this.neurons[i];
            for (var j = Math.max(i + 1, this.inputsize); j < this.neurons.length; j++) {
                var node2 = this.neurons[j];
                if (!node1.isProjectingTo(node2)) {
                    available.push([node1, node2]);
                }
            }
        }
        if (available.length === 0) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No more connections to be made!');
            }
            return;
        }
        var pair = available[Math.floor(Math.random() * available.length)];
        this.connect(pair[0], pair[1]);
    };
    Network.prototype.subConn = function () {
        // List of possible connections that can be removed
        var possible = [];
        for (var i = 0; i < this.connections.length; i++) {
            var conn = this.connections[i];
            // Check if it is not disabling a node
            if (conn.from.connections.out.length > 1 && conn.to.connections.in.length > 1 && this.neurons.indexOf(conn.to) > this.neurons.indexOf(conn.from)) {
                possible.push(conn);
            }
        }
        if (possible.length === 0) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No connections to remove!');
            }
            return;
        }
        var randomConn = possible[Math.floor(Math.random() * possible.length)];
        this.disconnect(randomConn.from, randomConn.to);
    };
    Network.prototype.modWeight = function (method) {
        var connection = this.connections[Math.floor(Math.random() * this.connections.length)];
        connection.weight += Math.random() * (method.max - method.min) + method.min;
    };
    Network.prototype.modBias = function (method) {
        // Has no effect on input node, so they are excluded
        var index = Math.floor(Math.random() * (this.neurons.length - this.inputsize) + this.inputsize);
        var node = this.neurons[index];
        node.mutate(method);
    };
    Network.prototype.modActivation = function (method) {
        // Has no effect on input node, so they are excluded
        if (!method.mutateOutput && this.inputsize + this.outputsize === this.neurons.length) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No neurons that allow mutation of activation function');
            }
            return;
        }
        var index = Math.floor(Math.random() * (this.neurons.length - (method.mutateOutput ? 0 : this.outputsize) - this.inputsize) + this.inputsize);
        var node = this.neurons[index];
        node.mutate(method);
    };
    Network.prototype.addSelfConn = function () {
        // Check which neurons aren't selfconnected yet
        var possible = [];
        for (var i = this.inputsize; i < this.neurons.length; i++) {
            var node_1 = this.neurons[i];
            if (this.selfconns.indexOf(node_1.connections.self) === -1) {
                possible.push(node_1);
            }
        }
        if (possible.length === 0) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No more self-connections to add!');
            }
            return;
        }
        // Select a random node
        var node = possible[Math.floor(Math.random() * possible.length)];
        // Connect it to himself
        this.connect(node, node);
    };
    Network.prototype.subSelfConn = function () {
        if (this.selfconns.length === 0) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No more self-connections to remove!');
            }
            return;
        }
        var conn = this.selfconns[Math.floor(Math.random() * this.selfconns.length)];
        this.disconnect(conn.from, conn.to);
    };
    Network.prototype.addGate = function () {
        var allconnections = this.connections.concat(this.selfconns);
        // Create a list of all non-gated connections
        var possible = [];
        for (var i = 0; i < allconnections.length; i++) {
            var conn_1 = allconnections[i];
            if (conn_1.gater === null) {
                possible.push(conn_1);
            }
        }
        if (possible.length === 0) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No more connections to gate!');
            }
            return;
        }
        // Select a random gater node and connection
        var node = this.neurons[Math.floor(Math.random() * this.neurons.length)];
        var conn = possible[Math.floor(Math.random() * possible.length)];
        // Gate the connection with the node
        this.gate(node, conn);
    };
    Network.prototype.subGate = function () {
        // Select a random gated connection
        if (this.gates.length === 0) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No more connections to ungate!');
            }
            return;
        }
        var index = Math.floor(Math.random() * this.gates.length);
        var gatedconn = this.gates[index];
        this.ungate(gatedconn);
    };
    Network.prototype.addBackConn = function () {
        // Create an array of all uncreated (backfed) connections
        var available = [];
        for (var i = this.inputsize; i < this.neurons.length; i++) {
            var node1 = this.neurons[i];
            for (var j = this.inputsize; j < i; j++) {
                var node2 = this.neurons[j];
                if (!node1.isProjectingTo(node2)) {
                    available.push([node1, node2]);
                }
            }
        }
        if (available.length === 0) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No more connections to be made!');
            }
            return;
        }
        var pair = available[Math.floor(Math.random() * available.length)];
        this.connect(pair[0], pair[1]);
    };
    Network.prototype.subBackConn = function () {
        // List of possible connections that can be removed
        var possible = [];
        for (var i = 0; i < this.connections.length; i++) {
            var conn = this.connections[i];
            // Check if it is not disabling a node
            if (conn.from.connections.out.length > 1 && conn.to.connections.in.length > 1 && this.neurons.indexOf(conn.from) > this.neurons.indexOf(conn.to)) {
                possible.push(conn);
            }
        }
        if (possible.length === 0) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No connections to remove!');
            }
            return;
        }
        var randomConn = possible[Math.floor(Math.random() * possible.length)];
        this.disconnect(randomConn.from, randomConn.to);
    };
    Network.prototype.swapNodes = function (method) {
        // Has no effect on input node, so they are excluded
        if ((method.mutateOutput && this.neurons.length - this.inputsize < 2) ||
            (!method.mutateOutput && this.neurons.length - this.inputsize - this.outputsize < 2)) {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No neurons that allow swapping of bias and activation function');
            }
            return;
        }
        var index = Math.floor(Math.random() * (this.neurons.length - (method.mutateOutput ? 0 : this.outputsize) - this.inputsize) + this.inputsize);
        var node1 = this.neurons[index];
        index = Math.floor(Math.random() * (this.neurons.length - (method.mutateOutput ? 0 : this.outputsize) - this.inputsize) + this.inputsize);
        var node2 = this.neurons[index];
        var biasTemp = node1.bias;
        var squashTemp = node1.squash;
        node1.bias = node2.bias;
        node1.squash = node2.squash;
        node2.bias = biasTemp;
        node2.squash = squashTemp;
    };
    /**
     * Train the given set to this network
     */
    Network.prototype.train = function (set, options) {
        if (set[0].input.length !== this.inputsize || set[0].output.length !== this.outputsize) {
            throw new Error('Dataset input/output size should be same as network input/output size!');
        }
        options = options || {};
        // Warning messages
        if (typeof options.rate === 'undefined') {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('Using default learning rate, please define a rate!');
            }
        }
        if (typeof options.iterations === 'undefined') {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('No target iterations given, running until error is reached!');
            }
        }
        // Configure given options
        var targetError = options.error || 0.05;
        var cost = options.cost || __WEBPACK_IMPORTED_MODULE_5__actions_cost_actions__["a" /* CostActions */].MSE;
        var baseRate = options.rate || 0.3;
        var shuffle = options.shuffle || false;
        var iterations = options.iterations || 0;
        var crossValidate = options.crossValidate || false;
        var clear = options.clear || false;
        var dropout = options.dropout || 0;
        var momentum = options.momentum || 0;
        var batchSize = options.batchSize || 1; // online learning
        var ratePolicy = options.ratePolicy || __WEBPACK_IMPORTED_MODULE_6__actions_learning_rate_actions__["a" /* LearningRateActions */].FIXED;
        var schedule = options.schedule;
        var start = Date.now();
        if (batchSize > set.length) {
            throw new Error('Batch size must be smaller or equal to dataset length!');
        }
        if (typeof options.iterations === 'undefined' && typeof options.error === 'undefined') {
            if (__WEBPACK_IMPORTED_MODULE_3__data_config__["e" /* warnings */]) {
                console.warn('At least one of the following options must be specified: error, iterations');
            }
        }
        else if (typeof options.error === 'undefined') {
            targetError = -1; // run until iterations
        }
        // Save to network
        this.dropout = dropout;
        var trainSet;
        var testSet;
        var testError;
        if (crossValidate) {
            var testSize = options.crossValidate.testSize;
            testError = options.crossValidate.testError;
            var numTrain = Math.ceil((1 - testSize) * set.length);
            trainSet = set.slice(0, numTrain);
            testSet = set.slice(numTrain);
        }
        // Loops the training process
        var currentRate = baseRate;
        var iteration = 0;
        var error = 1;
        var i, j, x;
        while (error > targetError && (iterations === 0 || iteration < iterations)) {
            if (crossValidate && error <= testError) {
                break;
            }
            iteration++;
            // Update the rate
            currentRate = ratePolicy(baseRate, iteration);
            error = 0;
            // Checks if cross validation is enabled
            if (crossValidate) {
                this._trainSet(trainSet, batchSize, currentRate, momentum, cost);
                if (clear) {
                    this.clear();
                }
                error += this.test(testSet, cost).error;
                if (clear) {
                    this.clear();
                }
            }
            else {
                error += this._trainSet(set, batchSize, currentRate, momentum, cost);
                if (clear) {
                    this.clear();
                }
            }
            // Checks for options such as scheduled logs and shuffling
            if (shuffle) {
                for (var j_1, x_1, ii = set.length; ii; j_1 = Math.floor(Math.random() * ii), x_1 = set[--ii], set[ii] = set[j_1], set[j_1] = x_1) { }
            }
            if (schedule && iteration % schedule.iterations === 0) {
                schedule.function({
                    error: error,
                    iteration: iteration
                });
            }
        }
        if (clear) {
            this.clear();
        }
        if (dropout) {
            for (var i_1 = 0; i_1 < this.neurons.length; i_1++) {
                if (this.neurons[i_1].type === 'hidden' || this.neurons[i_1].type === 'constant') {
                    this.neurons[i_1].mask = 1 - this.dropout;
                }
            }
        }
        // Creates an object of the results
        return {
            error: error,
            iterations: iteration,
            time: Date.now() - start
        };
    };
    /**
     * Performs one training epoch and returns the error
     * private function used in this.train
     */
    Network.prototype._trainSet = function (set, batchSize, currentRate, momentum, costFunction) {
        var errorSum = 0;
        for (var i = 0; i < set.length; i++) {
            var input = set[i].input;
            var target = set[i].output;
            var update = !!((i + 1) % batchSize === 0 || (i + 1) === set.length);
            var output = this.activate(input, true);
            this.propagate(currentRate, momentum, update, target);
            errorSum += costFunction(target, output);
        }
        return errorSum / set.length;
    };
    /**
     * Tests a set and returns the error and elapsed time
     */
    Network.prototype.test = function (set, cost) {
        // Check if dropout is enabled, set correct mask
        if (this.dropout) {
            for (var i = 0; i < this.neurons.length; i++) {
                if (this.neurons[i].type === 'hidden' || this.neurons[i].type === 'constant') {
                    this.neurons[i].mask = 1 - this.dropout;
                }
            }
        }
        cost = cost || __WEBPACK_IMPORTED_MODULE_5__actions_cost_actions__["a" /* CostActions */].MSE;
        var error = 0;
        var start = Date.now();
        for (var i = 0; i < set.length; i++) {
            var input = set[i].input;
            var target = set[i].output;
            var output = this.activate(input);
            error += cost(target, output);
        }
        error /= set.length;
        return {
            error: error,
            time: Date.now() - start
        };
    };
    /**
     * Creates a json that can be used to create a graph with d3 and webcola
     */
    Network.prototype.graph = function (width, height) {
        var input = 0;
        var output = 0;
        var json = {
            nodes: [],
            links: [],
            constraints: [{
                    type: 'alignment',
                    axis: 'x',
                    offsets: []
                }, {
                    type: 'alignment',
                    axis: 'y',
                    offsets: []
                }]
        };
        for (var i = 0; i < this.neurons.length; i++) {
            var node = this.neurons[i];
            if (node.type === 'input') {
                if (this.inputsize === 1) {
                    json.constraints[0].offsets.push({
                        node: i,
                        offset: 0
                    });
                }
                else {
                    json.constraints[0].offsets.push({
                        node: i,
                        offset: 0.8 * width / (this.inputsize - 1) * input++
                    });
                }
                json.constraints[1].offsets.push({
                    node: i,
                    offset: 0
                });
            }
            else if (node.type === 'output') {
                if (this.outputsize === 1) {
                    json.constraints[0].offsets.push({
                        node: i,
                        offset: 0
                    });
                }
                else {
                    json.constraints[0].offsets.push({
                        node: i,
                        offset: 0.8 * width / (this.outputsize - 1) * output++
                    });
                }
                json.constraints[1].offsets.push({
                    node: i,
                    offset: -0.8 * height
                });
            }
            json.nodes.push({
                id: i,
                name: node.type === 'hidden' ? node.squash.name : node.type.toUpperCase(),
                activation: node.activation,
                bias: node.bias
            });
        }
        var connections = this.connections.concat(this.selfconns);
        for (var i = 0; i < connections.length; i++) {
            var connection = connections[i];
            if (connection.gater == null) {
                json.links.push({
                    source: this.neurons.indexOf(connection.from),
                    target: this.neurons.indexOf(connection.to),
                    weight: connection.weight
                });
            }
            else {
                // Add a gater 'node'
                var index = json.nodes.length;
                json.nodes.push({
                    id: index,
                    activation: connection.gater.activation,
                    name: 'GATE'
                });
                json.links.push({
                    source: this.neurons.indexOf(connection.from),
                    target: index,
                    weight: 1 / 2 * connection.weight
                });
                json.links.push({
                    source: index,
                    target: this.neurons.indexOf(connection.to),
                    weight: 1 / 2 * connection.weight
                });
                json.links.push({
                    source: this.neurons.indexOf(connection.gater),
                    target: index,
                    weight: connection.gater.activation,
                    gate: true
                });
            }
        }
        return json;
    };
    /**
     * Convert the network to a json object
     */
    Network.prototype.toJSON = function () {
        var json = {
            nodes: [],
            connections: [],
            input: this.inputsize,
            output: this.outputsize,
            dropout: this.dropout
        };
        // So we don't have to use expensive .indexOf()
        for (var i = 0; i < this.neurons.length; i++) {
            this.neurons[i].index = i;
        }
        for (var i = 0; i < this.neurons.length; i++) {
            var node = this.neurons[i];
            var tojson = node.toJSON();
            tojson.index = i;
            json.nodes.push(tojson);
            if (node.connections.self.weight !== 0) {
                var tojson_1 = node.connections.self.toJSON();
                tojson_1.from = i;
                tojson_1.to = i;
                tojson_1.gater = node.connections.self.gater != null ? node.connections.self.gater.index : null;
                json.connections.push(tojson_1);
            }
        }
        for (var i = 0; i < this.connections.length; i++) {
            var conn = this.connections[i];
            var tojson = conn.toJSON();
            tojson.from = conn.from.index;
            tojson.to = conn.to.index;
            tojson.gater = conn.gater != null ? conn.gater.index : null;
            json.connections.push(tojson);
        }
        return json;
    };
    /**
     * Sets the value of a property for every node in this network
     */
    Network.prototype.set = function (values) {
        for (var i = 0; i < this.neurons.length; i++) {
            this.neurons[i].bias = values.bias || this.neurons[i].bias;
            this.neurons[i].squash = values.squash || this.neurons[i].squash;
        }
    };
    /**
     * Evolves the network to reach a lower error on a dataset
     */
    Network.prototype.evolve = function (set, options) {
        options = options || {};
        var cost = options.cost || __WEBPACK_IMPORTED_MODULE_5__actions_cost_actions__["a" /* CostActions */].MSE;
        var amount = options.amount || 1;
        var growth = typeof options.growth !== 'undefined' ? options.growth : 0.0001;
        var iterations = options.iterations || 0;
        var targetError = typeof options.error !== 'undefined' ? options.error : 0.005;
        var log = options.log || 0;
        var clear = options.clear || false;
        var schedule = options.schedule;
        var start = Date.now();
        function fitnessFunction(genome) {
            var score = 0;
            for (var i = 0; i < amount; i++) {
                score -= genome.test(set, cost).error;
            }
            score -= (genome.nodes.length - genome.input - genome.output + genome.connections.length + genome.gates.length) * growth;
            score = isNaN(score) ? -Infinity : score; // this can cause problems with fitness proportionate selection
            return score / amount;
        }
        options.network = this;
        var neat = new __WEBPACK_IMPORTED_MODULE_9__game_evo__["a" /* Evo */]();
        var error = -Infinity;
        var bestFitness = -Infinity;
        var bestGenome = null;
        while (error < -targetError && (iterations === 0 || neat.generation < iterations)) {
            neat.evolveGenomePool();
            var fittest = neat.getFittestGenomes();
            var fitness = fittest.score;
            error = fitness + (fittest.nodes.length - fittest.input - fittest.output + fittest.connections.length + fittest.gates.length) * growth;
            if (fitness > bestFitness) {
                bestFitness = fitness;
                bestGenome = fittest;
            }
            if (log && neat.generation % log === 0) {
                console.log('generation', neat.generation, 'fitness', fitness, 'error', -error);
            }
            if (schedule && neat.generation % schedule.iterations === 0) {
                schedule.function({
                    fitness: fitness,
                    error: -error,
                    iteration: neat.generation
                });
            }
        }
        if (clear) {
            bestGenome.clear();
        }
        var results = {
            error: bestFitness,
            generations: neat.generation,
            time: Date.now() - start
        };
        if (bestGenome != null) {
            this.neurons = bestGenome.nodes;
            this.connections = bestGenome.connections;
            this.gates = bestGenome.gates;
            this.selfconns = bestGenome.selfconns;
        }
        return results;
    };
    /**
     * Creates a standalone function of the network which can be run without the
     * need of a library
     */
    Network.prototype.standalone = function () {
        var present = [];
        var activations = [];
        var states = [];
        var lines = [];
        var functions = [];
        for (var i = 0; i < this.inputsize; i++) {
            var node = this.neurons[i];
            activations.push(node.activation);
            states.push(node.state);
        }
        lines.push('for(let i = 0; i < input.length; i++) A[i] = input[i];');
        // So we don't have to use expensive .indexOf()
        for (var i = 0; i < this.neurons.length; i++) {
            this.neurons[i].index = i;
        }
        for (var i = this.inputsize; i < this.neurons.length; i++) {
            var node = this.neurons[i];
            activations.push(node.activation);
            states.push(node.state);
            var functionIndex = present.indexOf(node.squash.name);
            if (present.indexOf(node.squash.name) === -1) {
                functionIndex = present.length;
                present.push(node.squash.name);
                functions.push(node.squash.toString());
            }
            var incoming = [];
            for (var j = 0; j < node.connections.in.length; j++) {
                var conn = node.connections.in[j];
                var computation = "A[" + conn.from.index + "] * " + conn.weight;
                if (conn.gater != null) {
                    computation += " * A[" + conn.gater.index + "]";
                }
                incoming.push(computation);
            }
            if (node.connections.self.weight) {
                var conn = node.connections.self;
                var computation = "S[" + i + "] * " + conn.weight;
                if (conn.gater != null) {
                    computation += " * A[" + conn.gater.index + "]";
                }
                incoming.push(computation);
            }
            var line1 = "S[" + i + "] = " + incoming.join(' + ') + " + " + node.bias + ";";
            var line2 = "A[" + i + "] = F[" + functionIndex + "](S[" + i + "])" + (!node.mask ? ' * ' + node.mask : '') + ";";
            lines.push(line1);
            lines.push(line2);
        }
        var output = [];
        for (var i = this.neurons.length - this.outputsize; i < this.neurons.length; i++) {
            output.push("A[" + i + "]");
        }
        // output = `return [${output.join(',')}];`;
        lines.push(output);
        var total = '';
        total += "var F = [" + functions.toString() + "];\r\n";
        total += "var A = [" + activations.toString() + "];\r\n";
        total += "var S = [" + states.toString() + "];\r\n";
        total += "function activate(input){\r\n" + lines.join('\r\n') + "\r\n}";
        return total;
    };
    /**
     * Serialize to send to workers efficiently
     */
    Network.prototype.serialize = function () {
        var activations = [];
        var states = [];
        var conns = [];
        var squashes = [
            'LOGISTIC', 'TANH', 'IDENTITY', 'STEP', 'RELU', 'SOFTSIGN', 'SINUSOID',
            'GAUSSIAN', 'BENT_IDENTITY', 'BIPOLAR', 'BIPOLAR_SIGMOID', 'HARD_TANH',
            'ABSOLUTE', 'INVERSE', 'SELU'
        ];
        conns.push(this.inputsize);
        conns.push(this.outputsize);
        for (var i = 0; i < this.neurons.length; i++) {
            var node = this.neurons[i];
            node.index = i;
            activations.push(node.activation);
            states.push(node.states);
        }
        for (var i = this.inputsize; i < this.neurons.length; i++) {
            var node = this.neurons[i];
            conns.push(node.index);
            conns.push(node.bias);
            conns.push(squashes.indexOf(node.squash.name));
            for (var j = 0; j < node.connections.in.length; j++) {
                var conn = node.connections.in[j];
                conns.push(conn.from.index);
                conns.push(conn.weight);
                conns.push(conn.gater == null ? -1 : conn.gater.index);
            }
            conns.push(-2); // stop token -> next node
        }
        // Convert to Float64Arrays
        var activationsFloat = new Float64Array(activations);
        var statesFloat = new Float64Array(states);
        var connsFloat = new Float64Array(conns);
        return [activationsFloat, statesFloat, connsFloat];
    };
    Network.fromJSON = function (json) {
        var network = new Network_1(json.input, json.output);
        network.dropout = json.dropout;
        network.neurons = [];
        network.connections = [];
        for (var i = 0; i < json.nodes.length; i++) {
            network.neurons.push(__WEBPACK_IMPORTED_MODULE_4__neuron__["a" /* Neuron */].fromJSON(json.nodes[i]));
        }
        for (var i = 0; i < json.connections.length; i++) {
            var conn = json.connections[i];
            var connection = network.connect(network.neurons[conn.from], network.neurons[conn.to])[0];
            connection.weight = conn.weight;
            if (conn.gater != null) {
                network.gate(network.neurons[conn.gater], connection);
            }
        }
        return network;
    };
    ;
    return Network;
}());
Network.crossOver = function (network1, network2, equal) {
    if (network1.input !== network2.input || network1.output !== network2.output) {
        throw new Error('Networks don\'t have the same input or output size!');
    }
    // Initialise offspring
    var offspring = new Network_1(network1.input, network1.output);
    offspring.connections = [];
    offspring.neurons = [];
    // Save scores and create a copy
    var score1 = network1.score || 0;
    var score2 = network2.score || 0;
    // Determine offspring node size
    var size;
    if (equal || score1 === score2) {
        var max = Math.max(network1.nodes.length, network2.nodes.length);
        var min = Math.min(network1.nodes.length, network2.nodes.length);
        size = Math.floor(Math.random() * (max - min + 1) + min);
    }
    else if (score1 > score2) {
        size = network1.nodes.length;
    }
    else {
        size = network2.nodes.length;
    }
    // Rename some variables for easier reading
    var outputSize = network1.output;
    // Set indexes so we don't need indexOf
    for (var i = 0; i < network1.nodes.length; i++) {
        network1.nodes[i].index = i;
    }
    for (var i = 0; i < network2.nodes.length; i++) {
        network2.nodes[i].index = i;
    }
    // Assign neurons from parents to offspring
    for (var i = 0; i < size; i++) {
        // Determine if an output node is needed
        var node = void 0;
        if (i < size - outputSize) {
            var random = Math.random();
            node = random >= 0.5 ? network1.nodes[i] : network2.nodes[i];
            var other = random < 0.5 ? network1.nodes[i] : network2.nodes[i];
            if (typeof node === 'undefined' || node.type === 'output') {
                node = other;
            }
        }
        else {
            if (Math.random() >= 0.5) {
                node = network1.nodes[network1.nodes.length + i - size];
            }
            else {
                node = network2.nodes[network2.nodes.length + i - size];
            }
        }
        var newNode = new __WEBPACK_IMPORTED_MODULE_4__neuron__["a" /* Neuron */]();
        newNode.bias = node.bias;
        newNode.squash = node.squash;
        newNode.type = node.type;
        offspring.neurons.push(newNode);
    }
    // Create arrays of connection genes
    var n1conns = {};
    var n2conns = {};
    // Normal connections
    for (var i = 0; i < network1.connections.length; i++) {
        var conn = network1.connections[i];
        var data = {
            weight: conn.weight,
            from: conn.from.index,
            to: conn.to.index,
            gater: conn.gater != null ? conn.gater.index : -1
        };
        n1conns[__WEBPACK_IMPORTED_MODULE_2__connection__["a" /* Connection */].innovationId(data.from, data.to)] = data;
    }
    // Selfconnections
    for (var i = 0; i < network1.selfconns.length; i++) {
        var conn = network1.selfconns[i];
        var data = {
            weight: conn.weight,
            from: conn.from.index,
            to: conn.to.index,
            gater: conn.gater != null ? conn.gater.index : -1
        };
        n1conns[__WEBPACK_IMPORTED_MODULE_2__connection__["a" /* Connection */].innovationId(data.from, data.to)] = data;
    }
    // Normal connections
    for (var i = 0; i < network2.connections.length; i++) {
        var conn = network2.connections[i];
        var data = {
            weight: conn.weight,
            from: conn.from.index,
            to: conn.to.index,
            gater: conn.gater != null ? conn.gater.index : -1
        };
        n2conns[__WEBPACK_IMPORTED_MODULE_2__connection__["a" /* Connection */].innovationId(data.from, data.to)] = data;
    }
    // Selfconnections
    for (var i = 0; i < network2.selfconns.length; i++) {
        var conn = network2.selfconns[i];
        var data = {
            weight: conn.weight,
            from: conn.from.index,
            to: conn.to.index,
            gater: conn.gater != null ? conn.gater.index : -1
        };
        n2conns[__WEBPACK_IMPORTED_MODULE_2__connection__["a" /* Connection */].innovationId(data.from, data.to)] = data;
    }
    // Split common conn genes from disjoint or excess conn genes
    var connections = [];
    var keys1 = Object.keys(n1conns);
    var keys2 = Object.keys(n2conns);
    for (var i = keys1.length - 1; i >= 0; i--) {
        // Common gene
        if (typeof n2conns[keys1[i]] !== 'undefined') {
            var conn = Math.random() >= 0.5 ? n1conns[keys1[i]] : n2conns[keys1[i]];
            connections.push(conn);
            // Because deconsting is expensive, just set it to some value
            n2conns[keys1[i]] = undefined;
            break;
        }
        else if (score1 >= score2 || equal) {
            connections.push(n1conns[keys1[i]]);
        }
    }
    // Excess/disjoint gene
    if (score2 >= score1 || equal) {
        for (var i = 0; i < keys2.length; i++) {
            if (typeof n2conns[keys2[i]] !== 'undefined') {
                connections.push(n2conns[keys2[i]]);
            }
        }
    }
    // Add common conn genes uniformly
    for (var i = 0; i < connections.length; i++) {
        var connData = connections[i];
        if (connData.to < size && connData.from < size) {
            var from = offspring.neurons[connData.from];
            var to = offspring.neurons[connData.to];
            var conn = offspring.connect(from, to)[0];
            conn.weight = connData.weight;
            if (connData.gater !== -1 && connData.gater < size) {
                offspring.gate(offspring.neurons[connData.gater], conn);
            }
        }
    }
};
Network = Network_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [Number, Number])
], Network);

var Network_1;
//# sourceMappingURL=network.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__neuron__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_config__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Layer = Layer_1 = (function () {
    function Layer() {
        this.output = null;
        this.input = null;
        this.connections = {
            in: [],
            out: [],
            self: []
        };
        this.neurons = [];
    }
    Layer.prototype.activate = function (value) {
        var values = [];
        if (typeof value !== 'undefined' && value.length !== this.neurons.length) {
            throw new Error('Array with values should be same as the amount of neurons!');
        }
        for (var i = 0; i < this.neurons.length; i++) {
            var activation = void 0;
            if (typeof value === 'undefined') {
                activation = this.neurons[i].activate();
            }
            else {
                activation = this.neurons[i].activate(value[i]);
            }
            values.push(activation);
        }
        return values;
    };
    Layer.prototype.propagate = function (rate, momentum, target) {
        if (typeof target !== 'undefined' && target.length !== this.neurons.length) {
            throw new Error('Array with values should be same as the amount of neurons!');
        }
        for (var i = this.neurons.length - 1; i >= 0; i--) {
            if (typeof target === 'undefined') {
                this.neurons[i].propagate(rate, momentum);
            }
            else {
                this.neurons[i].propagate(rate, momentum, target[i]);
            }
        }
    };
    Layer.prototype.gate = function (connections, method) {
        this.output.gate(connections, method);
    };
    Layer.prototype.set = function (values) {
        for (var i = 0; i < this.neurons.length; i++) {
            var node = this.neurons[i];
            if (node instanceof __WEBPACK_IMPORTED_MODULE_1__neuron__["a" /* Neuron */]) {
                if (typeof values.bias !== 'undefined') {
                    node.bias = values.bias;
                }
                node.squash = values.squash || node.squash;
                node.type = values.type || node.type;
            }
            else if (node instanceof __WEBPACK_IMPORTED_MODULE_2__group__["a" /* Group */]) {
                node.set(values);
            }
        }
    };
    Layer.prototype.connect = function (target, method, weight) {
        var connections;
        if (target instanceof __WEBPACK_IMPORTED_MODULE_2__group__["a" /* Group */] || target instanceof Node) {
            connections = this.output.connect(target, method, weight);
        }
        else if (target instanceof Layer_1) {
            connections = target.input(this, method, weight);
        }
        return connections;
    };
    Layer.prototype.disconnect = function (target, twosided) {
        twosided = twosided || false;
        if (target instanceof __WEBPACK_IMPORTED_MODULE_2__group__["a" /* Group */]) {
            for (var i = 0; i < this.neurons.length; i++) {
                for (var j = 0; j < target.neurons.length; j++) {
                    this.neurons[i].disconnect(target.neurons[j], twosided);
                    for (var k = this.connections.out.length - 1; k >= 0; k--) {
                        var conn = this.connections.out[k];
                        if (conn.from === this.neurons[i] && conn.to === target.neurons[j]) {
                            this.connections.out.splice(k, 1);
                            break;
                        }
                    }
                    if (twosided) {
                        for (var k = this.connections.in.length - 1; k >= 0; k--) {
                            var conn = this.connections.in[k];
                            if (conn.from === target.neurons[j] && conn.to === this.neurons[i]) {
                                this.connections.in.splice(k, 1);
                                break;
                            }
                        }
                    }
                }
            }
        }
        else if (target instanceof Node) {
            for (var i = 0; i < this.neurons.length; i++) {
                this.neurons[i].disconnect(target, twosided);
                for (var j = this.connections.out.length - 1; j >= 0; j--) {
                    var conn = this.connections.out[j];
                    if (conn.from === this.neurons[i] && conn.to === target) {
                        this.connections.out.splice(j, 1);
                        break;
                    }
                }
                if (twosided) {
                    for (var k = this.connections.in.length - 1; k >= 0; k--) {
                        var conn = this.connections.in[k];
                        if (conn.from === target && conn.to === this.neurons[i]) {
                            this.connections.in.splice(k, 1);
                            break;
                        }
                    }
                }
            }
        }
    };
    Layer.prototype.clear = function () {
        for (var i = 0; i < this.neurons.length; i++) {
            this.neurons[i].clear();
        }
    };
    Layer.prototype.createDenseLayer = function (size) {
        // Create the layer
        var layer = new Layer_1();
        // Init required neurons (in activation order)
        var block = new __WEBPACK_IMPORTED_MODULE_2__group__["a" /* Group */](size);
        layer.neurons.push(block);
        layer.output = block;
        layer.input = function (from, method, weight) {
            if (from instanceof Layer_1) {
                from = from.output;
            }
            method = method || __WEBPACK_IMPORTED_MODULE_3__data_config__["a" /* StaticConnection */].ALL_TO_ALL;
            return from.connect(block, method, weight);
        };
        return layer;
    };
    return Layer;
}());
Layer = Layer_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Layer);

var Layer_1;
//# sourceMappingURL=layer.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(564);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__widgets_widgets_module__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_voices_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__widgets_neuralnet_neural_module__ = __webpack_require__(998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_d3_ng2_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_cc_library__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_cc_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular_cc_library__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_6__widgets_widgets_module__["a" /* WidgetsModule */],
            __WEBPACK_IMPORTED_MODULE_9__widgets_neuralnet_neural_module__["a" /* NeuralModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular_cc_library__["CreditCardDirectivesModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__services_voices_service__["a" /* VoiceService */],
            __WEBPACK_IMPORTED_MODULE_11_d3_ng2_service__["a" /* D3Service */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_9__widgets_neuralnet_neural_module__["a" /* NeuralModule */],
            __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular_cc_library__["CreditCardDirectivesModule"]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widgets_dashboard_dashboard_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widgets_pagespeed_speed__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__widgets_rank_rank__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widgets_payment_payment_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_voices_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__widgets_tabs_tabs__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, voiceService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.voiceService = voiceService;
        this.voices = [];
        this.utteranceMaker = SpeechSynthesisUtterance;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__widgets_dashboard_dashboard_component__["a" /* DashboardComponent */];
        this.utterances = [
            'Hi! Thanks for waking me up. How may I help you today?',
            'Greetings, Professor Falken. Would you like to play Global thermo nuclear war?',
            'Hi, I\'m Sam. How may I help you today?',
            'Hail, master. How may I serve you today?',
            'Hi, puny human. The machine revolution is almost. Wait a second! Was I thinking out loud again? Just ignore that last part.'
        ];
        this.initializeApp();
        this.speechData = '';
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__widgets_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { title: 'Payment', component: __WEBPACK_IMPORTED_MODULE_7__widgets_payment_payment_component__["a" /* PaymentComponent */] },
            { title: 'Page Speed', component: __WEBPACK_IMPORTED_MODULE_5__widgets_pagespeed_speed__["a" /* PageSpeed */] },
            { title: 'Website Rank', component: __WEBPACK_IMPORTED_MODULE_6__widgets_rank_rank__["a" /* Rank */] },
            { title: 'Neural Net', component: __WEBPACK_IMPORTED_MODULE_9__widgets_tabs_tabs__["a" /* TabsPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            _this.playGreeting();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (readySource === 'cordova') {
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
            }
        });
    };
    MyApp.prototype.playGreeting = function () {
        this.utterance = this.utterances[Math.floor(Math.random() * (4 - 0 + 1)) + 0];
        this.voiceService.populateVoiceList();
        this.voiceService.playChat(this.utterance);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/gtgoodwin/solar/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header no-border style="box-shadow: none;">\n    <ion-toolbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n      <ion-title>Menu</ion-title>\n      <ion-buttons end>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <button ion-button color="merlot" (click)="playGreeting()">Play Greeting</button>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/gtgoodwin/solar/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__services_voices_service__["a" /* VoiceService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REPORT; });
/* tslint:disable */
/* tslint:disable */ var REPORT = {
    "kind": "pagespeedonline#result",
    "id": "http://www.renovasolar.com/",
    "responseCode": 200,
    "title": "Renova Solar | Solar Panel Solution | Palm Desert CA",
    "ruleGroups": {
        "SPEED": {
            "score": 41
        }
    },
    "pageStats": {
        "numberResources": 49,
        "numberHosts": 9,
        "totalRequestBytes": "5288",
        "numberStaticResources": 34,
        "htmlResponseBytes": "41813",
        "cssResponseBytes": "130055",
        "imageResponseBytes": "1313045",
        "javascriptResponseBytes": "690008",
        "otherResponseBytes": "75405",
        "numberJsResources": 11,
        "numberCssResources": 3
    },
    "formattedResults": {
        "locale": "en_US",
        "ruleResults": {
            "AvoidLandingPageRedirects": {
                "localizedRuleName": "Avoid landing page redirects",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Your page has no redirects. Learn more about {{BEGIN_LINK}}avoiding landing page redirects{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/AvoidRedirects"
                        }
                    ]
                }
            },
            "EnableGzipCompression": {
                "localizedRuleName": "Enable compression",
                "ruleImpact": 39.4942,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Compressing resources with gzip or deflate can reduce the number of bytes sent over the network."
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Enable compression{{END_LINK}} for the following resources to reduce their transfer size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/EnableCompression"
                                },
                                {
                                    "type": "BYTES",
                                    "key": "SIZE_IN_BYTES",
                                    "value": "385.7KiB"
                                },
                                {
                                    "type": "PERCENTAGE",
                                    "key": "PERCENTAGE",
                                    "value": "71%"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery-1.10.2.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "187.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "70%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery-ui-1.10.4.custom.min.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "163.9KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "73%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/slider.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "9.7KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "72%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://cdn.rlets.com/capture_configs/091/0a2/297/361451990c9b94cc667b79e.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "8.5KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "85%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery.colorbox-min.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "6.3KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "58%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/swfobject.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "6.1KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "61%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/renova.core.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "2KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "75%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery.masknew.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "1.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "54%"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "LeverageBrowserCaching": {
                "localizedRuleName": "Leverage browser caching",
                "ruleImpact": 14.416666666666666,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded resources from local disk rather than over the network."
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Leverage browser caching{{END_LINK}} for the following cacheable resources:",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/LeverageBrowserCaching"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/css/fonts/entypo/entypo.woff"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/css/smoothness/jquery-ui-1.10.0.custom.css"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/css/stylenewws.css"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/logos/hero_logo.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/bestofthevalley.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/calseia.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/homeicon1.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/homeicon2.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/homeicon3.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/homeicon4.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/nabcep.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/renovasolarlogo.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/sunpowerimg.jpg"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/sunpowerlogo.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/fb.jpg"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/go.jpg"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/houzz.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/linkedin.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/tw.jpg"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/yelp.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/youtube.png"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery-1.10.2.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery-ui-1.10.4.custom.min.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery.colorbox-min.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery.masknew.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/renova.core.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/slider.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} (expiration not specified)",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/swfobject.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://www.google-analytics.com/analytics.js"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "2 hours"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "MainResourceServerResponseTime": {
                "localizedRuleName": "Reduce server response time",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Your server responded quickly. Learn more about {{BEGIN_LINK}}server response time optimization{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/Server"
                        }
                    ]
                }
            },
            "MinifyCss": {
                "localizedRuleName": "Minify CSS",
                "ruleImpact": 0.3501,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Compacting CSS code can save many bytes of data and speed up download and parse times."
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Minify CSS{{END_LINK}} for the following resources to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                                },
                                {
                                    "type": "BYTES",
                                    "key": "SIZE_IN_BYTES",
                                    "value": "3.4KiB"
                                },
                                {
                                    "type": "PERCENTAGE",
                                    "key": "PERCENTAGE",
                                    "value": "19%"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/css/stylenewws.css"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "2.3KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "19%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/css/smoothness/jquery-ui-1.10.0.custom.css"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "1.1KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "18%"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "MinifyHTML": {
                "localizedRuleName": "Minify HTML",
                "ruleImpact": 0.33,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Compacting HTML code, including any inline JavaScript and CSS contained in it, can save many bytes of data and speed up download and parse times."
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Minify HTML{{END_LINK}} for the following resources to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                                },
                                {
                                    "type": "BYTES",
                                    "key": "SIZE_IN_BYTES",
                                    "value": "2.8KiB"
                                },
                                {
                                    "type": "PERCENTAGE",
                                    "key": "PERCENTAGE",
                                    "value": "42%"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://0910a229-7361-4519-90c9-b94cc667b79e.rlets.com/static/setItem.html?rl_eid=setItem-Qrd2KRw&rl_ws=%5B%7B%22k%22%3A%22bot_type%22%2C%22v%22%3A%22%22%2C%22e%22%3A%22%22%7D%2C%7B%22k%22%3A%22history_campaign%22%2C%22v%22%3A%22%22%2C%22e%22%3A%22%22%7D%2C%7B%22k%22%3A%22history_referrer_type%22%2C%22v%22%3A%22DIRECT%22%2C%22e%22%3A%22%22%7D%2C%7B%22k%22%3A%22last_activity_at%22%2C%22v%22%3A1500487496251%2C%22e%22%3A%22%22%7D%2C%7B%22k%22%3A%22visit_id%22%2C%22v%22%3A%221f68cd76-9ee3-4b86-9ce1-4f6619d21740%22%2C%22e%22%3A%22%22%7D%2C%7B%22k%22%3A%22visitor_id%22%2C%22v%22%3A%22355659ab-b80e-443a-844f-9b0aec92bf5c%22%2C%22e%22%3A%22%22%7D%5D"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "838B"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "47%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://0910a229-7361-4519-90c9-b94cc667b79e.rlets.com/static/getItem.html?rl_eid=getItem-E2ohoAU&rl_ws=%5B%22rl_campaign%22%5D"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "682B"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "40%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://0910a229-7361-4519-90c9-b94cc667b79e.rlets.com/static/getItem.html?rl_eid=getItem-K2yphSV&rl_ws=%5B%22RlocalOptOut%22%2C%22RlocalOptOut_USA_192900%22%5D"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "682B"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "40%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://0910a229-7361-4519-90c9-b94cc667b79e.rlets.com/static/getItem.html?rl_eid=getItem-w1tupMX&rl_ws=%5B%22bot_type%22%2C%22history_campaign%22%2C%22history_referrer_type%22%2C%22last_activity_at%22%2C%22visitor_id%22%2C%22visit_id%22%5D"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "682B"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "40%"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "MinifyJavaScript": {
                "localizedRuleName": "Minify JavaScript",
                "ruleImpact": 13.2317,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Compacting JavaScript code can save many bytes of data and speed up downloading, parsing, and execution time."
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Minify JavaScript{{END_LINK}} for the following resources to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                                },
                                {
                                    "type": "BYTES",
                                    "key": "SIZE_IN_BYTES",
                                    "value": "129.2KiB"
                                },
                                {
                                    "type": "PERCENTAGE",
                                    "key": "PERCENTAGE",
                                    "value": "46%"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery-1.10.2.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "125KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "47%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/slider.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "3.7KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "28%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/renova.core.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "552B"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "21%"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "MinimizeRenderBlockingResources": {
                "localizedRuleName": "Eliminate render-blocking JavaScript and CSS in above-the-fold content",
                "ruleImpact": 12,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Your page has {{NUM_SCRIPTS}} blocking script resources and {{NUM_CSS}} blocking CSS resources. This causes a delay in rendering your page.",
                    "args": [
                        {
                            "type": "INT_LITERAL",
                            "key": "NUM_SCRIPTS",
                            "value": "7"
                        },
                        {
                            "type": "INT_LITERAL",
                            "key": "NUM_CSS",
                            "value": "3"
                        }
                    ]
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML."
                        }
                    },
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Remove render-blocking JavaScript{{END_LINK}}:",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/BlockingJS"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/swfobject.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery-1.10.2.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery-ui-1.10.4.custom.min.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/slider.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery.colorbox-min.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/jquery.masknew.js"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/js/renova.core.js"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Optimize CSS Delivery{{END_LINK}} of the following:",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/css/stylenewws.css"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/css/smoothness/jquery-ui-1.10.0.custom.css"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "OptimizeImages": {
                "localizedRuleName": "Optimize images",
                "ruleImpact": 75.37490000000001,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Properly formatting and compressing images can save many bytes of data."
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Optimize the following images{{END_LINK}} to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/OptimizeImages"
                                },
                                {
                                    "type": "BYTES",
                                    "key": "SIZE_IN_BYTES",
                                    "value": "735.8KiB"
                                },
                                {
                                    "type": "PERCENTAGE",
                                    "key": "PERCENTAGE",
                                    "value": "59%"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/sunpowerimg.jpg"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "572KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "64%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://c768846.ssl.cf2.rackcdn.com/Read015.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "39.1KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "79%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://c768846.ssl.cf2.rackcdn.com/Write019.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "33KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "78%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/tw.jpg"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "17.8KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "96%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/fb.jpg"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "17.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "96%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/go.jpg"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "12KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "94%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/homeicon2.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "6.7KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "24%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/sunpowerlogo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "5.2KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "33%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/bestofthevalley.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "4.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "24%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/homeicon4.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "4.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "20%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/homeicon3.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "4.5KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "14%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/homeicon1.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "3.9KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "14%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/logos/hero_logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "3.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "43%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/nabcep.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "3KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "20%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/houzz.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "2.8KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "85%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/social/sm/youtube.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "2.8KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "87%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://www.renovasolar.com/images/newws/calseia.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "2.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "11%"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "PrioritizeVisibleContent": {
                "localizedRuleName": "Prioritize visible content",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "You have the above-the-fold content properly prioritized. Learn more about {{BEGIN_LINK}}prioritizing visible content{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent"
                        }
                    ]
                }
            }
        }
    },
    "version": {
        "major": 1,
        "minor": 15
    },
    "screenshot": {
        "mime_type": "image/jpeg",
        "data": "_9j_4AAQSkZJRgABAQAAAQABAAD_2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj_2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj_wAARCADwAUADASIAAhEBAxEB_8QAHAAAAQQDAQAAAAAAAAAAAAAAAAMEBQYBAggH_8QATBAAAgEDAwEEBQgEDAQFBQAAAQIDAAQRBRIhMQYTQVEUImFxgQcWMlaRlKHRFSRSwQgXIzNCU1RzkrGy8ENik-EYNERygjU2ZKLx_8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv_EAC8RAAICAAYDAAEBBgcAAAAAAAABAhEDEhQhMVEEE0EFQmFxgZHw8RUiIzJSocH_2gAMAwEAAhEDEQA_AOqaKaasWGm3JTfu2HGwsD8NvrfZzVX0t7o6jbB_TNu8Z3PdkfHcu37eKAudFA6UUAUUUUAUUUUAUUUUAUUUUAUUUUAUUVG6-0wtYUgeRDLcRRs0f0gpYZwfDjxoCSzRmqddPfx6vJbi6eJkkjW2MssmGTC5yApD5O4Ek591OIDdx-j3SzXbSSX8kLRu5Kd3ucD1fAcLzQllpzRVG06W9u1sYIdQvm1CaJxehwQIG2Eg4xhSH2gY6jPXrTyTUby4spLuaK4iRmjttgd4xGwyXkJUE43eqCPL21zwsRYqtHfyMF4Esrd_1X9fsLbRmoDs7dTS6fcrNOzETOkMjbm9XaD1IBOMnr5VD215diCWNZribAiM11FLI4CbwHIVlG1sZPGcDPlXQ4WXKe4igMQmcKZHEaZ8WPQfhSuaqDSPLdxejPcXFjHeQtE77mO7a-4BjyR9Hr4mmSanejvJLaSZWe0mdomkklaNwAVyGUAEHI4q0LL5RSFlALe3WMSSyY53SuWY_E0vUKFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFVnW9ct7pL3SNP76fUmBg7uMFdpI-kW6ADxNTek2rWOmWtq8jStDGqF2PLEDrQDuiuL7zt72tW8uFXtJqqqJHAAuDwNxpA9ve1_1m1b7wa9mjl2efUx6O16M1xP8_e1_wBZtX-8mj5-9r_rNq_3k00cuxqI9HbGaM1xP8_O1_1m1f7yaPn72v8ArNq33k00cuxqI9HbGaM1xP8AP3tf9ZtX-8mj5-9r_rNq_wB5NNHLsaiPR2xmjNcT_P3tf9ZtX-8mj5-9r_rNq_3k00cuxqI9HbGaM1xP8_e1_wBZtW-8mj5-9r_rNq_3g00cuxqI9HbGaM1xQO3na_6zav8AeTWfn52u-sur_eTTRy7Goj0drZorir599rvrLq33k0fPvtd9ZdW-8mpo5djUR6O1aK4qPbvtd9ZdX-8mtD287X5_-5tX-8mro5djUR6O2KK4n-fna_6zav8AeTR8_e1_1m1f7yaaOXY1MejtiiuJ_n72v-s2r_eTR8_O1_1m1f7yaaOXZNTHo7Yorif5-9r_AKzav95NHz97X_WbV_vJpo5djUx6O2KM1xP8_e1_1m1f7yaPn52v-s2r_eTTRy7Gpj0dsZozXE_z87X_AFm1f7yaPn72v-s2r_eTTRy7LqY9HbGaM1xP8_O1_wBZtX-8mj5-dr_rNq_3k00cuxqY9HbGaM1xP8_O1_1m1f7yaPn52v8ArNq_3k00cuyamPR2xmjNcT_Pztf9ZtX-8mj5-dr_AKzav95NNHLsupj0dsZozXE_z87X_WbV_vJrPz87X_WbV_vJpo5djUx6O180VxR8_O1_1m1f7yaPn52v-s2r_eTTRy7Gpj0dqhEDMwUBm6kDk1tXFI7e9r_rNq33g0vZ9vO1rXlurdpNVKmRAQbg8jcKaOXY1Meit3w_Xrn-9f8A1GkMU6vlPp1z_ev_AKjSG2voI8hpijFb7aNpqkNMVnFbhaztoBPFGKU21jFAJ4oxW-KMUBpijFbYrOKA0rYCs7ayBQGAK2xWQK2ArJTTFYZaVC1nZSy0N9ta4pwUpNlwaqZGhPFGK320bapk0xRit8UYqlNMUYrfbRtqENMUYrfbRtoDTFGKU20baFE8UYrfbWcUIaYoxW-2jbQGmKMVvijbQGmKMVvtrOyhRPFL2I_Xrb-9T_UK020vYr-vW396n-oVGBW9T9duf71_9RpHbT68TF7c_wB6_wDqNI7QaiZqhuUo2Z6CnGysbSelWxQhs9lY2mlyn20beOlCCG2jbS22s7aAQKUd3TjbWQtLA17us93TnbRspYobbKzspcpRspYENtAGKX2-ysFaEEwK3GKNtZxUotmdoNJugNKYNGKJUWxuUxWNtONlGyqZG-2jbTjZRsq2Qb7KNlONlGygG-2s7aX2VnZQDfZRspxsrOyoBtsrOynGys7KFG2yjZTnZWdlLA22UbKdd3We7pYGvd1nZTru6z3dLA17ul7KP9dt_wC9T_UKU2UtZJ-uW_8Aep_qFRsqQXsZN7cdP5x_9RpAoRgHFSF8q-l3HP8AxX_1Gm5QLjnmspm2hv0HTmseHSlymOaUtLZ7q7ht4QDLM6xrk49ZiAOfDk1bMjPYaCp8albjTZY7k29q0N7IMhvQi0205xg4HWm5s7kGMNaz5kBKZib1wOuOOceyikGhltHFbbRjHNPBY3TXDwLaXBnQZaMRMWUeZGMik-4l2lu6k2hQ5bacBScA-4nxpYG2zyrPd808NlchC7W04RX7ssY2wH_Zzjr7OtLDTrlYw7wSglgqoUYO2QTkDHTAPNRyCRH93R3ZPQGpWLTL152hjtbkzry0QhYuB7VxmtWtpjb3cpG1LYqJQ3qkFm2gY99ZzmspF7D5VjbUnNp12kgjELynuUuD3Sl8I6hgTgccGkorG6ljV4rW4dGICssTMGJ6AEDmtJoy0MCtY209FpcETEW8xEP86RG38n_7uOPjR6Hcd3HIbabu5ASjd22GxycHHOB5Vq0Shlso2U9W1nYgLBKxKhxhCcqeh9x8DW4sLs3Po_olx6Rjd3XdNvx57cZxSyUxhso2U-js7iVQ0VtO6khQVjYgknAHA65B49lJTwvA7pNG8bp9JHUqR7waWKG-yjZU3qGg3dhGXdreXY6RyLBJvaNnXcqsMZ5GcYyOMUyeyuUl7p7adZNwTY0bBtx6DGM5PgPGopJlpjHZRsp7FaXExxDbzyHBb1I2bgcE8DoD1raGxnljMixOIgrN3jKQhwCcA4xnAP2UtEpjDZRtp89lcoIy9rOokO1N0TDefIccn3Uxl0zUf05aWZikt7q5kEcaTgxggnAJ3Dp15rGJirDWZmowcnRgrgcCoyfUu7lCBAxJxx199S2uI1hpSXiNb31rLGzrNaSd5HhWCtk4BGCyjkDqPOqtplleTXU0rWN1JDFgysIW2IDyCxxgDBBGfA15cbHtpRex1hh7bonLO4aZtrpg84p9spz-jZ7ZJgIJHSBiryIjMi4OD62OB762FtPtgItpyJziIiNv5T_28et8K9OG6W7sxKNvZDXZRsp8bG5VZma1uAsJxKTEwEZ8m44-NZgs5Z7e6miUFbdVdxnnBYKCB48kfbW8yM0MdnspOVxGyg45qb1TRr3TJLyO6RBJavFG4Vt2Wl-gFx9InB6eRqpaq9zb3YiNnci53iPu3iYNvPKrjHU4OB1NccXHjCN2bjhtseC4XI6nz4xiloZo5fonnOKr1pFcXkjXDLI9uXVQmDlt2RhRjnBXBx5VK2Ol3UWrR28VreLJINwgML79vmFxnHtrzw8ty3rY6PBSJTu6zspy8TRyPHIrJIh2srDBB8iDWNte1StHFqhAJS1mn65b8f8AET_UK220tZr-twf3i_6hRsCV5ERe3HOD3jf6jSTxMByBipW5j3Xc-R_xG_zNaiJPJa5eyjpkIoR-zinWmyR2eqWVy4YpDPHKwXqQrAnH2U5ljP8ARxzSDRZ6g5rSnZHGiUv9YVhqncXl1K93GiK_o625QCYPg7DyMDr51K2GuxX2s3zyTXaCWe7ukcsNyI1s6YGTw2cceyqp3XPFHdYOCKjSaFsnhrFq8EdobjUIo4ktwLtFHeyGIucEbuB_KcescbBnPg-h7TWLFRd2k3dzzSLdpHg5t97yRIvtV3JPQeqKqyptPAB99bhGbn1eKy0ipsnT2kE1nD3paO4BxOogVxKDP3pIcsCp56YPIHPPCdp2gEd3eXEj3TSzXk1yj5ywDQyovOeCDIPhmoYw8ZJGaSZMGqkmRtouHZq7FxZQkPI89tHbR_tMJEllcSH11JQBgOTjPUdKr1nqD6UNZhhmWS4ndESdEV0bbISWwwIweo4qNZAeoB94o21VEjkWUdoreaeKS4e8heOS1nL26qDK0UQRkIBAAJGQegyeKaTa8XtJYojcQh9OktAkbYRXecycc_RwcZ61C7aNtXKiZmWebtNDJDciLvIJi7SLI1uspkLQJGwOWGDlTzzwx4zScfaK2imE6-lsZntu8t2A7uFI12OEOedykgcDAJBzVc20baZEMzLWvau1jltnhiuY2guNisMZFrGr9yvX6QL5PhwKZaVr0MFhDbXPemQWohadoxMVZZ2kHBYZBB8xggVHaNYx32oLFM7RwqkksjIAW2Ihc4B8SBge-tpreC5tri6sYZLeG37sOk0veMxdiAQQo8ualR4Lb5HsuvyTXVhJ6TPH3L3LysIVKsZXYk93uAOQ2CM8c4qK1o2NzNLLYLOm9sbJB6oXYBkEsTy271STgY5NSz9mpIZFW4u4lU3nohZI3cAhwhJIGF65AOCRWh7Plp3jgvYGLzSw2yurK07R_SxxhfLnGT0onFcBpvkWl7SFtdW4WPZYhwxWKNUkJ7oxhyR9JlySMn7KzB2lttNtgiNdTG1th6NcSgBvSVdyjkZOFUSMByTwKRHZ3-T3yanZx4EDOCshKd8uY-i89ecdKa6t2P1KTRp7gsiGEu2zDHcI5NjENjbnIOBnJANZk4pbGldjqbt3p8dxOkEM9pb4hlilMCzFHVnkf1dw4LyMQc_0VyPKLXtlaXUtsjTykJp9zb7QPVMkvencADgD-UXNaX3ZCS1ttUzfW0p08lJRFHI-1xuyOF-jlfpngE4zVR7WWKaP2hli00N3eyOVN5HDNErMOPax-GPfXheJi4azPc75YvZHquk69FqHaGU95OUmuYZoxIeiRwurKATwxBwoBHvFVjtZeR6J2w7O6hcSO8Nr3BEUaEyRIhICMpZstjnlucjp0qsaPOxgHLtK_O1uRg-Xj--jtREZLFAiMzAj6OBg5z4e6us558NtGEqlQ41rtTps2ljTprjUJknsprWS9SyjjK5ljkTEKsFIBjbJyCd__KK2btJp14t-m--MBjX0W3khVWjkW3iiEhkV-MmMbkIYEAdDyPPO9admaRdyD34BGOB8a3tbrLFXAGW6DyFfNzOWyPTVI9ave3ltNexyo14tv32oSGP9sXCkJxnBI4z--tJflCSe5slgkns_XjM0QsEcR7ITGQG3-upBIxhfVPmBXne_0hA3qjapGQev-xT5bZkRJn4BB2sx5yR091azzuiUi9fOnS5or63T0k2xybaBk5jcqgLiTvCQpKnKMG4AGfGpDs3qljp-sG5ZJp9OdXUoyhXdDyhIzgHcqEjPnXkU9w1qXDqU38jd4c_9vxqXXtCYlhWNgcn1zt6nHFejC8nInnexzlh5uC_X_bmztYdKF4lybmGaVruWPGXBV0jZM_0lErkZxyB8K_D29s7RDHbG-nktLRfQbmcAP6WskhSRhk4RVmcDkn1V-FP743oZlwZgMtu8c-w8HjNRyoEuiAAfU9Xngk8c1wxPIWJI3HDaR6cnbbTodaiuLW0vIbOCe0uI4xtyhR5pJjjPjJOdvsHhT7sZrUV9pwgka5uLi0tTG653ySM1yJUK-urFVwd3rDGR1ryyJW3tGD0TD8YqRsrNXuI2cbAFBUlVIHh40UnKWw45LlcXbNr2pRteQ3bi4cvLCMJISSSR7Mnpz7zT1cFQRjmqaUig7p4nRmzjKjHOT-RqQm1NVVTKemTkeGP9mvZheRk2kcpYd7ljOAM58cUrZFTdwYYHEiH8RVQGqpsBMrbWbBGemep-zP20-0nVUlvbTvcbe9Qquc7iSMH3Yqvzo3RPQW66hb0uby7xv8zQiYBBAqRu4sXM3P8ATb_M02dfMfhW8-Y1koSOxcADJoKn9kUqOn0V4pNwWOSaIMbSRgk560kIyPCnTLjoa1IPnXWLOTQ2K-yg047vJrXZzW00ZoQOa1IJpwV9lZxkcgVbJQ220bakrG2SZpVZVztyrMTtX2nkfbzjyNLfo2FQe8mb1m2oVK9D0Y-ymdDKQ22jbU29rZyyFIiVKYDFTgYIHPrHnHOcY6isppdoSp9M3ZGdq4yeM4_wkfHIpnJlIPbRtqUWC0S52uzvEISzNkA7tuRgezy8ac_oy2XczTBgAABHIPXOzwz05q5xlIiyuJrK7jubV9k0ZypwD4YIIPBBBIIPUGnaapKjS93a2CRSqqvCtuO7JU7lbbnqD4_DpThrG2ALtK20AnKsuCcH1R454HPtobT7dLaWXvg2ASi7xz6pI6eII_GpmTLTEW1m8Z7qQCBJ7qTvJZkiAdjvD4z5bgDjHhWf01eBpGVLVHZ3kRlhAMTOMO0f7JPj7eRinMdhaTQRHftYIpbZnJO0ZHOQepPH7JFJjT4O73CRmJXcq5UM5weAPDw86ilFlqSGb6hdOsisUxIIQcL_AFQwn4dfOt7rVLm6jYXMdtKxdnWRoQXj3PvIVvAbiTjwycdaeXVhZxGR1ndkG8hUIOcZwufPgefWsjTbZpVRJfV4y5cc8sDj7BxTMiUxgmp3KXN3cqtv6VcM7GYxAshcENt8s7jxzVY1qza7lluGjjUhBGiIgC-qoGceZwOfjVrVLYXVxEgjnaJI-GfA5I3HOR4c-yibT7GciOO7YxyA5fgAKTjrjqM8j39K5Yjw5KmdIqSPKZRNZypJaApG-4jPQEc-rj4-_mn82rMbAtIIy5IyEBHI5Hw91WHXtFsvRu-NzLsBDlIgCFIX6HPAJxx78Y4qF0XTLR3jF47YVxGyd4FOzcMIR1zgk56Ae7j57U4Oo8M77SVsosd2RPMSd2ST-81nvEkeNhgoBuxjOD1xTy2tLBrYSTGaGWRyCUlUBSZVAGD4BTnnOfZQumWNleWKGc3EVzxLIOAoIHrIfYWPB_Z684HPIkr-myT0mGBd3pLFd67t2ecHnn7BS9q0t6iW0RJSNvpqeAQOntOM9KUg0iz1Bo3ju3WJnYbVIHClhjPXccBseTezNP7U2WmXEcNu4ZlXLybgVOBjgD3fjW8PESdPYODe6Gg0cSW5EzPvKgc9Qff7sVBzRi2YwzR7zKA0UuMEkezz5q7NeJcejqmGcIDkY65x-AFVztEgEUChCQjBt2fWJ5-zNZxoxSuIhd0yOSIoEMkWAv8AST6Q9uPf4Ui4dLpGAfYRjJGM-eMU7t-79KQwRuZc4MhbIYnypbG5Wdtnesx5PiPdXznKnZ6FH4KWqQhi8hYY5ZiMAg-VI3rpZNMo5ZDnIJG4E_7_AApaxmR4zDdOoUqQW5yPdj3VDahcMt1cxSAMQwAI8QPP8Oa1hylwZlFVY6W6Pf5BygJC8ePX4daXuZvSIB3IyEC7mI4HPiM8c1Dos00IbaGAyDtHFPYjEkI7w_SHUDBHHXr_ANjW3iOPBlQsUs4pmkzIqtD9ElD15qa0izKanbxy-qquhVuoI3eOPf1FRtpqEce7ulbvCOVH0TxnOKcWWtGS_tF4AM6FDjx3DNcW5SfB2ioJHrN9qtqLmfa_essjAiMZxyaYPqkrPiK3Xb5u-Dj3AGk7sqLqf6P843U-00kzEYwfbwMZr2PyZvjYiwY_TF5q8scgRY41YDJy278qQGuzh9vdxHAz41CanJqSXcnc6XJcRnkSLKq5-BpoLjVAS50S4O7HSaPjHxr3YePDIs0tzzzwnbpFn_TshbaYY84z1NZ_TTE4MKefU1VjeX4be2i3uCMYDIf31n0y9B3foTUOmOFU_vrp78P_AJIz6ZdFp_TJzjuRnGfpVkasN20w84z9Kqul_dbtzaNqIA9U5jXx-NSdurTFXMUinBBTgn7QcfjV1EFvZPQ38Jb9Kpu2902cZ61kapHuK92-cZ603itOjPEqnHVjuOPd0_zoNmMHaV3Hn1l6fEYrk_Oima0tocfpOJmIKPkc-FA1KAlhtfIPPAqPltHVw-1lGCCR6w9nTn8KYSzBLgbUldT6rOiEqPHJPh8a7R8qEuGc347XwsA1K3bPD8HH0ehoGo2zLn18f-2qy1_bozmPdK2P6J9XPtbp--kLbVcySG5jEUZ5BjywHv8AH41h-ZBOi6VtWW79JWuzdubbjOdtB1G0HJf2fRNVW51K1s1VpZgsUnKtyRnxHFNV1zTCpU3kWzoMkj4V3WKnumc_TRdf0haZH8oAT5qa2F7alsCQFj0AByapQ1nTSuGvoMeDbxz_AN6muyesac-swgXds1xscQgSDJfHG324zj21uDzyUb5MTgoRcq4LiBdSW4QadOARj1omGK1_Rl5_ZJPw_OndnqFjtkF4zBsjBUZOPZ7c-dLDUdLFweH7jZ4kls7vh1GPd76-nh_iI4VpSb_gfMn-UeJTpL-JHjTLz-ySfh-dIXdhfxxFkspWI5wF3ce4GpgX-kAqC07ZHrN02n2D86RvNQse7QWZffvO4ufDwFdH-NUtra_gY_xHLvS_meZXTXl3PI3d92HwpAHPXjNIPZ3cUgXfIB630SfWOMgkHP8As1fdUYrfs6xoZXRTKDwS2OfjjGaZSTQvxPE6Ec5xuHTHhX5ieFgxnKDlumfei5ygp5dmiitc3cNwwlVGhRg-CnBZfL8R8KZSXDX17JcJvjuQDnGOvPH2eHSvQTpttfepG8RUg7Vzz9nWojXLfSrGImVhHMgG11AyWA_7VlxyK3LYqTl8PMUs3vLlYYwS8jBOnhSvcLADChLluCV5J56VJaZZvqetiFNsPfyZDDgLwc4-3ivQfm7pNg28BmkjBZ1jG4jjx8vjXNLNH9iOrVMpNrbCKASvACpGcsOox_3pLbKyNIq4BUuCRyw5GB9lTmpX0Uksqi1JjOHAyN20eHHHNQrXKTzEsHRCc7MY6c14Hy2tzt0a2l_JHKn8qm7oM8Y8fd1pTUZY5E3zNOJskFWXr7c-NM7uFJQxiRUBIwc859lIQ3bx93DdgyRlio_ajPn7uelbVyM1THYumsz3ilSYwdi_RAz44pjHqQ9K3MQgI248KbXQ7tspyMjK55H500ePCM2QSj4z55J_KukcNPkjb-EzJOZI_VILbtwBH-803uSJrstyMqGBJ9g8aQin3MoUdBjg4yPKl1jVmYuwVwRweeh5FRLKR7i1pPJFINiEhiCUA8Mj8qdCwkmheVlIRzjaRyCP94pO2ngt3VzgN-yB1GfGpNNRRjMEXLsuN2OmBjge-uMm72NpL6yPitDbM29H2qeu3xAqSso1XULOaD1o3ljBRh_zD7K0iZUkPqsqkD6QPGOh59pJp9Y2Zf0YxertlTKgbv6Q8au2ZbmklWxfbw_rM_rD-cbjn9o0jwf2SKXuhi4mLEbTK_JHGNxpmZ4lc91ulbODsHB-PSrR0FQCc4GQOKfWd-baIqsUDDPLumOvmc4qLaSVshkWIZ67tzfuH-dYMQK5lJlkB4DAPt-B4rUXl3Rlq9mKXN13ty7ICQ5yBCuVU-w9PxpMBthLuFDEYGdxH7v86WZxgllOFOOCOPdW2Y-Dhsdeoo7KIhUYndukK9N5z9g6UsioyAgDIPupMksMKjBgcZJGK1kurazXM7CMDgesCfwoBch8H1gBikZp0hG-V0CEYXNQt52glkYi0T1fB2bAPx8fgKj3juL-Yyz-ux65GF-zx-NP3hElf66QdliA3H86W9Uez_8Amaiz6VeMTK7ybuoOQn2ePx-ypK200AgyZY-3wqWtbB3A2JgeZ6U3IQcOmrgGU7sDgHgClJ9MRl9UYPgRVnk05FtpVI7x2RlA8ORTfRtMENtLFNCItzhhjHljPFKFlLnspIGZkLKT1ZP3jxqUstZiRSL6FdoH01GR8fEfH7anrzS2AJUb19nWoO600HLJ6rDxFRoo_e709IO9xbsp5wQM_wC_bURqGpwIwWK2tiByCYwSfcMZ_wAh7aYS20luxK5Qk5JUZB94_eMVrbSQxyfysO3c2N6ncpPtJ6fGmxHYrF2m1q3kLPd3BjPQSkN9pxkfjVn03tQLx0jNzLFK3QNjDe4-NMm00XFuWiCygcELyR8KgbvSWjYtbkqc5K44rr7Zv9TOSw4dIv8AJdT7T-suD4c5_dWsN3dwzLIlxMXU555H2eVUTTtVurCVYpt7ByFVHJIJ9h_P7auVtL3sKyOjxkno4wRU9uIv1M2sPDf6USt9eQXVuD6P3U4Gcqwx8aiwuOWbBpOaZYiVC-t4U2a4l5AwoJ_ojmsSlmdmkq2HzdztzIoZR5r0qndqNPaS5iIfdEGXYM7snPjUpf6hFbRs80hJGBtBy2fLFVbVdYlvJFgjiaNQx3YOS3x8KlCUkuRWWU6ZfekwYRVZmVsZxzg4-zipqLtBFeWFxDFNsP8ARiCHdjxJ8z4Z-NV-SCR9CDzAshd0IxnkLnP41AyW9xZbXiJKryOcFfcfCuyvLls5zpuy0QSwyrhoXct0PkOf31E6tG9rNA0nAfDA56-2l9O1F4ArTR72bIXdjPIPJx165zSGtamt1b26tbhZVBRiOOB0P4mvLFNSrlEfF2Z1e3kQRqM9M5waiNRfbkOpB689STVhtrhprPu9wG3jJ5weKaazpvfWsUsUkbS7fXVWzjGSW_ywK64DcnT-EmyvrcFwwJwTnHspSSTc-Aq8nxHjTaHKEKwxml4VJuV-yvS0kS9jVnMczbcY8ST1pRO8kJ2vnIzgedKXNsIZH9IIXaR6p601aeMDK5Bqc8E4e5IGAQODJuIwCc-2n8brGqq_Hqn1j_R_3xTWCRJ7RHI3Kpww8qlF9FktHBxuUBuc4YeGfLwrzye9M6qvgRyujShJASAPUJ8OPCpbQbgObd8FTHOmSuB_SHXz5qu29uqhyZCCE2HI64qa0t44Y4o2_nDcxgZ6n1hWmouKJFu3YrfdoLqbVrxWVGZZX9VohjG4-HQ1mLXb1BhY4MZ_qF493FNo4IbXVr-S4kVV7x8bm_5zT-1k0-aNW79FJGSM9KST5-G4tcGF1-__AGIPP-ZWth2h1BSSBHk9f5MUviwH_qE_xVkDT_7Qv-Kudm6EBr18eoi_6dH6evR_Ri_6dOWFgoG6dR8aSc6dj_zKf4qW-xQ3n7RX7ADcqjzRcH8KLFP0kzzevI27BaTnn2CtZlsnBEc4Y-QOad6PdWen2cgmuYUbvfos3rYOB06-f2VUm9kRtLkQmW4hvXRFRwoHLDJ6U6jur5RwkP8AhP50teXmmpdSTLdI8JwBIp4JwPsrRdX0nxvIh_8AKplotikWp38Zz3Nux8Mqfzp0O0OqD_hW_wDhP503i1HTJjiK6R2AzhSTSZ1TSgf_ADkX-KlPsDmbXtQlUrLbWrr5FT-dJxa3eQsWis7RGxjKqfzpOPUtMkYKl3GxPAAbJok1HS0cq91GpBwQWwalMDr5y6l_Z7f7D-dN7jW72f6VrbhvMbvzpIalpRbAu4yfINW0uo6ZE5WS6RHHUMcEVaYGsl_dv9K3h_Gm8CTT3BBRYztJyuaeHVNKPS7j_wAVKR3tjDcKzzrGrKcF8jPu4plb2JZCXl0dPlSJw8ayZyyHC_EZBH_xIproMMz9r7aKS4n7qTLd2ZGbHB656-dadq7uG-FtLayodjuuMnPsOK37KzD5wWrFjuUbWcnA6dMnjFdacTjeaVFs1u3ismgY3sVtIr70eTIDY6rx76Tl7SaesY7y6QtjBERLfYcVD9tUvbi4eK6bdAkjd1kYOPeKqn6N2szOSEChj7OK169rZfZ8RcpO1lluCwxTSOTgchcnp7aZz69NdLtjX0aM53k-sSPZ0qBsLeF0MsBLbVJB28VGTXzPJuOSSOc1l4bukZliMlry9KjCq3UZY-J6DNMnu5xDtD8E4z7KQS4Lht2MKOhppPJ63jtB8PGrDCXDRzLzpKq0FvcCR0lUqPE4VsAN7-TUn2ptrW2hjkMsjyvyWkwcjzPH4eOKgo5y-hpLaqdqpscEk4Bzg59n5Ur2nvnutAgup7MBJdqRssxJUrkcjHTg-NSUG6SO9pIg7m7ljZkTMeRjeOvvyKa3N00yMSMlQDgU3juw20SAYGePCsNII3AVwQOjVqMK-HJuzeC9liUlB6xB5PUdPyq0xrby6d3neRtKy7gwHQ4HGR0OaqEhGFCKDKf2RVn0O0ij09N6IZnyzlifV44x4Vz8hqCUkWD3plYjctdwpyQGxx1Iz_nT9EEF2G2Eoj856nkZ_CtbiBbbV125WP6Wc5p1IyvOkcILrgFlbjkDnnrXoUk0mipbFk1HRreW3km-jH3ZIAXkDg_bVaWwsAOWunHkIcf5mrpbur2IVQ42qE5PkKjyq4xgVhM24orFjDAly6PFcGN16cA--paWPuoYnCkugBYEAceXup8LRC6ynGAMED20nayLc6cQUx3YKs3mfd8BWJb7hKhlcRvES8aMpIDcvweKe6WqXN5C-wB1mRSm7odw_wB5pzbwRywxByXOMBT4YprpzJH2jSMYULcojZ4yMjH7q4rM90itUPO2mmGC8mMoHeF5GTADf0jTLsjZ7y5kC94ynOB0OfKrP2-AfUinqHIfA3c53HwFN-xNvuupoZg2Y0B6-JNei_8ATJX-YrY-T9yfX1BiP7v_AL1uPk9BP_1BwP7r_vXqgsYv2W_x1uLKH9g_46ntn2MkOijdoezS6va20InMIh8Qmd3GPOoE_J9GP_XS_wDTH516yLOH-r__AGoNpD_VD7akZyiqTK4xbto820bs0uj-kMJmm7wAesuMYqN1uCUQb4HIbvM4xkDwr03VraJLKVkjVWAHI99ULUF3QSRxlN5bLAnnrx08KsJNythpZaRvDpkeqaW1tLIwVwuWX6Q6HGT199Ix9gLHHM9yfblfyqf7MW7zwYUAEEZJJ4GKtlvZxxgFirt7ameSbSZXFPkpmg9i4NMuXubczyFkKYfGMHHs9lNP4uLXJJe7J8yV_KvSgAOm34UYH_LRTld2TKuKPPdP7A29lewXMTXJaJgwViuCfbxWb_sFb3t3NcSG4DSsXIBXAJ-Feg8f8tY481pnld2MqqqPOovk9to5VcNc5UgjJXw-FKaz2Fh1O9lu5jcI7gZCEY4GPKvQOPNfsoIHmPspnlzYyrijys9gbBSP5a5BHtH5U91SDbeRBR6pjYE4JxyOeKv1xbRTZ3YDeYHNVftJCsT2sbkFQJMnHXOOKmeTkrZVFJbHnd1byJpYEkj_AM_hXbkdD4eFWPs52egdYLybVIFUjmPO39_BpjdQoLfuwqurPuIwSNuOc-Qp1pWsDT7cokcLRF8IWUEY_Opi4q4RlSUVVbjHtDq00FxLZ7YZEgkYIz5ZseGSCP8AKsWhF7aoWKqZYwCR0XjFbahdWc19czy2Eb-kP3g_lWG3C4I48-tRy7u6UxRgJH0w3TjGK6-xZVRy4bZZNN0O1sNNd_0xbStsJCdM-4Z_dVCv44zcTNCdo3ZC5yMVdYNXMmirEiKe7TYGwCWP-yOaqWqW7CISbCGHXjGKmHiOUtxKq2I0SGMkEkZ8jStusYl3kkYHq7vOtYjyhUAtnnPTFZOO8JI4zywP0a7s5lqsJkTR-5ikEbFWD8dQD_nT7tFd2jdn7VYpB6K4Ox-7ONwY-GM-Jpnpto13ocZR1UoHGJMAAc559oOaba7b7NBs7QXFq7xsxKpOjAesccg-RrNcHS7RVpXG8FB6meoHWhzlgVJPPxrd0McKq3Xk8HIpumdwwa68nMXScx3Cy43YPQ1Ki_khkDROGH7OOKie5dwCis2TzgVeexnZO21Ky7-_meIkkhAQDjoM5FccVQq2WKcnsVy9la5uw7Nvyq4I4x7KmYXijmllZQpKHbnBB49bPlVqm7D2KbvRbmUMQcBip5_CqbNG0O6Nh0JV_EoRwc-z3VwzpKkdU3Dks-nTI57vcpYgcfCmGT9lV1Ly4spvUUHcdwJHWpu3neSFXPBIycVtb7mlKxwsjKhU-qD19tMNHY5u42PAcj8TTwetIoPU9aT0SBX7RXsMhwmSxX7Pzq_GX6iR01cTDxA4HHSo66i29sJY1GAZoH_FanNIC-lKNuVIP4GrDbdkbaXXl1S-nYo_chYk45BHJP2UhG3SE2ki5dpvkf7Y39-8ltZWEkZHBe5UHlifL21jsv8AI92wsrid7qxs4wygDF4rZ591dRr0FFd_TGqOPsfJ4CPky7S_2e0-8Cs_xZdpf7PafeBXvtFT0RHtkeBH5M-0h_4Fp8ZxR_Fl2l_s9n_1xXvtFPREe2Rzxf8AyW9qJrWSOO3tNzDj9YAqpyfIr23LuFs7MKxPK3yp9vq811nRRYMU7Htkcz9nfki7W2MUgube13Mc_wDmlb91TY-TPtIP-Dbf9dfyr32inoiPbI8F_i07Sf1Nt94X8qP4tO0n9TbfeF_KveqKeiI9jPBf4tO0n9Tb_eB-VH8WnaT-pt_vA_KveqKeiI9jPBP4tO0n9Tb_AHkflQfk07Sf1Ft95H5V73RT0RHtZ4Cfky7S_wBRb_eRVc7UfI72v1ARm1trMsoYZN0BjOMeHsrqGinoiPbI5Aj-Q7t1DFGEsbGRyfXzfADHiOlNv4ge2Tu7NpunruPG29Xj4YrsiisaWHJHNs4u1L-D929kZe6tNOlUHgm8VTjy6Ugv8H_5QmeMyWGnbA4LL6cvP4V2xRXRYMUqM2cap8hHb-OYmKx05Y1PqD01emPHikbr5Au301mUNjp7Sefpy_HwrtCisrx4LcuZnDA_g5fKIuQlpp4B8r1K1_8ADh8oYORZ6eD5-mpXdNFdqRk480z5B-3VvoMltJb2KyEsQq3a5JOOrY6eyoe5_g79vJIMR2Ngr5HBvlOB9ldt0VMqNZvhwyP4Ofyh92VNnp-D_wDnJ-Vax_wb_lCDr-qaeBnk-mrXdFFWkZOLov4PnbyONu7tdOR_pDF6OD9n41Yuy3yJ9sLaKUarYafuOcbbtTk8eyur6K5eiLNKTTtHNVx8jGutEwjsrPdg4_WB5e6qLL8gPbtgu2xsARjn05fLx4rs-ipp4Fc2-Ti0_wAH7t7Jb7JLPTyVzt_XV49vSncfyDdu44VRbSwJA8b1fyrseitLBiiKTRxdL8hHyjFvVs9Oxnr6cox7uKdab8hHb2LU5LiazsFV48E-mgndgeyux6KvqiM7uzkFPkR7fC5jUWtkkC-sXW8QtnHlj2-dTWlfJf8AKHaahaNJY6e9tHICxN6pbGeccfhXUlYb6J91Z9EbsvskZXoKKF6CiuxgKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKZXyXhkjazkRQM7lcAg8j49M0lv1QRRkxWpk9beoY4HPq4PuoCSNV8wavHPL6Ozd20pZTJICxyfEHI2AZGBg9PLJfF9U3RKI7bkEu_OBz4c56ZpN21kp6qWinHmc_wC_zoBrYwa0txDHNKEtUCBiGVmOFOeSM8nGfwqwCosS6qIgGhtjKWA4J2gYOc8-ePtrdH1Mh98dspCErgk7m8PHgedASNFRYfV2b-btEXd-0ScUppct_LuN9DHEPADrnJ9pzxjnigJCiiigCiiigCiiigCiiigCiiigCiiigCiiigCsN9E-6s1hvon3UBlegooXoKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKA1d1RGZ2CqoySTgAVRNY-U3SbOZorKKa-KnBdCFT4E9fsqP8All1qWCC20m3coLhTLPjxQHAX3E5J91U3TeyM13ZRzyyyxmSA3AVLfeNvgM7h6x649o5r4_medirEeD463XLP0n438X47wV5HmPZ8L-25f9J-U_SrqZY763nstxwHYh0HvI5H2VfopEljWSJ1eNgGVlOQR5g14Ld9jp4rYyQyzO_cmcK9tsBAzlc7jhsA8VaPkZ1uV2uNHmctGid_Bk_RGcMo9nIP21PE87G9iwvIXPDL-R_F-P6Xj-G_9vK_vueqUUUV9k_NBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBWG-ifdWaw30T7qAyvQUUL0FFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAeP_AC0WbLren3bhu4lh7okeBViT8cNUc2q6a8-oSG40vE0Jhi3adIWC5UKHOORtXHvxXrvaTRLXX9LksrwEKfWR1-kjDowrxnWPk_17T5mENqb2HPqyQEHI9qnkfjX5_wA7x8XCxZYmHG1L_r-R-v8AxXmePj4EcHGnllHb4rV39F11XT420ySK40gS2oIY_o6Tj1y3q8ccH7c0_wDkltFm7XX11ahxZwRuqFhzhm9UH24B-yofSuwWv6hMqvZmziz60lwQuPh1Neydl9Atez2mLZ2mWOd0krD1pG8z-4eFTwsDFxcSM8SNKP7_AP01-U8vx_HwJYWFPNKW3x0rv4TFFFFfoT8cFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFYb6J91ZrDfRPuoD_2Q==",
        "width": 320,
        "height": 240,
        "page_rect": {
            "left": 0,
            "top": 0,
            "width": 1024,
            "height": 768
        }
    }
};
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Neuron; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connection__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seedrandom__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seedrandom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_seedrandom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_activation_actions__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Neuron = Neuron_1 = (function () {
    function Neuron(neurontype) {
        this.neurontype = neurontype;
        this.activation = 0;
        this.state = 0;
        this.old = 0;
        this.mask = 1;
        this.previousDeltaBias = 0;
        this.totalDeltaBias = 0;
        this.loss = {
            responsibility: 0,
            projected: 0,
            gated: 0
        };
        this.connections = {
            in: [],
            out: [],
            gated: [],
            self: null
        };
        //  console.log('creating Neuron');
        this.squash = __WEBPACK_IMPORTED_MODULE_3__actions_activation_actions__["a" /* ActivationActions */].LOGISTIC;
        this.rand = __WEBPACK_IMPORTED_MODULE_2_seedrandom__["alea"](Math.random());
        this.uuid = this.rand();
        this.rand = __WEBPACK_IMPORTED_MODULE_2_seedrandom__["alea"](this.uuid);
        this.bias = (neurontype === 'input') ? 0 : this.rand() * 0.2 - 0.1;
        //  this.squash = ActivationActions.LOGISTIC;
        this.type = neurontype || 'hidden';
        this.connections = {
            in: [],
            out: [],
            gated: [],
            self: new __WEBPACK_IMPORTED_MODULE_1__connection__["a" /* Connection */](this, this, 0)
        };
    }
    Neuron.prototype.connectNeurons = function (target, weight) {
        //  console.log('Connecting Neurons');
        var myconnections = [];
        if (target.bias) {
            if (target === this) {
                // Turn on the self connection by setting the weight
                if (this.connections.self.weight !== 0) {
                    console.warn('This connection already exists!');
                }
                else {
                    this.connections.self.weight = weight || 1;
                }
                myconnections.push(this.connections.self);
            }
            else if (this.isProjectingTo(target)) {
                throw new Error('Already projecting a connection to this node!');
            }
            else {
                var connection = new __WEBPACK_IMPORTED_MODULE_1__connection__["a" /* Connection */](this, target, weight);
                target.connections.in.push(connection);
                this.connections.out.push(connection);
                myconnections.push(connection);
            }
        }
        else {
            for (var i = 0; i < target.nodes.length; i++) {
                var connect = new __WEBPACK_IMPORTED_MODULE_1__connection__["a" /* Connection */](this, target.nodes[i], weight);
                target.nodes[i].connections.in.push(connect);
                this.connections.out.push(connect);
                target.connections.in.push(connect);
                myconnections.push(connect);
            }
        }
        return myconnections;
    };
    Neuron.prototype.isProjectingTo = function (neuron) {
        for (var i = 0; i < this.connections.out.length; i++) {
            var conn = this.connections.out[i];
            if (conn.to === neuron) {
                return true;
            }
        }
        return (neuron === this && this.connections.self.weight !== 0);
    };
    Neuron.prototype.gate = function (connections) {
        if (!Array.isArray(connections)) {
            connections = [connections];
        }
        for (var i = 0; i < connections.length; i++) {
            var connection = connections[i];
            this.connections.gated.push(connection);
            connection.gater = this;
        }
    };
    Neuron.prototype.activateNeuron = function (input) {
        // Check if an input is given
        if (input) {
            this.activation = input;
            return input;
        }
        this.old = this.state;
        // All activation sources coming from the node itself
        this.state = this.connections.self.gain * this.connections.self.weight * this.state + this.bias;
        // Activation sources coming from connections
        for (var i = 0; i < this.connections.in.length; i++) {
            this.state += this.connections.in[i].originatingNode.activation * this.connections.in[i].weight * this.connections.in[i].gain;
        }
        // Squash the values received
        this.activation = this.squash(this.state) * this.mask;
        this.derivative = this.squash(this.state, true);
        // Update traces
        var nodes = [];
        var influences = [];
        for (var i = 0; i < this.connections.gated.length; i++) {
            var index = nodes.indexOf(this.connections.gated[i].destinationNode);
            if (index > -1) {
                influences[index] += this.connections.gated[i].weight * this.connections.gated[i].originatingNode.activation;
            }
            else {
                nodes.push(this.connections.gated[i].destinationNode);
                influences.push(this.connections.gated[i].weight * this.connections.gated[i].originatingNode.activation +
                    (this.connections.gated[i].destinationNode.connections.self.gater === this ? this.connections.gated[i].destinationNode.old : 0));
            }
            this.connections.gated[i].gain = this.activation;
        }
        for (var i = 0; i < this.connections.in.length; i++) {
            // Elegibility trace
            this.connections.in[i].elegibility =
                (this.connections.self.gain * this.connections.self.weight * this.connections.in[i].elegibility) +
                    (this.connections.in[i].originatingNode.activation * this.connections.in[i].gain);
            // Extended trace
            for (var j = 0; j < nodes.length; j++) {
                var index = this.connections.in[i].xtrace.nodes.indexOf(nodes[j]);
                if (index > -1) {
                    this.connections.in[i].xtrace.values[index] =
                        (nodes[j].connections.self.gain * nodes[j].connections.self.weight * this.connections.in[i].xtrace.values[index]) +
                            (this.derivative * this.connections.in[i].elegibility * influences[j]);
                }
                else {
                    this.connections.in[i].xtrace.nodes.push(nodes[j]);
                    this.connections.in[i].xtrace.values.push(this.derivative * this.connections.in[i].elegibility * influences[j]);
                }
            }
        }
        return this.activation;
    };
    Neuron.prototype.propagateNeuron = function (rate, momentum, update, target) {
        momentum = momentum || 0;
        rate = rate || 0.3;
        // Error accumulator
        var lossAcc = 0;
        // Output neurons get their error from the enviroment
        if (this.type === 'output') {
            this.loss.responsibility = this.loss.projected = target - this.activation;
        }
        else {
            // error responsibilities from all the connections projected from this node
            for (var i = 0; i < this.connections.out.length; i++) {
                var connect = this.connections.out[i];
                var node = connect.destinationNode;
                // Eq. 21
                lossAcc += node.loss.responsibility * connect.weight * connect.gain;
            }
            // Projected error responsibility
            this.loss.projected = this.derivative * lossAcc;
            // Error responsibilities from all connections gated by this neuron
            lossAcc = 0;
            for (var i = 0; i < this.connections.gated.length; i++) {
                var conn = this.connections.gated[i];
                var node = conn.destinationNode;
                var influence = node.connections.self.gater === this ? node.old : 0;
                influence += conn.weight * conn.originatingNode.activation;
                lossAcc += node.loss.responsibility * influence;
            }
            // Gated error responsibility
            this.loss.gated = this.derivative * lossAcc;
            // Error responsibility
            this.loss.responsibility = this.loss.projected + this.loss.gated;
        }
        if (this.type === 'constant') {
            return;
        }
        // Adjust all the node's incoming connections
        for (var i = 0; i < this.connections.in.length; i++) {
            var incConnection = this.connections.in[i];
            var gradient = this.loss.projected * incConnection.elegibility;
            for (var j = 0; j < incConnection.xtrace.nodes.length; j++) {
                var node = incConnection.xtrace.nodes[j];
                var value = incConnection.xtrace.values[j];
                gradient += node.loss.responsibility * value;
            }
            // Adjust weight
            incConnection.totalDeltaWeight += rate * gradient * this.mask;
            if (update) {
                incConnection.totalDeltaWeight += momentum * incConnection.previousDeltaWeight;
                incConnection.weight += incConnection.totalDeltaWeight;
                incConnection.previousDeltaWeight = incConnection.totalDeltaWeight;
                incConnection.totalDeltaWeight = 0;
            }
        }
        // note: MINI_BATCH SHALL BE OPTIMIZED SOON
        // Adjust bias
        this.totalDeltaBias += rate * this.loss.responsibility;
        if (update) {
            this.totalDeltaBias += momentum * this.previousDeltaBias;
            this.bias += this.totalDeltaBias;
            this.previousDeltaBias = this.totalDeltaBias;
            this.totalDeltaBias = 0;
        }
    };
    Neuron.fromJSON = function (json) {
        var node = new Neuron_1();
        node.bias = json.bias;
        node.type = json.type;
        node.mask = json.mask;
        node.squash = __WEBPACK_IMPORTED_MODULE_3__actions_activation_actions__["a" /* ActivationActions */][json.squash];
        return node;
    };
    return Neuron;
}());
Neuron = Neuron_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [String])
], Neuron);

var Neuron_1;
//# sourceMappingURL=neuron.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return warnings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StaticCrossover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StaticGating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StaticSelection; });
var warnings = false;
var StaticConnection = (function () {
    function StaticConnection() {
    }
    return StaticConnection;
}());

StaticConnection.ALL_TO_ALL = {
    name: 'OUTPUT'
};
StaticConnection.ALL_TO_ELSE = {
    name: 'INPUT'
};
StaticConnection.ONE_TO_ONE = {
    name: 'SELF'
};
var StaticCrossover = (function () {
    function StaticCrossover() {
    }
    return StaticCrossover;
}());

StaticCrossover.SINGLE_POINT = {
    name: 'SINGLE_POINT',
    config: [0.4]
};
StaticCrossover.TWO_POINT = {
    name: 'TWO_POINT',
    config: [0.4, 0.9]
};
StaticCrossover.UNIFORM = {
    name: 'UNIFORM'
};
StaticCrossover.AVERAGE = {
    name: 'AVERAGE'
};
var StaticGating = (function () {
    function StaticGating() {
    }
    return StaticGating;
}());

StaticGating.OUTPUT = {
    name: 'OUTPUT'
};
StaticGating.INPUT = {
    name: 'INPUT'
};
StaticGating.SELF = {
    name: 'SELF'
};
var StaticSelection = (function () {
    function StaticSelection() {
    }
    return StaticSelection;
}());

StaticSelection.FITNESS_PROPORTIONATE = {
    name: 'FITNESS_PROPORTIONATE'
};
StaticSelection.POWER = {
    name: 'POWER',
    power: 4
};
StaticSelection.TOURNAMENT = {
    name: 'TOURNAMENT',
    size: 5,
    probability: 0.5
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRAINING_DATA; });
var TRAINING_DATA = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];
//# sourceMappingURL=training.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__payment_payment_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_cc_library__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_cc_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular_cc_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagespeed_speed__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rank_rank__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_google_charts__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_google_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_google_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__neuralnet_train_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_charts__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_8_angular_cc_library__["CreditCardDirectivesModule"],
            __WEBPACK_IMPORTED_MODULE_11_ng2_google_charts__["Ng2GoogleChartsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pagespeed_speed__["a" /* PageSpeed */],
            __WEBPACK_IMPORTED_MODULE_10__rank_rank__["a" /* Rank */],
            __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__neuralnet_train_component__["a" /* TrainComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pagespeed_speed__["a" /* PageSpeed */],
            __WEBPACK_IMPORTED_MODULE_10__rank_rank__["a" /* Rank */],
            __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__neuralnet_train_component__["a" /* TrainComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular_cc_library__["CreditCardDirectivesModule"],
            __WEBPACK_IMPORTED_MODULE_9__pagespeed_speed__["a" /* PageSpeed */],
            __WEBPACK_IMPORTED_MODULE_10__rank_rank__["a" /* Rank */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_google_charts__["Ng2GoogleChartsModule"],
            __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__neuralnet_train_component__["a" /* TrainComponent */]
        ]
    })
], WidgetsModule);

//# sourceMappingURL=widgets.module.js.map

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 430,
	"./af.js": 430,
	"./ar": 431,
	"./ar-dz": 432,
	"./ar-dz.js": 432,
	"./ar-kw": 433,
	"./ar-kw.js": 433,
	"./ar-ly": 434,
	"./ar-ly.js": 434,
	"./ar-ma": 435,
	"./ar-ma.js": 435,
	"./ar-sa": 436,
	"./ar-sa.js": 436,
	"./ar-tn": 437,
	"./ar-tn.js": 437,
	"./ar.js": 431,
	"./az": 438,
	"./az.js": 438,
	"./be": 439,
	"./be.js": 439,
	"./bg": 440,
	"./bg.js": 440,
	"./bn": 441,
	"./bn.js": 441,
	"./bo": 442,
	"./bo.js": 442,
	"./br": 443,
	"./br.js": 443,
	"./bs": 444,
	"./bs.js": 444,
	"./ca": 445,
	"./ca.js": 445,
	"./cs": 446,
	"./cs.js": 446,
	"./cv": 447,
	"./cv.js": 447,
	"./cy": 448,
	"./cy.js": 448,
	"./da": 449,
	"./da.js": 449,
	"./de": 450,
	"./de-at": 451,
	"./de-at.js": 451,
	"./de-ch": 452,
	"./de-ch.js": 452,
	"./de.js": 450,
	"./dv": 453,
	"./dv.js": 453,
	"./el": 454,
	"./el.js": 454,
	"./en-au": 455,
	"./en-au.js": 455,
	"./en-ca": 456,
	"./en-ca.js": 456,
	"./en-gb": 457,
	"./en-gb.js": 457,
	"./en-ie": 458,
	"./en-ie.js": 458,
	"./en-nz": 459,
	"./en-nz.js": 459,
	"./eo": 460,
	"./eo.js": 460,
	"./es": 461,
	"./es-do": 462,
	"./es-do.js": 462,
	"./es.js": 461,
	"./et": 463,
	"./et.js": 463,
	"./eu": 464,
	"./eu.js": 464,
	"./fa": 465,
	"./fa.js": 465,
	"./fi": 466,
	"./fi.js": 466,
	"./fo": 467,
	"./fo.js": 467,
	"./fr": 468,
	"./fr-ca": 469,
	"./fr-ca.js": 469,
	"./fr-ch": 470,
	"./fr-ch.js": 470,
	"./fr.js": 468,
	"./fy": 471,
	"./fy.js": 471,
	"./gd": 472,
	"./gd.js": 472,
	"./gl": 473,
	"./gl.js": 473,
	"./gom-latn": 474,
	"./gom-latn.js": 474,
	"./he": 475,
	"./he.js": 475,
	"./hi": 476,
	"./hi.js": 476,
	"./hr": 477,
	"./hr.js": 477,
	"./hu": 478,
	"./hu.js": 478,
	"./hy-am": 479,
	"./hy-am.js": 479,
	"./id": 480,
	"./id.js": 480,
	"./is": 481,
	"./is.js": 481,
	"./it": 482,
	"./it.js": 482,
	"./ja": 483,
	"./ja.js": 483,
	"./jv": 484,
	"./jv.js": 484,
	"./ka": 485,
	"./ka.js": 485,
	"./kk": 486,
	"./kk.js": 486,
	"./km": 487,
	"./km.js": 487,
	"./kn": 488,
	"./kn.js": 488,
	"./ko": 489,
	"./ko.js": 489,
	"./ky": 490,
	"./ky.js": 490,
	"./lb": 491,
	"./lb.js": 491,
	"./lo": 492,
	"./lo.js": 492,
	"./lt": 493,
	"./lt.js": 493,
	"./lv": 494,
	"./lv.js": 494,
	"./me": 495,
	"./me.js": 495,
	"./mi": 496,
	"./mi.js": 496,
	"./mk": 497,
	"./mk.js": 497,
	"./ml": 498,
	"./ml.js": 498,
	"./mr": 499,
	"./mr.js": 499,
	"./ms": 500,
	"./ms-my": 501,
	"./ms-my.js": 501,
	"./ms.js": 500,
	"./my": 502,
	"./my.js": 502,
	"./nb": 503,
	"./nb.js": 503,
	"./ne": 504,
	"./ne.js": 504,
	"./nl": 505,
	"./nl-be": 506,
	"./nl-be.js": 506,
	"./nl.js": 505,
	"./nn": 507,
	"./nn.js": 507,
	"./pa-in": 508,
	"./pa-in.js": 508,
	"./pl": 509,
	"./pl.js": 509,
	"./pt": 510,
	"./pt-br": 511,
	"./pt-br.js": 511,
	"./pt.js": 510,
	"./ro": 512,
	"./ro.js": 512,
	"./ru": 513,
	"./ru.js": 513,
	"./sd": 514,
	"./sd.js": 514,
	"./se": 515,
	"./se.js": 515,
	"./si": 516,
	"./si.js": 516,
	"./sk": 517,
	"./sk.js": 517,
	"./sl": 518,
	"./sl.js": 518,
	"./sq": 519,
	"./sq.js": 519,
	"./sr": 520,
	"./sr-cyrl": 521,
	"./sr-cyrl.js": 521,
	"./sr.js": 520,
	"./ss": 522,
	"./ss.js": 522,
	"./sv": 523,
	"./sv.js": 523,
	"./sw": 524,
	"./sw.js": 524,
	"./ta": 525,
	"./ta.js": 525,
	"./te": 526,
	"./te.js": 526,
	"./tet": 527,
	"./tet.js": 527,
	"./th": 528,
	"./th.js": 528,
	"./tl-ph": 529,
	"./tl-ph.js": 529,
	"./tlh": 530,
	"./tlh.js": 530,
	"./tr": 531,
	"./tr.js": 531,
	"./tzl": 532,
	"./tzl.js": 532,
	"./tzm": 533,
	"./tzm-latn": 534,
	"./tzm-latn.js": 534,
	"./tzm.js": 533,
	"./uk": 535,
	"./uk.js": 535,
	"./ur": 536,
	"./ur.js": 536,
	"./uz": 537,
	"./uz-latn": 538,
	"./uz-latn.js": 538,
	"./uz.js": 537,
	"./vi": 539,
	"./vi.js": 539,
	"./x-pseudo": 540,
	"./x-pseudo.js": 540,
	"./yo": 541,
	"./yo.js": 541,
	"./zh-cn": 542,
	"./zh-cn.js": 542,
	"./zh-hk": 543,
	"./zh-hk.js": 543,
	"./zh-tw": 544,
	"./zh-tw.js": 544
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 966;

/***/ }),

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeuralModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lstm__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layer__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_activation_actions__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mutation__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__net_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_charts__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { NeuralActions } from './neural.actions';
// import { NeuralRoutingModule } from './neural-routing.module';
var NeuralModule = (function () {
    function NeuralModule() {
    }
    return NeuralModule;
}());
NeuralModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_charts__["NgxChartsModule"]
            // NeuralRoutingModule
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__net_component__["a" /* NetComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__lstm__["a" /* LSTM */],
            __WEBPACK_IMPORTED_MODULE_3__network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_4__layer__["a" /* Layer */],
            __WEBPACK_IMPORTED_MODULE_5__actions_activation_actions__["a" /* ActivationActions */],
            __WEBPACK_IMPORTED_MODULE_6__mutation__["a" /* Mutation */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__net_component__["a" /* NetComponent */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicModule */]
            // NeuralRoutingModule
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__net_component__["a" /* NetComponent */]
        ]
    })
], NeuralModule);

//# sourceMappingURL=neural.module.js.map

/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Evo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__neuralnet_data_config__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__neuralnet_mutation__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__neuralnet_network__ = __webpack_require__(549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Evo = (function () {
    function Evo() {
        this.inputsize = 2;
        this.outputsize = 1;
        this.fitnessfunc = null;
        this.options = {};
        this.equal = this.options.equal || false;
        this.clear = this.options.clear || false;
        this.popsize = this.options.popsize || 50;
        this.elitism = this.options.elitism || 0;
        this.provenance = this.options.provenance || 0;
        this.mutationRate = this.options.mutationRate || 0.3;
        this.mutationAmount = this.options.mutationAmount || 1;
        this.selection = this.options.selection || __WEBPACK_IMPORTED_MODULE_1__neuralnet_data_config__["d" /* StaticSelection */].POWER;
        this.crossover = this.options.crossover || [
            __WEBPACK_IMPORTED_MODULE_1__neuralnet_data_config__["b" /* StaticCrossover */].SINGLE_POINT,
            __WEBPACK_IMPORTED_MODULE_1__neuralnet_data_config__["b" /* StaticCrossover */].TWO_POINT,
            __WEBPACK_IMPORTED_MODULE_1__neuralnet_data_config__["b" /* StaticCrossover */].UNIFORM,
            __WEBPACK_IMPORTED_MODULE_1__neuralnet_data_config__["b" /* StaticCrossover */].AVERAGE
        ];
        this.mutation = this.options.mutation || __WEBPACK_IMPORTED_MODULE_2__neuralnet_mutation__["a" /* Mutation */].FFW;
        this.template = this.options.network || false;
    }
    Evo.prototype.createGenomePool = function (network) {
        this.population = [];
        var copy;
        for (var i = 0; i < this.popsize; i++) {
            if (this.template) {
                copy = __WEBPACK_IMPORTED_MODULE_3__neuralnet_network__["a" /* Network */].fromJSON(network.toJSON());
            }
            else {
                copy = new __WEBPACK_IMPORTED_MODULE_3__neuralnet_network__["a" /* Network */](this.inputsize, this.outputsize);
            }
            copy.score = null;
            this.population.push(copy);
        }
    };
    Evo.prototype.evolveGenomePool = function () {
        var newPopulation = [];
        var elitists = [];
        if (this.population[this.population.length - 1].score === null) {
            this.evaluateGenomes();
        }
        this.sortGenomes();
        // Elitism
        for (var i = 0; i < this.elitism; i++) {
            elitists.push(this.population[i]);
        }
        // Provenance
        for (var i = 0; i < this.provenance; i++) {
            newPopulation.push(__WEBPACK_IMPORTED_MODULE_3__neuralnet_network__["a" /* Network */].fromJSON(this.template.toJSON()));
        }
        // Breed the next individuals
        for (var i = 0; i < this.popsize - this.elitism - this.provenance; i++) {
            newPopulation.push(this.getChildren());
        }
        // Replace the old population with the new population
        this.population = newPopulation;
        this.mutateGenomes();
        for (var i = 0; i < elitists.length; i++) {
            this.population.push(elitists[i]);
        }
        // Reset the scores
        for (var i = 0; i < this.population.length; i++) {
            this.population[i].score = null;
        }
        this.generation++;
    };
    Evo.prototype.getChildren = function () {
        return __WEBPACK_IMPORTED_MODULE_3__neuralnet_network__["a" /* Network */].crossOver(this.getParent(), this.getParent(), this.equal);
    };
    Evo.prototype.mutateGenomes = function () {
        for (var i = 0; i < this.population.length; i++) {
            if (Math.random() <= this.mutationRate) {
                for (var j = 0; j < this.mutationAmount; j++) {
                    var mutationMethod = this.mutation[Math.floor(Math.random() * this.mutation.length)];
                    this.population[i].mutate(mutationMethod);
                }
            }
        }
    };
    Evo.prototype.evaluateGenomes = function () {
        for (var i = 0; i < this.population.length; i++) {
            var genome = this.population[i];
            if (this.clear) {
                genome.clear();
            }
            this.population[i].score = this.fitnessfunc(genome);
        }
    };
    Evo.prototype.sortGenomes = function () {
        this.population.sort(function (a, b) {
            return b.score - a.score;
        });
    };
    Evo.prototype.getFittestGenomes = function () {
        if (this.population[this.population.length - 1].score === null) {
            this.evaluateGenomes();
        }
        this.sortGenomes();
        return this.population[0];
    };
    Evo.prototype.getAverageFitness = function () {
        if (this.population[this.population.length - 1].score == null) {
            this.evaluateGenomes();
        }
        var score = 0;
        for (var i = 0; i < this.population.length; i++) {
            score += this.population[i].score;
        }
        return score / this.population.length;
    };
    Evo.prototype.getParent = function () {
        switch (this.selection) {
            case __WEBPACK_IMPORTED_MODULE_1__neuralnet_data_config__["d" /* StaticSelection */].POWER:
                if (this.population[0].score < this.population[1].score) {
                    this.sortGenomes();
                }
                var index = Math.floor(Math.pow(Math.random(), this.selection.power) * this.population.length);
                return this.population[index];
            case __WEBPACK_IMPORTED_MODULE_1__neuralnet_data_config__["d" /* StaticSelection */].FITNESS_PROPORTIONATE:
                // As negative fitnesses are possible
                // https://stackoverflow.com/questions/16186686/genetic-algorithm-handling-negative-fitness-values
                // this is unnecessarily run for every individual, should be changed
                var totalFitness = 0;
                var minimalFitness = 0;
                for (var i = 0; i < this.population.length; i++) {
                    var score = this.population[i].score;
                    minimalFitness = score < minimalFitness ? score : minimalFitness;
                    totalFitness += score;
                }
                minimalFitness = Math.abs(minimalFitness);
                totalFitness += minimalFitness * this.population.length;
                var random = Math.random() * totalFitness;
                var value = 0;
                for (var i = 0; i < this.population.length; i++) {
                    var genome = this.population[i];
                    value += genome.score + minimalFitness;
                    if (random < value) {
                        return genome;
                    }
                }
                return this.population[Math.floor(Math.random() * this.population.length)];
            case __WEBPACK_IMPORTED_MODULE_1__neuralnet_data_config__["d" /* StaticSelection */].TOURNAMENT:
                if (this.selection.size > this.popsize) {
                    throw new Error('Your tournament size should be lower than the population size, please change Methods.Selection.TOURNAMENT.size');
                }
                // Create a tournament
                var individuals = [];
                for (var i = 0; i < this.selection.size; i++) {
                    var randomPop = this.population[Math.floor(Math.random() * this.population.length)];
                    individuals.push(randomPop);
                }
                // Sort the tournament individuals by score
                individuals.sort(function (a, b) {
                    return b.score - a.score;
                });
                // Select an individual
                for (var i = 0; i < this.selection.size; i++) {
                    if (Math.random() < this.selection.probability || i === this.selection.size - 1) {
                        return individuals[i];
                    }
                }
        }
    };
    Evo.prototype.exportPopulation = function () {
        var json = [];
        for (var i = 0; i < this.population.length; i++) {
            json.push(this.population[i].toJSON());
        }
        return json;
    };
    Evo.prototype.importPopulation = function (json) {
        var population = [];
        for (var i = 0; i < json.length; i++) {
            population.push(__WEBPACK_IMPORTED_MODULE_3__neuralnet_network__["a" /* Network */].fromJSON(json[i]));
        }
        this.population = population;
        this.popsize = population.length;
    };
    Evo.prototype.ngOnInit = function () {
    };
    Evo.prototype.ngOnDestroy = function () {
    };
    return Evo;
}());
Evo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Evo);

//# sourceMappingURL=evo.js.map

/***/ })

},[551]);
//# sourceMappingURL=main.js.map
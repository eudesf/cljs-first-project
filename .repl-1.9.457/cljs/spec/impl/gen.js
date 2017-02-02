// Compiled by ClojureScript 1.9.457 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__3672__auto__,writer__3673__auto__,opt__3674__auto__){
return cljs.core._write.call(null,writer__3673__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4471 = arguments.length;
var i__3983__auto___4472 = (0);
while(true){
if((i__3983__auto___4472 < len__3982__auto___4471)){
args__3985__auto__.push((arguments[i__3983__auto___4472]));

var G__4473 = (i__3983__auto___4472 + (1));
i__3983__auto___4472 = G__4473;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq4470){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4470));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4475 = arguments.length;
var i__3983__auto___4476 = (0);
while(true){
if((i__3983__auto___4476 < len__3982__auto___4475)){
args__3985__auto__.push((arguments[i__3983__auto___4476]));

var G__4477 = (i__3983__auto___4476 + (1));
i__3983__auto___4476 = G__4477;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq4474){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4474));
});

var g_QMARK__4478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_4479 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__4478){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__4478))
,null));
var mkg_4480 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__4478,g_4479){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__4478,g_4479))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__4478,g_4479,mkg_4480){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__4478).call(null,x);
});})(g_QMARK__4478,g_4479,mkg_4480))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__4478,g_4479,mkg_4480){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_4480).call(null,gfn);
});})(g_QMARK__4478,g_4479,mkg_4480))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__4478,g_4479,mkg_4480){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_4479).call(null,generator);
});})(g_QMARK__4478,g_4479,mkg_4480))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__6352__auto___4500 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__6352__auto___4500){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4501 = arguments.length;
var i__3983__auto___4502 = (0);
while(true){
if((i__3983__auto___4502 < len__3982__auto___4501)){
args__3985__auto__.push((arguments[i__3983__auto___4502]));

var G__4503 = (i__3983__auto___4502 + (1));
i__3983__auto___4502 = G__4503;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4500))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4500){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4500),args);
});})(g__6352__auto___4500))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__6352__auto___4500){
return (function (seq4481){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4481));
});})(g__6352__auto___4500))
;


var g__6352__auto___4504 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__6352__auto___4504){
return (function cljs$spec$impl$gen$list(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4505 = arguments.length;
var i__3983__auto___4506 = (0);
while(true){
if((i__3983__auto___4506 < len__3982__auto___4505)){
args__3985__auto__.push((arguments[i__3983__auto___4506]));

var G__4507 = (i__3983__auto___4506 + (1));
i__3983__auto___4506 = G__4507;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4504))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4504){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4504),args);
});})(g__6352__auto___4504))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__6352__auto___4504){
return (function (seq4482){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4482));
});})(g__6352__auto___4504))
;


var g__6352__auto___4508 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__6352__auto___4508){
return (function cljs$spec$impl$gen$map(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4509 = arguments.length;
var i__3983__auto___4510 = (0);
while(true){
if((i__3983__auto___4510 < len__3982__auto___4509)){
args__3985__auto__.push((arguments[i__3983__auto___4510]));

var G__4511 = (i__3983__auto___4510 + (1));
i__3983__auto___4510 = G__4511;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4508))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4508){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4508),args);
});})(g__6352__auto___4508))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__6352__auto___4508){
return (function (seq4483){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4483));
});})(g__6352__auto___4508))
;


var g__6352__auto___4512 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__6352__auto___4512){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4513 = arguments.length;
var i__3983__auto___4514 = (0);
while(true){
if((i__3983__auto___4514 < len__3982__auto___4513)){
args__3985__auto__.push((arguments[i__3983__auto___4514]));

var G__4515 = (i__3983__auto___4514 + (1));
i__3983__auto___4514 = G__4515;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4512))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4512){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4512),args);
});})(g__6352__auto___4512))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__6352__auto___4512){
return (function (seq4484){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4484));
});})(g__6352__auto___4512))
;


var g__6352__auto___4516 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__6352__auto___4516){
return (function cljs$spec$impl$gen$set(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4517 = arguments.length;
var i__3983__auto___4518 = (0);
while(true){
if((i__3983__auto___4518 < len__3982__auto___4517)){
args__3985__auto__.push((arguments[i__3983__auto___4518]));

var G__4519 = (i__3983__auto___4518 + (1));
i__3983__auto___4518 = G__4519;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4516))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4516){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4516),args);
});})(g__6352__auto___4516))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__6352__auto___4516){
return (function (seq4485){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4485));
});})(g__6352__auto___4516))
;


var g__6352__auto___4520 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__6352__auto___4520){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4521 = arguments.length;
var i__3983__auto___4522 = (0);
while(true){
if((i__3983__auto___4522 < len__3982__auto___4521)){
args__3985__auto__.push((arguments[i__3983__auto___4522]));

var G__4523 = (i__3983__auto___4522 + (1));
i__3983__auto___4522 = G__4523;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4520))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4520){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4520),args);
});})(g__6352__auto___4520))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__6352__auto___4520){
return (function (seq4486){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4486));
});})(g__6352__auto___4520))
;


var g__6352__auto___4524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__6352__auto___4524){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4525 = arguments.length;
var i__3983__auto___4526 = (0);
while(true){
if((i__3983__auto___4526 < len__3982__auto___4525)){
args__3985__auto__.push((arguments[i__3983__auto___4526]));

var G__4527 = (i__3983__auto___4526 + (1));
i__3983__auto___4526 = G__4527;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4524))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4524),args);
});})(g__6352__auto___4524))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__6352__auto___4524){
return (function (seq4487){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4487));
});})(g__6352__auto___4524))
;


var g__6352__auto___4528 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__6352__auto___4528){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4529 = arguments.length;
var i__3983__auto___4530 = (0);
while(true){
if((i__3983__auto___4530 < len__3982__auto___4529)){
args__3985__auto__.push((arguments[i__3983__auto___4530]));

var G__4531 = (i__3983__auto___4530 + (1));
i__3983__auto___4530 = G__4531;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4528))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4528){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4528),args);
});})(g__6352__auto___4528))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__6352__auto___4528){
return (function (seq4488){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4488));
});})(g__6352__auto___4528))
;


var g__6352__auto___4532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__6352__auto___4532){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4533 = arguments.length;
var i__3983__auto___4534 = (0);
while(true){
if((i__3983__auto___4534 < len__3982__auto___4533)){
args__3985__auto__.push((arguments[i__3983__auto___4534]));

var G__4535 = (i__3983__auto___4534 + (1));
i__3983__auto___4534 = G__4535;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4532))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4532){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4532),args);
});})(g__6352__auto___4532))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__6352__auto___4532){
return (function (seq4489){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4489));
});})(g__6352__auto___4532))
;


var g__6352__auto___4536 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__6352__auto___4536){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4537 = arguments.length;
var i__3983__auto___4538 = (0);
while(true){
if((i__3983__auto___4538 < len__3982__auto___4537)){
args__3985__auto__.push((arguments[i__3983__auto___4538]));

var G__4539 = (i__3983__auto___4538 + (1));
i__3983__auto___4538 = G__4539;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4536))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4536){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4536),args);
});})(g__6352__auto___4536))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__6352__auto___4536){
return (function (seq4490){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4490));
});})(g__6352__auto___4536))
;


var g__6352__auto___4540 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__6352__auto___4540){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4541 = arguments.length;
var i__3983__auto___4542 = (0);
while(true){
if((i__3983__auto___4542 < len__3982__auto___4541)){
args__3985__auto__.push((arguments[i__3983__auto___4542]));

var G__4543 = (i__3983__auto___4542 + (1));
i__3983__auto___4542 = G__4543;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4540))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4540){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4540),args);
});})(g__6352__auto___4540))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__6352__auto___4540){
return (function (seq4491){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4491));
});})(g__6352__auto___4540))
;


var g__6352__auto___4544 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__6352__auto___4544){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4545 = arguments.length;
var i__3983__auto___4546 = (0);
while(true){
if((i__3983__auto___4546 < len__3982__auto___4545)){
args__3985__auto__.push((arguments[i__3983__auto___4546]));

var G__4547 = (i__3983__auto___4546 + (1));
i__3983__auto___4546 = G__4547;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4544))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4544){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4544),args);
});})(g__6352__auto___4544))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__6352__auto___4544){
return (function (seq4492){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4492));
});})(g__6352__auto___4544))
;


var g__6352__auto___4548 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__6352__auto___4548){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4549 = arguments.length;
var i__3983__auto___4550 = (0);
while(true){
if((i__3983__auto___4550 < len__3982__auto___4549)){
args__3985__auto__.push((arguments[i__3983__auto___4550]));

var G__4551 = (i__3983__auto___4550 + (1));
i__3983__auto___4550 = G__4551;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4548))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4548){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4548),args);
});})(g__6352__auto___4548))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__6352__auto___4548){
return (function (seq4493){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4493));
});})(g__6352__auto___4548))
;


var g__6352__auto___4552 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__6352__auto___4552){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4553 = arguments.length;
var i__3983__auto___4554 = (0);
while(true){
if((i__3983__auto___4554 < len__3982__auto___4553)){
args__3985__auto__.push((arguments[i__3983__auto___4554]));

var G__4555 = (i__3983__auto___4554 + (1));
i__3983__auto___4554 = G__4555;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4552))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4552){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4552),args);
});})(g__6352__auto___4552))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__6352__auto___4552){
return (function (seq4494){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4494));
});})(g__6352__auto___4552))
;


var g__6352__auto___4556 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__6352__auto___4556){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4557 = arguments.length;
var i__3983__auto___4558 = (0);
while(true){
if((i__3983__auto___4558 < len__3982__auto___4557)){
args__3985__auto__.push((arguments[i__3983__auto___4558]));

var G__4559 = (i__3983__auto___4558 + (1));
i__3983__auto___4558 = G__4559;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4556))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4556){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4556),args);
});})(g__6352__auto___4556))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__6352__auto___4556){
return (function (seq4495){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4495));
});})(g__6352__auto___4556))
;


var g__6352__auto___4560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__6352__auto___4560){
return (function cljs$spec$impl$gen$return(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4561 = arguments.length;
var i__3983__auto___4562 = (0);
while(true){
if((i__3983__auto___4562 < len__3982__auto___4561)){
args__3985__auto__.push((arguments[i__3983__auto___4562]));

var G__4563 = (i__3983__auto___4562 + (1));
i__3983__auto___4562 = G__4563;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4560))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4560){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4560),args);
});})(g__6352__auto___4560))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__6352__auto___4560){
return (function (seq4496){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4496));
});})(g__6352__auto___4560))
;


var g__6352__auto___4564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__6352__auto___4564){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4565 = arguments.length;
var i__3983__auto___4566 = (0);
while(true){
if((i__3983__auto___4566 < len__3982__auto___4565)){
args__3985__auto__.push((arguments[i__3983__auto___4566]));

var G__4567 = (i__3983__auto___4566 + (1));
i__3983__auto___4566 = G__4567;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4564))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4564){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4564),args);
});})(g__6352__auto___4564))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__6352__auto___4564){
return (function (seq4497){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4497));
});})(g__6352__auto___4564))
;


var g__6352__auto___4568 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__6352__auto___4568){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4569 = arguments.length;
var i__3983__auto___4570 = (0);
while(true){
if((i__3983__auto___4570 < len__3982__auto___4569)){
args__3985__auto__.push((arguments[i__3983__auto___4570]));

var G__4571 = (i__3983__auto___4570 + (1));
i__3983__auto___4570 = G__4571;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4568))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4568){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4568),args);
});})(g__6352__auto___4568))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__6352__auto___4568){
return (function (seq4498){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4498));
});})(g__6352__auto___4568))
;


var g__6352__auto___4572 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__6352__auto___4572){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4573 = arguments.length;
var i__3983__auto___4574 = (0);
while(true){
if((i__3983__auto___4574 < len__3982__auto___4573)){
args__3985__auto__.push((arguments[i__3983__auto___4574]));

var G__4575 = (i__3983__auto___4574 + (1));
i__3983__auto___4574 = G__4575;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___4572))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___4572){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___4572),args);
});})(g__6352__auto___4572))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__6352__auto___4572){
return (function (seq4499){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4499));
});})(g__6352__auto___4572))
;

var g__6357__auto___4597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__6357__auto___4597){
return (function cljs$spec$impl$gen$any(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4598 = arguments.length;
var i__3983__auto___4599 = (0);
while(true){
if((i__3983__auto___4599 < len__3982__auto___4598)){
args__3985__auto__.push((arguments[i__3983__auto___4599]));

var G__4600 = (i__3983__auto___4599 + (1));
i__3983__auto___4599 = G__4600;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4597))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4597){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4597);
});})(g__6357__auto___4597))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__6357__auto___4597){
return (function (seq4576){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4576));
});})(g__6357__auto___4597))
;


var g__6357__auto___4601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__6357__auto___4601){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4602 = arguments.length;
var i__3983__auto___4603 = (0);
while(true){
if((i__3983__auto___4603 < len__3982__auto___4602)){
args__3985__auto__.push((arguments[i__3983__auto___4603]));

var G__4604 = (i__3983__auto___4603 + (1));
i__3983__auto___4603 = G__4604;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4601))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4601){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4601);
});})(g__6357__auto___4601))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__6357__auto___4601){
return (function (seq4577){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4577));
});})(g__6357__auto___4601))
;


var g__6357__auto___4605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__6357__auto___4605){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4606 = arguments.length;
var i__3983__auto___4607 = (0);
while(true){
if((i__3983__auto___4607 < len__3982__auto___4606)){
args__3985__auto__.push((arguments[i__3983__auto___4607]));

var G__4608 = (i__3983__auto___4607 + (1));
i__3983__auto___4607 = G__4608;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4605))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4605){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4605);
});})(g__6357__auto___4605))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__6357__auto___4605){
return (function (seq4578){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4578));
});})(g__6357__auto___4605))
;


var g__6357__auto___4609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__6357__auto___4609){
return (function cljs$spec$impl$gen$char(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4610 = arguments.length;
var i__3983__auto___4611 = (0);
while(true){
if((i__3983__auto___4611 < len__3982__auto___4610)){
args__3985__auto__.push((arguments[i__3983__auto___4611]));

var G__4612 = (i__3983__auto___4611 + (1));
i__3983__auto___4611 = G__4612;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4609))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4609){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4609);
});})(g__6357__auto___4609))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__6357__auto___4609){
return (function (seq4579){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4579));
});})(g__6357__auto___4609))
;


var g__6357__auto___4613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__6357__auto___4613){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4614 = arguments.length;
var i__3983__auto___4615 = (0);
while(true){
if((i__3983__auto___4615 < len__3982__auto___4614)){
args__3985__auto__.push((arguments[i__3983__auto___4615]));

var G__4616 = (i__3983__auto___4615 + (1));
i__3983__auto___4615 = G__4616;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4613))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4613){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4613);
});})(g__6357__auto___4613))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__6357__auto___4613){
return (function (seq4580){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4580));
});})(g__6357__auto___4613))
;


var g__6357__auto___4617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__6357__auto___4617){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4618 = arguments.length;
var i__3983__auto___4619 = (0);
while(true){
if((i__3983__auto___4619 < len__3982__auto___4618)){
args__3985__auto__.push((arguments[i__3983__auto___4619]));

var G__4620 = (i__3983__auto___4619 + (1));
i__3983__auto___4619 = G__4620;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4617))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4617){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4617);
});})(g__6357__auto___4617))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__6357__auto___4617){
return (function (seq4581){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4581));
});})(g__6357__auto___4617))
;


var g__6357__auto___4621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__6357__auto___4621){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4622 = arguments.length;
var i__3983__auto___4623 = (0);
while(true){
if((i__3983__auto___4623 < len__3982__auto___4622)){
args__3985__auto__.push((arguments[i__3983__auto___4623]));

var G__4624 = (i__3983__auto___4623 + (1));
i__3983__auto___4623 = G__4624;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4621))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4621){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4621);
});})(g__6357__auto___4621))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__6357__auto___4621){
return (function (seq4582){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4582));
});})(g__6357__auto___4621))
;


var g__6357__auto___4625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__6357__auto___4625){
return (function cljs$spec$impl$gen$double(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4626 = arguments.length;
var i__3983__auto___4627 = (0);
while(true){
if((i__3983__auto___4627 < len__3982__auto___4626)){
args__3985__auto__.push((arguments[i__3983__auto___4627]));

var G__4628 = (i__3983__auto___4627 + (1));
i__3983__auto___4627 = G__4628;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4625))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4625){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4625);
});})(g__6357__auto___4625))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__6357__auto___4625){
return (function (seq4583){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4583));
});})(g__6357__auto___4625))
;


var g__6357__auto___4629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__6357__auto___4629){
return (function cljs$spec$impl$gen$int(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4630 = arguments.length;
var i__3983__auto___4631 = (0);
while(true){
if((i__3983__auto___4631 < len__3982__auto___4630)){
args__3985__auto__.push((arguments[i__3983__auto___4631]));

var G__4632 = (i__3983__auto___4631 + (1));
i__3983__auto___4631 = G__4632;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4629))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4629){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4629);
});})(g__6357__auto___4629))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__6357__auto___4629){
return (function (seq4584){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4584));
});})(g__6357__auto___4629))
;


var g__6357__auto___4633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__6357__auto___4633){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4634 = arguments.length;
var i__3983__auto___4635 = (0);
while(true){
if((i__3983__auto___4635 < len__3982__auto___4634)){
args__3985__auto__.push((arguments[i__3983__auto___4635]));

var G__4636 = (i__3983__auto___4635 + (1));
i__3983__auto___4635 = G__4636;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4633))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4633){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4633);
});})(g__6357__auto___4633))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__6357__auto___4633){
return (function (seq4585){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4585));
});})(g__6357__auto___4633))
;


var g__6357__auto___4637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__6357__auto___4637){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4638 = arguments.length;
var i__3983__auto___4639 = (0);
while(true){
if((i__3983__auto___4639 < len__3982__auto___4638)){
args__3985__auto__.push((arguments[i__3983__auto___4639]));

var G__4640 = (i__3983__auto___4639 + (1));
i__3983__auto___4639 = G__4640;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4637))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4637){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4637);
});})(g__6357__auto___4637))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__6357__auto___4637){
return (function (seq4586){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4586));
});})(g__6357__auto___4637))
;


var g__6357__auto___4641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__6357__auto___4641){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4642 = arguments.length;
var i__3983__auto___4643 = (0);
while(true){
if((i__3983__auto___4643 < len__3982__auto___4642)){
args__3985__auto__.push((arguments[i__3983__auto___4643]));

var G__4644 = (i__3983__auto___4643 + (1));
i__3983__auto___4643 = G__4644;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4641))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4641){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4641);
});})(g__6357__auto___4641))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__6357__auto___4641){
return (function (seq4587){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4587));
});})(g__6357__auto___4641))
;


var g__6357__auto___4645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__6357__auto___4645){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4646 = arguments.length;
var i__3983__auto___4647 = (0);
while(true){
if((i__3983__auto___4647 < len__3982__auto___4646)){
args__3985__auto__.push((arguments[i__3983__auto___4647]));

var G__4648 = (i__3983__auto___4647 + (1));
i__3983__auto___4647 = G__4648;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4645))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4645){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4645);
});})(g__6357__auto___4645))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__6357__auto___4645){
return (function (seq4588){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4588));
});})(g__6357__auto___4645))
;


var g__6357__auto___4649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__6357__auto___4649){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4650 = arguments.length;
var i__3983__auto___4651 = (0);
while(true){
if((i__3983__auto___4651 < len__3982__auto___4650)){
args__3985__auto__.push((arguments[i__3983__auto___4651]));

var G__4652 = (i__3983__auto___4651 + (1));
i__3983__auto___4651 = G__4652;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4649))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4649){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4649);
});})(g__6357__auto___4649))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__6357__auto___4649){
return (function (seq4589){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4589));
});})(g__6357__auto___4649))
;


var g__6357__auto___4653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__6357__auto___4653){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4654 = arguments.length;
var i__3983__auto___4655 = (0);
while(true){
if((i__3983__auto___4655 < len__3982__auto___4654)){
args__3985__auto__.push((arguments[i__3983__auto___4655]));

var G__4656 = (i__3983__auto___4655 + (1));
i__3983__auto___4655 = G__4656;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4653))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4653){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4653);
});})(g__6357__auto___4653))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__6357__auto___4653){
return (function (seq4590){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4590));
});})(g__6357__auto___4653))
;


var g__6357__auto___4657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__6357__auto___4657){
return (function cljs$spec$impl$gen$string(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4658 = arguments.length;
var i__3983__auto___4659 = (0);
while(true){
if((i__3983__auto___4659 < len__3982__auto___4658)){
args__3985__auto__.push((arguments[i__3983__auto___4659]));

var G__4660 = (i__3983__auto___4659 + (1));
i__3983__auto___4659 = G__4660;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4657))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4657){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4657);
});})(g__6357__auto___4657))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__6357__auto___4657){
return (function (seq4591){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4591));
});})(g__6357__auto___4657))
;


var g__6357__auto___4661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__6357__auto___4661){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4662 = arguments.length;
var i__3983__auto___4663 = (0);
while(true){
if((i__3983__auto___4663 < len__3982__auto___4662)){
args__3985__auto__.push((arguments[i__3983__auto___4663]));

var G__4664 = (i__3983__auto___4663 + (1));
i__3983__auto___4663 = G__4664;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4661))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4661){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4661);
});})(g__6357__auto___4661))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__6357__auto___4661){
return (function (seq4592){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4592));
});})(g__6357__auto___4661))
;


var g__6357__auto___4665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__6357__auto___4665){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4666 = arguments.length;
var i__3983__auto___4667 = (0);
while(true){
if((i__3983__auto___4667 < len__3982__auto___4666)){
args__3985__auto__.push((arguments[i__3983__auto___4667]));

var G__4668 = (i__3983__auto___4667 + (1));
i__3983__auto___4667 = G__4668;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4665))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4665){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4665);
});})(g__6357__auto___4665))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__6357__auto___4665){
return (function (seq4593){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4593));
});})(g__6357__auto___4665))
;


var g__6357__auto___4669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__6357__auto___4669){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4670 = arguments.length;
var i__3983__auto___4671 = (0);
while(true){
if((i__3983__auto___4671 < len__3982__auto___4670)){
args__3985__auto__.push((arguments[i__3983__auto___4671]));

var G__4672 = (i__3983__auto___4671 + (1));
i__3983__auto___4671 = G__4672;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4669))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4669){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4669);
});})(g__6357__auto___4669))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__6357__auto___4669){
return (function (seq4594){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4594));
});})(g__6357__auto___4669))
;


var g__6357__auto___4673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__6357__auto___4673){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4674 = arguments.length;
var i__3983__auto___4675 = (0);
while(true){
if((i__3983__auto___4675 < len__3982__auto___4674)){
args__3985__auto__.push((arguments[i__3983__auto___4675]));

var G__4676 = (i__3983__auto___4675 + (1));
i__3983__auto___4675 = G__4676;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4673))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4673){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4673);
});})(g__6357__auto___4673))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__6357__auto___4673){
return (function (seq4595){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4595));
});})(g__6357__auto___4673))
;


var g__6357__auto___4677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__6357__auto___4677){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4678 = arguments.length;
var i__3983__auto___4679 = (0);
while(true){
if((i__3983__auto___4679 < len__3982__auto___4678)){
args__3985__auto__.push((arguments[i__3983__auto___4679]));

var G__4680 = (i__3983__auto___4679 + (1));
i__3983__auto___4679 = G__4680;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___4677))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___4677){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___4677);
});})(g__6357__auto___4677))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__6357__auto___4677){
return (function (seq4596){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4596));
});})(g__6357__auto___4677))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3985__auto__ = [];
var len__3982__auto___4683 = arguments.length;
var i__3983__auto___4684 = (0);
while(true){
if((i__3983__auto___4684 < len__3982__auto___4683)){
args__3985__auto__.push((arguments[i__3983__auto___4684]));

var G__4685 = (i__3983__auto___4684 + (1));
i__3983__auto___4684 = G__4685;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__4681_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__4681_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq4682){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4682));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__4686_SHARP_){
return (new Date(p1__4686_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

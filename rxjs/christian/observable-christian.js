"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
//obs.subscribe((value) => console.log(value));
//obs.subscribe((value) => console.log(value));
var sub = new rxjs_1.Subject();
var obs = sub.asObservable();
obs.subscribe(function (value) { return console.log('Observable', value); });
sub.subscribe(function (value) { return console.log('Subject', value); });
sub.next(1);
sub.next(2);
sub.next(3);

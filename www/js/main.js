var Vue = require('vue');
var VueResource = require('vue-resource');
var Hello = require('./hello.vue');
var Rec = require('./rec.vue');
var Ams = require('./ams.vue');
var Gds = require('./gds.vue');
var Sap = require('./sap.vue');
var Ufbd = require('./ufbd.vue');
var RandomWord = require('./random-word.vue');

Vue.use(VueResource);

var vm = new Vue({
  el: 'body',
  components: {
    'hello': RandomWord,
    'Rec' : rec,
    'Ams' : ams,
    'Gds' : gds,
    'Sap' : sap,
    'Ufbd' : ufbd,
    'random-word': RandomWord
  }
});
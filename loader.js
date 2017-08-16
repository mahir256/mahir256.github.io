require(['cdns'], function () {
    require(['Vue', 'vuebar', './store', 'vue!mainpart', 'vue!sidebar'], function (Vue, Vuebar, store) {
        Vue.use(Vuebar);
        var app = new Vue({
            el: '#app',
            methods:{
                doStuff: function(){
                    store.setUrl('newsfeed.json');
                }
            }
        });
    });
});
require(['cdns'], function () {
    require(['Vue', 'vuebar', 'vue!mainpart', 'vue!sidebar'], function (Vue, Vuebar) {
        Vue.use(Vuebar);
        var store = {
            state: {
                dataurl: 'newsfeed.json'
            },
            setUrl: function(newval){
                this.state.dataurl = newval;
            },
            getUrl: function(){
                return this.state.dataurl;
            }
        };
        var app = new Vue({
            el: '#app'
        });
    });
});
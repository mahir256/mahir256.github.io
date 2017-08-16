<vue-component>
<template>
<div>
<div>
    <div v-for="entry in entries" v-bind:key="entry.top">
    <h3>{{ entry.top }}</h3>
    <ul>
    <li v-for="item in entry.texts" :key="item.name">
        <div v-on:click="loadNext(item)">{{ item.name }} <div class="itemdesc"><small>{{ item.desc }}</small></div></div>
    </li>
    </ul>
    </div>
</div>
</div>
</template>
<style>
ul{list-style-type:none;padding-left:0px}
.itemdesc{visibility:hidden}
div:hover > .itemdesc{visibility:visible}
</style>
<script>
define(["Vue", './store'], function(Vue, store) {
    Vue.component("sidebar", {
        template: template, // the variable template will be injected 
        data: function(){
            return {
                "entries": [{"top": "classes", "texts": [
                    {"name": "15-16", "desc": "Freshman year", "md": "1516.md"},
                    {"name": "16-17", "desc": "Sophomore year", "md": "1617.md"},
                    {"name": "17-18", "desc": "Junior year", "md": "1718.md"},
                    {"name": "18-19", "desc": "Senior year", "md": "1819.md"},
                ]},
                {"top": "interests", "texts": [
                    {"name": "languages", "desc": "Languages and more", "md": "ling.md"},
                    {"name": "progress", "desc": "Opinions on workings", "md": "prog.md"}
                ]},
                {"top": "বাংলা", "texts": [
                    {"name": "নিজের তথ্য", "desc": "যদি আমার সম্বন্ধে জানতে চান", "md": "index.bn.md"}
                ]},
                {"top": "español", "texts": [
                    {"name": "información", "desc": "si quiere saber sobre yo", "md": "index.es.md"}
                ]}]
            }
        },
        methods: {
            loadNext: function(item){
                store.setUrl(item.md);
            }
        }
    });
});
</script>
</vue-component>
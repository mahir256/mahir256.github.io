<vue-component>
<template>
<div>
<div class="postarea" v-if="/\.json$/.test(this.dataurl)">
    <div v-for="post in posts" class="poststruct" v-bind:key="post.date">
        <div class="posthead">
            <span class="posttitle">{{ post.title }}</span>
            <span class="postdate">{{ post.date }}</span>
        </div>
        <div class="postbody" v-html="post.post"></div>
    </div>
</div>
<div class="postarea" v-else v-html="posts">
</div>
</div>
</template>
<style>
.postarea>div{padding:5px}
.posthead{width:99%;padding-bottom:5px;font-weight:bold}
.postdate{float:right}
.postbody h1{text-align:left !important}
</style>
<script>
define(["Vue", 'axios'], function(Vue, axios, parser) {
    Vue.component("mainpart", {
        template: template,
        props: ['dataurl'],
        data: function(){
            return { posts: [] };
        },
        created: function(){
            var self=this, markdown=require('MarkdownIt')({html: true});
            if(!(/\.json$/.test(this.dataurl))){
                axios.get(this.posturl).then(function(response){
                    self.posts = markdown.render(response.data);
                }).catch(function(error){});
            };
            axios.get(this.dataurl).then(function(response){
                response.data.forEach(function(curpost){
                    axios.get("posts/"+curpost.post).then(function(respuesta){
                        self.posts.push({"title": curpost.title, "date": curpost.date,
                        "post": markdown.render(respuesta.data)});
                    });
                });
            }).catch(function(error){self.posts.push({"title": "Whoops!", "date": "1970-01-01T00:00:00Z", "post": "You dun goofed."})});
        }
    });
});
</script>
</vue-component>
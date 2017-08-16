<vue-component>
<template>
<div>
<div class="postarea jsonpost" v-if="/\.json$/.test(this.dataurl.url)">
    <div v-for="post in posts" class="poststruct" v-bind:key="post.date">
        <div class="posthead">
            <span class="posttitle">{{ post.title }}</span>
            <span class="postdate">{{ post.date }}</span>
        </div>
        <div class="postbody" v-html="post.post"></div>
    </div>
</div>
<div class="postarea restpost" v-else>
    <div v-html="posts"></div>
</div>
</div>
</template>
<style>
.postarea>div{padding:5px}
.posthead{width:99%;padding-bottom:5px;font-weight:bold}
.postdate{float:right}
.restpost h1, .postbody h1{text-align:left !important}
</style>
<script>
define(["Vue", 'axios', './store'], function(Vue, axios, store) {
    Vue.component("mainpart", {
        template: template,
        data: function(){
            return { posts: [], dataurl: store.state };
        },
        created: function(){
            this.renderUrl();
        },
        methods: {
            renderUrl: function(){
                var self=this, markdown=require('MarkdownIt')({html: true});
                if(/\.json$/.test(this.dataurl.url)){
                axios.get(this.dataurl.url).then(function(response){
                self.posts = [];
                    response.data.forEach(function(curpost){
                        axios.get("posts/"+curpost.post).then(function(respuesta){
                            self.posts.push({"title": curpost.title, "date": curpost.date,
                            "post": markdown.render(respuesta.data)});
                        });
                    });
                }).catch(function(error){self.posts.push({"title": "Well...", "date": "1970-01-01T00:00:00Z", "post": "it looks like there's nothing here."})});
                }
                else if(this.dataurl.url === ''){self.posts = "Well, it looks like there's nothing here.";return}
                else{axios.get(this.dataurl.url).then(function(response){
                    self.posts = markdown.render(response.data);
                }).catch(function(error){self.posts = "Well, it looks like there's nothing here."});}
            }
        },
        watch:{
            dataurl:{
                handler:function(){
                    this.renderUrl();
                },
                deep: true
            }
        }
    });
});
</script>
</vue-component>
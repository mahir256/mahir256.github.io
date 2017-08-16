requirejs.config({
    enforceDefine: true,
    paths: {
        jquery: [
            'https://code.jquery.com/jquery-3.2.1.min'
        ],
        underscore: [
            'https://cdn.jsdelivr.net/underscorejs/1.8.3/underscore-min',
            'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
            'https://cdn.bootcss.com/underscore.js/1.8.3/underscore-min'
        ],
        faw: [
            'https://cdn.jsdelivr.net/fontawesome/4.6.3/css/font-awesome.min',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min',
            'https://cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min'
        ],
        iof: [
            'https://cdn.jsdelivr.net/ionicons/2.0.1/css/ionicons.min',
            'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min',
            'https://cdn.bootcss.com/ionicons/2.0.1/css/ionicons.min'
        ],
        'MarkdownIt': [
            'https://cdn.jsdelivr.net/markdown-it/7.0.1/markdown-it.min',
            'https://cdnjs.cloudflare.com/ajax/libs/markdown-it/7.0.1/markdown-it.min',
            'https://cdn.bootcss.com/markdown-it/7.0.1/markdown-it.min'
        ],
        'randomColor': [
            'https://cdnjs.cloudflare.com/ajax/libs/randomcolor/0.4.4/randomColor.min',
            'https://cdn.bootcss.com/randomcolor/0.4.4/randomColor.min'
        ],
        'Vue': [
            'https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue',
            'https://cdn.bootcss.com/vue/2.4.2/vue'
        ],
        'vue': [
            'require-vuejs.min'
        ],
        'axios': [
            'https://unpkg.com/axios/dist/axios.min'
        ],
        'vuebar': [
            'vuebar'
        ],
    },
    shim: {
        "vuebar": {"exports": "Vuebar"},
        "Vue": {"exports": "Vue"}
    }
});

define({});
define([], function(){
	var store = {
        state: { url: 'newsfeed.json' },
        setUrl (newValue) {this.state.url = newValue},
        getUrl () {return this.state.url;}
    };
    return store
});
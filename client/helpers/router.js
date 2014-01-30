Router.configure({
	layoutTemplate:'layoutTemplate',
	 yieldTemplates: {
      'footerTemplate': {to: 'footer'},
      'headerTemplate': {to: 'header'}
    },
});


Router.map(function(){
	this.route('homeTemplate',{
		path:'/',
	});

	
});
'use strict';

var CountModel = function(options) {
	return {

		changed: new Event(),
		view: options.view,

		initialize: function() {
			this.changed.add(this.view.update.bind(this.view));
			this.view.initialize();
		},

		setData: function(num) {
			if(this.count != num){
				this.count = num;
			}
			this.changed.trigger(this.count);
		}
	}
};

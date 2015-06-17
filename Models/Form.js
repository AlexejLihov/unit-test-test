'use strict';

var FormModel = function(options) {
	return {
		changed: new Event(),
		view: options.view,

		initialize: function() {
			this.changed.add(this.view.update.bind(this.view));
			this.view.initialize();
		}
	}
};

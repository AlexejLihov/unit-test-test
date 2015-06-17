'use strict';

var FormView = function() {
	return {

		$el: $("<div class='form'>"),

		submitClicked: new Event(),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.form = $("<form>");
			this.input = $("<input>");
			this.submit = $("<a>submit</a>");
			this.$el.append([this.input, this.submit]);
			this.submit.click(this.onSubmit.bind(this));
		},

		update: function(data) {
		},

		onSubmit: function() {
			var text = this.input.val();
			if(!text) return;
			this.submitClicked.trigger(text);
			this.input.val("");
		}
	}
};

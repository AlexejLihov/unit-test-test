'use strict';

var CountView = function() {
	return {

		$el: $("<div class='count'>"),

		initialize: function() {
			this.render()
		},

		render: function() {
			var label = $("<div class='label'>").text("items in list");
			this.value = $("<div class='value'>").text(0);
			this.$el.append(this.value, label);
		},

		update: function(data) {
			this.value.text(data);
		}
	}
};

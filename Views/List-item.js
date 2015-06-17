'use strict';

var ListItemView  = function() {
	return {

		deleteClicked: new Event(),
		register: [],

		$el: $("<div class='list-item'>"),

		initialize: function() {
			this.render();
		},

		render: function(data, id) {
			this.id = id;
			this.name = $("<div class='list-item-name'>").text(data.name);
			this.deleteBtn = $("<div class='delete-btn'>").text("X");
			this.$el.append([this.name, this.deleteBtn]);
			this.deleteBtn.on("click", this.onDeleteClick.bind(this));
		},

		onDeleteClick: function(){
			this.deleteClicked.trigger(this);
		},

		reset: function() {
			this.deleteBtn.off();
		}
	}
};

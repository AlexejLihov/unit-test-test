'use strict';

var ListView  = function() {
	return {

		itemDeleteClicked: new Event(),
		register: [],

		$el: $("<div class='list'>"),

		initialize: function() {},

		//render: function(data) {},

		update: function(data) {
			console.log("list upd: ", data);
			console.log(this.$el);
			this.$el.empty();
			if(data.length > 0) {
				for(var i in data) {
					if(!data[i]) return;
					var item = new ListItemView();
					item.render(data[i], i);
					this.$el.append(item.$el);
					item.deleteClicked.add(this.onDeleteClicked.bind(this))
				}
			}
		},

		onDeleteClicked: function(item) {
			item.reset();
			this.itemDeleteClicked.trigger(item.id)
		}
	}
};

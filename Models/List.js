'use strict';

var ListModel = function(options) {
	return {

		itemsChanged: new Event(),

		view: options.view,
		data: [],

		initialize: function() {
			this.event = new Event();
			this.event.add(this.view.update.bind(this.view));
			this.view.initialize();
			this.view.itemDeleteClicked.add(this.onItemDeleteClicked.bind(this));
		},

		addItem: function(item) {
			this.data.push(item);
			this.event.trigger(this.data);
			this.itemsChanged.trigger(this.data);
		},

		setData: function(data) {
			this.data = data;
			this.event.trigger(data);
			this.itemsChanged.trigger(this.data);
		},

		getItems: function() {
			return this.data;
		},

		getNumberOfItems: function() {
			return this.getItems().filter(function(value) { return value !== undefined }).length;
		},

		onItemDeleteClicked: function(id) {
			delete this.data[id];
			this.event.trigger(this.data);
			this.itemsChanged.trigger(this.data);
		}

	}
};

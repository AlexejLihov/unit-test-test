'use strict';

var App = function() {
	return {

		target: $('#app'),
		data:  [ //default data
			{"name": "olga"},
			{"name": "david"},
			{"name": "mike"}
		],

		initialize: function() {
			this.list = new ListModel({
				view: new ListView()
			});
			this.list.initialize();
			this.list.itemsChanged.add(this.onListItemsChanged.bind(this));

			this.form = new FormModel({
				view: new FormView()
			});
			this.form.initialize();
			this.form.view.submitClicked.add(this.onSubmit.bind(this));

			this.count = new CountModel({
				view: new CountView()
			});
			this.count.initialize();
			this.target.append([this.form.view.$el, this.list.view.$el, this.count.view.$el]);

			this.list.setData(this.data);
		},

		onSubmit: function(data) {
			this.list.addItem({"name": data});
		},

		onListItemsChanged: function() {
			this.count.setData(this.list.getNumberOfItems());
		}

	}.initialize();
};
'use strict';

function Event() {
	return {
		deps: [],

		add: function(dep) {
			this.deps.push(dep);
		},

		remove: function(dep) {
			for( var i = 0, len = this.deps.length; i < len; i++ ) {
				if( this.deps[ i ] === dep ) {
					this.deps.splice( i, 1 );
					return true;
				}
			}
		},

		trigger: function() {
			for(var i = 0; i < this.deps.length; i++)
				this.deps[i].apply(null, arguments);
		}
	}
}
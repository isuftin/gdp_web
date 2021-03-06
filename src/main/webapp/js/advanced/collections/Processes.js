/*jslint browser: true*/
/*global Backbone*/
/*global _*/
var GDP = GDP || {};

GDP.ADVANCED = GDP.ADVANCED || {};

GDP.ADVANCED.collection = GDP.ADVANCED.collection || {};

GDP.ADVANCED.collection.Processes = Backbone.Collection.extend({
	model: GDP.ADVANCED.model.Process,
	getByName: function (name) {
		"use strict";
		
		if (!name) {
			return null;
		}
		
		var algorithm = _.filter(this.models, function (m) {
			return m.get('name') === name;
		});
		
		return _.first(algorithm);
	}
});
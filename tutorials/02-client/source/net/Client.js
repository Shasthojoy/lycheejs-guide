
lychee.define('app.net.Client').requires([
	'app.net.client.Chat',
	'app.net.client.Ping'
]).includes([
	'lychee.net.Client'
]).exports(function(lychee, global, attachments) {

	var _Chat   = lychee.import('app.net.client.Chat');
	var _Client = lychee.import('lychee.net.Client');
	var _Ping   = lychee.import('app.net.client.Ping');



	/*
	 * IMPLEMENTATION
	 */

	var Composite = function(data) {

		var settings = Object.assign({
			reconnect: 10000
		}, data);


		_Client.call(this, settings);

		settings = null;



		/*
		 * INITIALIZATION
		 */

		this.bind('connect', function() {

			this.addService(new _Chat(this));
			this.addService(new _Ping(this));

			if (lychee.debug === true) {
				console.log('app.net.Client: Remote connected');
			}

		}, this);

		this.bind('disconnect', function(code) {

			if (lychee.debug === true) {
				console.log('app.net.Client: Remote disconnected (' + code + ')');
			}

		}, this);


		this.connect();

	};


	Composite.prototype = {

		/*
		 * ENTITY API
		 */

		// deserialize: function(blob) {},

		serialize: function() {

			var data = _Client.prototype.serialize.call(this);
			data['constructor'] = 'app.net.Client';


			return data;

		}

	};


	return Composite;

});


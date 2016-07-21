
lychee.define('app.net.Server').requires([
	'app.net.remote.Chat',
	'app.net.remote.Ping'
]).includes([
	'lychee.net.Server'
]).exports(function(lychee, global, attachments) {

	var _Chat   = lychee.import('app.net.remote.Chat');
	var _Ping   = lychee.import('app.net.remote.Ping');
	var _Server = lychee.import('lychee.net.Server');



	/*
	 * IMPLEMENTATION
	 */

	var Composite = function(data) {

		var settings = Object.assign({
		}, data);


		_Server.call(this, settings);



		/*
		 * INITIALIZATION
		 */

		this.bind('connect', function(remote) {

			console.log('app.net.Server: Remote connected (' + remote.host + ':' + remote.port + ')');

			remote.addService(new _Chat(remote));
			remote.addService(new _Ping(remote));

		}, this);

		this.bind('disconnect', function(remote) {

			console.log('app.net.Server: Remote disconnected (' + remote.host + ':' + remote.port + ')');

		}, this);


		this.connect();

	};


	Composite.prototype = {

		/*
		 * ENTITY API
		 */

		// deserialize: function(blob) {},

		serialize: function() {

			var data = _Server.prototype.serialize.call(this);
			data['constructor'] = 'app.net.Server';


			return data;

		}

	};


	return Composite;

});


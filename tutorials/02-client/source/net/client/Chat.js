
lychee.define('app.net.client.Chat').includes([
	'lychee.net.client.Chat'
]).exports(function(lychee, global, attachments) {

	var _Chat = lychee.import('lychee.net.client.Chat');



	/*
	 * IMPLEMENTATION
	 */

	var Composite = function(client) {

		_Chat.call(this, 'chat', client, {
			room: 'hello-world',
			user: '@awesome'
		});

		this.bind('broadcast', function(data) {
			console.log('BROADCASTED MESSAGE', data);
		}, this);

	};


	Composite.prototype = {

		/*
		 * CUSTOM API
		 */

		hello: function(message) {

			message = typeof message === 'string' ? message : null;

			if (message !== null) {

				this.broadcast({
					message: message
				});

			}

		}

	};


	return Composite;

});


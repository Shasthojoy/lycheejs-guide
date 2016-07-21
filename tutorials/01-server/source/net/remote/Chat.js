
lychee.define('app.net.remote.Chat').includes([
	'lychee.net.remote.Chat'
]).exports(function(lychee, global, attachments) {

	var _Chat = lychee.import('lychee.net.remote.Chat');



	/*
	 * IMPLEMENTATION
	 */

	var Composite = function(remote) {

		_Chat.call(this, 'chat', remote, {
			limit: 1337 // allows 1337 users
		});

	};


	Composite.prototype = {

	};


	return Composite;

});


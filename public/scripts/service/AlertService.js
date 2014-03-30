define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.service('AlertService', 
	[
	 	function(){
			
			var hide = function() {
				$('#alertMessage').hide();
				$('#alertMessage').css('display','none');
			};
	 		
	 		
	 		function show(opts) {
	 			$.pnotify({
    title: 'Regular Notice',
    text: 'Check me out! I\'m a notice.'
});
			    var default_opts = {
			        title: "Title",
			        text: "Text",
			        addclass: "stack-bottomright",
			        stack: {"dir1":"down", "dir2":"right", "push":"top"},
			        type: 'success'
			    };

			    var o = $.extend({}, default_opts, opts || {});

			    // $.pnotify(o);
			}

	 		return {
	 			show : function(msg, success) {
	 				return show(msg, success);
	 			}
	 		};		
	 	}
	]);
});
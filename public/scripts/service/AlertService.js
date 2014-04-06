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
	 			var stack_bottomright = {"dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25};

			    var default_opts = {
			        title: "Title",
			        text: "Text",
			        addclass: "stack-bottomright",
			        stack: stack_bottomright,
			        type: 'success'
			    };
			    var o = $.extend({}, default_opts, opts || {});

			    $.pnotify(o);
			}

	 		return {
	 			show : function(msg, success) {
	 				return show(msg, success);
	 			}
	 		};		
	 	}
	]);
});
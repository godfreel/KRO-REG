define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.service('WaitDialogService', 
	[
	 	function(){
	 	
	 		var show = function() {
	 			$('#waitDialog').modal('show');
			};
			
			var hide = function() {
				$('#waitDialog').modal('hide');
			};
	 		
	 		
	 		return {
	 			show : function() {
	 				return show();
	 			},
	 			hide : function() {
	 				return hide();
	 			}
	 		};		
	 	}
	]);
});
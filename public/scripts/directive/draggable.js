define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.directive('draggable', 
	[
	 	function(){
	 		
	 		return {
	 			restrict:'A',
	 			link: function(scope, element, attrs) {
	 				element.draggable({
	 					zIndex: 999,
	 					revert: true,      
	 					revertDuration: 0  
	 				});
	 			}
	 	    };
	 	    
	 	}
	]);
});
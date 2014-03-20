define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.directive('bool', 
	[
	 	function(){
	 		
	 		return {
	 	        restrict:'E',
	 	        scope: { 
	 	        	value:'@value' 
	 	        },
	 	        template: 
	 	        	'<div>' + 
	 	        	'<span ng-if="value == \'true\'" class="glyphicon glyphicon-ok bool-true"></span>' + 
	 	        	'<span ng-if="value == \'false\'" class="glyphicon glyphicon-remove bool-false"></span>' + 
	 	        	'</div>'
				,
	 	        replace:true
	 	    };
	 	    
	 	}
	]);
});
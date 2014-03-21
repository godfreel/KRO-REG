define(['appModule'], function(RMT)
{
	RMT.lazy.controller('CompetitionsURLController', 
	[
	 	'$scope',
	 	'l10n',

	 	function($scope, l10n){
	 		
			l10n.init();
	 	}
	 	
	]);
});
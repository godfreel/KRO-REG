define(['appModule'], function(app)
{
    app.lazy.service('l10n',
    [
        function(){
	
			var container = ".contentContainer";
			
			var initI18n = function() {
				
				var options =  { 
						resGetPath: 'scripts/locales/__lng__/__ns__.json', 
						fallbackLng: false} ;
				i18n.init(options).done(function() {
					$(container).i18n();
				});
			}
			var change = function(local) {
				i18n.init({ lng: local }).done(function() {
					$(container).i18n();
				});
			}
			return {
				init : function() {
					return initI18n();
				},
				changeLocal : function(local) {
					return change(local);
				}
			};
			
		}
    ]);
});
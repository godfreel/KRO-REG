define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.service('AlertService', 
	[
	 	function(){
	 	
	 		var show = function(msg, success) {
	 			/*
	 			var messages = msg.split(";");
	 			if (success === undefined) {
	 				success = true;
	 			}
	 			
	 			var localedMessages;
	 			
	 			for(var i = 0; i < messages.length){
	 				localedMessages += i18n.t(messages[i]) + "\n\r";
	 			}*/
	 			 
	 			var msg = i18n.t(msg);
	 			
				$('#alertMessage').html(msg);
				
				if (success) {
					$('#alertMessage').addClass('alert-success').removeClass('alert-danger');
				} else {
					$('#alertMessage').addClass('alert-danger').removeClass('alert-success');
				}
				
				$('#alertMessage').css('display','inline-block');
				$('#alertMessage').show();
				setTimeout(function() { 
					hide(); }, 2500);
			};
			
			var hide = function() {
				$('#alertMessage').hide();
				$('#alertMessage').css('display','none');
			};
	 		
	 		
	 		return {
	 			show : function(msg, success) {
	 				return show(msg, success);
	 			}
	 		};		
	 	}
	]);
});
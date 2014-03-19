RequestModule = {

	sendFormData: function(url, method, form, callback) {

		$.ajax({
	      url: url,
	      method: method,
	      data: form
	    })
	    .done(callback);
    }

}
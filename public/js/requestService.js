RequestModule = {

	sendFormData: function(url, method, form, callback) {

		var formData = form.serialize();
		

		formData.login = user.login;

		console.log(user);
		console.log(formData);

        $.ajax({
	      url: url,
	      method: method,
	      data: formData
	    })
	    .done(callback);
    }

}
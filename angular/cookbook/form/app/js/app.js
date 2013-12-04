var FormController = function($scope){
	var user = $scope.user = {
		name : "Bon Jovi",
		address : {
			line1 : "221B Baker Street",
			city : "Liverpool",
			state : "Merseyside",
			zip : "12345"
		},
		contacts : [
			{
				type : "phone",
				value : "18273183"
			}
		]
	}

	$scope.addContact = function(){
		user.contacts.push({type : "email", value : ""});
	}

	$scope.removeContact = function(contact){
		for (var i = 0, ii = user.contacts.length; i < ii; i++) {
			if (contact === user.contacts[i]) {
				$scope.user.contacts.splice(i, 1);
			}
		}
	}
}
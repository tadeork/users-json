var fs = require('fs');
var faker = require('faker');

function generateUsers() {
	var users = [];
	var posts = [];

	for (var id = 0; id < 20; id++) {
		var lastName = faker.name.lastName();
		var firstName = faker.name.firstName();
		var email = faker.internet.email();
		var userName = faker.internet.userName();
		var avatar = faker.image.avatar();

		for (var postId = 0; postId < 10; postId++) {
			var contentPost = faker.lorem.paragraph();

			posts.push({
				"post_id": postId,
				"content": contentPost,
				"likes": '0'
			});
		}

		users.push({
			"id": id,
			"first_name": firstName,
			"last_name": lastName,
			"email": email,
			"user_name": userName,
			"password": "123abc",
			"avatar": avatar,
			"posts": posts,
			"friends": []
		});

		posts = [];
	}
	fs.writeFile('data.json', JSON.stringify(users), (err) => {
		if (err) throw err;
		console.log('Usuarios creados! \nVer archivo data.json');
	});

}

generateUsers();

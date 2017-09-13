var fs = require('fs');
var faker = require('faker');

function generateUsers() {
	var users = [];
	var posts = [];

	for (var id = 0; id < 5; id++) {
		var data = {};
		data.lastName = faker.name.lastName();
		data.firstName = faker.name.firstName();
		data.email = faker.internet.email();
		data.userName = faker.internet.userName();
		data.password = '123abc';
		data.avatar = faker.image.avatar();
		data.friends = [];

		for (var postId = 0; postId < 3; postId++) {
			content = {};
			content.contentPost = faker.lorem.paragraph();
			content.id = postId;
			content.likes = 0;
			posts.push(content);
		}
		data.posts = posts;
		users.push(data);
		posts = [];
	}
	return {"users": users};
}

fs.writeFile('data.json', JSON.stringify(generateUsers()), (err) => {
	if (err) throw err;
	console.log('Usuarios creados! \nVer archivo data.json');
});

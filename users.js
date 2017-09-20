var fs = require('fs');
var faker = require('faker');

function generateUsers() {
	var users = [];
	var posts = [];

	for (var id = 0; id < 5; id++) {
		var user = {};
		user.id = id;
		user.lastName = faker.name.lastName();
		user.firstName = faker.name.firstName();
		user.email = faker.internet.email();
		user.userName = faker.internet.userName();
		user.password = '123abc';
		user.avatar = faker.image.avatar();
		user.friends = [];

		for (var postId = 0; postId < 3; postId++) {
			post = {};
			post.id = postId;
			post.contentPost = faker.lorem.paragraph();
			post.likes = 0;
			post.created = faker.date.past();
			posts.push(post);
		}
		user.posts = posts;
		users.push(user);
		posts = [];
	}
	return {"users": users};
}

fs.writeFile('data.json', JSON.stringify(generateUsers()), (err) => {
	if (err) throw err;
	console.log('Usuarios creados! \nVer archivo data.json');
});

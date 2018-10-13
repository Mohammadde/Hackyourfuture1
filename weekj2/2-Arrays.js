let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log("favoriteAnimals : " + favoriteAnimals);
favoriteAnimals.push("turtle");
console.log("favoriteAnimals after adding turtle to the end : " + favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log("favoriteAnimals after adding meerkat at index 1 : " + favoriteAnimals);
console.log("The array has a length of : " + favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log("favoriteAnimals after deleting giraffe at index 3 is : " + favoriteAnimals);
var meerkat_index = favoriteAnimals.indexOf("meerkat");
console.log("The item 'meerkat' that you are looking for is at the index: " + meerkat_index);
favoriteAnimals.splice(meerkat_index,1)
console.log("favoriteAnimals after deleting meerkat is : " + favoriteAnimals);
function translatePigLatin(str){
	return str
	.replace(/^[aeiouy](.*)/,`$1$2way`)
	.replace(/^([^aeiouy]+)(.*)/,`$2$1ay`);
}console.log(translatePigLatin("i am driving the owl "));

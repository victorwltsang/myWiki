$(document).ready(function() {

});
$(".search").submit(function(event) {
	var query = $(".bar").val();
	$(".main").remove();
	$(".footer").remove();
	$(".topSearch").show();
	console.log(query);
	event.preventDefault();
	wikiCall(query);
});
$(".miniSearch").submit(function(event) {
	$(".wiki").empty();
	var query = $(".topBar").val();
	console.log(query);
	event.preventDefault();
	wikiCall(query);
});

function wikiCall(query) {
	$.getJSON(
		"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exchars=205&exlimit=20&exintro=1&explaintext=1&gsrsearch=" +
		query + "&gsrlimit=15&callback=?", function(response) {
			var pages = response.query.pages;
			console.log(pages);
			var pageList = "";
			for (var x in pages) {
				// console.log(pages[x].title);
				// console.log(pages[x].extract);
				// console.log(`https://en.wikipedia.org/?curid=${pages[x].pageid}`);
				pageList += "<li><a href ='https://en.wikipedia.org/?curid=" + pages[x].pageid + "' target='_blank'>" + "<span>" +
					"<strong>" + pages[x].title + "</strong>" + "<br/>" + pages[x].extract + "<br/><br/>" + "</span></a></li>";
				console.log(pageList);
			}
			$(".wiki").append(pageList);
		});
}

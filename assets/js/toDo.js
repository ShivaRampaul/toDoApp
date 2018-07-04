var newToDo = "";
$("input").on("keypress", function(event) {
	if(event.which === 13) {
		//grabbing new todo text
		newToDo = $(this).val();
		//upercase first letter of eaach word
		newToDo = upperFirstLtr(newToDo);
		//add value to ul
		$("ul").append("<li><span class=\"deleteBtn\"><i class=\"fas fa-trash\"></i></span> " + newToDo + "</li>");
		//clear input field
		$(this).val(" ");
	}
});
//toggle gray and line through if todo is completed
$("ul").on("click", "li", function(event) {
	$(this).toggleClass("checked");
});

$("ul").on("click", ".deleteBtn", function() {
	$(this).parent().fadeOut(200, function() {
		$(this).remove();
	});
	event.stopPropagation();

});

$(".fa-plus").on("click", function() {
	$("input").fadeToggle();
})

function upperFirstLtr(str) {
	var finalStr = "";
	finalStr += str[0].toUpperCase();
	for(var i = 1; i < str.length; i++){
		finalStr += str[i];
	}
	return finalStr;
}
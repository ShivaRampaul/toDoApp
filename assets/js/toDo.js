var newToDo = "";
$("input").on("keypress", function(event) {
	if(event.which === 13) {
		//grabbing new todo text
		newToDo = $(this).val();
		//add value to ul
		$("ul").append("<li><span class=\"deleteBtn\">x</span> " + newToDo + "</li>");
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
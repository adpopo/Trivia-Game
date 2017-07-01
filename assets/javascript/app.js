//holder var
var timerDisplay;
var correct = 0;
// main game object
var game = {

	//question array
	//array of objects
	//each object contains:
	//q = text for question
	//a-d = possible answers
	//i = value for correct answer
	questions: [
		{
			q: "Who coded this?",
			a: "You did",
			b: "Hoang did",
			c: "She did it",
			d: "Idk man"
		},
		{
			q: "Are you sure?",
			a: "Maybe",
			b: "No",
			c: "Yes",
			d: "....what?"
		},
		{
			q: "What grade should I get?",
			a: "A",
			b: "B",
			c: "C",
			d: "F"
		}],

	
	//current time left
	time: "10",
	results: [],
	nowAsking: 0,

	//function - timer
	timer : function(){
		$("#timer").html(game.time);
		timerDisplay = setInterval( game.displayTime, 1000 );
	},

	//function - timer display
	displayTime : function(){
		if(game.time == 0){
			game.timeUp();
		}

		else{
			//display time
			game.time--;
			$("#timer").html(game.time);
		}
	},

	//function - show question
	displayQuestions : function(questions){
	//print question 1
	$("#contents").append("<h2>" + questions[0].q + "</h2><br>");
	//print options
	$("#contents").append("<input type='radio' name='1' value='0'> "	+ questions[0].a +
		"<br><input type='radio' class='correct' name='1' value='1'>" + questions[0].b +
		"<br><input type='radio' name='1' value='0'>" + questions[0].c +
		"<br><input type='radio' name='1' value='0'>" + questions[0].d +"<br>"
		);

	//print question 2
	$("#contents").append("<h2>" + questions[1].q + "</h2><br>");
	//print options
	$("#contents").append("<input type='radio' name='2' value='0'> "	+ questions[1].a +
		"<br><input type='radio' name='2' value='0'>" + questions[1].b +
		"<br><input type='radio' class='correct' name='2' value='1'>" + questions[1].c +
		"<br><input type='radio' name='2' value='0'>" + questions[1].d + "<br>"
		);

	//print question 3
	$("#contents").append("<h2>" + questions[2].q + "</h2><br>");
	//print options
	$("#contents").append("<input type='radio' class='correct' name='3' value='1'> "	+ questions[2].a +
		"<br><input type='radio' name='3' value='0'>" + questions[2].b +
		"<br><input type='radio' name='3' value='0'>" + questions[2].c +
		"<br><input type='radio' name='3' value='0'>" + questions[2].d +"<br>"
		);
	},

	//timeup
	timeUp : function(){
		//stop time
		clearInterval(timerDisplay);
		//calculate results
		if(parseInt($('input[name=1]:checked').val()) > 0)
			correct += parseInt($('input[name=1]:checked').val());

		if(parseInt($('input[name=2]:checked').val()) > 0)
		correct += parseInt($('input[name=2]:checked').val());

		if(parseInt($('input[name=3]:checked').val()) > 0)
		correct += parseInt($('input[name=3]:checked').val());

		//show results
		$("#contents").empty();
		$("#contents").append("<h2>Number Correct: " + correct + "</h2><br>");
		$("#contents").append("<h2>Number Incorrect: " + (3-correct) + "</h2>");
	}
};

$("#startBtn").click(function() {
	$("#contents").empty();
	game.timer();
	game.displayQuestions(game.questions);
});
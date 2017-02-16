//holder var
var timerDisplay;

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
			q: txt,
			a: txt,
			b: txt,
			c: txt,
			d: txt,
			i: "a"
		},
		{
			q: txt,
			a: txt,
			b: txt,
			c: txt,
			d: txt,
			i: "a"
		},
		{
			q: txt,
			a: txt,
			b: txt,
			c: txt,
			d: txt,
			i: "a"
		},
		{
			q: txt,
			a: txt,
			b: txt,
			c: txt,
			d: txt,
			i: "a"
		},
		{
			q: txt,
			a: txt,
			b: txt,
			c: txt,
			d: txt,
			i: "a"
		}],

	
	//current time left
	time: "30",
	results: [],
	nowAsking: 0,

	//function - timer
	timer : function(){
		timerDisplay = setInterval( displayTime, 1000 );
	},

	//function - timer display
	displayTime : function(){
		if(game.time == 0){
			game.timeUp();
		}

		else{
			//display time
			game.time--;
		}
	},

	//function - timer pause
	pauseTime : function(){
		clearInterval(timerDisplay);
	},

	//function - timer reset
	resetTime : function(){
		game.time = 30;
		//display time
	},

	//function - show question
	displayQuestion : function(question){
		//print question
		//print options
	}

	//function - display action for mouse hover
	onHover : function(){
		//display hover
	},

	//function - check answer
	onClick : function(answer){
		game.pauseTime();
		if(answer == questions[nowAsking].i){
			game.correct();
		}
		else{
			game.inCorrect();
		}
	},

	//correct display
	correct : function(){
		//display correct
		game.resetTime;
		if(nowAsking==4){
			game.endGame();
		}
		else{
		var timeEvent = setTimeout(displayQuestion, delay);
		}
	}

	//incorrect display
	inCorrect : function(){
		//display incorrect
		//reset
		//countdown
			//newgame
	}

	//timeup
	timeUp : function(){
		//display time up
		//reset
		//countdown
			//newgame
			//if out of questions, end game
	}

	//answered last question
	endGame : function(){
		//display results
	}

};
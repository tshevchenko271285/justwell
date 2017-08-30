
var motions = {};

/*	
**	The function adds values ​​to the table 
**  and fills up the object
*/
$('#addNewMove').on('click', addMove);
function addMove(){

	var form = $('#moveForm')[0];

	var cntRowTable = $('#tableMove tr').length;
	var direction = form.direction.value;
	var duration = form.duration.value*1;
	var cntRowMotions = cntRowTable-1;

	motions[cntRowMotions] = {
		cntRowTable: cntRowTable,
		direction: direction,
		duration: duration
	};

	$('#tableMove')
		.append(
			'<tr><td>'+cntRowTable+
			'</td><td>'+direction+
			'</td><td>'+duration+
			'</td><td>edit, delete </td></tr>'
			);
}


/*	
**	The function determines the direction 
**	and calls the corresponding function
*/	
$("#play").on('click', animation); 
function animation(){
	var canvas = $( "#canvas" );
	var square = $( "#square" );

	var position = {
		position: 'absolute',
		top: $(square)[0]['offsetTop'],
		left: $(square)[0]['offsetLeft']
	};
  	square.css(position);

  	for(move in motions) {
  		switch(motions[move]['direction']) {
  			case 'left': 
  				if(border($('#square'), 'left'))
  				leftSquare(square, motions[move]['duration']);
  				break;

  			case 'right': 
  				if(border($('#square'), 'right'))
  				rightSquare(square, motions[move]['duration']);
  				break;

  			case 'top': 
				if(border($('#square'), 'top'))
  				topSquare(square, motions[move]['duration']);
  				break;

  			case 'bottom': 
  				if(border($('#square'), 'bottom'))
  				bottomSquare(square, motions[move]['duration']);
  				break;

  			default: break;
  		}

  	}

}


/*
**	Wrapper functions 
**	for moving a square
*/
function leftSquare(obj, duration){
	console.log('x');
	obj.animate({
		left: "-=10"
	}, duration);
};
function rightSquare(obj, duration){
	obj.animate({
		left: "+=10"
	}, duration);
};
function bottomSquare(obj, duration){
	obj.animate({
		top: "+=10"
	}, duration);
};
function topSquare(obj, duration){
	obj.animate({
		top: "-=10"
	}, duration);
};



function border(obj, param){

	var result = true;

	var topObj = $(obj)[0]['offsetTop'];
	var leftObj = $(obj)[0]['offsetLeft'];

	var widthObj = $(obj)[0]['offsetWidth'];
	var heightObj = $(obj)[0]['offsetHeight'];

	var parent = $(obj).parent();

	var parentLeft = parent[0]['offsetLeft'];
	var parentRight = parent[0]['offsetWidth'] - parentLeft;
	var parentTop = parent[0]['offsetTop'];
	var parentBottom = parent[0]['offsetHeight'] + parentTop - heightObj*2;
	console.log(parentTop);
	switch(param) {
		case 'left':
			if(leftObj <= parentLeft) 
			result = false;
		case 'right':
			if(leftObj >= parentRight)
			result = false;
		case 'top':
			if(topObj <= parentTop)
			result = false;
		case 'bottom':
			if(topObj >= parentBottom)
			result = false;
	}
	return result;

}


echo "# justwell" >> README.md
git init
git add README.md
git commit -m "First commit"
git remote add tima https://github.com/tshevchenko271285/justwell.git
git push -u tima master

git remote add tima https://github.com/tshevchenko271285/justwell.git
git push -u tima master
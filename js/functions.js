
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
	buildTable();
	deleteMove();
}


function buildTable(){
	var table = $('#tableMove');
	var rows = $('[data-row]');
	if(rows.length > 0) {
		rows.remove();
	}
	for(element in motions){
		table.append(
			'<tr data-row='+motions[element]['cntRowTab']+
			'><td>'+motions[element]['cntRowTable']+
			'</td><td>'+motions[element]['direction']+
			'</td><td>'+motions[element]['duration']+
			'</td><td data-edit="'+motions[element]['cntRowTab']+'"">edit</td>'+
			'<td data-delete="'+motions[element]['cntRowTab']+'"">delete</td></tr>'
		);
	};
}


function deleteMove(){
	var editBtn = $('[data-delete]');
	editBtn.each(function(index, element){
		$(element).on('click', function(){
			delete motions[index];
			buildTable();
		});
	});
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
**	Defining the border 
**	of the parent element
*/
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


/*
**	Wrapper functions 
**	for moving a square
*/
function leftSquare(obj, duration){
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





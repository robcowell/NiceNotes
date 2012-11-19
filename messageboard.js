var MAX_LEFT = 600;
var MIN_LEFT = 10;
var MAX_TOP = 350;
var MIN_TOP = 10;

function getRandomInt (min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLeft()
{
	return getRandomInt(MIN_LEFT, MAX_LEFT);
}

function getRandomTop()
{
	return getRandomInt(MIN_TOP, MAX_TOP);
}

function getRandomAngle()
{
	return getRandomInt(-30,30);
}

function IErotate (iDeg)
{
	// Convert degress to radians
	var rad = iDeg * (Math.PI * 2 / 360);
	
	// Matrix transformations - ugh
	var costheta = Math.cos(rad);
	var sintheta = Math.sin(rad);
	var M11 = costheta;
	var M12 = -sintheta;
	var M21 = sintheta;
	var M22 = costheta;

	// Use results to craft the filter parameter string
	return "progid:DXImageTransform.Microsoft.Matrix(M11=" + M11 + ",M12=" + M12 + ",M21=" + M21 + ",M22=" + M22 + ", sizingMethod='auto expand');";	
}

//IE version detection script :-)
var ie = (function()
{
	var undef,
    v = 3,
    div = document.createElement('div'), all = div.getElementsByTagName('i');
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : undef;
}());

function GetNotes()
{
	var notes = store.getAll();
	for(var note in notes)		
	{
		$("<div class='note'><p><br>" + store.get(note).body + "</p></div>").css({'position':'absolute','left':getRandomLeft()+'px','top':getRandomTop()+'px','-webkit-transform':'rotate('+getRandomAngle()+'deg)','-moz-transform':'rotate('+getRandomAngle()+'deg)','-ms-transform':'rotate('+getRandomAngle()+'deg)'}).draggable({ containment: '.pinBoard', stack: '.note' }).appendTo('.pinBoard');
	}
}

function GetNotesIEFilter()
{
	var notes = store.getAll();
	for(var note in notes)	
	{
		$("<div class='note'><p><br>" + store.get(note).body + "</p></div>").css({'position':'absolute','filter':IErotate(getRandomAngle()),'left':getRandomLeft()+'px','top':getRandomTop()+'px'}).draggable({ containment: '.pinBoard', stack: '.note' }).appendTo('.pinBoard');
	}
}


function addNote()
{
	var value = $(".noteInput").val();
	var noteId = "note_" + uuid.v4();
	store.set(noteId, {name: noteId, body: value});
	var note = store.get(noteId);
	if (ie < 9)
	{
		$("<div class='note'><p><br>" + note.body + "</p></div>").css({'position':'absolute','filter':IErotate(getRandomAngle()),'left':getRandomLeft()+'px','top':getRandomTop()+'px'}).draggable({ containment: '.pinBoard', stack: '.note' }).appendTo('.pinBoard');
	}
	else
	{
		$("<div class='note'><p><br>" + note.body + "</p></div>").css({'position':'absolute','left':getRandomLeft()+'px','top':getRandomTop()+'px','-webkit-transform':'rotate('+getRandomAngle()+'deg)','-moz-transform':'rotate('+getRandomAngle()+'deg)','-ms-transform':'rotate('+getRandomAngle()+'deg)'}).draggable({ containment: '.pinBoard', stack: '.note' }).appendTo('.pinBoard');
	}
}

$(document).ready(function()
{
	if (ie < 9)
	{
		GetNotesIEFilter()
	}
	else
	{
		GetNotes();
	}
});
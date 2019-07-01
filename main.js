const countries = [{
	"value": "US",
	"label": "US",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"value": "CA",
	"label": "CA",
	"emailOptin": "OptionalPreselected",
	"mailOptin": "OptionalPreselected",
	"smsOptin": "Optional"
}, {
	"value": "MI",
	"label": "MI",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}];

for(i in countries){
document.write("<br>");
document.write("object : "+i+"<br>");
document.write("value : "+countries[i].value+"<br>");
document.write("emailOptin : "+countries[i].emailOptin+"<br>");
document.write("mailOptin : "+countries[i].mailOptin+"<br>");
document.write("smsOptin : "+countries[i].smsOptin+"<br>");
}



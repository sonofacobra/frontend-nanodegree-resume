var bio = {
	"name" : "Ryan Overfelt",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "404-862-6882",
		"email" : "overfelt@bellsouth.net",
		"github" : "sonofacobra",
		"location" : "Fort Worth"
	},
	"welcomeMessage" : "Do or do not, there is no try.",
	"skills" : ["These", "are", "my", "skills"]
}

var work = {
	"jobs" : [
	{
	"title" : "Flow Builder",
	"employer" : "AT&T",
	"dates" : "July 2014 - Present",
	"location" : "Fort Worth",
	"description" : "Build flows in proprietary builder utilizing HTML/CSS/JS/jQuery used by call center agents to provide consistant and efficient trouble shooting of customer issues."
	},
	{
	"title" : "NCCO Manager",
	"employer" : "AT&T",
	"dates" : "July 2009 - July 2014",
	"location" : "Atlanta",
	"description" : "Provide client side outage support for 80+ call centers (Internal and External) around the world."
	},
	{
	"title" : "WFM Manager",
	"employer" : "AT&T",
	"dates" : "February 2007 - July 2009",
	"location" : "Atlanta",
	"description" : "Perform work force management (call routing, agent skills, etc) for 80+ call centers (Internal and External) around the world."
	}
	]
}

var education = {
	"schools" : [
	{
		"name" : "University of Phoenix",
		"location" : "Phoenix",
		"degree" : "BA",
		"majors" : "Business Administration",
		"dates" : "2002"
	},
	{
		"name" : "Georgia Technical Institute of Technology",
		"location" : "Atlanta",
		"degree" : "N/A",
		"majors" : "Aerospace Engineering",
		"dates" : "N/A"
	}

	],
	"onlineCourses" : [
	{
		"title" : "",
		"school" : "",
		"dates" : "",
		"url" : ""
	},
	{
		"title" : "",
		"school" : "",
		"dates" : "",
		"url" : ""
	}
	]
}

var projects = {
"projects" : [
	{
		"title" : "",
		"dates" : "",
		"description" : "",
		"images" : ""
	},
	{
		"title" : "",
		"dates" : "",
		"description" : "",
		"images" : ""
	}
	]
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
    	var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

// International name button
// function inName(name) {
//	name = name.trim().split(" ");
//	console.log(name);
//	name[1] = name[1].toUpperCase;
//	name[0] = name[0].slice(0.1).toUpperCase() + name[0].slice(1).toLowerCase();
//
//	return name[0] + " " + name[1];
// }
// $("#main").append(internationalizeButton);
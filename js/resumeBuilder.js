//create bio object
var bio = {
	"name" : "Ryan Overfelt",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "404-862-6882",
		"email" : "overfelt@bellsouth.net",
		"github" : "sonofacobra",
		"location" : "Fort Worth"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMessage" : "Do or do not, there is no try.",
	"skills" : ["These", "are", "my", "skills"]
}

//create work object
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

//create education object
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

//create projects object
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
//Place bio data (except for skills) in place of html placeholders
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedContactsWelcomeMSG = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedContactsWelcomeMSG);

var formattedContactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedContactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedContactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedContactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedContactsMobile);
$("#topContacts").append(formattedContactsEmail);
$("#topContacts").append(formattedContactsGithub);
$("#topContacts").append(formattedContactsLocation);

//Place skills from bio object in place of html placeholders
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

//Place data from work object in place of html placeholders
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

//Enables logging of mouse click locations on page
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//do not remember
function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
    	var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

//Place data from projects object in place of html placeholders
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLProjectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}	
projects.display();

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
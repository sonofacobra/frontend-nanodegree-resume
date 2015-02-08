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
	"welcomeMessage" : "Do or do not, there is no try.",
	"skills" : ["HTML", "CSS", "JavaScript", "jQuery"],
	"bioPic" : "images/fry.jpg"
}

//create education object
var education = {
	"schools" : [
	{
		"name" : "University of Phoenix",
		"location" : "Phoenix",
		"degree" : "BA",
		"majors" : "Business Administration",
		"dates" : "2002",
		"url" : "https://www.udacity.com/course/ud304"
	},
	{
		"name" : "Georgia Technical Institute of Technology",
		"location" : "Atlanta",
		"degree" : "N/A",
		"majors" : "Aerospace Engineering",
		"dates" : "N/A",
		"url" : "https://www.udacity.com/course/ud304"
	}

	],
	"onlineCourses" : [
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"date" : "2014",
		"url" : "https://www.udacity.com/course/ud304"
	},
	{
		"title" : "How to Use Git and GitHub",
		"school" : "Udacity",
		"date" : "2015",
		"url" : "https://www.udacity.com/course/ud775-nd"
	}
	],
	//Place data from eductation object in place of html placeholders
	display : function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedName);
			$(".education-entry:last").append(formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajors);
		}
		$("#education").append(HTMLonlineClasses);
		
		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedonlineTitle);
			$(".education-entry:last").append(formattedonlineSchool);
			$(".education-entry:last").append(formattedonlineDates);
			$(".education-entry:last").append(formattedonlineURL);
		}
	}
}

//create work object
var work = {
	"jobs" : [
	{
	"employer" : "AT&T",
	"title" : "Flow Builder",
	"location" : "Fort Worth",
	"dates" : "July 2014 - Present",
	"description" : "Build flows in proprietary builder utilizing HTML/CSS/JS/jQuery used by call center agents to provide consistant and efficient trouble shooting of customer issues."
	},
	{
	"employer" : "AT&T",
	"title" : "NCCO Manager",
	"location" : "Atlanta",
	"dates" : "July 2009 - July 2014",
	"description" : "Provide client side outage support for 80+ call centers (Internal and External) around the world."
	},
	{
	"employer" : "AT&T",
	"title" : "WFM Manager",
	"location" : "Atlanta",
	"dates" : "February 2007 - July 2009",
	"description" : "Perform work force management (call routing, agent skills, etc) for 80+ call centers (Internal and External) around the world."
	}
	],
	//Place data from work object in place of html placeholders
	display : function() {
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
}

//create projects object
var projects = {
	"projects" : [
		{
			"title" : "Mockup to Website",
			"dates" : "January 2015",
			"description" : "Using a PDF mockup o a website, we had to create a website from scratch that matched the mockup as closely as possible using HTML and CSS.",
			"images" : ["images/P1.png"]
		},
		{
			"title" : "Interactive Resume",
			"dates" : "February 2015",
			"description" : "Utilizing JavaScript (JSON Objects, Functions, Arrays, and Loops) along with jQuery to create our resume on a prebuilt template.",
			"images" : ["images/P1.png"]
		}
		],
//Place data from projects object in place of html placeholders
	display : function() {
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
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}	
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

//Display data
projects.display();
education.display();
work.display();

//Add google map
$("#mapDiv").append(googleMap);

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
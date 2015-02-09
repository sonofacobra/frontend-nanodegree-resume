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
	"bioPic" : "images/fry.jpg",
//Place bio data (except for skills) in place of html placeholders
	display : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName + formattedRole);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);

		var formattedContactsWelcomeMSG = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedContactsWelcomeMSG);

		var formattedContactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedContactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedContactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedContactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var all = formattedContactsMobile + formattedContactsEmail + formattedContactsGithub + formattedContactsLocation;
		$("#topContacts, #footerContacts").append(all);

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
	}
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

			var sku = education.schools[school];
			var formattedName = HTMLschoolName.replace("%data%", sku.name);
			var formattedLocation = HTMLschoolLocation.replace("%data%", sku.location);
			var formattedDegree = HTMLschoolDegree.replace("%data%", sku.degree);
			var formattedMajors = HTMLschoolMajor.replace("%data%", sku.majors);
			var formattedDates = HTMLschoolDates.replace("%data%", sku.dates);
			$(".education-entry:last").append(formattedName + formattedDegree);
			$(".education-entry:last").append(formattedDates + formattedLocation);
			$(".education-entry:last").append(formattedMajors);
		}
		$("#education").append(HTMLonlineClasses);
		
		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var onl = education.onlineCourses[onlineCourse];
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onl.title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onl.school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", onl.date);
			var formattedonlineURL = HTMLonlineURL.replace("%data%", onl.url);
			$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
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
	
			var emp = work.jobs[job];
			var formattedEmployer = HTMLworkEmployer.replace("%data%", emp.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", emp.title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", emp.dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", emp.location);
			var formattedDescription = HTMLworkDescription.replace("%data%", emp.description);
			$(".work-entry:last").append(formattedDates + formattedLocation);
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

			var pro = projects.projects[project];
			var formattedTitle = HTMLprojectTitle.replace("%data%", pro.title);
			var formattedDates = HTMLprojectDates.replace("%data%", pro.dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", pro.description);
			$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}	
}

//Display all data
projects.display();
education.display();
work.display();
bio.display();

//jQuery to toggle Work/Projects/Education/Map when clicked on
//These sections are hidden by default due to changes I made to CSS
//I also added a class to the Online Class title var within the helper.js file for ease of toggle
$("#education").click(function(){
	$(".education-entry").toggle();
	$("#classH3").toggle();
});
$("#workExperience").click(function(){
	$(".work-entry").toggle();
});
$("#projects").click(function(){
	$(".project-entry").toggle();
});

//Add google map
$("#mapDiv").append(googleMap);

//Enables logging of mouse click locations on page
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//return statement quiz
//function locationizer(work_obj) {
//var locationArray = [];
//for (job in work_obj.jobs) {
//var newLocation = work_obj.jobs[job].location;
//locationArray.push(newLocation);
//}
//return locationArray;
//}

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
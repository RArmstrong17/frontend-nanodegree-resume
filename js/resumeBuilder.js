  //Bio object to iterate through.
  var bio = {
    "role": "Web Developer",
    "name": "Rich Armstrong",
    "contacts": {
      "mobile": "123-456-7890",
      "email": "ric**11@gmail.com",
      "github": "https://github.com/RArmstrong17",
      "twitter": "N/A",
      "location": "Ronkonkoma, NY"
    },
    "welcomeMessage": "Welcome to my resume!",
    "biopic": "images/fry.jpg",
    "skills": {
      "one": "Ruby",
      "two": "HTML",
      "three": "CSS"
    },
  };

  //education object with nested array.
  var education = {
    "schools": [{
      "name": "Sachem High Scool",
      "location": "Lake Ronkonkoma, NY",
      "degree": "High School",
      "majors": "N/A",
      "dates": "09/06-06/10",
      "url": "sachem.edu"
    },{
      "name": "SUNY Geneseo",
      "location": "Geneseo, NY",
      "degree": "B.A.",
      "majors": "Psychology",
      "dates": "08/10-12/14",
      "url": "geneseo.edu"
    }],
    "onlineCourses": {
      "title": "Ruby",
      "school": "Udacity",
      "date": "02/16-05/16",
      "url": "Udacity.com"
    },
  };

  //work oject.
  var work = {
    "jobs": {
      "employer": "Friedman Law Associates PC",
      "title": "Accountant",
      "location": "Hauppauge, NY",
      "dates": "03/15-present",
      "description": "Keep track of financial records."
    },
  };

  //projects object.
  var projects = {
    "projects": {
      "title": "Site Portfolio",
      "dates": "05/16",
      "description": "Portfolio of previous work.",
      "images": "images/portfolio.png"
    },
  };

  //bio variables to be appended.
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedMobile = HTMLmobile.replace("%contact%", "mobile").replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%contact%", "Email").replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%contact%", "Twitter").replace("%data%", bio.contacts.twitter);
  var formattedGit = HTMLgithub.replace("%contact%", "Github").replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%contact%", "Location").replace("%data%", bio.contacts.location);
  var formattedSkillone = HTMLskills.replace("%data%", bio.skills.one);
  var formattedSkilltwo = HTMLskills.replace("%data%", bio.skills.two);
  var formattedSkillthree = HTMLskills.replace("%data%", bio.skills.three);

  //bio variables to be appended.
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer)
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs.dates);
  var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs.location);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs.description);

  //school variables to be appended.
  var formattedOlName = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
  var formattedOlSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
  var formattedOlDate = HTMLonlineDates.replace("%data%", education.onlineCourses.date);
  var formattedOlURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);

  //projects variables to be appended.
  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
  var formattedDates = HTMLprojectDates.replace("%data%", projects.projects.dates);
  var formattedProDescription = HTMLprojectDescription.replace("%data%", projects.projects.description);
  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects.images);

  bio.display = function() {
    for (var key in bio) {
      if (key === "name") {
        $("#header").prepend(formattedName);
      } else if (key === "role") {
        $("#header").prepend(formattedRole);
      } else if (key === "welcomeMessage") {
        $("#header").append(formattedMessage);
      } else if (key === "biopic") {
        $("#header").append(formattedPicture);
      } else if (key === "contacts") {
          $("#topContacts").append(formattedMobile);
          $("#footerContacts").append(formattedMobile);
          $("#topContacts").append(formattedEmail);
          $("#footerContacts").append(formattedEmail);
          $("#topContacts").append(formattedGit);
          $("#footerContacts").append(formattedGit);
          $("#topContacts").append(formattedTwitter);
          $("#footerContacts").append(formattedTwitter);
          $("#topContacts").append(formattedLocation);
          $("#footerContacts").append(formattedLocation);
      } else if (key === "skills") {
          $("#header").append(HTMLskillsStart);
          $("#skills").append(formattedSkillone);
          $("#skills").append(formattedSkilltwo);
          $("#skills").append(formattedSkillthree);
      }
    };
  };
  bio.display();

  work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedDescription);
  };
  work.display();

  education.display = function () {
    $("#education").append(HTMLschoolStart);
    for (var key in education) {
      if (key === "schools") {
        for (var k = 0; k < education.schools.length; k++) {
          var formattedName = HTMLschoolName.replace("%data%", education.schools[k].name);
          $(".education-entry:last").append(formattedName);
          var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[k].degree);
          $(".education-entry:last").append(formattedDegree);
          var formattedDates = HTMLschoolDates.replace("%data%", education.schools[k].dates);
          $(".education-entry:last").append(formattedDates);
          var formattedEducLocation = HTMLschoolLocation.replace("%data%", education.schools[k].location);
          $(".education-entry:last").append(formattedEducLocation);
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[k].majors);
          $(".education-entry:last").append(formattedMajor);
        };
      } else if (key === "onlineCourses") {
        $(".education-entry:last").append(HTMLonlineClasses);
        $(".education-entry:last").append(formattedOlName);
        $(".education-entry:last").append(formattedOlSchool);
        $(".education-entry:last").append(formattedOlDate);
        $(".education-entry:last").append(formattedOlURL);
      };
    };
  };
  education.display();

  projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedProDescription);
    $(".project-entry:last").append(formattedImage);
  };
  projects.display();

  $("#mapDiv").append(googleMap);

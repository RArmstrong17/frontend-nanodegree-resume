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
    "skills": [
      "Ruby",
      "HTML",
      "CSS"
    ],
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
    "jobs": [{
      "employer": "Friedman Law Associates PC",
      "title": "Accountant",
      "location": "Hauppauge, NY",
      "dates": "03/15-present",
      "description": "Keep track of financial records."
    }],
  };

  //projects object.
  var projects = {
    "projects": [{
      "title": "Site Portfolio",
      "dates": "05/16",
      "description": "Portfolio of previous work.",
      "images": "images/portfolio.png"
    }],
  };

  bio.display = function() {
    for (var key in bio) {
      if (key === "name") {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
      } else if (key === "role") {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
      } else if (key === "welcomeMessage") {
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);
      } else if (key === "biopic") {
        var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPicture);
      } else if (key === "contacts") {
          var formattedMobile = HTMLmobile.replace("%contact%", "mobile").replace("%data%", bio.contacts.mobile);
          $("#topContacts, #footerContacts").append(formattedMobile);
          var formattedEmail = HTMLemail.replace("%contact%", "Email").replace("%data%", bio.contacts.email);
          $("#topContacts, #footerContacts").append(formattedEmail);
          var formattedGit = HTMLgithub.replace("%contact%", "Github").replace("%data%", bio.contacts.github);
          $("#topContacts, #footerContacts").append(formattedGit);
          var formattedTwitter = HTMLtwitter.replace("%contact%", "Twitter").replace("%data%", bio.contacts.twitter);
          $("#topContacts, #footerContacts").append(formattedTwitter);
          var formattedLocation = HTMLlocation.replace("%contact%", "Location").replace("%data%", bio.contacts.location);
          $("#topContacts, #footerContacts").append(formattedLocation);
      } else if (key === "skills") {
          $("#header").append(HTMLskillsStart);
          $.each(bio.skills, function(index, skill){
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
          });
      }
    }
  };
  bio.display();

  work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var x = 0; x < work.jobs.length; x++) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
      $(".work-entry:last").append(formattedWorkLocation);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
      $(".work-entry:last").append(formattedDescription);
    }
  };
  work.display();

  education.display = function () {
    $("#education").append(HTMLschoolStart);
    for (var key in education) {
      if (key === "schools") {
        for (var k = 0; k < education.schools.length; k++) {
          var formattedName = HTMLschoolName.replace("%data%", education.schools[k].name);
          var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[k].degree);
          var formattedNameDegree = formattedName + formattedDegree;
          $(".education-entry:last").append(formattedNameDegree);
          var formattedDates = HTMLschoolDates.replace("%data%", education.schools[k].dates);
          $(".education-entry:last").append(formattedDates);
          var formattedEducLocation = HTMLschoolLocation.replace("%data%", education.schools[k].location);
          $(".education-entry:last").append(formattedEducLocation);
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[k].majors);
          $(".education-entry:last").append(formattedMajor);
        }
      } else if (key === "onlineCourses") {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedOlName = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
        var formattedOlSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
        var formattedOlNameSchool = formattedOlName + formattedOlSchool;
        $(".education-entry:last").append(formattedOlNameSchool);
        var formattedOlDate = HTMLonlineDates.replace("%data%", education.onlineCourses.date);
        $(".education-entry:last").append(formattedOlDate);
        var formattedOlURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
        $(".education-entry:last").append(formattedOlURL);
      }
    }
  };
  education.display();

  projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var k = 0; k < projects.projects.length; k++) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[k].title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[k].dates);
      $(".project-entry:last").append(formattedDates);
      var formattedProDescription = HTMLprojectDescription.replace("%data%", projects.projects[k].description);
      $(".project-entry:last").append(formattedProDescription);
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[k].images);
      $(".project-entry:last").append(formattedImage);
    };
  };
  projects.display();

  $("#mapDiv").append(googleMap);

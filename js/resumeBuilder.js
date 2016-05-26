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

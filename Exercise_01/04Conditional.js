//Create an application with following roles
//Admin -gets full access
//subadmin-gets access to create / delete courses
//testprep -gets access to create/delete test
//user - gets access to coonsume content

var user = "admin";

switch (user) {
  case "admin":
    console.log("you get full access");
    break;

  case "subadmin":
    console.log("gets access to create / delete courses");
    break;

  case "testprep":
    console.log("gets access to create / delete test");
    break;

  case "user":
    console.log("gets access to coonsume content");
    break;

  default:
    console.log("Trial User");
    break;
}

//note-if you miss the break you will get all the printing output
// this is called fall through

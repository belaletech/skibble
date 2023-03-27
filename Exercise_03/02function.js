/*
Define a function that can aswer the role fo a user.
A user can be an following roles:
Admin-with all access
subadmin -with access to create/delete courses
testprep-with access to create/delete tests
user-consume all content
other-trial user.
Input:getUserRole(name,role)
*/

function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break; //this is not necessary
    case "subadmin":
      return `${name} is sub-admin with access to create/delete courses`;
      break;
    case "testprep":
      return `${name} is testprep with access to create/delete test`;
      break;
    case "User":
      return `${name} is User with Consume all content`;
      break;
    default:
      return `${name} is a trial user`;
  }
}
//getUserRole("Belal","testprep");
console.log(getUserRole("Belal Ahmad", "testprep"));
var getRole = getUserRole("Ayan Raza", "User");
console.log(getRole);

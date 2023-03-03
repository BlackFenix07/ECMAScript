function newUser(name, age, country) {
  var name = name || "Andrés";
  var age = age || "23";
  var country = country || "Colombia";
  console.log(name, age, country);
}
newUser();
newUser("Santiago", 24, "CO");

function newAdmin(name = "Andrés", age = 23, country = "Colombia") {
  console.log(name, age, country);
}
newAdmin();
newAdmin("Santiago", 24, "CO");
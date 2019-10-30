var types = ["male", "female", "botts", "avataaars", "human", "gridy"];
var url = "https://avatars.dicebear.com/v2/"; 

function Avatar(firstName) {
  this.name = firstName;
  this.age = Math.floor(Math.random() * 89) + 10;
  this.type = types[Math.floor(Math.random()*types.length)];
  this.image = url + this.type + "/" + this.name + ".svg";
}

var nyAvatar = new Avatar("Mary");
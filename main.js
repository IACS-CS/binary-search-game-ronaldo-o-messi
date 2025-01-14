import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
let ti = new TextInterface(app, "Which soccer player are you?");
ti.output("Hello and welcomeeee to Which soccer play are you.");
ti.output("My name is Bob I'll be your host what is your name?");
let userName = await ti.readText();
ti.output("It is lovely to meet you, " + userName);
ti.output("Now lets start!");
const choices = ["South America", "Europe"];
let selection = await ti.readChoice(
choices,
//list of choices
"Do you like South America or Europe",
//promp (optional)
"Please just say South America or Europe"
//custom error message (optional)
);
if (selection == "South America") {
  ti.output("Great choice");
  const choices = ["Dribbling", "Shooting"];
  let selection = await ti.readChoice(
    choices,
    //list of choices
    "Do you like Dribbling or Shooting",
    //promp (optional)
    "Please just say Dribbling or Shooting"
    //custom error message (optional)
    );
    if (selection == "Dribbling") {
      ti.output("OKAYYYY YOU AREEEE NEYMAR" );
      //Add Image of Neymar
      ti.showImage(
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg", // Image URL
        "Neymar", // Alt text
        { width: "200px", height: "auto", borderRadius: "10px", marginTop: "10px" } // Optional styles
      );
    }
    if (selection == "Shooting") {
      ti.output("OKAYYYYYY YOU AREEE MESSI");
      ti.showImage(
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg" ,
        "Messi" , // Alt text
        { width: "200px", height: "auto", borderRadius: "10px", marginTop: "10px" } // Optional styles
      );
    }
}else {
  ti.output("Europe is always a great choice!");
  const choices = ["Speed", "Vertical"];
  let selection = await ti.readChoice(
    choices,
    //list of choices
    "Do you like Speed or Vertical",
    //promp (optional)
    "Please just say Speed or Vertical"
    //custom error message (optional)
  );
  if (selection == "Speed") {
    ti.output("OKAAAY YOU ARE MBAPEE")
    ti.showImage(
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Kylian_Mbappe_celebrating_-_March_2018.jpg", // Image URL
      "Mbappe", // Alt text
      { width: "200px", height: "auto", borderRadius: "10px", marginTop: "10px" } // Optional styles
    );
  }
  if (selection == "Vertical"){
    ti.output("OKAAAAY YOU ARE MOHAMED SALAH")
    ti.showImage(
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Mo_Salah_in_UEFA_Super_Cup_2019.jpg", // Image URL
      "Mohamed Salah", // Alt text
      { width: "200px", height: "auto", borderRadius: "10px", marginTop: "10px" } // Optional styles
    );
}
}

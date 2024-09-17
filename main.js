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
    if (selection == "Dribbling")
      ti.output("okay fatty butt" )  
    if (selection == "Shooting")
      ti.output("OKAYYYYYY YOU AREEE");
ti.output("Neymar!!!")
}else {
  ti.output("Europe is always a great choice!");
  const choices = ["speed", "vertical"];
  let selection = await ti.readChoice(
    choices,
    //list of choices
    "Do you like Speed or Vertical",
    //promp (optional)
    "Please just say Speed or Vertical"
    //custom error message (optional)
    );}



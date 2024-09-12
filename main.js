import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
let ti = new TextInterface(app, "Which soccer player are you?");
ti.output("Hello and welcomeeee to Which soccer play are you.");
ti.output("My name is Bob I'll be your host what is your name?");
let userName = await ti.readText();
ti.output("It is lovely to meet you, " + userName);
ti.output("Now lets start!");
ti.output('do you like South America or Europe')
await ti.readText();
if (SouthAmerica) {
  ti.output("Great option");
  
}
//Ask hinkle what to do for "great option"
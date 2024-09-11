import "./style.css";
import { TextInterface } from "text-interface";

let binary = 0;

let app = document.querySelector("#app");

// Create a new "Text Interface"
let ti = new TextInterface(app, "What gravity falls character are you?");
ti.output("Welcome! Lets find out what gravity falls character you are!");
ti.output("Do you have a job?");
answer = await ti.readYesOrNo()
if (answer){
  ti.output("Are you tall?");
  answer = await ti.readYesOrNo()
} else if (!answer) {
  ti.output("Do you prefer to stay in the same place?");
  answer = await ti.readYesOrNo()
} else {
  ti.output("idk what to tell you, man. It broke")
}

/**
 Oops - was this your work also ?
 **/
/*
let ti = new TextInterface(app, "Which soccer player are you?");
ti.output("Hello and welcomeeee to Which soccer play are you.");
ti.output("My name is Bob I'll be your host I hope your ready");
let userName = await ti.readText();
ti.output("It is lovely to meet you, " + userName);
ti.output("whats your favorite number?");
await ti.readText();

*/
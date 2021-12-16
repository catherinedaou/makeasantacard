var greetings = ".";
var sender = ".";
var receiver = ".";
onEvent("button2", "click", function( ) {
  setScreen("screen2");
});
onEvent("button3", "click", function( ) {
  greetings = getText("a");
  setScreen("screen4");
});
onEvent("button1", "click", function( ) {
  sender = getText("E");
  receiver = getText("text_input2");
  setScreen("preview");
  setText("text_area1", greetings.toLowerCase());
  setText("text_area2", sender.toLowerCase());
  setText("text_area5", receiver.toLowerCase());
});

ityped.init(`#ityped`, {
  // required - for now, only accepting texts
  // strings: ["print('Hello, World!')", "This is teinen's portfolio page."],
  strings: ["Now at work..."],
  //optional
  typeSpeed: 60,
  //optional
  backSpeed: 50,
  //optional
  startDelay: 900,
  //optional
  backDelay: 500,
  //optional
  loop: false,
  //optional
  showCursor: true,
  //optional
  cursorChar: "_",
  //optional
  disableBackTyping: true,
  // optional callback called once the last string has been typed
  onFinished: function() {}
});
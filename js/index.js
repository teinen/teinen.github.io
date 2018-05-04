ityped.init(`#ityped`, {
  // required - for now, only accepting texts
  strings: ["print('Welcome to my page!')"],
  // strings: ["Now at work..."],
  //optional
  typeSpeed: 80,
  //optional
  backSpeed: 50,
  // start after 5 sec
  startDelay: 5000,
  //optional
  backDelay: 500,
  //optional
  loop: false,
  //optional
  showCursor: true,
  //optional
  cursorChar: "|",
  //optional
  disableBackTyping: true,
  // optional callback called once the last string has been typed
  onFinished: function() {}
});
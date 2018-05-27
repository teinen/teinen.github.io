<template>
<div>
  <!-- <span id="ityped" class="ityped"></span> -->
</div>
</template>

<script>
export default {

}

// ityped.init("#ityped", {
//   // required - for now, only accepting texts
//   strings: ["print('Welcome to my page.')"],
//   // strings: ["Now at work..."],
//   //optional
//   typeSpeed: 80,
//   //optional
//   backSpeed: 50,
//   // start after 5 sec
//   startDelay: 5000,
//   //optional
//   backDelay: 500,
//   //optional
//   loop: false,
//   //optional
//   showCursor: true,
//   //optional
//   cursorChar: "|",
//   //optional
//   disableBackTyping: true,
//   // optional callback called once the last string has been typed
//   onFinished: function() {}
// });
</script>

<style lang="scss" scoped>
$white:     #F7F9F9;
$black:     #000000;
$dark-gray: #424242;

.ityped {
  color: $white;
  @media (max-width: 414px) { font-size: 2.5rem; }
  @media (min-width: 415px) { font-size: 4.5rem; }
}

.ityped-cursor {
  color: $white;
  @media (max-width: 414px) { font-size: 2.5rem; }
  @media (min-width: 415px) { font-size: 4.5rem; }
  opacity: 1;
  animation: blink 0.6s infinite;
  animation-direction: alternate;
}
@keyframes blink {
	100% {
		opacity: 0;
	}
}
</style>

document.addEventListener('DOMContentLoaded', () => {
  var flipdown = new FlipDown(1718586000)
    .start()
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });
})
  


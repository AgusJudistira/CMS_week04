var editor = document.getElementById('editor');
var blogtitel = document.getElementById('blogtitel');
var buffer = "";
var afkortingen = [['/cg','Code Gorilla'],
                   ['/ag', 'Agus Judistira'],
                   ['/mvg', 'Met vriendelijke groet,'],
                   ['/nl', 'Nederland']];

function initEditor() {
  editor.onkeyup = function(e) {

    if (e.keyCode == 191) {
      buffer += "/";
    }
    else {
      buffer += String.fromCharCode(e.keyCode).toLowerCase();
    }

    //console.log("buffer = "+buffer);
    //console.log("Cursor pos:"+this.selectionStart);

    var startPos = this.selectionStart;

    for (var i=0; i < afkortingen.length; i++) {
      //console.log("afkortingen.length:"+afkortingen.length);
      var afkorting = afkortingen[i][0];
      var voluit = afkortingen[i][1];
      if (buffer.endsWith(afkorting)) {
        //alert('afkorting gevonden');
        var startPos = this.selectionStart;

        this.value = this.value.replace(afkorting, voluit);
        console.log("afkorting:"+afkorting);
        console.log("afkorting.length:"+afkorting.length);
        console.log("voluit:"+voluit);
        console.log("voluit.length:"+voluit.length);
        this.selectionEnd = startPos + voluit.length - afkorting.length;
        break;
      }
    }

    if (buffer.length > 7) {
      buffer = buffer.substring(buffer.length - 7);
    }
  }

  blogtitel.onkeyup = function(e) {
    if (e.keyCode == 191) {
      buffer += "/";
    }
    else {
      buffer += String.fromCharCode(e.keyCode).toLowerCase();
    }

    var startPos = this.selectionStart;

    for (var i=0; i < afkortingen.length; i++) {
      //console.log("afkortingen.length:"+afkortingen.length);
      var afkorting = afkortingen[i][0];
      var voluit = afkortingen[i][1];
      if (buffer.endsWith(afkorting)) {
        //alert('afkorting gevonden');
        var startPos = this.selectionStart;

        this.value = this.value.replace(afkorting, voluit);
        console.log("afkorting:"+afkorting);
        console.log("afkorting.length:"+afkorting.length);
        console.log("voluit:"+voluit);
        console.log("voluit.length:"+voluit.length);
        this.selectionEnd = startPos + voluit.length - afkorting.length;
        break;
      }
    }

    if (buffer.length > 3) {
      buffer = buffer.substring(buffer.length - 3);
    }
  }
}
/*
$('#editor').keypress(function(event) {
  event.preventDefault();
  var code = event.charCode;
  this.value += String.fromCharCode(code);

  if (this.value.endsWith("!cg")) {
    alert("Afkorting gedetecteerd!");
    this.value = this.value.replace("!cg", "Code Gorilla");
  }

});
*/

window.onload = initEditor();

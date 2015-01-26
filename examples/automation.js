var ctx = new AudioContext();
var osc = ctx.createOscillator();
var gain = ctx.createGain();
osc.frequency.value = 300;
osc.type = "sawtooth";
osc.connect(gain);
gain.connect(ctx.destination);
gain.gain.value = 0.000000001;
osc.start(0);

window.addEventListener("keydown", function (e) {
  gain.gain.setValueAtTime(0.000001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(1, ctx.currentTime + 0.5);
  gain.gain.setValueAtTime(1, ctx.currentTime + 1);
  gain.gain.setTargetAtTime(0, ctx.currentTime + 1.5, 0.3);
  gain.gain.setValueAtTime(0.00001, ctx.currentTime + 2.5);
});

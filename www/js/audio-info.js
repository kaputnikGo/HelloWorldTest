/**
 * @name P5 Sound Info
 * @description <p>Display useful device derived info for sound.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * </span></em></p>
 */

// main sound object vars
let audioCtx, audioIn, mediaInfo;
// reporting primitive vars
let inReport, devReport, ctxReport, userSource, autoSource;
// audio device reporting vars
let deviceID, deviceLabel, deviceGroup, deviceKind;

function setup() {
  createCanvas(710, 400);
  // should return the AudioContext Object
  audioCtx = getAudioContext();
  // test it by checking state
  ctxReport = audioCtx.state;

  audioIn = new p5.AudioIn();
  if (audioIn) inReport = "HAS IN";
  else inReport = "NO IN";

  // check the input source(s)
  audioIn.getSources(listSources);
  // try get some details about it
  audioIn.getSources(infoSource);

}
// deviceList is part of the audioIn object...
function listSources(deviceList) {
  let numDevices = deviceList.length;
  if (numDevices == 0) {
    // none enabled?
    devReport = "0";
  }
  else if (numDevices == 1) {
    // assuming will only ever be one input
    devReport = "1";
  }
  else {
    // line-in and mic-in, therefore diff qualities?
    devReport = (int(numDevices));
  }
}

function infoSource(sourceList) {
  autoSource = audioIn.currentSource;
  // set it to this one, or enum for all?
  audioIn.setSource(0);
  userSource = audioIn.currentSource;
  // gets an object of MediaDeviceInfo
  mediaInfo = sourceList[audioIn.currentSource];
  //
  deviceID = mediaInfo.deviceId; // UUID
  deviceLabel = mediaInfo.label; // device name, or empty
  if (deviceLabel == "") {
    deviceLabel = "empty";
  }
  deviceGroup = mediaInfo.groupId; // UUID
  // can be audioinput, audiooutput, videoinput
  deviceKind = mediaInfo.kind; // object with string return

}

/*
function touchStarted() {
  if (audioCtx.state !== "running") {
    audioCtx.resume();
  }
  //var synth = new p5.MonoSynth();
  //synth.play('A4', 0.5, 0, 0.2);
}
*/

function draw() {
  background(200);
  text(int(getFrameRate()) + " fps", 10, 16);
  text("inReport: " + inReport, 10, 48);
  text("devReport: " + devReport, 10, 64);
  text("ctxReport: " + ctxReport, 10, 80);
  text("autoSource: " + autoSource, 10, 96);
  text("userSource: " + userSource, 10,112);
  text("mediaInfo: " + mediaInfo, 10, 128); // is Object
  text("deviceID: " + deviceID, 10, 144);
  text("deviceLabel: " + deviceLabel, 10, 160);
  text("deviceGroup: " + deviceGroup, 10, 176);
  text("deviceKind: " + deviceKind, 10, 192);
}

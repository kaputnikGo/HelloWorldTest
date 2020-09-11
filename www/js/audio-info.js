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
// some global vars
let samRate, mainVol, micLevel, afterMicLvl;
// audio device reporting vars
let deviceID, deviceLabel, deviceGroup, deviceKind;
// pinephone has 3 sources, get info on them
let pineAudio0, pineAudio1, pineAudio2;

function setup() {
  createCanvas(700, 400);
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
  // after the above has run, enum the device(3)
  // hardcode for pinephone?
  audioIn.getSources(enumSources);

  samRate = sampleRate();
  mainVol = getMasterVolume(); // 0.0 - 1.0
  if (mainVol >= 0.1) {
    mainVol *= 100;
  }
  //  AudioIn must .start() before using .getLevel()
  audioIn.start();
  micLevel = audioIn.getLevel(); // 0.0 to 1.0
  if (micLevel >= 0.1) {
    micLevel *= 100;
  }
  // set the updater var
  afterMicLvl = -1;
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
    // line-in and mic-in, etc, therefore diff qualities
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

function enumSources(pinePhoneList) {
  // assuming 3 sources in pinephone
  if (pinePhoneList.length == 3) {
    // get their MediaDeviceInfo objects
    pineAudio0 = pinePhoneList[0];
    pineAudio1 = pinePhoneList[1];
    pineAudio2 = pinePhoneList[2];  
  }
}

// touchStarted(), mousePressed()
function touchStarted() {
  if (audioCtx.state !== "running") {
    audioCtx.resume();
  }
  afterMicLvl = audioIn.getLevel();
  if (afterMicLvl >= 0.1) {
    afterMicLvl *= 100;
  }
  return false;
}

/***************************************************************/

function draw() {
  background(200);
  text(int(getFrameRate()) + " fps", 10, 16);
  // input vars here
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
  text("micLevel: " + micLevel, 10, 208);
  text("after micLvl: " + afterMicLvl, 10, 224);
  // output vars here
  text("sampleRate: " + samRate, 10 , 240);
  text("main vol: " + mainVol, 10, 256);
  // mediaDeviceInfo for the 3 sources
  text("audioDevice0 kind: " + pineAudio0.kind, 10, 300);
  text("audioDevice1 kind: " + pineAudio1.kind, 10, 316);
  text("audioDevice2 kind: " + pineAudio2.kind, 10, 332);

}

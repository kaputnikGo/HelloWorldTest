# HelloWorld

Basic HelloWorld app.

Currently testing some things with HTML 5 and mainly audio.

Using LinuxMint 20, Atom Editor, Clickable UT etc to create some test apps for PinePhone Community Edition (2gb, PostmarketOS) now running UBports from the eMMC.

This will hopefully serve as a template for some utility/helper app/webapps for installing on the pinephone.

**NOTES**
- Releases are simply a clumsy way of installing .click file on device via www instead of using adb/ssh
- pinephone P5 canvas screen width: 700
- minimal P5 touch diameter: 60
- holding touch on P5 results in long-touch OS popup of "save image..."
- DOM objects position relative to phone screen origin, not P5 canvas

**VERSION**
1.0.7

**TODO**
- css to navbar
- adb/ssh install to device ffs
- UI controls in P5 for audio routing etc
- audio out info (sep page?)
- test mic access via p5js
- stuck at mic perms for app not working on device
  - reports as being from "file:///", can't tell if true yet
- zero crossings at freq changes
- glitches in output sounds like buffer errors
- add fps counter val to an oscillator...

**CHANGES**
- nav bar, multiple pages for separate functions
- different sound tests, touch control tests
- audio reporting page
- P5 function css styles apply

## License

Copyright (C) 2020  Kaputnik Go

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3, as published
by the Free Software Foundation.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranties of MERCHANTABILITY, SATISFACTORY QUALITY, or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

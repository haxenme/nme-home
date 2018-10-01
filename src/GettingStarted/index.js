import React, {Component} from 'react';
import Highlight from 'react-highlight'
import "../../node_modules/highlight.js/styles/atelier-forest-dark.css";

class GettingStarted extends Component {
  render() {
    return (
      <div>
        <p>1. Install <a href="http://www.haxe.org/">Haxe</a></p>

        <p>2. Install NME</p>
        <Highlight className='bash'>
          {
          "haxelib install hxcpp\n" +
          "git clone git@github.com:haxenme/nme.git\n" +
          "pushd nme/tools/nme\n" +
          "haxe compile.hxml\n" +
          "popd\n"
          }
        </Highlight>

        <p>3. Build iOS dependencies (required only if you want to build to iOS)</p>
        <Highlight className='bash'>
          {
           "pushd nme/project\n" +
           "neko build.n\n" +
           "neko build.n ios"
          }
        </Highlight>

        <p>4. Build & run a sample</p>
        <Highlight className='bash'>
          {"cd nme/samples/DisplayingABitmap\n" +
          "nme test mac"}
        </Highlight>

      </div>
    );
  }
}

export default GettingStarted;

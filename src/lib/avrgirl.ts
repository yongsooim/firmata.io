import "./avrgirl-arduino.global.js"
//import * as AvrgirlArduino from 'avrgirl-arduino/dist/avrgirl-arduino.global.js'
//import injectDependencies from '../../node_modules/avrgirl-arduino/dist/avrgirl-arduino.global.js'
//import * as AvrgirlArduino from 'avrgirl-arduino/avrgirl-arduino-browser.js'

function getContent() {
    return new Promise(async (resolve, reject) => {
        const res = await fetch(`./hex/StandardFirmata.hex`);
        resolve(res.arrayBuffer());
    })
};


export async function flash () {

    const filecontents = await getContent();
    console.log(filecontents)
    console.log('filecontents', filecontents);
    const board = 'uno';

    let avrgirl = new AvrgirlArduino({ board: board, debug: true });
    avrgirl.flash(filecontents, (error) =>  {
      if (error) {
        console.error(error, error.message);
      } else {
        console.info('done correctly.');
      }
    });

}


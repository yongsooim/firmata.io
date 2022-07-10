import "./avrgirl-arduino.global.js"
import { boardLookupTable } from './boards';

function getContent() {
    return new Promise<ArrayBuffer>(async (resolve, reject) => {
        try {
          const res = await fetch(`./static/hex/StandardFirmata.hex`);
          resolve(res.arrayBuffer());
        } catch(e) {
          reject(e)
        }
    })
};

export async function flash () {
  console.log(boardLookupTable())
    const filecontents = await getContent();
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

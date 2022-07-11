import { boardLookupTable } from './ref/boards';

function getContent() {
    return new Promise<ArrayBuffer>(async (resolve, reject) => {
        try {
          const res = await fetch(`./static/hex/uno/StandardFirmata.cpp.hex`);
          resolve(res.arrayBuffer());
        } catch(e) {
          reject(e)
        }
    })
};

export async function flash () {
    const filecontents = await getContent();
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

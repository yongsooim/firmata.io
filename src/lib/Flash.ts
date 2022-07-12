
function getHex() {
    return new Promise<ArrayBuffer>(async (resolve, reject) => {
        try {
          const res = await fetch(`./static/hex/uno/StandardFirmata.cpp.hex`)
          resolve(res.arrayBuffer())
        } catch(e) {
          reject(e)
        }
    })
};

export async function flash () {
    const filecontents = await getHex()
    const board = 'uno'

    let avrgirl = new AvrgirlArduino({ board: board, debug: false })
    avrgirl.flash(filecontents, (error) =>  {
      if (error) {
        console.error(error)
      } else {
        console.info('done correctly.')
      }
    });
}


function getHex(path: string) {
    return new Promise<ArrayBuffer>(async (resolve, reject) => {
        try {
          const res = await fetch(path)
          resolve(res.arrayBuffer())
        } catch(e) {
          reject(e)
        }
    })
};

export async function flash (board: string, hex: string) {
  const path = `/static/hex/${board}/${hex}.hex`
  const filecontents = await getHex(path)
    console.log(path)
    console.log(filecontents)
    let avrgirl = new AvrgirlArduino({ board: board, debug: false })
    avrgirl.flash(filecontents, (error) =>  {
      if (error) {
        console.error(error)
      } else {
        console.info('done correctly.')
      }
    });
}

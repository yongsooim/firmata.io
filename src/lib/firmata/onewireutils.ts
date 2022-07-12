"use strict";
import * as  Encoder7Bit from "./encoder7bit";
export const OneWireUtils = {
  crc8(data: number[]) {
    let crc = 0;

    for (let inbyte of data) {
      for (let n = 8; n; n--) {
        const mix = (crc ^ inbyte) & 0x01;
        crc >>= 1;

        if (mix) {
          crc ^= 0x8C;
        }

        inbyte >>= 1;
      }
    }

    return crc;
  },

  readDevices(data: number[]) {
    const deviceBytes = Encoder7Bit.from7BitArray(data);
    const devices: number[][] = [];

    for (let i = 0; i < deviceBytes.length; i += 8) {
      const device = deviceBytes.slice(i, i + 8);

      if (device.length !== 8) {
        continue;
      }

      const check = OneWireUtils.crc8(device.slice(0, 7));

      if (check !== device[7]) {
        console.error("ROM invalid!");
      }

      devices.push(device);
    }

    return devices;
  }
};

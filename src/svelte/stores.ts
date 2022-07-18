import { writable } from "svelte/store";

export const selectedHex = writable('StandardFirmata.cpp');
export const selectedBoard = writable('uno');

export const selectedBaudrate = writable('57600');

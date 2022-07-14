import { writable } from "svelte/store";

export const path$ = writable('./static/hex/uno/StandardFirmata.cpp.hex');
export const board$ = writable('uno');

declare class AvrgirlArduino {
    constructor(options?: AvrgirlArduinoOptions );
    flash(filecontents: ArrayBuffer, callback: (error: Error) => void): void;
}

interface AvrgirlArduinoOptions {
    board?: string;
    debug?: boolean;
}

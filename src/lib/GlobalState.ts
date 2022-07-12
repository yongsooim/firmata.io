import { Subject } from 'rxjs'

class GlobalState {
    FetchStarted$ = new Subject<void>()
    FetchFinished$ = new Subject<void>()
    FlashStarted$ = new Subject<void>()
    FlashFinished$ = new Subject<void>()
    ConnectStarted$ = new Subject<void>()
    ConnectFinished$ = new Subject<void>()

}

export const globalState = new GlobalState()

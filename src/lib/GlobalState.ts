import { Subject } from 'rxjs'

class GlobalState {
    flashDone$ = new Subject<void>()
    

}

export const globalState = new GlobalState()

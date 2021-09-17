import { capitalize } from "./utils"

export class DomListener {
	constructor($root, listeners = []) {
        if (!$root) {
            throw new Error (` No $root provided for DOMListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListener() {
        //console.log(this.listeners)
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this [method]) {
                throw new Error (`Method ${method} is not impemented in ${this.name || ''} Components`)
            }
            //тоже самое,что addEventListener
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListener() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}
//input => onInput
//Pure Function

function getMethodName (eventName) {
    return 'on' + capitalize(eventName)
}
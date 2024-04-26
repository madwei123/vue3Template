import mitt from 'mitt'
import type { Emitter } from 'mitt'
const eventBus: Emitter = mitt()
export { eventBus }

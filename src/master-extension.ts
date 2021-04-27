
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import { ExtensionApi } from './api';

export function start(context: theia.PluginContext): Promise<ExtensionApi> {
    const emitter = new theia.EventEmitter<string>();
    return new Promise(resolve => resolve({ onFunction: emitter.event }))
}

export function stop() {

}


/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import { ExtensionApi } from './api';

export function start(context: theia.PluginContext): Promise<ExtensionApi> {
    const onFunction = () => {
        console.log('hello!');
    };
    return new Promise(resolve => resolve({ onFunction }))
}

export function stop() {

}

import * as theia from '@theia/plugin';

export interface ExtensionApi {
    onFunction: theia.Event<string>
}
import { writable } from 'svelte/store';
import * as locales from 'date-fns/locale';

function createStore() {

    const { subscribe, update, set } = writable(locales.de, () => { })

    return {
        subscribe,
        update: val => update(() => val),
        set,
    };

}

export const __locale__ = createStore();
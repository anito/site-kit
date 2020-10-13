import { writable } from 'svelte/store';

function createStore() {

    const { subscribe, update, set } = writable({}, () => { })

    return {
        subscribe,
        update: (val) => update(() => val),
        set,
    };

}

export const __locale__ = createStore();
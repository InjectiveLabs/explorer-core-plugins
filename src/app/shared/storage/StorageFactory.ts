import { LocalStorage } from "./LocalStorage";
import { NullStorage } from "./NullStorage";

export class StorageFactory {
    constructor(private localStorage: Storage) {}
    create() {
        if (this.isLocalStorageSupported()) {
            return new LocalStorage(this.localStorage);
        } else {
            return new NullStorage();
        }
    }
    isLocalStorageSupported() {
        try {
            const storage = window.localStorage;
            let x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return false;
        }
    }
}

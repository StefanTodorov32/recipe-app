import { Client as Appwrite, Databases, Account } from "appwrite";

interface IApi {
    sdk: any;
    provider: () => void;
}

const api: IApi = {
    sdk: null,
    provider: () => {
        if (api.sdk) {
            return api.sdk;
        }
        const appwrite = new Appwrite();
        appwrite
            .setEndpoint(import.meta.env.ENDPOINT)
            .setProject(import.meta.env.PROJECT_ID);
        const account = new Account(appwrite);
        const database = new Databases(appwrite);
        api.sdk = { database, account };
        return api.sdk;
    },
};

export default api
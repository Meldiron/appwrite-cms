import {
	Account,
	Client,
	Databases,
	ID,
	Permission,
	Query,
	Role,
	Storage,
	type Models
} from 'appwrite';

let client: Client;
let databases: Databases;
let storage: Storage;
let account: Account;

export const AppwriteService = {
	setClient: (endpoint: string, projectId: string) => {
		client = new Client().setEndpoint(endpoint).setProject(projectId);

		databases = new Databases(client);
		storage = new Storage(client);
		account = new Account(client);
	},
	logout: async () => {
		return await account.deleteSession('current');
	},
	login: async (email: string, password: string) => {
		return await account.createEmailSession(email, password);
	},
	getAccount: async () => {
		return await account.get<any>();
	},
	listDocuments: async <T extends Models.Document>(
		databaseId: string,
		collectionId: string,
		limit = 10,
		offset = 0,
		queries: string[] = []
	) => {
		return await databases.listDocuments<T>(databaseId, collectionId, [
			...queries,
			Query.limit(limit),
			Query.offset(offset)
		]);
	},
	deleteDocument: async (databaseId: string, collectionId: string, documentId: string) => {
		return await databases.deleteDocument(databaseId, collectionId, documentId);
	},
	getDocument: async <T extends Models.Document>(
		databaseId: string,
		collectionId: string,
		documentId: string
	) => {
		return await databases.getDocument<T>(databaseId, collectionId, documentId);
	},
	createDocument: async <T extends Models.Document>(
		databaseId: string,
		collectionId: string,
		documentId: string,
		document: any
	) => {
		return await databases.createDocument<T>(databaseId, collectionId, documentId, document, [
			Permission.read(Role.any())
		]);
	},
	updateDocument: async <T extends Models.Document>(
		databaseId: string,
		collectionId: string,
		documentId: string,
		document: any
	) => {
		return await databases.updateDocument<T>(databaseId, collectionId, documentId, document);
	},
	createFile: async (bucketId: string, file: File) => {
		return await storage.createFile(bucketId, ID.unique(), file, [Permission.read(Role.any())]);
	},
	getFilePreview: async (bucketId: string, fileId: string) => {
		return await storage.getFilePreview(bucketId, fileId, 500);
	}
};

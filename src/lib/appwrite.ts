import {
	Client,
	Databases,
	ID,
	InputFile,
	Permission,
	Query,
	Role,
	Storage,
	type Models
} from 'node-appwrite';
import { Client as ClientBrowser, Storage as StorageBrowser } from 'appwrite';

const client = new Client();
const database = new Databases(client);
const storage = new Storage(client);
let clientEndpoint = '';
let clientProject = '';

const clientBrowser = new ClientBrowser();
const storageBrowser = new StorageBrowser(clientBrowser);

export const AppwriteService = {
	getEndpoint: () => {
		return clientEndpoint;
	},
	getProject: () => {
		return clientProject;
	},
	setClient: (endpoint: string, projectId: string, apiKey: string) => {
		clientEndpoint = endpoint;
		clientProject = projectId;
		client.setEndpoint(endpoint).setProject(projectId).setKey(apiKey);
		clientBrowser.setEndpoint(endpoint).setProject(projectId);

		clientBrowser.headers['x-appwrite-key'] = apiKey;
	},
	listDocuments: async <T extends Models.Document>(
		databaseId: string,
		collectionId: string,
		limit = 10,
		offset = 0,
		queries: string[] = []
	) => {
		return await database.listDocuments<T>(databaseId, collectionId, [
			...queries,
			Query.limit(limit),
			Query.offset(offset)
		]);
	},
	deleteDocument: async (databaseId: string, collectionId: string, documentId: string) => {
		return await database.deleteDocument(databaseId, collectionId, documentId);
	},
	getDocument: async <T extends Models.Document>(
		databaseId: string,
		collectionId: string,
		documentId: string
	) => {
		return await database.getDocument<T>(databaseId, collectionId, documentId);
	},
	createDocument: async <T extends Models.Document>(
		databaseId: string,
		collectionId: string,
		document: any
	) => {
		return await database.createDocument<T>(databaseId, collectionId, ID.unique(), document, [
			Permission.read(Role.any())
		]);
	},
	updateDocument: async <T extends Models.Document>(
		databaseId: string,
		collectionId: string,
		documentId: string,
		document: any
	) => {
		return await database.updateDocument<T>(databaseId, collectionId, documentId, document);
	},
	createFile: async (bucketId: string, file: File) => {
		return await storageBrowser.createFile(bucketId, ID.unique(), file, [
			Permission.read(Role.any())
		]);
	},
	getFilePreview: async (bucketId: string, fileId: string) => {
		return await storage.getFilePreview(bucketId, fileId, 500)
	}
};

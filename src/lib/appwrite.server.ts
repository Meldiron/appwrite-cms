import { Client, Databases, ID, Query, type Models } from 'node-appwrite';

let client = new Client();
let database = new Databases(client);

export const AppwriteService = {
	setClient: (endpoint: string, projectId: string, apiKey: string) => {
		client = new Client().setEndpoint(endpoint).setProject(projectId).setKey(apiKey);
		database = new Databases(client);
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
		// TODO: Render permissions
		return await database.getDocument<T>(databaseId, collectionId, documentId);
	},
	createDocument: async <T extends Models.Document>(
		databaseId: string,
		collectionId: string,
		document: any
	) => {
		// TODO: Allow setting permissions
		// TODO: Configurable ID
		return await database.createDocument<T>(databaseId, collectionId, ID.unique(), document);
	},
	updateDocument: async <T extends Models.Document>(
		databaseId: string,
		collectionId: string,
		documentId: string,
		document: any
	) => {
		// TODO: Allow editing permissions
		// TODO: Allow editing $id
		return await database.updateDocument<T>(databaseId, collectionId, documentId, document);
	}
};

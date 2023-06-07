import axios from 'axios';

export const fetchJobs = async () => {
	try {
		const db = await openDB();
		const jobsCache = await getFromCache(db, 'jobsCache');

		if (!jobsCache || jobsCache.length === 0) {
			const { data } = await axios.get('http://localhost:3001/');
			await addToCache(db, 'jobsCache', data);

			return data;
		}

		return jobsCache;
	} catch (error) {
		console.log(error);
		throw new Error(`Error: ${error}`);
	}
};
const openDB = () => {
	return new Promise((resolve, reject) => {
		const request = window.indexedDB.open('cacheDB', 1);

		request.onerror = () => {
			reject('Error openning database');
		};

		request.onsuccess = () => {
			resolve(request.result);
		};

		request.onupgradeneeded = (event) => {
			const db = event.target.result;
			if (!db.objectStoreNames.contains('cacheStore')) {
				db.createObjectStore('cacheStore', { keyPath: 'key' });
			}
		};
	});
};

const getFromCache = (db, cacheName) => {
	return new Promise((resolve, reject) => {
		const transaction = db.transaction('cacheStore', 'readonly');
		const store = transaction.objectStore('cacheStore');
		const request = store.get(cacheName);

		request.onerror = () => {
			reject('Error accessing cache');
		};

		request.onsuccess = () => {
			resolve(request.result && request.result.value);
		};
	});
};

const addToCache = (db, cacheName, data) => {
	return new Promise((resolve, reject) => {
		const transaction = db.transaction('cacheStore', 'readwrite');
		const store = transaction.objectStore('cacheStore');
		const request = store.put({ key: cacheName, value: data });

		request.onerror = () => {
			reject('Error adding to cache');
		};

		request.onsuccess = () => {
			resolve();
		};
	});
};

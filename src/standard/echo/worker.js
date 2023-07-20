import blob from './blob'

/**
 * Creates a new Worker instance using the provided blob.
 * The blob is an object URL representing the worker's script.
 *
 * @param {string} objectURL - The object URL of the worker's script blob.
 * @returns {Worker} The new Worker instance.
 */
export default new Worker(window.URL.createObjectURL(blob))

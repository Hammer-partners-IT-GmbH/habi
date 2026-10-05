import { default as DOMPurify, default as createDOMPurify } from 'dompurify';

/**
 * Sanitizes the provided HTML string and sets it as the innerHTML of the given node.
 * Uses DOMPurify to remove potentially unsafe content from the HTML.
 *
 * @param node - An object with an `innerHTML` property where the sanitized HTML will be set.
 * @param [unsafeHTML] - A tuple containing the HTML string to be sanitized.
 * @returns An object with an `update` method to re-sanitize and update the node's innerHTML when called with a new HTML string.
 */
export function sanitizeHTML(
	node: { innerHTML: string },
	[unsafeHTML]: [string]
): {
	update: ([unsafeHTML]: [string]) => void;
} {
	if (typeof window !== 'undefined') {
		const DOMPurify = createDOMPurify(window);

		node.innerHTML = DOMPurify.sanitize(unsafeHTML);
	}

	return {
		update([unsafeHTML]: [string]) {
			if (typeof window !== 'undefined') {
				node.innerHTML = DOMPurify.sanitize(unsafeHTML);
			}
		}
	};
}

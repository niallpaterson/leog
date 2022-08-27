import * as React from 'react';
import { start } from 'repl';

type UseIntersectionObserverConfig = {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number | number[];
};

type Ref<T extends HTMLElement = HTMLElement> =
	| React.RefObject<T>
	| React.MutableRefObject<T>;

/** Thin react wrapper around intersection observer.
 *
 * By default, returns an array-object with (1) the observer and (2) the entires array.
 * Internally, state will be updated on each intersection.
 *
 *  Return can be array spread, in which case an array of entries is returned.
 *
 *  Return can also be object spread, in which case the observer is returned.
 *
 * Optionally, a custom callback can be passed as the third argument, in which case
 * state will not be managed internally, and an empty array is returned.
 *
 *
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 *
 *  @example
 * // array spread as entires
 * const [entry] = useIntersectionObserver(ref, {})
 *  @example
 * // object spread as observer
 * const { entries, observe } = useIntersectionObserver(ref, {})
 *
 *  @example
 * // custom callback (empty array return)
 * useIntersectionObserver(ref, {}, (entry) => {
 *   if (entry.isIntersecting) doSomething();
 * })
 */

export const useIntersectionObserver = (
	ref: Ref,
	{ root, rootMargin, threshold }: UseIntersectionObserverConfig,
	onIntersect?: (entry: IntersectionObserverEntry) => void
) => {
	const [observerWithEntries, setObserverWithEntries] = React.useState<
		(IntersectionObserverEntry[] & IntersectionObserver) | []
	>([]);
	const [_threshold, setThreshold] = React.useState(threshold);

	// setup observer
	React.useEffect(() => {
		if (!window?.IntersectionObserver) return;
		if (!ref?.current) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (onIntersect) {
					entries.forEach(onIntersect);
				} else {
					const observerWithEntries = Object.assign(entries, observer);
					setObserverWithEntries(observerWithEntries);
				}
			},
			{ root, rootMargin, threshold: _threshold }
		);

		observer.observe(ref.current);
		return () => observer?.disconnect();
	}, [ref, root, rootMargin, _threshold, onIntersect]);

	// update threshold array
	React.useEffect(() => {
		if (String(threshold) !== String(_threshold)) {
			setThreshold(threshold);
		}
	}, [threshold, setThreshold, _threshold]);

	return observerWithEntries;
};

export default useIntersectionObserver;

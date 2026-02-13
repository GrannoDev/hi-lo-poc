export function createSession(deckCount: number) {
	let runningCount = $state(0);
	let cardsDealt = $state(0);
	let history = $state<number[]>([]);

	const totalCards = $derived(deckCount * 52);
	const decksRemaining = $derived(Math.max((totalCards - cardsDealt) / 52, 0.5));
	const trueCount = $derived(runningCount / decksRemaining);
	const progress = $derived(cardsDealt / totalCards);

	function record(value: -1 | 0 | 1) {
		if (typeof navigator !== 'undefined' && navigator.vibrate) {
			navigator.vibrate(20);
		}
		runningCount += value;
		cardsDealt += 1;
		history.push(value);
	}

	function undo() {
		if (history.length === 0) return;
		const last = history.pop()!;
		runningCount -= last;
		cardsDealt -= 1;
	}

	function reset() {
		runningCount = 0;
		cardsDealt = 0;
		history = [];
	}

	return {
		get runningCount() {
			return runningCount;
		},
		get cardsDealt() {
			return cardsDealt;
		},
		get totalCards() {
			return totalCards;
		},
		get decksRemaining() {
			return decksRemaining;
		},
		get trueCount() {
			return trueCount;
		},
		get progress() {
			return progress;
		},
		get canUndo() {
			return history.length > 0;
		},
		deckCount,
		record,
		undo,
		reset
	};
}

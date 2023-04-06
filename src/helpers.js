// Timestamp
export function setLocalDate(when, optionsDate) {
	return new Date(when * 1000).toLocaleString('de-DE', optionsDate);
}
export function setLocalTime(when, optionsTime) {
	return new Date(when * 1000).toLocaleTimeString('de-DE', optionsTime);
}

// DateTime
export function setLocalDateTime(when, optionsDate) {
	return new Date(when).toLocaleString('de-DE', optionsDate);
}
export function setLocalTimeDate(when, optionsDate) {
	return new Date(when).toLocaleTimeString('de-DE', optionsDate);
}

// Options
export const optionsDate = {
	month: 'long',
	day: 'numeric',
};
export const optionsTime = {
	hour: '2-digit',
	minute: '2-digit',
};

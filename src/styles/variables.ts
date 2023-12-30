export const colors = {
	red: 'var(--color-red)',
	blue: 'var(--color-blue)',
	green: 'var(--color-green)',
	white: 'var(--color-white)',
	black: 'var(--color-black)',
	grey: 'var(--color-grey)'
};

export const zIndex = {
	dimmed: 'var(--z-index-dimmed)',
	modal: 'var(--z-index-modal)'
};

export type Colors = keyof typeof colors;
export type ZIndex = keyof typeof zIndex;

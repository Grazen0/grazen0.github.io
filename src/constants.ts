export enum Theme {
	WINDOWS = 'windows',
	LINUX = 'linux',
}

export const cursors: Record<Theme, string> = {
	[Theme.WINDOWS]: '_',
	[Theme.LINUX]: '█',
};

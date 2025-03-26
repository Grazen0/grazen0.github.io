import type { GiscusProps } from '@giscus/svelte';

export const links = {
  repo: 'https://github.com/Grazen0/grazen0.github.io',
} as const;

export const giscusRepoConfig = {
  repo: 'Grazen0/grazen0.github.io',
  repoId: 'R_kgDOG5iLiQ',
  category: 'Comments',
  categoryId: 'DIC_kwDOG5iLic4CS8tV',
} as const satisfies Partial<GiscusProps>;

export const asciiBanner = String.raw`
 $$$$$$\                                              
$$  __$$\                                             
$$ /  \__|$$$$$$\ $$$$$$\ $$$$$$$$\ $$$$$$\ $$$$$$$\  
$$ |$$$$\$$  __$$\\____$$\\____$$  $$  __$$\$$  __$$\ 
$$ |\_$$ $$ |  \__$$$$$$$ | $$$$ _/$$$$$$$$ $$ |  $$ |
$$ |  $$ $$ |    $$  __$$ |$$  _/  $$   ____$$ |  $$ |
\$$$$$$  $$ |    \$$$$$$$ $$$$$$$$\\$$$$$$$\$$ |  $$ |
 \______/\__|     \_______\________|\_______\__|  \__|
`.trimEnd();

import { FONT_TYPES } from '$lib/style-prefs.svelte';
import themes, { themeVariables } from '$lib/themes';

export const themeInit = () => {
  const lines = Object.entries(themeVariables).map(
    ([key, varName]) =>
      `window.document.documentElement.style.setProperty('${varName}', initialTheme.${key});`,
  );

  return `
<script> 
  (function() {
    var initialTheme = (${JSON.stringify(themes)})[window.localStorage.theme]
    if (initialTheme) {
      ${lines.join('\n')}
    }

    var initialProseFont = window.localStorage.proseFont;
    if (initialProseFont && ${JSON.stringify(FONT_TYPES)}.includes(initialProseFont)) {
      window.document.documentElement.style.setProperty('--font-prose', 'var(--font-' + initialProseFont + ')')
    }
  })()
</script>
`;
};

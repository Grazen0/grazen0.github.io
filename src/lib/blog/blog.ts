import slugify from '@sindresorhus/slugify';
import markdownIt from 'markdown-it';
import mdAnchor from 'markdown-it-anchor';
import mdExternalLinks from 'markdown-it-external-links';
import mdHighlightJs from 'markdown-it-highlightjs';
import mdImplicitFigures from 'markdown-it-implicit-figures';
import mdTexmath from 'markdown-it-texmath';

export const postRenderer = markdownIt({
  linkify: true,
  typographer: true,
})
  .use(mdImplicitFigures, {
    figcaption: 'title',
    keepAlt: true,
    lazyLoading: true,
    link: true,
  })
  .use(mdTexmath)
  .use(mdHighlightJs, { inline: true, auto: false })
  .use(mdExternalLinks, {
    externalTarget: '_blank',
    externalRel: 'noopener noreferrer',
  })
  .use(mdAnchor, {
    permalink: mdAnchor.permalink.linkInsideHeader({ placement: 'before' }),
    slugify,
  });

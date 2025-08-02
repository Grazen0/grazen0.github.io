import markdownIt from 'markdown-it';
import mdExternalLinks from 'markdown-it-external-links';
import mdHighlightJs from 'markdown-it-highlightjs';
import mdImplicitFigures from 'markdown-it-implicit-figures';
import mdTexmath from 'markdown-it-texmath';

export const renderContentToHtml = (content: string): string => {
  const md = markdownIt({
    html: true,
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
    });

  return md.render(content);
};

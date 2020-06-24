// import { configure, addDecorator } from '@storybook/angular';
// import { withKnobs } from '@storybook/addon-knobs';
//
// addDecorator(withKnobs);
// configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
import { configure, addDecorator, addParameters } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
// import '!style-loader!css-loader!sass-loader!./scss-loader.scss';
// import { setCompodocJson } from '@storybook/addon-docs/dist/frameworks/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
// import theme from './shared-theme';
import docJson from '../../../documentation.json';


setCompodocJson(docJson);
// addParameters({
//   docs: { // inlineStories: true,
//     iframeHeight: '60px'
//   },
//   options:{
//     // theme
//   }
// });

addDecorator(withKnobs);
configure(require.context('../src', true, /\.stories\.(ts|mdx)$/), module);

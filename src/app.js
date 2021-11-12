import { html, render } from './preact.js';

const App = () => html`Henlo`;

export const init = container => {
  render(html`<${App} />`, container);
};

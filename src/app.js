import { html, render, useState } from './preact.js';
import colors from './colors.js';

const App = () => {
  const [color, setColor] = useState({ name: 'black', value: '#000000' });

  const onColorChange = ev => {
    const input = ev.target.value;

    if (colors[input]) {
      setColor({ name: input, value: colors[input] });
    }
  };

  return html`
    <div class="app" style=${{
      backgroundColor: color.value
    }}>
      <input type=text onChange=${onColorChange} />
    <//>
  `;
};

export const init = container => {
  render(html`<${App} />`, container);
};

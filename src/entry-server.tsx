import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export { legalPages } from './data/legal';
export { faqs } from './data/faqs';
export { site, universities } from './data/site';

export function render(path: string) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  );
}

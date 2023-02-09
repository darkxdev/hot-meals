const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<!DOCTYPE html><p>Hello World</p>`);
global.document = dom.window.document;

import commentsCounter from "../src/modules/commentsCounter.js";

describe('Is the number of comments correct', () => {
  test('Comments length should be', () => {
    const mockup = document.createElement('div');
    mockup.innerHTML = `
      <div id="comments-section">
        <h3>Comments (1)</h3>
        <ul>
          <li>2023-02-09 User: Test #1</li>
        </ul>
      </div>
    `;

    const commentsSection = mockup.querySelectorAll('li');
    expect(commentsCounter(commentsSection)).toBe(1);
  });

  test('Comments length should be', () => {
    const mockup = document.createElement('div');
    mockup.innerHTML = `
      <div id="comments-section">
        <h3>Comments (3)</h3>
        <ul>
          <li>2023-02-09 User: Test #1</li>
          <li>2023-02-09 User: Test #2</li>
          <li>2023-02-09 User: Test #3</li>
        </ul>
      </div>
    `;

    const commentsSection = mockup.querySelectorAll('li');
    expect(commentsCounter(commentsSection)).toBe(3);
  });

  test('Comments length should be', () => {
    const mockup = document.createElement('div');
    mockup.innerHTML = `
      <div id="comments-section">
        <h3>Comments ()</h3>
        <ul>
        </ul>
      </div>
    `;

    const commentsSection = mockup.querySelectorAll('li');
    expect(commentsCounter(commentsSection)).toBe(0);
  });
});
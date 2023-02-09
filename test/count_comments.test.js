/**
 * @jest-environment jsdom
 */

import commentsCounter from "../src/modules/commentsCounter.js";

describe('Is the number of comments correct', () => {
  test('Comments length should be', () => {
    const mockup = document.createElement('div');
    mockup.innerHTML = `
      <div id="comments-section">
        <h3>Comments ()</h3>
        <ul>
          <li>2023-02-09 User: Test #1</li>
          <li>2023-02-09 User: Test #2</li>
        </ul>
      </div>
    `;

    const commentsSection = mockup.querySelectorAll('li');
    expect(commentsCounter(commentsSection)).toBe(2);
  });
});
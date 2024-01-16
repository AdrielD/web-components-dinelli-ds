import { describe, expect, it, vi } from 'vitest';
import './index.js';

describe('Button', async () => {
  function element() {
    return document.body.querySelector('ds-button');
  }

  it('Should have a text inside it', () => {
    document.body.innerHTML = '<ds-button>Ahoy!</ds-button>';
    expect(element()?.innerHTML).toContain('Ahoy!');
  });

  it('should dispatch click event on button click', () => {
    document.body.innerHTML = '<ds-button></ds-button>';
    const spyClick = vi.fn();
    element()?.addEventListener('click', spyClick);
    element()?.click();
    expect(spyClick).toHaveBeenCalled();
  });

  // it('should NOT dispatch click event on button click, if button is disabled', () => {
  //   document.body.innerHTML = '<ds-button disabled>Ahoy!</ds-button>';
  //   const spyClick = vi.fn();
  //   element()?.addEventListener('click', spyClick);
  //   element()?.click();
  //   expect(spyClick).not.toHaveBeenCalled();
  // });
});

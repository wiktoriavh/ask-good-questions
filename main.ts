import Alpine from 'alpinejs';
import { marked } from 'marked';

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

window.Alpine = Alpine;

Alpine.data('question', () => ({
  summarise: '',
  problem: '',
  solving: '',
  expectation: '',
  markup: '',
  markdown() {
    const combined = [
      `# ${this.summarise}`,
      '## The Problem',
      this.problem,
      '## What I tried',
      this.solving,
      '## What I expect to happen',
      this.expectation,
    ].join('\n\n');
    return combined;
  },

  init() {},

  output() {
    const html = marked.parse(this.markdown());

    return html;
  },

  copy() {
    navigator.clipboard.writeText(this.markdown());
  },

  preview() {
    this.markup = this.output();
  },


}));

Alpine.start();

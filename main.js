import Alpine from "alpinejs";
import { marked } from "marked";

window.Alpine = Alpine;

Alpine.data("question", () => ({
  summarise: "Prose from typography is not applying styles",
  problem:
    "I wanted to use the tailwindcss/typography plugin, so that I can use the prose className and style a section of my page using it. This section is going to be filled dynamically later with Alpine and marked.",
  solving: `I have followed the official documentation on how to install and use this plugin, however it doesn't change anything.   

I also tried just writing simple HTML, like so:
\`\`\`html
  <article class="m-auto w-[70ch] my-8 prose">
    <h1>prose testing</h1>
  </article>
\`\`\`
I assumed that it has issues with the generated HTML, but it also struggles with this and doesn't apply any styles.

I also tried to extend the theme and adding a custom h1, but that didn't help either.

Here is my repo: https://github.com/Braweria/ask-good-questions`,
  expectation: "I would expect for it to work out of the box.",
  get markup() {
    if (!this.summarise && !this.problem && !this.solving && !this.expectation)
      return "<strong>Nothing to preview yet</strong>";
    return this.output();
  },
  get markdown() {
    const combined = [
      `# ${this.summarise}`,
      "## The Problem",
      this.problem,
      "## What I tried",
      this.solving,
      "## What I expect to happen",
      this.expectation,
    ].join("\n\n");
    return combined;
  },

  init() {},

  output() {
    const html = marked.parse(this.markdown);

    return html;
  },

  copy() {
    navigator.clipboard.writeText(this.markdown);
  },
}));

Alpine.start();

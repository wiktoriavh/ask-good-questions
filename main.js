import Alpine from "alpinejs";
import { marked } from "marked";

window.Alpine = Alpine;

Alpine.data("question", () => ({
  summarise: "",
  problem: "",
  solving: "",
  expectation: "",
  get markup() {
    if (!this.summarise && !this.problem && !this.solving && !this.expectation)
      return "<h2 class='text-center my-4'>Nothing to preview yet</h2>";
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

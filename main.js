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
      return "<strong>Nothing to preview yet</strong>";
    return this.output();
  },

  init() {},

  output() {
    const combined = [
      `# ${this.summarise}`,
      "## The Problem",
      this.problem,
      "## What I tried",
      this.solving,
      "## What I expect to happen",
      this.expectation,
    ].join("\n\n");

    const html = marked.parse(combined);

    return "<article class='prose lg:prose-xl'>" + html + "</article>";
  },
}));

Alpine.start();

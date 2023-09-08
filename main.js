import Alpine from "alpinejs";
import marked from "marked";

window.Alpine = Alpine;

Alpine.data("question", () => ({
  summarise: "",
  problem: "",
  solving: "",
  expectation: "",
  markup: "<strong>Nothing to preview yet</strong>",

  init() {
    console.log("init");
    this.$watch("summarise", () => this.output());
    this.$watch("problem", () => this.output());
    this.$watch("solving", () => this.output());
    this.$watch("expectation", () => this.output());
  },

  output() {
    console.log("output");
    const combined = `${this.summarise}

    # The Problem
    ${this.problem}
    
    # What I tried
    ${this.solving}
    
    # What I expect to happen
    ${this.expectation}`;

    this.markup = marked.parse(combined);
  },
}));

Alpine.start();

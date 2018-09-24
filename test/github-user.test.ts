import "mocha";
import { expect } from "chai";

describe("<github-user>", () => {
  let component;

  describe("without properties", () => {
    beforeEach(() => {
      component = fixture("<github-user></github-user>");
    });

    it("renders default", () => {
      expect(component.$("#content").innerText).to.include("Loading...");
    });
  });

  describe("user", () => {
    beforeEach(async () => {
      component = fixture("<github-user></github-user>");
      let res = await fetch("./base/test/anveio.json");
      component.user = await res.json();
    });

    it("renders name", () => {
      expect(component.$("#header").innerText.trim()).to.eq(
        "Shovon Hasan\n@anveio"
      );
    });

    it("renders text", () => {
      expect(component.$("#text").innerText.trim()).to.eq(
        "JavaScript dev. React + Redux + TypeScript = 💖. Creator of Mturk Engine."
      );
    });

    it("renders footer", () => {
      expect(component.$("#footer").innerText.trim()).to.eq(
        "Queens, New York\n anveio\n Joined Oct 2007"
      );
    });
  });
});

function fixture(tag: string): HTMLElement {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement("div");
    div.classList.add("fixture");
    return div;
  }
  let fixture =
    document.body.querySelector(".fixture") ||
    document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as HTMLElement;
}

const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
  describe("decoding", () => {
    it("should return a string when decoding", () => {
      const actual = polybius("11", false);
      const expected = "string";

      expect(typeof actual).to.equal(expected);
    });

    it("if decoding, should return false if characters not even", () => {
      const actual = polybius("111 1112", false);

      expect(actual).to.be.false;
    });

    it("should maintain proper spacing for decoding", () => {
      const actual = polybius("3251131343 2543241341", false);
      const expected = 11;

      expect(actual.length).to.equal(expected);
    });

    it("should decode '42' as '(i/j)", () => {
      const actual = polybius("42", false);
      const expected = "(i/j)";

      expect(actual).to.equal(expected);
    });
  });
  describe("encoding", () => {
    it("should return a string when encoding", () => {
      const actual = polybius("H");
      const expected = "string";

      expect(typeof actual).to.equal(expected);
    });

    it("should maintain proper spacing for encoding", () => {
      const actual = polybius("Hello World");
      const expected = 21;

      expect(actual.length).to.equal(expected);
    });

    it("should encode i or j as 42", () => {
      const actual = polybius("jk l");
      const expected = "4252 13";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const actual = polybius("Iji");
      const expected = "424242";

      expect(actual).to.equal(expected);
    });
  });
});

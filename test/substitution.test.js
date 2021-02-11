const { expect } = require("chai");
const substitution = require("../src/substitution");

const properAlpha = "x$yqmcgrukswaflnthdjpzibe)";
const improperAlpha = "%xoyqmcgrukswaflnthdjpzibev";
const repeatAlpha = "abcabcabcabcabcabcabcabcyz";

describe("substitution", () => {
  it("should return false if given alphabet is above 26 characters", () => {
    const actual = substitution("test", improperAlpha);

    expect(actual).to.be.false;
  });

  it("should return false if the given alphabet repeats characters", () => {
    const actual = substitution("testingo", repeatAlpha);

    expect(actual).to.be.false;
  });
  describe("encoding", () => {
    it("should ignore capital letters when encoding", () => {
      const actual = substitution("Thinkful!", properAlpha);
      const expected = "jrufscpw!";

      expect(actual).to.equal(expected);
    });

    it("should maintain proper spacing when encoding", () => {
      const actual = substitution("space test!", properAlpha);
      const expected = 11;

      expect(actual.length).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should ignore capital letters when decoding", () => {
      const actual = substitution("jrufs-cpw!", properAlpha, false);
      const expected = "think-ful!";

      expect(actual).to.equal(expected);
    });

    it("should maintain proper spacing when decoding", () => {
      const actual = substitution("jrufscpw jrufscpw", properAlpha, false);
      const expected = 17;

      expect(actual.length).to.equal(expected);
    });
  });
});

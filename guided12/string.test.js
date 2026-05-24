import test from 'node:test';
import assert from 'node:assert';

test.describe("Truthy dan falsy", () => {
    test.it("Nilai kosong adalah falsy", () => {
        // @ts-ignore
        assert.ok(!"");
        assert.equal("", false);
    });

    test.it("Nilai adalah truthy", () => {
        assert.ok("Hello, World!");
    });
});
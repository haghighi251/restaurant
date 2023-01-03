const JestTester = require('./JestTester.js')

test("Checking the installation of JEST", () => {
    expect(JestTester()).toBe(4)
})

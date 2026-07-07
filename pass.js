hc.test("Status code is 200", function() {
  hc.expect(hc.response.code).to.equal(200);
});
hc.test("Status code is 400", function() {
  hc.expect(hc.response.code).to.equal(400);
});
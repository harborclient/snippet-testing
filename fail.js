hc.test("Status code is 4xx", () => {
  hc.expect(hc.response.code >= 400 && hc.response.code < 500).to.be.ok();
});

hc.test("Status code is 400", () => {
  hc.expect(hc.response.code).to.equal(400);
});

hc.test("Status text is present", () => {
  hc.expect(hc.response.status).to.be.ok();
});

hc.test("Response time is recorded", () => {
  hc.expect(hc.response.responseTime >= 0).to.be.ok();
});

hc.test("Response headers exist", () => {
  hc.expect(hc.response.headers).to.be.ok();
});

hc.test("Response body is readable", () => {
  hc.expect(typeof hc.response.text()).to.equal("string");
});

hc.test("JSON error body parses when applicable", () => {
  const contentTypeKey = Object.keys(hc.response.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (!contentTypeKey) {
    return;
  }

  const contentType = hc.response.headers[contentTypeKey];
  if (!contentType.includes("application/json")) {
    return;
  }

  hc.expect(hc.response.json()).to.be.ok();
});

hc.test("Status code is 2xx", () => {
  hc.expect(hc.response.code >= 200 && hc.response.code < 300).be.ok();
});

hc.test("Status code is 200", () => {
  hc.expect(hc.response.code).to.equal(200);
});

hc.test("Status text is present", () => {
  hc.expect(hc.response.status).be.ok();
});

hc.test("Response time is recorded", () => {
  hc.expect(hc.response.responseTime >= 0).be.ok();
});

hc.test("Response headers exist", () => {
  hc.expect(hc.response.headers).be.ok();
});

hc.test("Response body is readable", () => {
  hc.expect(typeof hc.response.text()).to.equal("string");
});

hc.test("JSON body parses when applicable", () => {
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

  hc.expect(hc.response.json()).be.ok();
});

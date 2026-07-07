# Testing Snippets

HarborClient snippet bundle with pass and fail post-request test examples. Use them to learn how `hc.test` and `hc.expect` work, or as starting points for your own response checks.

![Screenshot](screenshot.png)

## Snippets

Both snippets run in **post-request** script lists (collection or request **PostRequest** tab).

| Snippet | Purpose |
| ------- | ------- |
| **Pass** | Asserts the response status code is `200`. Use against endpoints that return success. |
| **Fail** | Asserts the response status code is `400`. Use to verify failing tests appear in the **Tests** tab. |

### Pass

```javascript
hc.test("Status code is 200", function() {
  hc.expect(hc.response.code).to.equal(200);
});
```

### Fail

```javascript
hc.test("Status code is 400", function() {
  hc.expect(hc.response.code).to.equal(400);
});
```

After you send a request, open the response viewer **Tests** tab to see green (pass) or red (fail) results for each registered test.

## Install

Requires HarborClient **2.0.0** or later.

1. Open **File → Snippets**.
2. Browse the **Marketplace** tab and install **Testing**, or use **Install** with this repository URL:
   `https://github.com/harborclient/snippet-testing`
3. Installed snippets appear under **Settings → Snippets** and can be referenced from any post-request script list via **Select snippet...**.

See [Testing](https://harborclient.github.io/testing) and [Request scripts — Snippets](https://harborclient.github.io/request-scripts#snippets) in the HarborClient docs for more on writing and using tests.

## Development

```bash
pnpm install
```

Sign the bundle directory with an Ed25519 key:

```bash
export HARBORCLIENT_PLUGIN_SIGNING_KEY=/path/to/signing.pem
pnpm sign -- --dir . --private-key "$HARBORCLIENT_PLUGIN_SIGNING_KEY" --key-id com.harborclient.snippets.testing
```

Publish a new version (bumps `snippets.json`, signs, commits, tags, and pushes):

```bash
pnpm release
pnpm release -- --version minor
```

See the [@harborclient/sdk signing docs](https://harborclient.github.io/sdk/signing) for key generation and `signature.json` format.

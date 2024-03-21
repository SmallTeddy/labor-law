export default defineContentScript({
  matches: ['*://*.google.com/*'],
  main() {
    console.log('Hello Labor Law.');
  },
});

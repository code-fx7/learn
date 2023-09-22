// https://dev.to/rem0nfawzi/write-better-javascript-and-reactjs-code-with-immerjs-14ml

const state = {
  id: 1,
  name: 'John',
  accounts: {
    facebook: {
      id: 'facebook',
      url: '/'
    },
    twitter: {
      id: 'twitter',
      url: '/'
    }
  }
};

// Ändern der URL inklusive eines neuen states ohne den alten state zu verändern

const newState = {
  ...state,
  accounts: { ...state.accounts, twitter: {
    ...state.accounts.twitter, url: '/newUrl'
  }}
};

// Die gleiche Änderung mit immerjs

const newState = produce(state, (draftState) => {
  draftState.accounts.twitter.url = '/newUrl';
});

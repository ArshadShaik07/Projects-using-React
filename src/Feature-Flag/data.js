const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: false,
  showAccordian: true,
  showRating: false,
  showTabs: true,
  showGithubProfileFinder: true,
};

function apiDummyCall() {
  return new Promise((myresolve, myreject) => {
    if (dummyApiResponse) {
      return myresolve(dummyApiResponse);
    }
    return myreject(dummyApiResponse);
  });
}

export default apiDummyCall;

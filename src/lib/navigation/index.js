export const push = page => {
  history.pushState(page, null, page);
};

export const pop = fn => {
  window.onpopstate = fn;
}

export const init = initialPage => {
  window.onload = () => {
    if (history.state === null) {
      history.replaceState(initialPage, null, null);
    }
  }
};

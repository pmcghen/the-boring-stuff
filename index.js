const replaceString = (oldSub, newSub, fullString) => {
  for (let i = 0; i < fullString.length; i++) {
    if (fullString.substring(i, i + oldSub.length) === oldSub) {
      fullString = fullString.substring(0, i) + newSub + fullString.substring(i + oldSub.length, fullString.length);
    }
  }

  return fullString;
};

const throttle = (cb, delay = 500) => {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  }
};

module.exports = {
  replaceString,
  throttle,
};


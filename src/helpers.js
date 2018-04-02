export const classElement = (element, modifier) => {
  const classes = {
    [`${element}`]: true,
    [`${element}--${modifier}`]: modifier,
  };
  let classList = '';

  Object.keys(classes).forEach((key) => {
    if (classes[key]) {
      classList += key + ' ';
    }
  });

  return classList;
};

export const classBlock = (element, block, modifier) => {
  const classes = {
    [`${element}__${block}`]: block,
    [`${element}__${block}--${modifier}`]: modifier,
  };

  let classList = '';

  Object.keys(classes).forEach((key) => {
    if (classes[key]) {
      classList += key + ' ';
    }
  });

  return classList;
};

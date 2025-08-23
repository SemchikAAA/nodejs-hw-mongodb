const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isContactType = (type) => ['work', 'home', 'personal'].includes(type);
  if (isContactType(type)) return type;
};

const parseBoolean = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return;

  if (value.toLowerCase() === 'true') return true;
  if (value.toLowerCase() === 'false') return false;

  return;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavorite } = query;

  const parsedType = parseType(contactType);
  const parsedIsFavorite = parseBoolean(isFavorite);

  return {
    contactType: parsedType,
    isFavorite: parsedIsFavorite,
  };
};

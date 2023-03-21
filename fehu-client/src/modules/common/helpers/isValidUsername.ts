export const isValidUsername = (username: string): boolean => {
  const re = /^(?![_])[a-zA-Z0-9_]+(?<![_])$/;

  return re.test(username);
};

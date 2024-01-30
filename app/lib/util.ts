export const isEmptyOrWhitespaces = (value?: string | null): boolean =>
  value === null ||
  value === undefined ||
  value === "" ||
  (value.trim && value.trim() === "") ||
  false;

export const isObject = (instance: unknown): boolean =>
  Object.prototype.toString.call(instance) === "[object Object]";

export const isEmptyObject = (instance: unknown): boolean => {
  if (!isObject(instance)) return true;
  return Object.keys(instance as Record<string, string>).length <= 0;
};

export const isArray =
  Array.isArray ||
  function (instance: unknown): boolean {
    return Object.prototype.toString.call(instance) === "[object Array]";
  };

export const isEmptyArray = (arr: unknown): boolean => {
  return !isArray(arr) || arr.length === 0;
};

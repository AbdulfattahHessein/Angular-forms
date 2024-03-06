/**
 * Extracts the name of a variable or member after the last dot, excluding specified levels.
 *
 * @param originalString - The string containing the variable or member name.
 * @param excludeLevels - The number of levels to exclude starting from the first dot.
 * @example
 * const result = excludePartsAfterDot('object.property1.property2.property3', 2);
 * console.log(result); // Output: 'property2.property3'
 * @returns The name after excluding specified levels.
 */
function excludePartsAfterDot(
  originalString: string,
  excludeLevels: number
): string {
  const parts = originalString.split('.');
  const numParts = parts.length;
  const absLevels = Math.abs(excludeLevels);

  if (excludeLevels >= 0) {
    return absLevels >= numParts
      ? parts[numParts - 1]
      : parts.slice(absLevels).join('.');
  } else {
    return absLevels >= numParts
      ? parts[0]
      : parts.slice(0, numParts - absLevels).join('.');
  }
}

/**
 * Gets the name of a member.
 *  @example
 * const result = nameof<User>().username; // autocomplete
 * console.log(result); // Output: 'username'
 */
function nameof<T>(): { [P in keyof T]: P };

/**
 *
 * @param variable - The autocomplete string variable to get the name of.
 * @example
 * const result = nameof<User>("username"); // autocomplete
 * console.log(result); // Output: 'username'
 */
function nameof<T>(variable: keyof T): string;

/**
 *
 * @param variable - The variable to get the name of.
 * - May be an object or a function that returns the variable to get the name of.
 * @example
 * const myVariable = {}; //may be any type
 * const result = nameof({myVariable});
 * console.log(result); // Output: 'myVariable'
 * @example
 * const myVariable = "anything"; //may be any type
 * const result = nameof(() => myVariable);
 * console.log(result); // Output: 'myVariable'
 */
function nameof(variable: { [key: string]: any } | (() => any)): string;

/**
 * Gets the name of a variable or member.
 *
 * @param variable - an arrow function which its return value is the variable or member to get the name of.
 * @param excludeMembers - The number of members to exclude starting from the first dot.
 * @returns The name of the variable or member.
 *
 * @example
 * const result = nameof<User>(u => u.username);
 * console.log(result); // Output: 'username'
 * @example
 * const result = nameof<User>(u => u.username, 0);
 * console.log(result); // Output: 'u.username'
 * @example
 * const result = nameof<User>(u => u.address.city, 1);
 * console.log(result); // Output: 'address.city'
 *
 */
function nameof<T = any>(
  variable: (t: T) => any,
  excludeMembers?: number
): string;

function nameof<T>(
  variable?: { [key: string]: any } | keyof T | ((t: T) => any),
  excludeMembers?: number
): string | { [P in keyof T]: P } {
  if (variable == null) {
    return new Proxy<{ [key: string]: any }>(
      {},
      {
        get: function (_target, prop, _receiver) {
          return prop;
        },
      }
    ) as {
      [P in keyof T]: P;
    };
  }
  if (typeof variable === 'object') {
    return Object.keys(variable)[0] || '';
  }

  if (typeof variable === 'string') {
    return variable;
  }

  const match = variable.toString().match(/=>\s*(.+)$/); //.split('=>')

  if (!match) {
    return '';
  }

  const fullMemberName = match[1].trim();
  const memberParts = fullMemberName.split('.');

  return excludeMembers == null
    ? memberParts[memberParts.length - 1]
    : excludePartsAfterDot(fullMemberName, excludeMembers);
}
export { nameof };

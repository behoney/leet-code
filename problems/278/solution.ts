/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    while (isBadVersion(n)) {
      if (n == 1) return 1;
      n--;
    }
    return ++n;
  };
};

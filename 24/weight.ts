import { combinationsN } from "../utils/combinations.ts";

export function calculateSmallestQuantumEntanglement(packages: number[], groups: number): number {
  const weightPerGroup = packages.reduce((a, b) => a + b, 0) / groups;

  for (let packagesPerGroup = 1; packagesPerGroup < packages.length; packagesPerGroup++) {
    const quantumEntanglements = [];

    for (const group of combinationsN(packages, packagesPerGroup)) {
      const groupWeight = group.reduce((a, b) => a + b, 0);
      if (groupWeight !== weightPerGroup) continue;

      const entanglement = group.reduce((a, b) => a * b, 1);
      quantumEntanglements.push(entanglement);
    }

    if (quantumEntanglements.length) {
      return Math.min(...quantumEntanglements);
    }
  }

  return 0;
}

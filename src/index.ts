export type ProjectSignal = { project: string; owner: string; profile: string; active: boolean };

export const signal: ProjectSignal = { project: "log-analyzer-47om", owner: "JohnTurner20345", profile: "0035", active: true };

export function headline(value: ProjectSignal = signal): string {
  return value.project + " / " + value.owner;
}

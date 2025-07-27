export const formatCallTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const pad = (num: number) => String(num).padStart(2, "0");
  return `${pad(minutes)}:${pad(secs)}`;
};

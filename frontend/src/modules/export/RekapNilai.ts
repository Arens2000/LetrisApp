export function hitungRekapSemester(nilai: any[]) {
  const total = nilai.reduce((a: number, b: any) => a + b.nilai, 0);
  const rata = total / nilai.length;

  return {
    total,
    rata: Number(rata.toFixed(2)),
    grade:
      rata >= 90
        ? "A"
        : rata >= 80
        ? "B"
        : rata >= 70
        ? "C"
        : "D",
  };
}

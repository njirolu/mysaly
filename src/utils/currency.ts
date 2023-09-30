function format(number: number): string {
  return number.toFixed(0).replace(/\d(?=(\d{3})+(?!\d))/g, "$&.");
}

export { format };

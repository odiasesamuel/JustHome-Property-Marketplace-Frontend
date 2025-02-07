export const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  })
    .format(number)
    .replace("₦", "₦ ");
};

function getCurrentYear() {
  const today = new Date();
  return today.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = getCurrentYear();
  const budget = {};

  budget[`income-${currentYear}`] = income;
  budget[`gdp-${currentYear}`] = gdp;
  budget[`capita-${currentYear}`] = capita;

  return budget;
}

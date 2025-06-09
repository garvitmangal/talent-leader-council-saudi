export default function formatCurrency(amount: number, currency: string) {
    const currencyFormatter = (new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }));

    return currencyFormatter.format(amount);
}
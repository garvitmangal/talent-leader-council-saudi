export default function dateFormatter(startDate: string, endDate: string) {
    const startD = new Date(startDate);
    const endD = new Date(endDate);

    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric',
        month: 'long'
    };

    const d = new Intl.DateTimeFormat('en-US', options).format(endD);

    return `${startD.getDate()} - ${endD.getDate()} ${d}`;
}
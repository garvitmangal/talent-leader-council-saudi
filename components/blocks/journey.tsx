import JourneyItem from "./journey-item";

export default function Journey() {
    const journeyItems = [
        {
            month: "Aug '25",
            items: [
                { text: 'Workbook of challenges launch', bold: false },
                { text: 'BI-ANNUAL MEETUP (1ST)', bold: true },
                { text: 'Website feature upon onboarding', bold: false }
            ]
        },
        {
            month: "Sep '25",
            items: [
                { text: 'Country specific TLC whitepaper launch (1st)', bold: false }
            ]
        },
        {
            month: "Oct '25",
            items: [
                { text: 'Hands-on virtual masterclass (1st)', bold: false }
            ]
        },
        {
            month: "Nov '25",
            items: [
                { text: 'Experiential study tour (1st)', bold: false }
            ]
        },
        {
            month: "Dec '25",
            items: [
                { text: 'Hands-on virtual masterclass (2nd)', bold: false }
            ]
        },
        {
            month: "Jan '26",
            items: [
                { text: 'Interviews & Podcasts', bold: false }
            ]
        },
        {
            month: "Feb '26",
            items: [
                { text: 'BI-ANNUAL MEETUP (2ND)', bold: true }
            ]
        },
        {
            month: "Mar '26",
            items: [
                { text: 'Country specific TLC whitepaper launch (2nd)', bold: false }
            ]
        },
        {
            month: "Apr '26",
            items: [
                { text: 'Hands-on virtual masterclass (3rd)', bold: false }
            ]
        },
        {
            month: "May '26",
            items: [
                { text: 'Experiential study tour (2nd)', bold: false }
            ]
        },
        {
            month: "Jun '26",
            items: [
                { text: 'National Talent Strategy Playbook launch', bold: false }
            ]
        },
        {
            month: "Jul '26",
            items: [
                { text: 'Official Coffee Table Booklet (CTB) launch', bold: false },
                { text: 'Completion with certificate of impactful contribution', bold: false }
            ]
        }
    ];

    return (
        <div className="flex-1 flex flex-col gap-4 md:gap-2 w-full">
            {journeyItems.map((item, index) => (
                <JourneyItem
                    key={index}
                    items={item.items || []}
                    month={item.month || ''}
                />
            ))}
        </div>
    );
}
export function formatUrl(url: string): string {
    // Removes 'https://' and '/' in a url
    if (url.startsWith('https://')) {
        url = url.substring('https://'.length);
    } 
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }

    return url;
}

export function formatDate(date: string): string {

    const months: { [key: string]: string } = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
    }

    if(date.includes('-')) {
        const splitDate = date.split('-')
        return `${months[splitDate[1]]} ${splitDate[0]}`
    }
    return 'Present'
}
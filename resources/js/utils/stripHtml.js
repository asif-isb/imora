const ENTITIES = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&#39;': "'",
    '&nbsp;': ' ',
};

export default function stripHtml(html) {
    return String(html ?? '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/&(amp|lt|gt|quot|nbsp|#0?39);/g, (m) => ENTITIES[m] ?? m)
        .replace(/\s+/g, ' ')
        .trim();
}
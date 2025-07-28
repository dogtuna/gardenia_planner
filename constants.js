export const zoneFrostDates = window.zoneFrostDates || {
    "3a": "Sep 8 - 15",
    "3b": "Sep 16 - 23",
    "4a": "Sep 21 - 30",
    "4b": "Sep 25 - Oct 5",
    "5a": "Oct 1 - 10",
    "5b": "Oct 10 - 20",
    "6a": "Oct 10 - 20",
    "6b": "Oct 20 - 30",
    "7a": "Oct 20 - 30",
    "7b": "Oct 30 - Nov 10",
    "8a": "Nov 1 - 10",
    "8b": "Nov 10 - 20",
    "9a": "Dec 1 - 10",
    "9b": "Dec 10 - 20",
    "10a": "Rare Frost",
    "10b": "Rare Frost",
    "11a": "No Frost",
    "11b": "No Frost"
};
window.zoneFrostDates = zoneFrostDates;

export const zoneLastFrostDates = window.zoneLastFrostDates || {
    "3a": "May 21 - Jun 10",
    "3b": "May 11 - May 30",
    "4a": "May 1 - May 20",
    "4b": "Apr 21 - May 10",
    "5a": "Apr 11 - Apr 30",
    "5b": "Apr 1 - Apr 20",
    "6a": "Mar 20 - Apr 10",
    "6b": "Mar 10 - Mar 30",
    "7a": "Mar 1 - Mar 20",
    "7b": "Feb 20 - Mar 10",
    "8a": "Feb 10 - Feb 25",
    "8b": "Feb 1 - Feb 20",
    "9a": "Jan 15 - Feb 1",
    "9b": "Jan 1 - Jan 20",
    "10a": "Rare Frost",
    "10b": "Rare Frost",
    "11a": "No Frost",
    "11b": "No Frost"
};
window.zoneLastFrostDates = zoneLastFrostDates;


export const zipData = window.zipData || {
    "77316": {city: "Montgomery", state: "TX", zone: "9a"},
    "10001": {city: "New York", state: "NY", zone: "7b"},
    "90210": {city: "Beverly Hills", state: "CA", zone: "10b"},
    "33109": {city: "Miami Beach", state: "FL", zone: "11a"},
    "60601": {city: "Chicago", state: "IL", zone: "6a"},
    "80202": {city: "Denver", state: "CO", zone: "5b"},
    "98101": {city: "Seattle", state: "WA", zone: "8b"},
    "85001": {city: "Phoenix", state: "AZ", zone: "9b"},
    "55401": {city: "Minneapolis", state: "MN", zone: "4b"},
    "97201": {city: "Portland", state: "OR", zone: "8b"},
    "27601": {city: "Raleigh", state: "NC", zone: "7b"},
    "75201": {city: "Dallas", state: "TX", zone: "8b"},
    "02108": {city: "Boston", state: "MA", zone: "6b"},
    "84101": {city: "Salt Lake City", state: "UT", zone: "7a"},
    "96813": {city: "Honolulu", state: "HI", zone: "11b"},
    "04101": {city: "Portland", state: "ME", zone: "5b"}
};
window.zipData = zipData;

export const defaultLocation = window.defaultLocation || {
    zip: "77316",
    city: "Montgomery",
    state: "TX",
    zone: "9a",
    firstFrost: zoneFrostDates["9a"],
    lastFrost: zoneLastFrostDates["9a"]
};
window.defaultLocation = defaultLocation;

// Planting windows sourced from open data (e.g., OpenFarm) for use in the timeline
export const plantingWindows = window.plantingWindows || {
    'Jelly Bean Tomatoes': 'Jul-Aug',
    'Big Boy Hybrid Tomatoes': 'Jul-Aug',
    'Peppermint San Marzano Tomatoes': 'Jul-Aug',
    'Large Cherry Tomatoes': 'Jul-Aug',
    'Greek Oregano': 'Jul-Aug',
    'Cosmos': 'Sep-Oct',
    'Strawflower': 'Mid-Oct',
    'Black Elderberry': 'Jul-Aug',
    'Blue Milkweed': 'Dec',
    'Butternut Squash': 'Jul-Aug',
    'Pickling Cucumber': 'Jul-Aug',
    'Marigolds': 'Jul-Aug',
    'Ranunculus': 'Mid-Nov',
    'Little Gem Lettuce': 'Late Aug-Sep',
    'Armenian Cucumber': 'Jul-Aug',
    'Cocozelle Zucchini': 'Jul-Aug',
    'Long Purple Eggplant': 'Jul-Aug',
    'Baby Leaf Spinach': 'Late Aug-Sep',
    'Bloomsdale Spinach': 'Late Aug-Sep',
    'Roma II Beans': 'Jul-Aug',
    'Blue Lake 156 Beans': 'Jul-Aug',
    'Broad Leaf Sage': 'Early Oct',
    'Genovese Basil': 'Jul-Aug',
    'Carnival Blend Carrots': 'Mid-Sep',
    'Cilantro': 'Sep',
    'Fernleaf Dill': 'Early Oct',
    'Cayenne Pepper': 'Jul-Aug',
    'Santa Fe Grande Pepper': 'Jul-Aug',
    'Cal Wonder Bell Pepper': 'Jul-Aug',
    'Jalapeno Pepper': 'Jul-Aug',
    'Chives': 'Early Oct',
    'Warrior Onion': 'Late Aug-Sep',
    'Sugar Baby Watermelon': 'Jul-Aug'
};
window.plantingWindows = plantingWindows;

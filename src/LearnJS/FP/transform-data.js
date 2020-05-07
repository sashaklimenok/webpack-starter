const schools = ["Yorktown", "Washington & Lee", "Wakefield"];
const schoolsObj = { "Yorktown": 10, "Washington & Lee": 2, "Wakefield": 5 };
const ages = [21, 18, 42, 40, 64, 63, 34];
const colors = [
    {
        id: '-xekare',
        title: "rad red",
        rating: 3
    },
    {
        id: '-jbwsof',
        title: "big blue",
        rating: 2
    },
    {
        id: '-prigbj',
        title: "grizzly grey",
        rating: 5
    },
    {
        id: '-ryhbhsl',
        title: "banana",
        rating: 1
    }
]


const cutSchool = (cut, list) => list.filter(school => school !== cut); //pure function
const highSchools = schools.map(school => ({ name: school }));


const editName = (oldName, name, arr) => {
    return arr.map(item => {
        if (item.name === oldName) {
            return { ...item, name }
        } else {
            return item
        }
    })
}

const schoolsToArray = Object.keys(schoolsObj).map(key => (
    {
        name: key,
        wins: schoolsObj[key]
    }
));

const maxAge = ages.reduce((age, currentAge) => (currentAge > age) ? currentAge : age);

const hashColors = colors.reduce((hash, { id, title, rating }) => {
    hash[id] = { title, rating }
    return hash;
},{});


// Inspired by 'alexismenest' capstone 'mockAPI' logic.
// fetchAPI accepts a JavaScript Date object.
// fetchAPI returns a list of randomly generated available times.
// The times are between 15:00 and 23:30.
// The list always begins with "--- Select a Time---"
// I found this useful for debugging.
//
// submitAPI always returns 'true'.

const seededGenerator = (date, hour) => {
    const m = 9;
    const d = date.getDate();
    return ((d + hour) % m) / 10;
}

export const fetchAPI = (date) => {
    let result = [];

    for (let hour = 15; hour <= 23; hour++) {
        let randomFactor = Math.random();
        if(seededGenerator(date, hour) < 0.5* randomFactor) result.push(hour + ':00');
        if(seededGenerator(date, hour + 7) < 0.5* randomFactor) result.push(hour + ':30');
    }

    return Promise.resolve(result);
};

const submitAPI = formData => true;

const fakeAPI = {
    fetchAPI: fetchAPI,
    submitAPI: submitAPI,
}

export default fakeAPI;
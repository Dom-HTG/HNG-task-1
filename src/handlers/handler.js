import dummydata from "../data/data.js";

const retrieveData = async (_req, res) => {
    try {
        res.status(200).json(dummydata);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ message: 'An error occurred while retrieving data.' });
    };
}; 

export default retrieveData;
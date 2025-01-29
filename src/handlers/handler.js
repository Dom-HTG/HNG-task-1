// controller function.

const retrieveData = async (_req, res) => {
    try {
        res.status(200).json({
            email: 'dominicdutchboy@gmail.com',
            current_datetime: new Date().toISOString(),
            github_url: 'https://github.com/Dom-HTG/HNG-task-1'
        });
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ message: 'Error retrieving data' });
    };
}; 

export default retrieveData;
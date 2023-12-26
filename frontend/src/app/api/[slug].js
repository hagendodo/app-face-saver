export default async (req, res) => {
    const { slug } = req.query;
    res.send(slug);
};

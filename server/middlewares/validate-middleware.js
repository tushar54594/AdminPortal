
const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        const msg = error.issues[0].message;
        res.status(400).json({msg: msg});
    }
}

module.exports = validate;

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        const status = 422;
        const message = error.issues[0].message;
        
        // res.status(400).json({msg: message});

        const err = {
            status,
            message,
        };

        console.log(err.message);
        next(err);
    }
}

module.exports = validate;
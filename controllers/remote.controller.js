const axios = require('axios');
const _ = require('underscore');
/**
 * Load external data and append to req
 * @public
 */

exports.load = async ( req, res, next) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'Request resolved correctly'
        })
    } catch (error) {
        return next(error);
    }
}

/**
 * Load a list from remote API
 * @public
 */
exports.list = async (req, res, next) => {
    
    axios.all([
        axios.get( process.env.API_URL, {
                auth: { 
                    username: process.env.API_USER, 
                    password: process.env.API_PASSWORD
                }
            
            })
            .then((response) => {
                if (req.query !== {}) {
                    res.status(200).json(
                        _.where( response.data, req.query )
                    )
                } else {
                    res.status(200).json(
                        response.data
                    )
                }
                
            })
            .catch(error => next(error))
    ])

}

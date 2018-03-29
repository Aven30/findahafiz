module.exports = {
    validateEmail: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    },

    validateRequired: (val) => {
        return (!val || val.length === 0);
    }
}
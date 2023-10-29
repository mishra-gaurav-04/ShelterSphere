class UserData{
    _id;
    email;
    name;
    imageUrl;

    constructor(user){
        this._id = user._id;
        this.email = user.email;
        this.name = user.name;
        this.avatar = user.avatar;
    }
}

module.exports = UserData;
import Comms from './superr';

class User extends Comms {
    constructor(id, name, age, gender, password, telephone, epartment_id){
        super(id, name);
        this.age = age;
        this.gender = gender;
        this.password = password;
        this.telephone = telephone;
        this.epartment_id = epartment_id;
    }
}
export default User;
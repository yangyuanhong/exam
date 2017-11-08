import Comms from './superr';

class Subjecttype extends Comms {
    constructor(id, name, realName){
        super(id, name);
        this.realName = realName;
    }
}
export default Subjecttype;
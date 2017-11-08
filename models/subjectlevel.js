import Comms from './superr';

class Subjectlevel extends Comms {
    constructor(id, name, realName){
        super(id, name);
        this.realName = realName;
    }
}
export default Subjectlevel;
class Paper {
    constructor(id, answerQuestionTime, createTime, description, title, totalPoints, type, epartment_id, user_id){
        this.id = id;
        this.answerQuestionTime = answerQuestionTime;
        this.createTime = createTime;
        this.description = description;
        this.title = title;
        this.totalPoints = totalPoints;
        this.type = type;
        this.epartment_id = epartment_id;
        this.user_id = user_id;
    }
}
export default Paper;
function Activity(name) {
    this.activity = name;
    this.status = "un_start";
}

Activity.prototype.save_activity = function (activity) {
    var activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.unshift(activity);
    localStorage.setItem('activities', JSON.stringify(activities));
}

Activity.activities = function () {
    return JSON.parse(localStorage.getItem('activities')) || [];
}

Activity.save_current_activity = function (current_activity) {
    localStorage.current_activity = current_activity;
}

Activity.judge_repeat_activity = function (input_activity) {
     var repeat_activity= $.find(Activity.activities(), function (activity) {
        return activity.activity == input_activity;
    })
    return repeat_activity;
}
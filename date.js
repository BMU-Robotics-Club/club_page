exports.getDate = ()=>{
    let today = new Date();
    let options = {
        year:"numeric",
        day:"numeric",
        month:"long"
    };
    let day = today.toLocaleDateString('en-Us',options);
    return day;
};


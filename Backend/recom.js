// import PythonShell
const { PythonShell } = require('python-shell')
var path = "./popularity_based_recom_sys.py"


function runReccomendedModel() {
    let recommendedUsers;
    
    let options = {
        scriptPath: path,
        args: ["advertising"]
    }
    PythonShell.run("../popularity_based_recom_sys.py", options, (err, res) => {
        if (err) console.log(err);
        if (res) {
            recommendedUsers = res
            console.log('rrrreeesss', res);
        }
    })
    return recommendedUsers
}
module.exports = runReccomendedModel
// py ma sys.argv[index]  ane import sys
const oracledb = require('oracledb');

cns = {
    user: "mia1",
    password: "mia1",
    connectString: "localhost/ORCLCDB.localdomain"
    //user: "BD",
    //password: "3887",
    //connectString: "172.17.0.2/ORCLCDB"
}

async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;
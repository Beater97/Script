const dati = `
EngieVettoriamento.jdbc.bonusElettrico.request:selectBeRequestDetailCsv
EngieVettoriamento.jdbc.bonusElettrico:insertDistributoriPod
EngieVettoriamento.jdbc.bonusElettrico:insertDistributoriPodBe
EngieVettoriamento.jdbc.bonusElettrico:selectDistributoriPodByKey
EngieVettoriamento.jdbc.util:selectId3RuleByCompensazione
`.trim();

const righe = dati.split('\n');

const inValues = righe.map(v => `'${v.replace(/'/g, "''")}'`).join(', ');

const sql = `IN (${inValues});`;

console.log(sql);
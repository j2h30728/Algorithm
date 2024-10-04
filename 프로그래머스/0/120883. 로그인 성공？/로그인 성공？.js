function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const map = new Map(db);
    if(!map.get(id)) return 'fail';
    return map.get(id) === pw ? "login" : 'wrong pw';
}
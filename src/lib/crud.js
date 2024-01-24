import sql from 'better-sqlite3';
const db = sql('meals.db');
export function modify(sql, data) {
  return db.prepare(sql).run(data);
}
export function get(sql, param) {
  return db.prepare(sql).get(param);
}
export function gets(sql) {
  return db.prepare(sql).all();
}
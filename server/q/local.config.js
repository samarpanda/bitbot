module.exports = {
 email:'er.samarpanda@gmail.com',
 appid: '1079',
 key: 'bc5b98571ce64eaff16eb1490975ac57',
 domain: 'https://api.quikr.com',
 publicApi(){
   return `${this.domain}/public`;
 },
 qapi(){
  return `${this.domain}`
 },
 accessTokenUrl(){
   return `${this.domain}/app/auth/access_token`;
 }
};
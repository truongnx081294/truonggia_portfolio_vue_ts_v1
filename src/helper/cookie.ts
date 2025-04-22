// import { useCookies } from "vue3-cookies";

// const { cookies } = useCookies();

// export const setCookie = (
//   name: string,
//   value: string,
//   days?: number | Date
// ) => {
//   let expires = "";
//   if (days) {
//     if (days instanceof Date) {
//       expires = "; expires=" + days.toUTCString();
//     } else {
//       const date = new Date();
//       date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//       expires = "; expires=" + date.toUTCString();
//     }
//   }

//   console.log(expires);

//   return { cookies };
//   // document.cookie = name + '=' + (value || '') + expires + '; path=/';
//   cookies.set(name, value);
// };

// export const getCookie = (name: string) => {
//   const nameEQ = name + "=";
//   const ca = document.cookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// };
// export const eraseCookie = (name: string) => {
//   document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
// };

import { IAuthState } from "../../models";

export function saveAccessToken(accessToken:IAuthState) {
  document.cookie = `accessToken=${accessToken}; expires=7; path=/`;}

export function getAccessToken() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'accessToken') {
        return value;
      }
    }
    return null;
  }
export function setToken(accessToken: string, remember: boolean) {
  if (remember) {
    document.cookie = `accessToken=${accessToken}; expires=${new Date(
      Date.now() + 3600000
    ).toUTCString()}; path=/;`;
  } else {
    document.cookie = `accessToken=${accessToken}; path=/`;
  }
}
export function removeAccessToken() {
  document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}


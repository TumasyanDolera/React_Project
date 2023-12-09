export function getToken() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('accessToken=')) {
      return cookie.substring("accessToken=".length, cookie.length);
      
    }
  }
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


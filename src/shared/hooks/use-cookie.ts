"use client";

export const useCookie = (cookieKey: string) => {
  const getCookie = (): string | undefined => {
    if (!document) return undefined;

    const cookie = document.cookie
      ?.split("; ")
      .find(row => row.startsWith(`${cookieKey}=`));

    return cookie ? cookie.split("=")[1] : undefined;
  };

  const setCookie = (value: string, daysToExpire = 30) => {
    let expires = "";

    if (expires) {
      const date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }

    if (document) {
      document.cookie = `${cookieKey}=${value}${expires}; path=/`;
    }
  };

  return { getCookie, setCookie };
};

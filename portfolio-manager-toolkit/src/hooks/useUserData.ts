import { IUserData } from "../interfaces/IUserData";
import { useState, useEffect } from "react";

const NEXT_PUBLIC_PORTFOLIO_API_URL: string =
  "https://portfolio-website-editor.vercel.app/api/public/getUserData";

export function useUserData(userEmail: string, apiKey: string) {
  const [userData, setUserData] = useState<IUserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(NEXT_PUBLIC_PORTFOLIO_API_URL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "User-Email": userEmail,
          },
        });

        const data = await res.json();

        if (res.ok && data.userInfo) setUserData(data.userInfo);
        else setUserData(null);
      } catch (error: any) {
        setUserData(null);
      }
    };

    fetchUserData();
  }, [userEmail, apiKey]);

  return userData;
}

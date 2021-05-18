import React from "react";
import { useRouter } from "next/router";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { Profile } from "../../components/Profile";
import { Header } from "../../components/Header";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
    <Header/>
    <div className="container mt-40">
     
<Profile avatarUrl='https://im0-tub-ru.yandex.net/i?id=553fb0c8fb217db30103a003e03cff3e&n=13' 
        fullname='Andy Simony' 
        username='andy' 
        about='Test Info'/>
    </div>
    </>
  );
}

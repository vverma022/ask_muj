import Link from "next/link";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { ThemeToggle } from "../components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserDropdown } from "./UserDropdown";

export async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
      <nav className="h-[10vh] w-full flex items-center border-b px-5 lg:px-14 justify-between">
        <Link href="/" className="flex items-center gap-x-3">
          <Image
            src={logo}
            alt="Logo icon"
            className="h-10 w-fit"
          />
        </Link>
  
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          {user ? (
            <UserDropdown userImage={user.picture} />
          ) : (
            <div className="flex items-center gap-x-4">
              <Button variant="secondary" asChild>
                <RegisterLink>Sign up</RegisterLink>
              </Button>
              <Button asChild>
                <LoginLink>Log in</LoginLink>
              </Button>
            </div>
          )}
        </div>
      </nav>
    );
  }
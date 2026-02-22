import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import LoginButton from "./LoginButton";

export default function NavActions() {
  return (
    <div className="hidden md:flex items-center gap-2 lg:gap-3">
      <ThemeToggle />
      <LanguageToggle />
      <LoginButton />
    </div>
  );
}

// "use client";

// import { MoonIcon, SunIcon } from "@phosphor-icons/react";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const { setTheme, resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   if (!mounted) return null;

//   return (
//     <button
//       onClick={() =>
//         setTheme(resolvedTheme === "dark" ? "light" : "dark")
//       }
//       className="hover:text-gray-300 transition"
//     >
//       {resolvedTheme === "dark" ? (
//         <SunIcon size={20} weight="fill" />
//       ) : (
//         <MoonIcon size={20} weight="fill" />
//       )}
//     </button>
//   );
// }

const ThemeToggle = () =>
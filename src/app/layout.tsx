import type { Metadata } from "next";
import "@/styles/globals.css";
import { MainHeader } from "@/components/main-header/MainHeader";

export const metadata: Metadata = {
  title: "Pongo",
  description: "Delicious meals, shared by a food-loving community.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

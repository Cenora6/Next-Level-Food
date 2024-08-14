import type { Metadata } from "next";
import "@/styles/globals.css";
import { MainHeader } from "@/components/main-header/main-header";

export const metadata: Metadata = {
  title: "All meals",
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

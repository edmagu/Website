import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar"; // add this line — connects your navigation bar

// Optional: change font if you want (we’ll use Inter for simplicity)
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Update the metadata to describe your website
export const metadata: Metadata = {
  title: "YourBrand — Navigate the AI Flood",
  description: "Technology innovation and transformation at the crossroads of AI and infrastructure.",
};

// This wraps every page in your site (like a layout shell)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Top Navigation Bar */}
        <NavBar />

        {/* Main page content */}
        {children}

        {/* Footer */}
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

import './globals.css';
import { FloatingSocial } from '@/components/layout/FloatingSocial';

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Pragya Heritage International School | Best CBSE School in Purnia, Bihar",
  description: "Official Website of Pragya Heritage International School (PHIS), Purnia, Bihar. CBSE Affiliation No: 330963, UDISE: 10090417704. Contact: pragyaschool2017@gmail.com | +91 7903132965.",
  keywords: "Pragya Heritage International School, PHIS Purnia, Best CBSE School in Purnia, Schools in Gulabbagh Purnia, CBSE Affiliation 330963, English Medium School Bihar, pragyaschool2017@gmail.com",
  authors: [{ name: "Pragya Heritage International School" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white relative">
        {children}
        {/* Floating WhatsApp & Instagram Social Icons */}
        <FloatingSocial />
      </body>
    </html>
  );
}

import { useState } from "react";
import { Send } from "lucide-react";

const Footer = () => {
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const [status, setStatus] = useState("");

 const handleSubmit = async (e) => {
   e.preventDefault();
   setStatus("Sending...");

   try {
     const res = await fetch("http://localhost:5000/api/contact", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ email, message }),
     });

     if (!res.ok) throw new Error("Failed");

     setStatus("Sent successfully ✔");
     setEmail("");
     setMessage("");
   } catch {
     setStatus("Failed to send ❌");
   }
 };

 return (
   <footer className="bg-card border-t border-border">
     <div className="container mx-auto px-6 py-12">
       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        
         {/* Brand */}
         <div className="max-w-sm">
           <h3 className="font-display text-xl font-bold text-foreground">
                    {/* Logo */}
       <div className="flex items-center gap-2">
         <img
           src="/7218.png"
           alt="Logo"
           className="w-14 h-10 rounded-full object-cover"
         />
         <span className="bg-red-600 w-0.5 h-10 inline-block" />
         <div className="leading-none">
           <h1 className="text-blue-400 text-3xl font-extrabold uppercase">
             Everest
           </h1>
           <h1 className="text-red-600 text-sm font-extrabold uppercase -mt-1">
             Global Network
           </h1>
         </div>
       </div>

           </h3>
           <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
             Strategic consulting for companies ready to scale with clarity.
           </p>
         </div>

         {/* Compact Footer Form */}
         <form
           onSubmit={handleSubmit}
           className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-3"
         >
           <input
             type="email"
             required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Email"
             className="h-9 w-full sm:w-56 px-3 text-sm rounded-md bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
           />

           <input
             type="text"
             required
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             placeholder="Message"
             className="h-9 w-full sm:w-64 px-3 text-sm rounded-md bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
           />

           <button
             type="submit"
             className="h-9 px-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
           >
             Send <Send size={14} />
           </button>
         </form>
       </div>

       {/* Status */}
       {status && (
         <p className="mt-4 text-xs text-muted-foreground text-center">
           {status}
         </p>
       )}

       {/* Bottom */}
       <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
         © {new Date().getFullYear()} Everest Global Network. All rights reserved.
       </div>
     </div>
   </footer>
 );
};

export default Footer;


// // // // // // // // // // components/ui/auth-dialogs.tsx
// // // // // // // // // "use client"

// // // // // // // // // import {
// // // // // // // // //   Dialog,
// // // // // // // // //   DialogContent,
// // // // // // // // //   DialogDescription,
// // // // // // // // //   DialogHeader,
// // // // // // // // //   DialogTitle,
// // // // // // // // //   DialogTrigger,
// // // // // // // // // } from "@/components/ui/dialog"
// // // // // // // // // import { Button } from "@/components/ui/button"
// // // // // // // // // import { Input } from "@/components/ui/input"
// // // // // // // // // import { Label } from "@/components/ui/label"
// // // // // // // // // import { signIn } from "next-auth/react"
// // // // // // // // // import { useState } from "react"
// // // // // // // // // import { Eye, EyeOff } from "lucide-react"
// // // // // // // // // import { cn } from "@/lib/utils"
// // // // // // // // // import Link from "next/link"

// // // // // // // // // interface AuthDialogProps {
// // // // // // // // //   mode: "login" | "signup"
// // // // // // // // //   toggleMode: () => void
// // // // // // // // // }

// // // // // // // // // export function AuthDialog({ mode, toggleMode }: AuthDialogProps) {
// // // // // // // // //   const [email, setEmail] = useState("")
// // // // // // // // //   const [password, setPassword] = useState("")
// // // // // // // // //   const [showPassword, setShowPassword] = useState(false)

// // // // // // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // // // // // //     e.preventDefault()
// // // // // // // // //     console.log({ email, password })
// // // // // // // // //     // TODO: call login/signup api or use signIn from next-auth
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <Dialog>
// // // // // // // // //       <DialogTrigger asChild>
// // // // // // // // //         <Button variant="outline">{mode === "login" ? "Login" : "Signup"}</Button>
// // // // // // // // //       </DialogTrigger>
// // // // // // // // //       <DialogContent className="sm:max-w-md">
// // // // // // // // //         <DialogHeader>
// // // // // // // // //           <DialogTitle className="text-center">
// // // // // // // // //             {mode === "login" ? "Log in to your account" : "Create a new account"}
// // // // // // // // //           </DialogTitle>
// // // // // // // // //           <DialogDescription className="text-center">
// // // // // // // // //             {mode === "login"
// // // // // // // // //               ? "Enter your credentials to continue."
// // // // // // // // //               : "Fill in the details to sign up."}
// // // // // // // // //           </DialogDescription>
// // // // // // // // //         </DialogHeader>
// // // // // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // // //           <div>
// // // // // // // // //             <Label htmlFor="email">Email</Label>
// // // // // // // // //             <Input
// // // // // // // // //               id="email"
// // // // // // // // //               type="email"
// // // // // // // // //               value={email}
// // // // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // // // //               required
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //           <div>
// // // // // // // // //             <Label htmlFor="password">Password</Label>
// // // // // // // // //             <div className="relative">
// // // // // // // // //               <Input
// // // // // // // // //                 id="password"
// // // // // // // // //                 type={showPassword ? "text" : "password"}
// // // // // // // // //                 value={password}
// // // // // // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // // // // // //                 required
// // // // // // // // //               />
// // // // // // // // //               <button
// // // // // // // // //                 type="button"
// // // // // // // // //                 onClick={() => setShowPassword(!showPassword)}
// // // // // // // // //                 className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
// // // // // // // // //               >
// // // // // // // // //                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //           <Button type="submit" className="w-full">
// // // // // // // // //             {mode === "login" ? "Log In" : "Sign Up"}
// // // // // // // // //           </Button>
// // // // // // // // //         </form>
// // // // // // // // //         <div className="text-center text-sm text-muted-foreground pt-4">
// // // // // // // // //           {mode === "login" ? (
// // // // // // // // //             <>
// // // // // // // // //               Don’t have an account? {" "}
// // // // // // // // //               <button onClick={toggleMode} className="underline">Sign up</button>
// // // // // // // // //             </>
// // // // // // // // //           ) : (
// // // // // // // // //             <>
// // // // // // // // //               Already have an account? {" "}
// // // // // // // // //               <button onClick={toggleMode} className="underline">Log in</button>
// // // // // // // // //             </>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       </DialogContent>
// // // // // // // // //     </Dialog>
// // // // // // // // //   )
// // // // // // // // // }
// // // // // // // // // components/ui/auth-dialog.tsx
// // // // // // // // "use client"

// // // // // // // // import {
// // // // // // // //   Dialog,
// // // // // // // //   DialogContent,
// // // // // // // //   DialogDescription,
// // // // // // // //   DialogHeader,
// // // // // // // //   DialogTitle,
// // // // // // // //   DialogTrigger,
// // // // // // // // } from "@/components/ui/dialog"
// // // // // // // // import { Button } from "@/components/ui/button"
// // // // // // // // import { Input } from "@/components/ui/input"
// // // // // // // // import { Label } from "@/components/ui/label"
// // // // // // // // import { signIn } from "next-auth/react"
// // // // // // // // import { useState, useId } from "react"
// // // // // // // // import { Eye, EyeOff } from "lucide-react"
// // // // // // // // import { cn } from "@/lib/utils"

// // // // // // // // export function AuthDialog({ mode }: { mode: "login" | "signup" }) {
// // // // // // // //   const id = useId()
// // // // // // // //   const [email, setEmail] = useState("")
// // // // // // // //   const [password, setPassword] = useState("")
// // // // // // // //   const [fullName, setFullName] = useState("")
// // // // // // // //   const [showPassword, setShowPassword] = useState(false)
// // // // // // // //   const [loading, setLoading] = useState(false)

// // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // //     e.preventDefault()
// // // // // // // //     setLoading(true)

// // // // // // // //     if (mode === "signup") {
// // // // // // // //       await fetch("/api/signup", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // //         body: JSON.stringify({ fullName, email, password }),
// // // // // // // //       })
// // // // // // // //     } else {
// // // // // // // //       await fetch("/api/login", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // //         body: JSON.stringify({ email, password }),
// // // // // // // //       })
// // // // // // // //     }

// // // // // // // //     setLoading(false)
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <Dialog>
// // // // // // // //       <DialogTrigger asChild>
// // // // // // // //         <Button variant="outline">{mode === "login" ? "Login" : "Sign up"}</Button>
// // // // // // // //       </DialogTrigger>
// // // // // // // //       <DialogContent>
// // // // // // // //         <div className="flex flex-col items-center gap-2">
// // // // // // // //           <div
// // // // // // // //             className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
// // // // // // // //             aria-hidden="true"
// // // // // // // //           >
// // // // // // // //             <svg
// // // // // // // //               className="stroke-zinc-800 dark:stroke-zinc-100"
// // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // //               width="20"
// // // // // // // //               height="20"
// // // // // // // //               viewBox="0 0 32 32"
// // // // // // // //               aria-hidden="true"
// // // // // // // //             >
// // // // // // // //               <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
// // // // // // // //             </svg>
// // // // // // // //           </div>
// // // // // // // //           <DialogHeader>
// // // // // // // //             <DialogTitle className="sm:text-center">
// // // // // // // //               {mode === "signup" ? "Sign up Origin UI" : "Log in to Travaky"}
// // // // // // // //             </DialogTitle>
// // // // // // // //             <DialogDescription className="sm:text-center">
// // // // // // // //               {mode === "signup"
// // // // // // // //                 ? "We just need a few details to get you started."
// // // // // // // //                 : "Enter your credentials to continue."}
// // // // // // // //             </DialogDescription>
// // // // // // // //           </DialogHeader>
// // // // // // // //         </div>

// // // // // // // //         <form className="space-y-5" onSubmit={handleSubmit}>
// // // // // // // //           <div className="space-y-4">
// // // // // // // //             {mode === "signup" && (
// // // // // // // //               <div className="space-y-2">
// // // // // // // //                 <Label htmlFor={`${id}-name`}>Full name</Label>
// // // // // // // //                 <Input
// // // // // // // //                   id={`${id}-name`}
// // // // // // // //                   placeholder="Matt Welsh"
// // // // // // // //                   type="text"
// // // // // // // //                   value={fullName}
// // // // // // // //                   onChange={(e) => setFullName(e.target.value)}
// // // // // // // //                   required
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //             <div className="space-y-2">
// // // // // // // //               <Label htmlFor={`${id}-email`}>Email</Label>
// // // // // // // //               <Input
// // // // // // // //                 id={`${id}-email`}
// // // // // // // //                 placeholder="hi@yourcompany.com"
// // // // // // // //                 type="email"
// // // // // // // //                 value={email}
// // // // // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // // // // //                 required
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="space-y-2">
// // // // // // // //               <Label htmlFor={`${id}-password`}>Password</Label>
// // // // // // // //               <div className="relative">
// // // // // // // //                 <Input
// // // // // // // //                   id={`${id}-password`}
// // // // // // // //                   placeholder="Enter your password"
// // // // // // // //                   type={showPassword ? "text" : "password"}
// // // // // // // //                   value={password}
// // // // // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // // // // //                   required
// // // // // // // //                 />
// // // // // // // //                 <button
// // // // // // // //                   type="button"
// // // // // // // //                   onClick={() => setShowPassword(!showPassword)}
// // // // // // // //                   className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
// // // // // // // //                 >
// // // // // // // //                   {showPassword ? (
// // // // // // // //                     <EyeOff className="h-4 w-4" />
// // // // // // // //                   ) : (
// // // // // // // //                     <Eye className="h-4 w-4" />
// // // // // // // //                   )}
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //           <Button type="submit" className="w-full" disabled={loading}>
// // // // // // // //             {loading ? "Processing..." : mode === "signup" ? "Sign up" : "Log in"}
// // // // // // // //           </Button>
// // // // // // // //         </form>

// // // // // // // //         <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
// // // // // // // //           <span className="text-xs text-muted-foreground">Or</span>
// // // // // // // //         </div>

// // // // // // // //         <Button
// // // // // // // //           variant="outline"
// // // // // // // //           onClick={() => signIn("google", { callbackUrl: "/" })}
// // // // // // // //           className="w-full"
// // // // // // // //         >
// // // // // // // //           Continue with Google
// // // // // // // //         </Button>

// // // // // // // //         <p className="text-center text-xs text-muted-foreground">
// // // // // // // //           By signing up you agree to our {" "}
// // // // // // // //           <a className="underline hover:no-underline" href="#">
// // // // // // // //             Terms
// // // // // // // //           </a>
// // // // // // // //           .
// // // // // // // //         </p>
// // // // // // // //       </DialogContent>
// // // // // // // //     </Dialog>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // components/ui/auth-dialog.tsx
// // // // // // // "use client";

// // // // // // // import {
// // // // // // //   Dialog,
// // // // // // //   DialogContent,
// // // // // // //   DialogDescription,
// // // // // // //   DialogHeader,
// // // // // // //   DialogTitle,
// // // // // // //   DialogTrigger,
// // // // // // // } from "@/components/ui/dialog";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Input } from "@/components/ui/input";
// // // // // // // import { Label } from "@/components/ui/label";
// // // // // // // import { signIn } from "next-auth/react";
// // // // // // // import { useId, useState } from "react";
// // // // // // // import { Eye, EyeOff } from "lucide-react";
// // // // // // // import { cn } from "@/lib/utils";

// // // // // // // interface AuthDialogProps {
// // // // // // //   mode: "login" | "signup";
// // // // // // //   toggleMode: () => void;
// // // // // // // }

// // // // // // // export function AuthDialog({ mode, toggleMode }: AuthDialogProps) {
// // // // // // //   const id = useId();
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [fullName, setFullName] = useState("");
// // // // // // //   const [showPassword, setShowPassword] = useState(false);

// // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (mode === "login") {
// // // // // // //       await signIn("credentials", { email, password, callbackUrl: "/" });
// // // // // // //     } else {
// // // // // // //       const res = await fetch("/api/signup", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({ name: fullName, email, password }),
// // // // // // //       });
// // // // // // //       const data = await res.json();
// // // // // // //       if (!res.ok) {
// // // // // // //         alert(data.error || "Signup failed");
// // // // // // //       } else {
// // // // // // //         alert("Signup successful! JWT: " + data.token);
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <Dialog>
// // // // // // //       <DialogTrigger asChild>
// // // // // // //         <Button variant="outline">{mode === "login" ? "Login" : "Signup"}</Button>
// // // // // // //       </DialogTrigger>
// // // // // // //       <DialogContent>
// // // // // // //         <div className="flex flex-col items-center gap-2">
// // // // // // //           <div
// // // // // // //             className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
// // // // // // //             aria-hidden="true"
// // // // // // //           >
// // // // // // //             <svg
// // // // // // //               className="stroke-zinc-800 dark:stroke-zinc-100"
// // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // //               width="20"
// // // // // // //               height="20"
// // // // // // //               viewBox="0 0 32 32"
// // // // // // //               aria-hidden="true"
// // // // // // //             >
// // // // // // //               <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
// // // // // // //             </svg>
// // // // // // //           </div>
// // // // // // //           <DialogHeader>
// // // // // // //             <DialogTitle className="sm:text-center">
// // // // // // //               {mode === "login" ? "Log in to Travaky" : "Sign up for Travaky"}
// // // // // // //             </DialogTitle>
// // // // // // //             <DialogDescription className="sm:text-center">
// // // // // // //               {mode === "login"
// // // // // // //                 ? "Welcome back. Enter your credentials."
// // // // // // //                 : "We just need a few details to get you started."}
// // // // // // //             </DialogDescription>
// // // // // // //           </DialogHeader>
// // // // // // //         </div>

// // // // // // //         <form onSubmit={handleSubmit} className="space-y-5">
// // // // // // //           {mode === "signup" && (
// // // // // // //             <div className="space-y-2">
// // // // // // //               <Label htmlFor={`${id}-name`}>Full name</Label>
// // // // // // //               <Input
// // // // // // //                 id={`${id}-name`}
// // // // // // //                 placeholder="Matt Welsh"
// // // // // // //                 type="text"
// // // // // // //                 value={fullName}
// // // // // // //                 onChange={(e) => setFullName(e.target.value)}
// // // // // // //                 required
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           <div className="space-y-2">
// // // // // // //             <Label htmlFor={`${id}-email`}>Email</Label>
// // // // // // //             <Input
// // // // // // //               id={`${id}-email`}
// // // // // // //               placeholder="hi@yourcompany.com"
// // // // // // //               type="email"
// // // // // // //               value={email}
// // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //           <div className="space-y-2">
// // // // // // //             <Label htmlFor={`${id}-password`}>Password</Label>
// // // // // // //             <div className="relative">
// // // // // // //               <Input
// // // // // // //                 id={`${id}-password`}
// // // // // // //                 placeholder="Enter your password"
// // // // // // //                 type={showPassword ? "text" : "password"}
// // // // // // //                 value={password}
// // // // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // // // //                 required
// // // // // // //               />
// // // // // // //               <button
// // // // // // //                 type="button"
// // // // // // //                 onClick={() => setShowPassword(!showPassword)}
// // // // // // //                 className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
// // // // // // //               >
// // // // // // //                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <Button type="submit" className="w-full">
// // // // // // //             {mode === "login" ? "Log In" : "Sign up"}
// // // // // // //           </Button>
// // // // // // //         </form>

// // // // // // //         <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
// // // // // // //           <span className="text-xs text-muted-foreground">Or</span>
// // // // // // //         </div>

// // // // // // //         <Button
// // // // // // //           variant="outline"
// // // // // // //           className="w-full"
// // // // // // //           onClick={() => signIn("google", { callbackUrl: "/" })}
// // // // // // //         >
// // // // // // //           Continue with Google
// // // // // // //         </Button>

// // // // // // //         <p className="text-center text-xs text-muted-foreground">
// // // // // // //           By {mode === "signup" ? "signing up" : "logging in"}, you agree to our{' '}
// // // // // // //           <a className="underline hover:no-underline" href="#">
// // // // // // //             Terms
// // // // // // //           </a>
// // // // // // //           .
// // // // // // //         </p>

// // // // // // //         <div className="text-center text-sm text-muted-foreground pt-4">
// // // // // // //           {mode === "login" ? (
// // // // // // //             <>
// // // // // // //               Don’t have an account?{' '}
// // // // // // //               <button onClick={toggleMode} className="underline">
// // // // // // //                 Sign up
// // // // // // //               </button>
// // // // // // //             </>
// // // // // // //           ) : (
// // // // // // //             <>
// // // // // // //               Already have an account?{' '}
// // // // // // //               <button onClick={toggleMode} className="underline">
// // // // // // //                 Log in
// // // // // // //               </button>
// // // // // // //             </>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </DialogContent>
// // // // // // //     </Dialog>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";

// // // // // // import {
// // // // // //   Dialog,
// // // // // //   DialogContent,
// // // // // //   DialogDescription,
// // // // // //   DialogHeader,
// // // // // //   DialogTitle,
// // // // // //   DialogTrigger,
// // // // // // } from "@/components/ui/dialog";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { Label } from "@/components/ui/label";
// // // // // // import { useId, useState } from "react";
// // // // // // import { Eye, EyeOff } from "lucide-react";
// // // // // // import { cn } from "@/lib/utils";

// // // // // // interface AuthDialogProps {
// // // // // //   mode: "login" | "signup";
// // // // // //   toggleMode: () => void;
// // // // // // }

// // // // // // export function AuthDialog({ mode, toggleMode }: AuthDialogProps) {
// // // // // //   const id = useId();
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [fullName, setFullName] = useState("");
// // // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState("");

// // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     setLoading(true);
// // // // // //     setError("");

// // // // // //     const endpoint = mode === "login" ? "/api/login" : "/api/signup";
// // // // // //     const [firstname, lastname] = fullName.trim().split(" ");

// // // // // //     try {
// // // // // //       const res = await fetch(endpoint, {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({
// // // // // //           email,
// // // // // //           password,
// // // // // //           firstname,
// // // // // //           lastname: lastname ?? "",
// // // // // //         }),
// // // // // //       });

// // // // // //       const data = await res.json();

// // // // // //       if (!res.ok) {
// // // // // //         setError(data.error || "Authentication failed");
// // // // // //       } else {
// // // // // //         localStorage.setItem("token", data.token);
// // // // // //         localStorage.setItem("email", email);
// // // // // //         alert(`${mode} successful!`);
// // // // // //         window.location.reload();
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       setError("Unexpected error");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <Dialog>
// // // // // //       <DialogTrigger asChild>
// // // // // //         <Button variant="outline">
// // // // // //           {mode === "login" ? "Login" : "Signup"}
// // // // // //         </Button>
// // // // // //       </DialogTrigger>
// // // // // //       <DialogContent>
// // // // // //         <div className="flex flex-col items-center gap-2">
// // // // // //           <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border">
// // // // // //             <svg
// // // // // //               className="stroke-zinc-800 dark:stroke-zinc-100"
// // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // //               width="20"
// // // // // //               height="20"
// // // // // //               viewBox="0 0 32 32"
// // // // // //             >
// // // // // //               <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
// // // // // //             </svg>
// // // // // //           </div>
// // // // // //           <DialogHeader>
// // // // // //             <DialogTitle className="sm:text-center">
// // // // // //               {mode === "login" ? "Log in to Travaky" : "Sign up for Travaky"}
// // // // // //             </DialogTitle>
// // // // // //             <DialogDescription className="sm:text-center">
// // // // // //               {mode === "login"
// // // // // //                 ? "Welcome back. Enter your credentials."
// // // // // //                 : "We just need a few details to get you started."}
// // // // // //             </DialogDescription>
// // // // // //           </DialogHeader>
// // // // // //         </div>

// // // // // //         <form onSubmit={handleSubmit} className="space-y-5">
// // // // // //           {mode === "signup" && (
// // // // // //             <div className="space-y-2">
// // // // // //               <Label htmlFor={`${id}-name`}>Full name</Label>
// // // // // //               <Input
// // // // // //                 id={`${id}-name`}
// // // // // //                 placeholder="Matt Welsh"
// // // // // //                 type="text"
// // // // // //                 value={fullName}
// // // // // //                 onChange={(e) => setFullName(e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <div className="space-y-2">
// // // // // //             <Label htmlFor={`${id}-email`}>Email</Label>
// // // // // //             <Input
// // // // // //               id={`${id}-email`}
// // // // // //               placeholder="hi@yourcompany.com"
// // // // // //               type="email"
// // // // // //               value={email}
// // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="space-y-2">
// // // // // //             <Label htmlFor={`${id}-password`}>Password</Label>
// // // // // //             <div className="relative">
// // // // // //               <Input
// // // // // //                 id={`${id}-password`}
// // // // // //                 placeholder="Enter your password"
// // // // // //                 type={showPassword ? "text" : "password"}
// // // // // //                 value={password}
// // // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //               <button
// // // // // //                 type="button"
// // // // // //                 onClick={() => setShowPassword(!showPassword)}
// // // // // //                 className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
// // // // // //               >
// // // // // //                 {showPassword ? (
// // // // // //                   <EyeOff className="w-4 h-4" />
// // // // // //                 ) : (
// // // // // //                   <Eye className="w-4 h-4" />
// // // // // //                 )}
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <Button type="submit" className="w-full" disabled={loading}>
// // // // // //             {loading
// // // // // //               ? mode === "login"
// // // // // //                 ? "Logging in..."
// // // // // //                 : "Signing up..."
// // // // // //               : mode === "login"
// // // // // //               ? "Log In"
// // // // // //               : "Sign up"}
// // // // // //           </Button>

// // // // // //           {error && (
// // // // // //             <p className="text-sm text-red-500 text-center pt-1">{error}</p>
// // // // // //           )}
// // // // // //         </form>

// // // // // //         <p className="text-center text-xs text-muted-foreground">
// // // // // //           By {mode === "signup" ? "signing up" : "logging in"}, you agree to our{" "}
// // // // // //           <a className="underline hover:no-underline" href="#">
// // // // // //             Terms
// // // // // //           </a>
// // // // // //           .
// // // // // //         </p>

// // // // // //         <div className="text-center text-sm text-muted-foreground pt-4">
// // // // // //           {mode === "login" ? (
// // // // // //             <>
// // // // // //               Don’t have an account?{" "}
// // // // // //               <button onClick={toggleMode} className="underline">
// // // // // //                 Sign up
// // // // // //               </button>
// // // // // //             </>
// // // // // //           ) : (
// // // // // //             <>
// // // // // //               Already have an account?{" "}
// // // // // //               <button onClick={toggleMode} className="underline">
// // // // // //                 Log in
// // // // // //               </button>
// // // // // //             </>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </DialogContent>
// // // // // //     </Dialog>
// // // // // //   );
// // // // // // }
// // // // // "use client"

// // // // // import {
// // // // //   Dialog,
// // // // //   DialogContent,
// // // // //   DialogDescription,
// // // // //   DialogHeader,
// // // // //   DialogTitle,
// // // // //   DialogTrigger,
// // // // // } from "@/components/ui/dialog"
// // // // // import { Button } from "@/components/ui/button"
// // // // // import { Input } from "@/components/ui/input"
// // // // // import { Label } from "@/components/ui/label"
// // // // // import { Eye, EyeOff } from "lucide-react"
// // // // // import { useId, useState } from "react"
// // // // // import { useRouter, useSearchParams } from "next/navigation"

// // // // // interface AuthDialogProps {
// // // // //   mode: "login" | "signup"
// // // // //   toggleMode: () => void
// // // // // }

// // // // // export function AuthDialog({ mode, toggleMode }: AuthDialogProps) {
// // // // //   const id = useId()
// // // // //   const [email, setEmail] = useState("")
// // // // //   const [password, setPassword] = useState("")
// // // // //   const [fullName, setFullName] = useState("")
// // // // //   const [showPassword, setShowPassword] = useState(false)
// // // // //   const [loading, setLoading] = useState(false)
// // // // //   const [error, setError] = useState("")
// // // // //   const router = useRouter()
// // // // //   const searchParams = useSearchParams()
// // // // //   const redirectTo = searchParams.get("redirect") || "/"

// // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // //     e.preventDefault()
// // // // //     setLoading(true)
// // // // //     setError("")

// // // // //     const endpoint = mode === "login" ? "/api/login" : "/api/signup"
// // // // //     const [firstname, lastname] = fullName.trim().split(" ")

// // // // //     try {
// // // // //       const res = await fetch(endpoint, {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({
// // // // //           email,
// // // // //           password,
// // // // //           firstname,
// // // // //           lastname: lastname ?? "",
// // // // //           redirectTo,
// // // // //         }),
// // // // //       })

// // // // //       const data = await res.json()

// // // // //       if (!res.ok) {
// // // // //         setError(data.error || "Authentication failed")
// // // // //       } else {
// // // // //         router.push(data.redirectTo)
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setError("Unexpected error")
// // // // //     } finally {
// // // // //       setLoading(false)
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <Dialog>
// // // // //       <DialogTrigger asChild>
// // // // //         <Button variant="outline">
// // // // //           {mode === "login" ? "Login" : "Signup"}
// // // // //         </Button>
// // // // //       </DialogTrigger>
// // // // //       <DialogContent>
// // // // //         <div className="flex flex-col items-center gap-2">
// // // // //           <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border">
// // // // //             <svg
// // // // //               className="stroke-zinc-800 dark:stroke-zinc-100"
// // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // //               width="20"
// // // // //               height="20"
// // // // //               viewBox="0 0 32 32"
// // // // //             >
// // // // //               <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
// // // // //             </svg>
// // // // //           </div>
// // // // //           <DialogHeader>
// // // // //             <DialogTitle className="sm:text-center">
// // // // //               {mode === "login" ? "Log in to Travaky" : "Sign up for Travaky"}
// // // // //             </DialogTitle>
// // // // //             <DialogDescription className="sm:text-center">
// // // // //               {mode === "login"
// // // // //                 ? "Welcome back. Enter your credentials."
// // // // //                 : "We just need a few details to get you started."}
// // // // //             </DialogDescription>
// // // // //           </DialogHeader>
// // // // //         </div>

// // // // //         <form onSubmit={handleSubmit} className="space-y-5">
// // // // //           {mode === "signup" && (
// // // // //             <div className="space-y-2">
// // // // //               <Label htmlFor={`${id}-name`}>Full name</Label>
// // // // //               <Input
// // // // //                 id={`${id}-name`}
// // // // //                 placeholder="Matt Welsh"
// // // // //                 type="text"
// // // // //                 value={fullName}
// // // // //                 onChange={(e) => setFullName(e.target.value)}
// // // // //                 required
// // // // //               />
// // // // //             </div>
// // // // //           )}

// // // // //           <div className="space-y-2">
// // // // //             <Label htmlFor={`${id}-email`}>Email</Label>
// // // // //             <Input
// // // // //               id={`${id}-email`}
// // // // //               placeholder="hi@yourcompany.com"
// // // // //               type="email"
// // // // //               value={email}
// // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           <div className="space-y-2">
// // // // //             <Label htmlFor={`${id}-password`}>Password</Label>
// // // // //             <div className="relative">
// // // // //               <Input
// // // // //                 id={`${id}-password`}
// // // // //                 placeholder="Enter your password"
// // // // //                 type={showPassword ? "text" : "password"}
// // // // //                 value={password}
// // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // //                 required
// // // // //               />
// // // // //               <button
// // // // //                 type="button"
// // // // //                 onClick={() => setShowPassword(!showPassword)}
// // // // //                 className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
// // // // //               >
// // // // //                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           <Button type="submit" className="w-full" disabled={loading}>
// // // // //             {loading
// // // // //               ? mode === "login"
// // // // //                 ? "Logging in..."
// // // // //                 : "Signing up..."
// // // // //               : mode === "login"
// // // // //               ? "Log In"
// // // // //               : "Sign up"}
// // // // //           </Button>

// // // // //           {error && (
// // // // //             <p className="text-sm text-red-500 text-center pt-1">{error}</p>
// // // // //           )}
// // // // //         </form>

// // // // //         <p className="text-center text-xs text-muted-foreground">
// // // // //           By {mode === "signup" ? "signing up" : "logging in"}, you agree to our{" "}
// // // // //           <a className="underline hover:no-underline" href="#">
// // // // //             Terms
// // // // //           </a>
// // // // //           .
// // // // //         </p>

// // // // //         <div className="text-center text-sm text-muted-foreground pt-4">
// // // // //           {mode === "login" ? (
// // // // //             <>
// // // // //               Don’t have an account?{" "}
// // // // //               <button onClick={toggleMode} className="underline">
// // // // //                 Sign up
// // // // //               </button>
// // // // //             </>
// // // // //           ) : (
// // // // //             <>
// // // // //               Already have an account?{" "}
// // // // //               <button onClick={toggleMode} className="underline">
// // // // //                 Log in
// // // // //               </button>
// // // // //             </>
// // // // //           )}
// // // // //         </div>
// // // // //       </DialogContent>
// // // // //     </Dialog>
// // // // //   )
// // // // // }
// // // // "use client"

// // // // import {
// // // //   Dialog,
// // // //   DialogContent,
// // // //   DialogDescription,
// // // //   DialogHeader,
// // // //   DialogTitle,
// // // // } from "@/components/ui/dialog"
// // // // import { Button } from "@/components/ui/button"
// // // // import { Input } from "@/components/ui/input"
// // // // import { Label } from "@/components/ui/label"
// // // // import { Eye, EyeOff } from "lucide-react"
// // // // import { useId, useState } from "react"
// // // // import { useSearchParams } from "next/navigation"

// // // // interface AuthDialogProps {
// // // //   mode: "login" | "signup"
// // // //   toggleMode: () => void
// // // //   onAuthSuccess: (redirectUrl: string) => void
// // // // }

// // // // export function AuthDialog({ mode, toggleMode, onAuthSuccess }: AuthDialogProps) {
// // // //   const id = useId()
// // // //   const [email, setEmail] = useState("")
// // // //   const [password, setPassword] = useState("")
// // // //   const [fullName, setFullName] = useState("")
// // // //   const [showPassword, setShowPassword] = useState(false)
// // // //   const [loading, setLoading] = useState(false)
// // // //   const [error, setError] = useState("")
// // // //   const searchParams = useSearchParams()
// // // //   const redirectTo = searchParams.get("redirect") || "/"

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault()
// // // //     setLoading(true)
// // // //     setError("")

// // // //     const endpoint = mode === "login" ? "/api/login" : "/api/signup"
// // // //     const [firstname, lastname] = fullName.trim().split(" ")

// // // //     try {
// // // //       const res = await fetch(endpoint, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({
// // // //           email,
// // // //           password,
// // // //           firstname,
// // // //           lastname: lastname ?? "",
// // // //           redirectTo,
// // // //         }),
// // // //       })

// // // //       const data = await res.json()

// // // //       if (!res.ok) {
// // // //         setError(data.error || "Authentication failed")
// // // //       } else {
// // // //         console.log("Login Success", data)
// // // //         onAuthSuccess(data.redirectTo)
// // // //       }
// // // //     } catch (err: any) {
// // // //       console.error('Auth Error:', err)
// // // //       setError(err.message || "Unexpected error")
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   return (
// // // //     <Dialog open onOpenChange={() => onAuthSuccess("/")}>
// // // //       <DialogContent>
// // // //         <div className="flex flex-col items-center gap-2">
// // // //           <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border">
// // // //             <svg className="stroke-zinc-800 dark:stroke-zinc-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
// // // //               <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
// // // //             </svg>
// // // //           </div>
// // // //           <DialogHeader>
// // // //             <DialogTitle className="sm:text-center">
// // // //               {mode === "login" ? "Log in to Travaky" : "Sign up for Travaky"}
// // // //             </DialogTitle>
// // // //             <DialogDescription className="sm:text-center">
// // // //               {mode === "login"
// // // //                 ? "Welcome back. Enter your credentials."
// // // //                 : "We just need a few details to get you started."}
// // // //             </DialogDescription>
// // // //           </DialogHeader>
// // // //         </div>

// // // //         <form onSubmit={handleSubmit} className="space-y-5">
// // // //           {mode === "signup" && (
// // // //             <div className="space-y-2">
// // // //               <Label htmlFor={`${id}-name`}>Full name</Label>
// // // //               <Input
// // // //                 id={`${id}-name`}
// // // //                 placeholder="Matt Welsh"
// // // //                 type="text"
// // // //                 value={fullName}
// // // //                 onChange={(e) => setFullName(e.target.value)}
// // // //                 required
// // // //               />
// // // //             </div>
// // // //           )}

// // // //           <div className="space-y-2">
// // // //             <Label htmlFor={`${id}-email`}>Email</Label>
// // // //             <Input
// // // //               id={`${id}-email`}
// // // //               placeholder="hi@yourcompany.com"
// // // //               type="email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="space-y-2">
// // // //             <Label htmlFor={`${id}-password`}>Password</Label>
// // // //             <div className="relative">
// // // //               <Input
// // // //                 id={`${id}-password`}
// // // //                 placeholder="Enter your password"
// // // //                 type={showPassword ? "text" : "password"}
// // // //                 value={password}
// // // //                 onChange={(e) => setPassword(e.target.value)}
// // // //                 required
// // // //               />
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={() => setShowPassword(!showPassword)}
// // // //                 className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
// // // //               >
// // // //                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           <Button type="submit" className="w-full" disabled={loading}>
// // // //             {loading
// // // //               ? mode === "login"
// // // //                 ? "Logging in..."
// // // //                 : "Signing up..."
// // // //               : mode === "login"
// // // //               ? "Log In"
// // // //               : "Sign up"}
// // // //           </Button>

// // // //           {error && (
// // // //             <p className="text-sm text-red-500 text-center pt-1">{error}</p>
// // // //           )}
// // // //         </form>

// // // //         <p className="text-center text-sm text-muted-foreground pt-4">
// // // //           {mode === "login" ? (
// // // //             <>
// // // //               Don’t have an account?{" "}
// // // //               <button onClick={toggleMode} className="underline">
// // // //                 Sign up
// // // //               </button>
// // // //             </>
// // // //           ) : (
// // // //             <>
// // // //               Already have an account?{" "}
// // // //               <button onClick={toggleMode} className="underline">
// // // //                 Log in
// // // //               </button>
// // // //             </>
// // // //           )}
// // // //         </p>
// // // //       </DialogContent>
// // // //     </Dialog>
// // // //   )
// // // // }
// // // "use client"

// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogDescription,
// // //   DialogHeader,
// // //   DialogTitle,
// // // } from "@/components/ui/dialog"
// // // import { Button } from "@/components/ui/button"
// // // import { Input } from "@/components/ui/input"
// // // import { Label } from "@/components/ui/label"
// // // import { Eye, EyeOff } from "lucide-react"
// // // import { useId, useState } from "react"
// // // import { useSearchParams } from "next/navigation"
// // // import { toast } from 'sonner'

// // // interface AuthDialogProps {
// // //   mode: "login" | "signup"
// // //   toggleMode: () => void
// // //   onAuthSuccess: (redirectUrl: string) => void
// // // }

// // // export function AuthDialog({ mode, toggleMode, onAuthSuccess }: AuthDialogProps) {
// // //   const id = useId()
// // //   const [email, setEmail] = useState("")
// // //   const [password, setPassword] = useState("")
// // //   const [fullName, setFullName] = useState("")
// // //   const [showPassword, setShowPassword] = useState(false)
// // //   const [loading, setLoading] = useState(false)
// // //   const [error, setError] = useState("")
// // //   const searchParams = useSearchParams()
// // //   const redirectTo = searchParams.get("redirect") || "/"

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault()
// // //     setLoading(true)
// // //     setError("")

// // //     const endpoint = mode === "login" ? "/api/login" : "/api/signup"
// // //     const [firstname, lastname] = fullName.trim().split(" ")

// // //     try {
// // //       const res = await fetch(endpoint, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           email,
// // //           password,
// // //           firstname,
// // //           lastname: lastname ?? "",
// // //           redirectTo,
// // //         }),
// // //       })

// // //       const data = await res.json()

// // //       if (!res.ok) {
// // //         setError(data.error || "Authentication failed")
// // //       } else {
// // //         if (mode === "signup") {
// // //           toast.success("Signup successful! Please log in.", { duration: 4000 })
// // //           toggleMode()
// // //         } else {
// // //           toast.success("Logged in successfully!", { duration: 4000 })
// // //           router.refresh()
// // //           onAuthSuccess(data.redirectTo)
// // //         }
// // //       }
// // //     } catch (err) {
// // //       setError("Unexpected error")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   return (
// // //     <Dialog open onOpenChange={() => onAuthSuccess("/")}>
// // //       <DialogContent>
// // //         <div className="flex flex-col items-center gap-2">
// // //           <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border">
// // //             <svg className="stroke-zinc-800 dark:stroke-zinc-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
// // //               <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
// // //             </svg>
// // //           </div>
// // //           <DialogHeader>
// // //             <DialogTitle className="sm:text-center">
// // //               {mode === "login" ? "Log in to Travaky" : "Sign up for Travaky"}
// // //             </DialogTitle>
// // //             <DialogDescription className="sm:text-center">
// // //               {mode === "login"
// // //                 ? "Welcome back. Enter your credentials."
// // //                 : "We just need a few details to get you started."}
// // //             </DialogDescription>
// // //           </DialogHeader>
// // //         </div>

// // //         <form onSubmit={handleSubmit} className="space-y-5">
// // //           {mode === "signup" && (
// // //             <div className="space-y-2">
// // //               <Label htmlFor={`${id}-name`}>Full name</Label>
// // //               <Input
// // //                 id={`${id}-name`}
// // //                 placeholder="Matt Welsh"
// // //                 type="text"
// // //                 value={fullName}
// // //                 onChange={(e) => setFullName(e.target.value)}
// // //                 required
// // //               />
// // //             </div>
// // //           )}

// // //           <div className="space-y-2">
// // //             <Label htmlFor={`${id}-email`}>Email</Label>
// // //             <Input
// // //               id={`${id}-email`}
// // //               placeholder="hi@yourcompany.com"
// // //               type="email"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div className="space-y-2">
// // //             <Label htmlFor={`${id}-password`}>Password</Label>
// // //             <div className="relative">
// // //               <Input
// // //                 id={`${id}-password`}
// // //                 placeholder="Enter your password"
// // //                 type={showPassword ? "text" : "password"}
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 required
// // //               />
// // //               <button
// // //                 type="button"
// // //                 onClick={() => setShowPassword(!showPassword)}
// // //                 className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
// // //               >
// // //                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
// // //               </button>
// // //             </div>
// // //           </div>

// // //           <Button type="submit" className="w-full" disabled={loading}>
// // //             {loading
// // //               ? mode === "login"
// // //                 ? "Logging in..."
// // //                 : "Signing up..."
// // //               : mode === "login"
// // //               ? "Log In"
// // //               : "Sign up"}
// // //           </Button>

// // //           {error && (
// // //             <p className="text-sm text-red-500 text-center pt-1">{error}</p>
// // //           )}
// // //         </form>

// // //         <p className="text-center text-sm text-muted-foreground pt-4">
// // //           {mode === "login" ? (
// // //             <>
// // //               Don’t have an account?{" "}
// // //               <button onClick={toggleMode} className="underline">
// // //                 Sign up
// // //               </button>
// // //             </>
// // //           ) : (
// // //             <>
// // //               Already have an account?{" "}
// // //               <button onClick={toggleMode} className="underline">
// // //                 Log in
// // //               </button>
// // //             </>
// // //           )}
// // //         </p>
// // //       </DialogContent>
// // //     </Dialog>
// // //   )
// // // }
// // "use client"

// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// // } from "@/components/ui/dialog"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Eye, EyeOff } from "lucide-react"
// // import { useId, useState } from "react"
// // import { useSearchParams, useRouter } from "next/navigation"
// // import { toast } from 'sonner'

// // interface AuthDialogProps {
// //   mode: "login" | "signup"
// //   toggleMode: () => void
// //   onAuthSuccess: (redirectUrl: string) => void
// // }

// // export function AuthDialog({ mode, toggleMode, onAuthSuccess }: AuthDialogProps) {
// //   const id = useId()
// //   const [email, setEmail] = useState("")
// //   const [password, setPassword] = useState("")
// //   const [fullName, setFullName] = useState("")
// //   const [showPassword, setShowPassword] = useState(false)
// //   const [loading, setLoading] = useState(false)
// //   const [error, setError] = useState("")
// //   const searchParams = useSearchParams()
// //   const router = useRouter()
// //   const redirectTo = searchParams.get("redirect") || "/"

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setLoading(true)
// //     setError("")

// //     const endpoint = mode === "login" ? "/api/login" : "/api/signup"
// //     const [firstname, lastname] = fullName.trim().split(" ")

// //     try {
// //       const res = await fetch(endpoint, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         credentials: "include", // ✅ ensure token is saved
// //         body: JSON.stringify({
// //           email,
// //           password,
// //           firstname,
// //           lastname: lastname ?? "",
// //           redirectTo,
// //         }),
// //       })

// //       const data = await res.json()
// //       console.log("Login/Signup response:", data)

// //       if (!res.ok) {
// //         setError(data.error || "Authentication failed")
// //       } else {
// //         if (mode === "signup") {
// //           toast.success("Signup successful! Please log in.", { duration: 4000 })
// //           toggleMode()
// //         } else {
// //           toast.success("Logged in successfully!", { duration: 4000 })
// //           console.log("Calling onAuthSuccess with:", data.redirectTo || "/")
// //           onAuthSuccess(data.redirectTo || "/")
// //         }
// //       }
// //     } catch (err: any) {
// //       console.error("Unexpected auth error:", err)
// //       setError(err.message || "Unexpected error")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <Dialog open onOpenChange={() => onAuthSuccess("/")}>
// //       <DialogContent>
// //         <div className="flex flex-col items-center gap-2">
// //           <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border">
// //             <svg className="stroke-zinc-800 dark:stroke-zinc-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
// //               <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
// //             </svg>
// //           </div>
// //           <DialogHeader>
// //             <DialogTitle className="sm:text-center">
// //               {mode === "login" ? "Log in to Travaky" : "Sign up for Travaky"}
// //             </DialogTitle>
// //             <DialogDescription className="sm:text-center">
// //               {mode === "login"
// //                 ? "Welcome back. Enter your credentials."
// //                 : "We just need a few details to get you started."}
// //             </DialogDescription>
// //           </DialogHeader>
// //         </div>

// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           {mode === "signup" && (
// //             <div className="space-y-2">
// //               <Label htmlFor={`${id}-name`}>Full name</Label>
// //               <Input
// //                 id={`${id}-name`}
// //                 placeholder="Matt Welsh"
// //                 type="text"
// //                 value={fullName}
// //                 onChange={(e) => setFullName(e.target.value)}
// //                 required
// //               />
// //             </div>
// //           )}

// //           <div className="space-y-2">
// //             <Label htmlFor={`${id}-email`}>Email</Label>
// //             <Input
// //               id={`${id}-email`}
// //               placeholder="hi@yourcompany.com"
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <Label htmlFor={`${id}-password`}>Password</Label>
// //             <div className="relative">
// //               <Input
// //                 id={`${id}-password`}
// //                 placeholder="Enter your password"
// //                 type={showPassword ? "text" : "password"}
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //               <button
// //                 type="button"
// //                 onClick={() => setShowPassword(!showPassword)}
// //                 className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
// //               >
// //                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
// //               </button>
// //             </div>
// //           </div>

// //           <Button type="submit" className="w-full" disabled={loading}>
// //             {loading
// //               ? mode === "login"
// //                 ? "Logging in..."
// //                 : "Signing up..."
// //               : mode === "login"
// //               ? "Log In"
// //               : "Sign up"}
// //           </Button>

// //           {error && (
// //             <p className="text-sm text-red-500 text-center pt-1">{error}</p>
// //           )}
// //         </form>

// //         <p className="text-center text-sm text-muted-foreground pt-4">
// //           {mode === "login" ? (
// //             <>
// //               Don’t have an account?{" "}
// //               <button onClick={toggleMode} className="underline">
// //                 Sign up
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               Already have an account?{" "}
// //               <button onClick={toggleMode} className="underline">
// //                 Log in
// //               </button>
// //             </>
// //           )}
// //         </p>
// //       </DialogContent>
// //     </Dialog>
// //   )
// // }
// "use client"

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Eye, EyeOff } from "lucide-react"
// import { useId, useState } from "react"
// import { toast } from 'sonner'

// interface AuthDialogProps {
//   mode: "login" | "signup"
//   toggleMode: () => void
//   onAuthSuccess: (redirectUrl?: string) => void
//   onClose?: () => void
// }

// export function AuthDialog({ mode, toggleMode, onAuthSuccess, onClose }: AuthDialogProps) {
//   const id = useId()
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [fullName, setFullName] = useState("")
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError("")

//     const endpoint = mode === "login" ? "/api/login" : "/api/signup"
//     const [firstname, lastname] = fullName.trim().split(" ")

//     try {
//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ email, password, firstname, lastname: lastname ?? "" }),
//       })

//       const data = await res.json()

//       if (!res.ok) {
//         setError(data.error || "Authentication failed")
//       } else {
//         if (mode === "signup") {
//           toast.success("Signup successful! Please log in.")
//           toggleMode()
//         } else {
//           toast.success("Logged in successfully!")
//           onAuthSuccess()
//         }
//       }
//     } catch (err: any) {
//       setError(err.message || "Unexpected error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <Dialog open onOpenChange={onClose}>
//       <DialogContent>
//         <div className="flex flex-col items-center gap-2">
//           <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border">
//             <svg className="stroke-zinc-800 dark:stroke-zinc-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
//               <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
//             </svg>
//           </div>
//           <DialogHeader>
//             <DialogTitle className="sm:text-center">
//               {mode === "login" ? "Log in to Travaky" : "Sign up for Travaky"}
//             </DialogTitle>
//             <DialogDescription className="sm:text-center">
//               {mode === "login" ? "Welcome back. Enter your credentials." : "Let's get you started!"}
//             </DialogDescription>
//           </DialogHeader>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {mode === "signup" && (
//             <div className="space-y-2">
//               <Label htmlFor={`${id}-name`}>Full name</Label>
//               <Input
//                 id={`${id}-name`}
//                 placeholder="Matt Welsh"
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 required
//               />
//             </div>
//           )}

//           <div className="space-y-2">
//             <Label htmlFor={`${id}-email`}>Email</Label>
//             <Input
//               id={`${id}-email`}
//               placeholder="hi@example.com"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor={`${id}-password`}>Password</Label>
//             <div className="relative">
//               <Input
//                 id={`${id}-password`}
//                 placeholder="••••••••"
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
//               >
//                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//               </button>
//             </div>
//           </div>

//           <Button type="submit" className="w-full" disabled={loading}>
//             {loading ? "Please wait..." : mode === "login" ? "Log In" : "Sign up"}
//           </Button>

//           {error && (
//             <p className="text-sm text-red-500 text-center pt-1">{error}</p>
//           )}
//         </form>

//         <p className="text-center text-sm text-muted-foreground pt-4">
//           {mode === "login" ? (
//             <>
//               Don’t have an account? <button onClick={toggleMode} className="underline">Sign up</button>
//             </>
//           ) : (
//             <>
//               Already have an account? <button onClick={toggleMode} className="underline">Log in</button>
//             </>
//           )}
//         </p>
//       </DialogContent>
//     </Dialog>
//   )
// }


// 'use client'

// import {
//   Dialog, DialogContent, DialogHeader,
//   DialogTitle, DialogDescription,
// } from '@/components/ui/dialog'
// import { Button }  from '@/components/ui/button'
// import { Input }   from '@/components/ui/input'
// import { Label }   from '@/components/ui/label'
// import { Eye, EyeOff } from 'lucide-react'
// import { useId, useState } from 'react'
// import { toast } from 'sonner'

// interface Props {
//   mode: 'login' | 'signup'
//   toggleMode: () => void
//   onSuccess: (redirect?: string) => void
//   onClose: () => void
// }

// export function AuthDialog({ mode, toggleMode, onSuccess, onClose }: Props) {
//   const id = useId()
//   const [email, setEmail]               = useState('')
//   const [password, setPassword]         = useState('')
//   const [fullName, setFullName]         = useState('')
//   const [showPw,   setShowPw]           = useState(false)
//   const [loading,  setLoading]          = useState(false)
//   const [error,    setError]            = useState('')

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true); setError('')
//     const endpoint = mode === 'login' ? '/api/login' : '/api/signup'
//     const [firstname, lastname] = fullName.trim().split(' ')
//     try {
//       const res  = await fetch(endpoint, {
//         method:'POST', credentials:'include',
//         headers:{'Content-Type':'application/json'},
//         body:JSON.stringify({ email, password, firstname, lastname }),
//       })
//       const json = await res.json()
//       if (!res.ok) {
//         setError(json.error || 'Authentication failed')
//       } else {
//         toast.success(mode === 'login' ? 'Logged in!' : 'Account created')
//         onSuccess(json.redirectTo)
//       }
//     } catch (err:any) {
//       setError(err.message || 'Unexpected error')
//     } finally { setLoading(false) }
//   }

//   return (
//     <Dialog open onOpenChange={onClose}>
//       <DialogContent>
//         <div className="flex flex-col items-center gap-2">
//           <DialogHeader>
//             <DialogTitle className="text-center">
//               {mode === 'login' ? 'Log in to Travaky' : 'Sign up for Travaky'}
//             </DialogTitle>
//             <DialogDescription className="text-center">
//               {mode === 'login'
//                 ? 'Welcome back. Enter your credentials.'
//                 : 'We just need a few details to get you started.'}
//             </DialogDescription>
//           </DialogHeader>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {mode === 'signup' && (
//             <div className="space-y-2">
//               <Label htmlFor={`${id}-name`}>Full name</Label>
//               <Input id={`${id}-name`} value={fullName} onChange={e=>setFullName(e.target.value)} required />
//             </div>
//           )}

//           <div className="space-y-2">
//             <Label htmlFor={`${id}-email`}>Email</Label>
//             <Input id={`${id}-email`} type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor={`${id}-pw`}>Password</Label>
//             <div className="relative">
//               <Input id={`${id}-pw`} type={showPw?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} required />
//               <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={()=>setShowPw(!showPw)}>
//                 {showPw ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
//               </button>
//             </div>
//           </div>

//           <Button className="w-full" disabled={loading}>
//             {loading ? (mode === 'login' ? 'Logging in…' : 'Signing up…')
//                      : (mode === 'login' ? 'Log In'      : 'Sign Up')}
//           </Button>

//           {error && <p className="text-sm text-red-500 text-center">{error}</p>}
//         </form>

//         <p className="text-center text-sm text-muted-foreground pt-4">
//           {mode === 'login'
//             ? <>Don’t have an account? <button onClick={toggleMode} className="underline">Sign up</button></>
//             : <>Already have an account? <button onClick={toggleMode} className="underline">Log in</button></>}
//         </p>
//       </DialogContent>
//     </Dialog>
//   )
// }



// 'use client'

// import Image from 'next/image'
// import { useId, useState } from 'react'
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogOverlay,
// } from '@/components/ui/dialog'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Eye, EyeOff, CheckCircle2, Clock3, Globe2 } from 'lucide-react'
// import { cn } from '@/lib/utils'
// import { toast } from 'sonner'

// interface Props {
//   mode: 'login' | 'signup'
//   toggleMode: () => void
//   onSuccess: (redirect?: string) => void
//   onClose: () => void
// }

// export function AuthDialog({ mode, toggleMode, onSuccess, onClose }: Props) {
//   const id = useId()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [fullName, setFullName] = useState('')
//   const [showPw, setShowPw] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string>('')

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError('')

//     const endpoint = mode === 'login' ? '/api/login' : '/api/signup'
//     const [firstname, lastname] = fullName.trim().split(' ')

//     try {
//       const res = await fetch(endpoint, {
//         method: 'POST',
//         credentials: 'include',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email,
//           password,
//           firstname: firstname ?? '',
//           lastname: lastname ?? '',
//         }),
//       })

//       const json = await res.json()
//       if (!res.ok) {
//         setError(json.error || 'Authentication failed')
//         return
//       }
//       toast.success(mode === 'login' ? 'Logged in!' : 'Account created')
//       onSuccess(json.redirectTo)
//     } catch (err: any) {
//       setError(err?.message || 'Unexpected error')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <Dialog open modal onOpenChange={(o) => (!o ? onClose() : null)}>
//       {/* full-screen tinted overlay that hides navbar and locks scroll */}
//       <DialogOverlay className="fixed inset-0 z-[60] bg-slate-950/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />

//       <DialogContent
//         className={cn(
//           // container
//           'z-[61] w-[94vw] max-w-3xl overflow-hidden rounded-2xl p-0',
//           // brand glass gradient that matches Travaky blue palette
//           'border border-white/10 bg-gradient-to-b from-[#0e4aa8]/90 via-[#0b3d8b]/85 to-[#072e67]/90 text-white',
//           // shadow
//           'shadow-[0_24px_80px_-12px_rgba(6,24,68,.55)]'
//         )}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* LEFT — compact brand voice */}
//           <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
//             <div className="flex items-center gap-2">
//               <div className="relative size-9">
//                 <Image
//                   src="/img/logo.png"
//                   alt="Travaky"
//                   fill
//                   sizes="36px"
//                   className="object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,.25)]"
//                 />
//               </div>
//               <span className="text-lg font-extrabold tracking-tight">Travaky</span>
//             </div>

//             <h2 className="mt-4 text-2xl font-bold leading-tight">Visa on Autopilot</h2>
//             <p className="mt-2 text-sm leading-relaxed text-white/85">
//               Fill once. We handle the rest—documents, appointments and delivery. Fully managed &
//               secure. Trusted by travelers across India for Schengen and beyond.
//             </p>

//             <ul className="mt-5 space-y-2 text-sm">
//               <li className="flex items-center gap-3">
//                 <CheckCircle2 className="h-4 w-4 text-emerald-300" />
//                 <span>99% Approval Rate</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Clock3 className="h-4 w-4 text-sky-300" />
//                 <span>10-min Response</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Globe2 className="h-4 w-4 text-blue-200" />
//                 <span>150+ Countries</span>
//               </li>
//             </ul>

//             <p className="mt-6 text-xs text-white/65">
//               By continuing, you agree to our Terms of Service and Privacy Policy.
//             </p>
//           </div>

//           {/* RIGHT — form only */}
//           <div className="p-6 md:p-8">
//             <DialogHeader className="mb-2">
//               <DialogTitle className="text-xl font-bold">
//                 {mode === 'login' ? 'Log in to Travaky' : 'Create your Travaky account'}
//               </DialogTitle>
//               <DialogDescription className="text-white/80">
//                 {mode === 'login'
//                   ? 'Welcome back. Enter your credentials to continue.'
//                   : 'One minute to get started.'}
//               </DialogDescription>
//             </DialogHeader>

//             <form onSubmit={handleSubmit} className="mt-2 space-y-4">
//               {mode === 'signup' && (
//                 <div className="space-y-1.5">
//                   <Label htmlFor={`${id}-name`} className="text-white/85">
//                     Full name
//                   </Label>
//                   <Input
//                     id={`${id}-name`}
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     required
//                     className={inputCls}
//                   />
//                 </div>
//               )}

//               <div className="space-y-1.5">
//                 <Label htmlFor={`${id}-email`} className="text-white/85">
//                   Email
//                 </Label>
//                 <Input
//                   id={`${id}-email`}
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className={inputCls}
//                 />
//               </div>

//               <div className="space-y-1.5">
//                 <Label htmlFor={`${id}-pw`} className="text-white/85">
//                   Password
//                 </Label>
//                 <div className="relative">
//                   <Input
//                     id={`${id}-pw`}
//                     type={showPw ? 'text' : 'password'}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className={inputCls}
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPw((s) => !s)}
//                     className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
//                     aria-label={showPw ? 'Hide password' : 'Show password'}
//                   >
//                     {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                   </button>
//                 </div>
//               </div>

//               <Button
//                 className="mt-2 w-full rounded-xl bg-white px-4 py-3 font-semibold text-slate-900 shadow-[0_6px_18px_-4px_rgba(255,255,255,.35)] hover:bg-white/90"
//                 disabled={loading}
//               >
//                 {loading ? (mode === 'login' ? 'Logging in…' : 'Signing up…') : mode === 'login' ? 'Log In' : 'Sign Up'}
//               </Button>

//               {error && <p className="pt-1 text-center text-sm text-rose-300">{error}</p>}
//             </form>

//             {/* single-line footer links */}
//             <div className="mt-4 flex items-center justify-between text-sm">
//               <button
//                 type="button"
//                 className="text-white/80 underline underline-offset-4 hover:text-white"
//                 onClick={toggleMode}
//               >
//                 {mode === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
//               </button>

//               <a
//                 href="/forgot"
//                 className="text-white/80 underline underline-offset-4 hover:text-white"
//               >
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

// const inputCls =
//   'mt-1 w-full rounded-xl bg-white/10 text-white placeholder:text-white/60 ' +
//   'border border-white/20 focus:border-white/40 outline-none ' +
//   'px-4 py-3 backdrop-blur-sm transition'


// 'use client'

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogOverlay,
// } from '@/components/ui/dialog'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import Image from 'next/image'
// import { Eye, EyeOff } from 'lucide-react'
// import { useId, useState } from 'react'
// import { toast } from 'sonner'
// import { cn } from '@/lib/utils'

// interface Props {
//   mode: 'login' | 'signup'
//   toggleMode: () => void
//   onSuccess: (redirect?: string) => void
//   onClose: () => void
// }

// export function AuthDialog({ mode, toggleMode, onSuccess, onClose }: Props) {
//   const id = useId()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [fullName, setFullName] = useState('')
//   const [showPw, setShowPw] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError('')
//     const endpoint = mode === 'login' ? '/api/login' : '/api/signup'
//     const [firstname, lastname] = fullName.trim().split(' ')
//     try {
//       const res = await fetch(endpoint, {
//         method: 'POST',
//         credentials: 'include',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password, firstname, lastname }),
//       })
//       const json = await res.json()
//       if (!res.ok) {
//         setError(json.error || 'Authentication failed')
//       } else {
//         toast.success(mode === 'login' ? 'Logged in!' : 'Account created')
//         onSuccess(json.redirectTo)
//       }
//     } catch (err: any) {
//       setError(err.message || 'Unexpected error')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <Dialog open onOpenChange={onClose}>
//       {/* Light, subtle overlay (not dark/black) */}
//       <DialogOverlay className="bg-white/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />

//       <DialogContent
//         className={cn(
//           // container
//           'w-[96vw] max-w-3xl p-0 overflow-hidden rounded-2xl',
//           // white card + thin border + soft shadow (matches navbar vibe)
//           'bg-white border border-slate-200 shadow-[0_24px_60px_-20px_rgba(2,6,23,0.25)]'
//         )}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* LEFT — Brand (white, minimal, like navbar) */}
//           <div className="p-6 sm:p-8 md:border-r border-slate-200">
//             <div className="flex items-center gap-2">
//               <div className="relative size-10">
//                 <Image
//                   src="/img/logo.png"
//                   alt="Travaky"
//                   fill
//                   sizes="80px"
//                   className="object-contain rounded-full"
//                   priority
//                 />
//               </div>
//               <span
//                 className="tvk-nav__word"
//                 style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}
//               >
//                 Travaky
//               </span>
//             </div>

//             <h2 className="mt-5 text-xl font-extrabold tracking-tight text-slate-900">
//               Log in or Create account
//             </h2>
//             <p className="mt-2 text-[14px] text-slate-600">
//               Sign in to continue. It takes <span className="font-semibold text-slate-800">~10 minutes</span> to complete your first visa flow.
//             </p>

//             {/* keep it minimal; no heavy marketing lines */}
//             <ul className="mt-5 space-y-2 text-[13px] text-slate-600">
//               <li>• 150+ countries supported</li>
//               <li>• Doorstep pickup &amp; delivery</li>
//               <li>• Secure &amp; managed process</li>
//             </ul>
//           </div>

//           {/* RIGHT — Form */}
//           <div className="p-6 sm:p-8">
//             <DialogHeader className="mb-2 p-0">
//               <DialogTitle className="text-lg font-bold text-slate-900 text-center md:text-left">
//                 {mode === 'login' ? 'Log in to Travaky' : 'Create your Travaky account'}
//               </DialogTitle>
//               <DialogDescription className="text-[13px] text-slate-600 text-center md:text-left">
//                 {mode === 'login'
//                   ? 'Welcome back. Enter your credentials to continue.'
//                   : 'We just need a few details to get you started.'}
//               </DialogDescription>
//             </DialogHeader>

//             <form onSubmit={handleSubmit} className="mt-4 space-y-4">
//               {mode === 'signup' && (
//                 <div className="space-y-1.5">
//                   <label htmlFor={`${id}-name`} className="text-[13px] text-slate-700">
//                     Full name
//                   </label>
//                   <Input
//                     id={`${id}-name`}
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     required
//                     className="bg-white"
//                   />
//                 </div>
//               )}

//               <div className="space-y-1.5">
//                 <label htmlFor={`${id}-email`} className="text-[13px] text-slate-700">
//                   Email
//                 </label>
//                 <Input
//                   id={`${id}-email`}
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="bg-white"
//                 />
//               </div>

//               <div className="space-y-1.5">
//                 <label htmlFor={`${id}-pw`} className="text-[13px] text-slate-700">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Input
//                     id={`${id}-pw`}
//                     type={showPw ? 'text' : 'password'}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="bg-white pr-10"
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
//                     onClick={() => setShowPw(!showPw)}
//                     aria-label={showPw ? 'Hide password' : 'Show password'}
//                   >
//                     {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                   </button>
//                 </div>
//               </div>

//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full rounded-full bg-primary hover:bg-primary-600 text-white font-semibold"
//                 // className="tvk-nav__word"
//                 style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}
//               >
//                 {loading
//                   ? mode === 'login'
//                     ? 'Logging in…'
//                     : 'Signing up…'
//                   : mode === 'login'
//                     ? 'Log In'
//                     : 'Sign Up'}
//               </Button>

//               {error && (
//                 <p className="text-center text-sm text-red-600">{error}</p>
//               )}
//             </form>

//             {/* single-line footer actions */}
//             <div className="mt-4 flex items-center justify-between text-[13px]">
//               <button
//                 type="button"
//                 className="text-primary hover:text-primary-700 underline-offset-4 hover:underline"
//                 onClick={toggleMode}
//               >
//                 {mode === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
//               </button>

//               <a
//                 href="/forgot"
//                 className="text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }



'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { useId, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

// If you use shadcn Tabs, import them; otherwise we render a simple in-place tabs UI
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

interface Props {
  mode: 'login' | 'signup'
  toggleMode: () => void
  onSuccess: (redirect?: string) => void
  onClose: () => void
}

type OtpChannel = 'sms' | 'whatsapp'
type Purpose = 'login' | 'signup'

export function AuthDialog({ mode, toggleMode, onSuccess, onClose }: Props) {
  const id = useId()

  // ===== Password tab state (kept from your version) =====
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // ===== NEW: Which auth method tab? =====
  const [tab, setTab] = useState<'password' | 'otp' | 'email-otp' | 'forgot'>('password')

  // ===== NEW: SMS/WhatsApp OTP state =====
  const [phone, setPhone] = useState('')
  const [otpPurpose, setOtpPurpose] = useState<Purpose>('login')
  const [channel, setChannel] = useState<OtpChannel>('sms')
  const [otpSent, setOtpSent] = useState(false)
  const [otpCode, setOtpCode] = useState('')
  const [otpLoading, setOtpLoading] = useState(false)
  const [otpErr, setOtpErr] = useState<string | undefined>()

  // capture names for signup (re-use fullName field)
  const [signupEmailOptional, setSignupEmailOptional] = useState('') // optional email on phone signup

  // ===== NEW: Email OTP state =====
  const [emailOtpEmail, setEmailOtpEmail] = useState('')
  const [emailOtpPurpose, setEmailOtpPurpose] = useState<Purpose>('login')
  const [emailOtpSent, setEmailOtpSent] = useState(false)
  const [emailOtpCode, setEmailOtpCode] = useState('')
  const [emailOtpLoading, setEmailOtpLoading] = useState(false)
  const [emailOtpErr, setEmailOtpErr] = useState<string | undefined>()

  // ===== NEW: Forgot-password state (inline) =====
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotLoading, setForgotLoading] = useState(false)
  const [forgotSent, setForgotSent] = useState(false)
  const [forgotErr, setForgotErr] = useState<string | undefined>()

  const [firstname, lastname] = useMemo(() => {
    const parts = fullName.trim().split(' ')
    const first = parts[0] ?? ''
    const last = parts.slice(1).join(' ') || ''
    return [first, last]
  }, [fullName])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const endpoint = mode === 'login' ? '/api/login' : '/api/signup'
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, firstname, lastname }),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Authentication failed')
      } else {
        toast.success(mode === 'login' ? 'Logged in!' : 'Account created')
        onSuccess(json.redirectTo)
      }
    } catch (err: any) {
      setError(err.message || 'Unexpected error')
    } finally {
      setLoading(false)
    }
  }

  // ===== NEW: Phone OTP flows =====
  const requestPhoneOtp = async () => {
    setOtpErr(undefined)
    if (!phone) {
      setOtpErr('Enter a phone number (E.164, e.g. +9198xxxxxxx)')
      return
    }
    setOtpLoading(true)
    try {
      const res = await fetch('/api/auth/otp/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, channel, purpose: otpPurpose }),
      })
      const j = await res.json()
      if (!res.ok || !j.ok) throw new Error(j.error || 'Could not send code')
      setOtpSent(true)
      toast.success(`Code sent via ${channel === 'sms' ? 'SMS' : 'WhatsApp'}`)
    } catch (e: any) {
      setOtpErr(e.message || 'Failed to send code')
    } finally {
      setOtpLoading(false)
    }
  }

  const verifyPhoneOtp = async () => {
    setOtpErr(undefined)
    if (!otpCode) {
      setOtpErr('Enter the 6-digit code')
      return
    }
    setOtpLoading(true)
    try {
      const res = await fetch('/api/auth/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          channel,
          code: otpCode,
          purpose: otpPurpose,
          firstname: firstname || undefined,
          lastname: lastname || undefined,
          email: signupEmailOptional || undefined,
        }),
      })
      const j = await res.json()
      if (!res.ok || !j.ok) throw new Error(j.error || 'Verification failed')
      toast.success('Signed in successfully')
      onSuccess()
    } catch (e: any) {
      setOtpErr(e.message || 'Invalid or expired code')
    } finally {
      setOtpLoading(false)
    }
  }

  // ===== NEW: Email OTP flows =====
  const requestEmailOtp = async () => {
    setEmailOtpErr(undefined)
    if (!emailOtpEmail) {
      setEmailOtpErr('Enter your email')
      return
    }
    setEmailOtpLoading(true)
    try {
      const res = await fetch('/api/auth/email-otp/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailOtpEmail,
          purpose: emailOtpPurpose,
          name: fullName || undefined,
        }),
      })
      const j = await res.json()
      if (!res.ok || !j.ok) throw new Error(j.error || 'Could not send code')
      setEmailOtpSent(true)
      toast.success('Code sent to your email')
    } catch (e: any) {
      setEmailOtpErr(e.message || 'Failed to send code')
    } finally {
      setEmailOtpLoading(false)
    }
  }

  const verifyEmailOtp = async () => {
    setEmailOtpErr(undefined)
    if (!emailOtpCode) {
      setEmailOtpErr('Enter the 6-digit code')
      return
    }
    setEmailOtpLoading(true)
    try {
      const res = await fetch('/api/auth/email-otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailOtpEmail,
          code: emailOtpCode,
          purpose: emailOtpPurpose,
          firstname: firstname || undefined,
          lastname: lastname || undefined,
        }),
      })
      const j = await res.json()
      if (!res.ok || !j.ok) throw new Error(j.error || 'Verification failed')
      toast.success('Signed in successfully')
      onSuccess()
    } catch (e: any) {
      setEmailOtpErr(e.message || 'Invalid or expired code')
    } finally {
      setEmailOtpLoading(false)
    }
  }

  // ===== NEW: Forgot-password flow =====
  const handleForgot = async () => {
    setForgotErr(undefined)
    if (!forgotEmail) {
      setForgotErr('Enter your account email')
      return
    }
    setForgotLoading(true)
    try {
      const res = await fetch('/api/auth/password/forgot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotEmail }),
      })
      if (!res.ok) throw new Error('Could not start reset')
      setForgotSent(true)
      toast.success('If the email exists, a reset link has been sent.')
    } catch (e: any) {
      setForgotErr(e.message || 'Failed to send reset link')
    } finally {
      setForgotLoading(false)
    }
  }

  return (
    <Dialog open onOpenChange={onClose}>
      {/* Light, subtle overlay (not dark/black) */}
      <DialogOverlay className="bg-white/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />

      <DialogContent
        className={cn(
          // container
          'w-[96vw] max-w-3xl p-0 overflow-hidden rounded-2xl',
          // white card + thin border + soft shadow (matches navbar vibe)
          'bg-white border border-slate-200 shadow-[0_24px_60px_-20px_rgba(2,6,23,0.25)]'
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT — Brand (white, minimal, like navbar) */}
          <div className="p-6 sm:p-8 md:border-r border-slate-200">
            <div className="flex items-center gap-2">
              <div className="relative size-10">
                <Image
                  src="/img/logo.png"
                  alt="Travaky"
                  fill
                  sizes="80px"
                  className="object-contain rounded-full"
                  priority
                />
              </div>
              <span
                className="tvk-nav__word"
                style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}
              >
                Travaky
              </span>
            </div>

            <h2 className="mt-5 text-xl font-extrabold tracking-tight text-slate-900">
              Log in or Create account
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              Sign in to continue. It takes <span className="font-semibold text-slate-800">~10 minutes</span> to complete your first visa flow.
            </p>

            {/* keep it minimal; no heavy marketing lines */}
            <ul className="mt-5 space-y-2 text-[13px] text-slate-600">
              <li>• 150+ countries supported</li>
              <li>• Doorstep pickup &amp; delivery</li>
              <li>• Secure &amp; managed process</li>
            </ul>
          </div>

          {/* RIGHT — Tabs + Forms */}
          <div className="p-6 sm:p-8">
            <DialogHeader className="mb-2 p-0">
              <DialogTitle className="text-lg font-bold text-slate-900 text-center md:text-left">
                {mode === 'login' ? 'Log in to Travaky' : 'Create your Travaky account'}
              </DialogTitle>
              <DialogDescription className="text-[13px] text-slate-600 text-center md:text-left">
                {mode === 'login'
                  ? 'Welcome back. Enter your credentials to continue.'
                  : 'We just need a few details to get you started.'}
              </DialogDescription>
            </DialogHeader>

            {/* Tabs header — keeps your style simple and minimal */}
            <Tabs value={tab} onValueChange={(v: any) => setTab(v)} className="mt-4">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="otp">SMS/WhatsApp</TabsTrigger>
                <TabsTrigger value="email-otp">Email OTP</TabsTrigger>
                <TabsTrigger value="forgot">Forgot</TabsTrigger>
              </TabsList>

              {/* === PASSWORD TAB (your original form) === */}
              <TabsContent value="password" className="mt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {mode === 'signup' && (
                    <div className="space-y-1.5">
                      <label htmlFor={`${id}-name`} className="text-[13px] text-slate-700">
                        Full name
                      </label>
                      <Input
                        id={`${id}-name`}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="bg-white"
                      />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label htmlFor={`${id}-email`} className="text-[13px] text-slate-700">
                      Email
                    </label>
                    <Input
                      id={`${id}-email`}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor={`${id}-pw`} className="text-[13px] text-slate-700">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id={`${id}-pw`}
                        type={showPw ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-white pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                        onClick={() => setShowPw(!showPw)}
                        aria-label={showPw ? 'Hide password' : 'Show password'}
                      >
                        {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-primary hover:bg-primary-600 text-white font-semibold"
                    style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}
                  >
                    {loading
                      ? mode === 'login'
                        ? 'Logging in…'
                        : 'Signing up…'
                      : mode === 'login'
                        ? 'Log In'
                        : 'Sign Up'}
                  </Button>

                  {error && <p className="text-center text-sm text-red-600">{error}</p>}

                  {/* footer actions remain inline to keep visual rhythm */}
                  <div className="mt-2 flex items-center justify-between text-[13px]">
                    <button
                      type="button"
                      className="text-primary hover:text-primary-700 underline-offset-4 hover:underline"
                      onClick={toggleMode}
                    >
                      {mode === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
                    </button>

                    <button
                      type="button"
                      className="text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline"
                      onClick={() => setTab('forgot')}
                    >
                      Forgot password?
                    </button>
                  </div>
                </form>
              </TabsContent>

              {/* === SMS / WHATSAPP OTP TAB === */}
              <TabsContent value="otp" className="mt-0">
                <div className="space-y-4">
                  {/* login vs signup */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant={otpPurpose === 'login' ? 'default' : 'secondary'} onClick={() => setOtpPurpose('login')}>
                      Login
                    </Button>
                    <Button variant={otpPurpose === 'signup' ? 'default' : 'secondary'} onClick={() => setOtpPurpose('signup')}>
                      Sign up
                    </Button>
                  </div>

                  {/* names + optional email for signup */}
                  {otpPurpose === 'signup' && (
                    <>
                      <div className="space-y-1.5">
                        <label className="text-[13px] text-slate-700">Full name</label>
                        <Input value={fullName} onChange={(e) => setFullName(e.target.value)} className="bg-white" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[13px] text-slate-700">
                          Email (optional for phone signup)
                        </label>
                        <Input
                          type="email"
                          value={signupEmailOptional}
                          onChange={(e) => setSignupEmailOptional(e.target.value)}
                          className="bg-white"
                          placeholder="you@example.com"
                        />
                      </div>
                    </>
                  )}

                  {/* channel selector */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant={channel === 'sms' ? 'default' : 'secondary'} onClick={() => setChannel('sms')}>
                      SMS
                    </Button>
                    <Button variant={channel === 'whatsapp' ? 'default' : 'secondary'} onClick={() => setChannel('whatsapp')}>
                      WhatsApp
                    </Button>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] text-slate-700">Phone (E.164 e.g. +9198xxxxxxx)</label>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-white" />
                  </div>

                  {!otpSent ? (
                    <Button onClick={requestPhoneOtp} disabled={otpLoading} className="w-full rounded-full bg-primary hover:bg-primary-600 text-white font-semibold"
                      style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}>
                      {otpLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Send code
                    </Button>
                  ) : (
                    <>
                      <div className="space-y-1.5">
                        <label className="text-[13px] text-slate-700">Enter 6-digit code</label>
                        <Input value={otpCode} onChange={(e) => setOtpCode(e.target.value)} className="bg-white" />
                      </div>
                      <div className="flex items-center gap-3">
                        <Button onClick={verifyPhoneOtp} disabled={otpLoading} className="rounded-full bg-primary hover:bg-primary-600 text-white font-semibold"
                          style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}>
                          {otpLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Verify & Continue
                        </Button>
                        <button className="text-[13px] underline underline-offset-4" onClick={requestPhoneOtp}>
                          Resend
                        </button>
                      </div>
                    </>
                  )}

                  {otpErr && <p className="text-sm text-red-600">{otpErr}</p>}
                </div>
              </TabsContent>

              {/* === EMAIL OTP TAB === */}
              <TabsContent value="email-otp" className="mt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant={emailOtpPurpose === 'login' ? 'default' : 'secondary'} onClick={() => setEmailOtpPurpose('login')}>
                      Login
                    </Button>
                    <Button variant={emailOtpPurpose === 'signup' ? 'default' : 'secondary'} onClick={() => setEmailOtpPurpose('signup')}>
                      Sign up
                    </Button>
                  </div>

                  {emailOtpPurpose === 'signup' && (
                    <div className="space-y-1.5">
                      <label className="text-[13px] text-slate-700">Full name</label>
                      <Input value={fullName} onChange={(e) => setFullName(e.target.value)} className="bg-white" />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-[13px] text-slate-700">Email</label>
                    <Input
                      type="email"
                      value={emailOtpEmail}
                      onChange={(e) => setEmailOtpEmail(e.target.value)}
                      className="bg-white"
                    />
                  </div>

                  {!emailOtpSent ? (
                    <Button onClick={requestEmailOtp} disabled={emailOtpLoading} className="w-full rounded-full bg-primary hover:bg-primary-600 text-white font-semibold"
                      style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}>
                      {emailOtpLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Send code
                    </Button>
                  ) : (
                    <>
                      <div className="space-y-1.5">
                        <label className="text-[13px] text-slate-700">Enter 6-digit code</label>
                        <Input value={emailOtpCode} onChange={(e) => setEmailOtpCode(e.target.value)} className="bg-white" />
                      </div>
                      <div className="flex items-center gap-3">
                        <Button onClick={verifyEmailOtp} disabled={emailOtpLoading} className="rounded-full bg-primary hover:bg-primary-600 text-white font-semibold"
                          style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}>
                          {emailOtpLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Verify & Continue
                        </Button>
                        <button className="text-[13px] underline underline-offset-4" onClick={requestEmailOtp}>
                          Resend
                        </button>
                      </div>
                    </>
                  )}

                  {emailOtpErr && <p className="text-sm text-red-600">{emailOtpErr}</p>}
                </div>
              </TabsContent>

              {/* === FORGOT PASSWORD TAB === */}
              <TabsContent value="forgot" className="mt-0">
                <div className="space-y-4">
                  {!forgotSent ? (
                    <>
                      <div className="space-y-1.5">
                        <label className="text-[13px] text-slate-700">Account email</label>
                        <Input type="email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} className="bg-white" />
                      </div>
                      <Button onClick={handleForgot} disabled={forgotLoading} className="rounded-full bg-primary hover:bg-primary-600 text-white font-semibold"
                        style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}>
                        {forgotLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Email me a reset link
                      </Button>
                      {forgotErr && <p className="text-sm text-red-600">{forgotErr}</p>}
                    </>
                  ) : (
                    <div className="text-sm text-slate-700">
                      If there’s an account for <b>{forgotEmail}</b>, we’ve sent a reset link from <b>Travaky</b>.
                      Check your inbox (and spam).
                    </div>
                  )}

                  <div className="pt-1">
                    <button
                      type="button"
                      className="text-[13px] text-primary hover:text-primary-700 underline underline-offset-4"
                      onClick={() => setTab('password')}
                    >
                      Back to login
                    </button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

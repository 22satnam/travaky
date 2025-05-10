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


'use client'

import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogDescription,
} from '@/components/ui/dialog'
import { Button }  from '@/components/ui/button'
import { Input }   from '@/components/ui/input'
import { Label }   from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { useId, useState } from 'react'
import { toast } from 'sonner'

interface Props {
  mode: 'login' | 'signup'
  toggleMode: () => void
  onSuccess: (redirect?: string) => void
  onClose: () => void
}

export function AuthDialog({ mode, toggleMode, onSuccess, onClose }: Props) {
  const id = useId()
  const [email, setEmail]               = useState('')
  const [password, setPassword]         = useState('')
  const [fullName, setFullName]         = useState('')
  const [showPw,   setShowPw]           = useState(false)
  const [loading,  setLoading]          = useState(false)
  const [error,    setError]            = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError('')
    const endpoint = mode === 'login' ? '/api/login' : '/api/signup'
    const [firstname, lastname] = fullName.trim().split(' ')
    try {
      const res  = await fetch(endpoint, {
        method:'POST', credentials:'include',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({ email, password, firstname, lastname }),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Authentication failed')
      } else {
        toast.success(mode === 'login' ? 'Logged in!' : 'Account created')
        onSuccess(json.redirectTo)
      }
    } catch (err:any) {
      setError(err.message || 'Unexpected error')
    } finally { setLoading(false) }
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <DialogHeader>
            <DialogTitle className="text-center">
              {mode === 'login' ? 'Log in to Travaky' : 'Sign up for Travaky'}
            </DialogTitle>
            <DialogDescription className="text-center">
              {mode === 'login'
                ? 'Welcome back. Enter your credentials.'
                : 'We just need a few details to get you started.'}
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor={`${id}-name`}>Full name</Label>
              <Input id={`${id}-name`} value={fullName} onChange={e=>setFullName(e.target.value)} required />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor={`${id}-email`}>Email</Label>
            <Input id={`${id}-email`} type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${id}-pw`}>Password</Label>
            <div className="relative">
              <Input id={`${id}-pw`} type={showPw?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} required />
              <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={()=>setShowPw(!showPw)}>
                {showPw ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
              </button>
            </div>
          </div>

          <Button className="w-full" disabled={loading}>
            {loading ? (mode === 'login' ? 'Logging in…' : 'Signing up…')
                     : (mode === 'login' ? 'Log In'      : 'Sign Up')}
          </Button>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        </form>

        <p className="text-center text-sm text-muted-foreground pt-4">
          {mode === 'login'
            ? <>Don’t have an account? <button onClick={toggleMode} className="underline">Sign up</button></>
            : <>Already have an account? <button onClick={toggleMode} className="underline">Log in</button></>}
        </p>
      </DialogContent>
    </Dialog>
  )
}

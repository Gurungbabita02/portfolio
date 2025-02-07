
import connectDB from "@/app/lib/mongodb";
import User from "@/app/model/User";

export async function GET(req) {
    return new Response(JSON.stringify({ message: "Signup API working!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  
  export async function POST(req) {
    try {
      await connectDB(); // Connect to MongoDB
  
      const { firstName,lastName,email,messages,number } = await req.json(); // Get request body
      if (!firstName) return new Response("Name is required", { status: 400 });
      if (!lastName) return new Response("Last Name is required", { status: 400 });
      if (!email) return new Response("Email is required", { status: 400 });
      if (!messages) return new Response("Messages is required", { status: 400 });
      if (!number) return new Response("Number is required", { status: 400 });

      const newUser = new User({ firstName,lastName,email,messages,number });
      await newUser.save();
  
      return new Response(JSON.stringify({ message: "User saved successfully!" }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Error saving user" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  
import connectDB from "@/lib/connectDB";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; // Ensure bcrypt is imported

export async function POST(request) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the JSON request body
    const body = await request.json();
    const { name, email, password } = body;
    console.log('Post user: ' + JSON.stringify(body, null, 2));

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Remove password from response
    const userResponse = { ...newUser._doc };
    delete userResponse.password;

    return NextResponse.json(
      { message: "User signed up successfully!", user: userResponse },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
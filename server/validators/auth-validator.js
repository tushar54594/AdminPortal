const { z } = require("zod");

//create an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must not be be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  phone: z
    .string({ required_error: "PhoneNo is required" })
    .trim()
    .min(10, {message: "PhoneNo must be atleast 10 digits"}),
  password: z
    .string({required_error: "Password is required"})
    .trim()
    .min(7, {message: "Password must be atleast 7 characters"})
    .max(1024, {message: "Password must be less than 1024 characters"})
});

module.exports = signupSchema;
"use server";

import { FormState, LoginFormSchema, SignupFormSchema } from "./definition";
import userModel from "@/lib/model/user.js";
import { IUser } from "@/lib/types";
import { connect } from "mongoose";
import bcrypt from "bcrypt";
import { createSession, deleteSession } from "./02-stateless-session";

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { name, email, password } = validatedFields.data;
  try {
    await connect(process.env.MONGODB_URL);
    const isUserThere = (await userModel.findOne({ email: email })) as IUser[];
    if (isUserThere) {
      return {
        message:
          "Your email is already there. You should register with another email",
      };
    }
    //Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    //3 . Insert the user into the database

    const data = await userModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    // if (data) {
    //   return;
    //   {
    //     message: "You have successfully created an account";
    //   }
    // }
    const userId = data._id.toString();
    await createSession(userId);
  } catch (error) {
    return {
      message: `${error}`,
    };
  }
}
export async function login(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  const errorMessage = { message: "Invalid login credentials." };
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const user = await userModel.findOne({
    email: formData.get("email"),
  });
  if (!user) {
    return errorMessage;
  }
  const passwordMatch = await bcrypt.compare(
    validatedFields.data.password,
    user.password
  );
  if (!passwordMatch) {
    return errorMessage;
  }
  const userId = user.id.toString();
  await createSession(userId);
}

export async function logout() {
  deleteSession();
}

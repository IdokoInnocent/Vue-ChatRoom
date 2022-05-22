import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const signup = async (email, password, displayName) => {
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete signup");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;

    return res;
    // console.log(res.user);
  } catch (err) {
    // console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { signup, error };
};

export default useSignup;

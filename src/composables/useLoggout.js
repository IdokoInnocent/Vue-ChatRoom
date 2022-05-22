import { ref } from "vue";
import { projectAuth } from "@/firebase/config";
const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    await projectAuth.signOut();
    // return res;
  } catch (err) {
    error.value = err.message;
  }
};

const useLoggout = () => {
  return { error, logout };
};

export default useLoggout;

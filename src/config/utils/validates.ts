export const validates = {

  checkPassword: (v: string) => {
    if (v.length < 6) return "Password must be more than 6 characters";
  },

};
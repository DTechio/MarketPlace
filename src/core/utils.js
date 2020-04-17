export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "Digite seu email.";
  if (!re.test(email)) return "Seu Email precisa ser válido.";

  return "";
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return "Digite sua senha.";

  return "";
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return "Digite seu nome.";

  return "";
};

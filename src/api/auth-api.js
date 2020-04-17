import firebase from "firebase/app";
import "firebase/auth";

export const logoutUser = () => {
  firebase.auth().signOut();
};

export const signInUser = async ({ name, email, password }) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: name
    });

    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "Email já cadastrado."
        };
      case "auth/invalid-email":
        return {
          error: "Email com formato inválido."
        };
      case "auth/weak-password":
        return {
          error: "Senha muito fraca."
        };
      case "auth/too-many-requests":
        return {
          error: "Muitas tentativas realizadas. Tente novamente em um minuto."
        };
      default:
        return {
          error: "Verifique sua conexão com a internet."
        };
    }
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Email com formato inválido."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Email ou senha inválido."
        };
      case "auth/too-many-requests":
        return {
          error: "Muitas tentativas realizadas. Tente novamente em um minuto."
        };
      default:
        return {
          error: "Verifique sua conexão com a internet."
        };
    }
  }
};

export const sendEmailWithPassword = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Email com formato inválido."
        };
      case "auth/user-not-found":
        return {
          error: "Esse Email não está cadastrado"
        };
      case "auth/too-many-requests":
        return {
          error: "Muitas tentativas realizadas. Tente novamente em um minuto."
        };
      default:
        return {
          error: "Verifique sua conexão com a internet."
        };
    }
  }
};

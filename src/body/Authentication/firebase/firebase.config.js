import firebase from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyA0AbsDmND_nZBN_W-pXTlUul8NUE2jync",
  authDomain: "electrorepair-17742.firebaseapp.com",
  projectId: "electrorepair-17742",
  storageBucket: "electrorepair-17742.appspot.com",
  messagingSenderId: "686759738763",
  appId: "1:686759738763:web:b5391fdb76a2c981e2c38e",
  measurementId: "G-VRD4CS0Y7F",
};

const setLoginStorage = (displayName, email, emailVerified, photoURL) => {
  localStorage.setItem("login", true);
  localStorage.setItem("displayName", displayName);
  localStorage.setItem("email", email);
  localStorage.setItem("emailVerified", emailVerified);
  localStorage.setItem("photoURL", photoURL);
};

export const socialLoin = (provider, setlogin, goHistotyPage, seterrMsg) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      setlogin(user);
      setLoginStorage(
        user.displayName,
        user.email,
        user.emailVerified,
        user.photoURL
      );

      goHistotyPage();
    })
    .catch((error) => {
      const errorMessage = error.message;
      seterrMsg(errorMessage);
    });
};

export const emailLogin = (
  setlogin,
  goHistotyPage,
  email,
  password,
  seterrMsg
) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setlogin(user);
      setLoginStorage(
        user.displayName,
        user.email,
        user.emailVerified,
        user.photoURL
      );
      goHistotyPage();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrMsg(errorMessage);
    });
};

export const emailSignup = (
  setlogin,
  goHistotyPage,
  name,
  email,
  password,
  seterrMsg
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      setlogin(user);
      setLoginStorage(
        user.displayName,
        user.email,
        user.emailVerified,
        user.photoURL
      );
      goHistotyPage();
      user
        .updateProfile({
          displayName: name,
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
          const errorMessage = error.message;
          seterrMsg(errorMessage);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      seterrMsg(errorMessage);
      // ..
    });
};

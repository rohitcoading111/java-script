let attempts = 0;

function login(password) {
  const correctPassword = "1234";

  if (password === correctPassword) {
    attempts = 0;
    console.log("Login Successful");
  } else {
    attempts++;
    console.log("Wrong Password");

    if (attempts === 3) {
      console.log("Account Locked");
    }
  }
}

login("1111");
login("2222");
login("3333");
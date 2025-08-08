import usermodel from "../model/usermodel.js";

// REGISTERATON FUNTIONLITY
export const UserRegister = async (req, res) => {
  const { username, email,phone,address, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.send({ status: 0, msg: "Passwords do not match" });
  }

  const existuser = await usermodel.findOne({ email });
  if (existuser) {
    res.send({ status: 0, msg: "Email already registered" });
  }

  const response = await usermodel.insertOne({
    username, 
    email,
    phone,
    address,
    password,
    confirmPassword,
  });
  res.send({
    status: 0, msg: "User Registered Successfully",response
  })
};





// LOGIN FUNTIONLITY
export const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  const existuser = await usermodel.findOne({ email });
  if (!existuser) {
    res.send({ status: 0, msg: "User Not Found" });
  }

  if(password === existuser.password){
 res.send({
    status: 1, msg: "Login successful",existuser
  })
  }
  else{
     res.send({
    status:0, msg: "Invalid password",
  })
  }
 
};




// FETCH USER DATA  FUNTIONLITY
export const AllUserData = async (req, res) => {
  const response = await usermodel.find();
    res.send({ status: 0, msg: "User Founds"  ,response});
};


// DELET USER DATA  FUNTIONLITY
export const UserAccountDelet = async (req, res) => {
  const id=req.params.id;
  const response = await usermodel.deleteOne({_id:id});
    res.send({ status: 0, msg: "User Delet Sucessfully"  ,response});
};

// UPDATE  USER DATA 
export const UserAccountUpdate = async (req, res) => {
  const id=req.params.id;

  const response = await usermodel.put({_id:id});
    res.send({ status: 0, msg: "User Delet Sucessfully"  ,response});
};
import { Userschema } from "../model/Userschema.js";
import { ContentSchemna } from "../model/Content.js";
 
import bcrypt from "bcrypt"
export async function UserController(req, res, error) {
    const { email, password, address, phoneNumber, name } = req.body;
    console.log(req.body)
    try {

        if (email && password && address && phoneNumber && name) {
            //console.log("all values ae got"+req.body)
            const newUser1 = await new Userschema(
                {
                    name,
                    password,
                    address,
                    phoneNumber,
                    email,
                    


                }
            )
            const existingUsser = await Userschema.findOne({ email })
            if (existingUsser) {
                return res
                    .status(400)
                    .json(
                        {
                            message: "emil alreday register"
                        }
                    )
            }

            const checkStatud = await newUser1.save();

            if (checkStatud) {
                 
                req.session.email = email;
                return res
                    .status(200)
                    .json(
                        {
                            data: newUser1,
                            message: "the data is saved in the database"
                        }
                    )
            }
            else {
                return res
                    .status(401)
                    .json(
                        {
                            message: "not"
                        }
                    )
            }

        }
        else {
            return res
                .status(401)
                .json(
                    {
                        mmessage: "all fileds are required",
                    }
                )
        }
    }
    catch (e) {
        console.log(e);
    }

}
export async function LOginUser(req, res, error) {
    const { email, password } = req.body
   
    const find_user = await Userschema.findOne({
        email
    })
    if (find_user) {
        const password1 = find_user.password;
        const ismatch = await bcrypt.compare(password, password1);

        if (ismatch) {
            req.session.email=email;
            return res
                .status(200)
                .json(
                    {
                        data: find_user,
                        message: "your password is correct "

                    }
                )
        }
        else {
            return res
                .status(401)
                .json({
                    message: "incorrect password"
                })
        }



    }


}
export async function Content(req, res, error) {
     const {title,content}=req.body;
     const email=req.session.email;
     console.log(req.session.email)
     try{
     if(title&&content)
     {
        const newUser1=await new ContentSchemna(
            {
                title,
                content,
                email,
            }
        )
        const check_user=await newUser1.save();
        if(check_user)
        {
            return res
            .status(200)
            .json(
                {
                    data:newUser1,
                    message:"the data is asved in the datbse"
                }
            )
        }
        else
        {
            return res
            .status(401)
            .json(
                {
                    message:"error occuis"
                }
            )
        }
     }
     else{
        return res
        .status(500)
        .json(
            {
                message:"all field are required"
            }
        )
     }
    }
    catch(e)
    {
        console.log(e);
    }
}

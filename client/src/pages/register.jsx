import  { useState } from "react";
// import { json } from "react-router-dom";

export const Register = () => {

        const[user, setUser] = useState({
            EmployeID:"",
            EmployeName:"",
            Department:"",
            Designation:"",
            Email:"",
            password:"",
        });


        const handleInput = (e) => {
            console.log(e);
            let name = e.target.name;
            let value = e.target.value;
        
            setUser({
              ...user,
              [name]: value,
            });
          };
        
          // handle form on submit
          const handleSubmit =async (e) => {
            e.preventDefault();
            console.log(user);
            try {
                console.log("enter the code");
                const response = await fetch(`http://localhost:5000/api/form/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type" :"application/json"
                    },
                    body: JSON.stringify(user),
                });
                console.log("after backend");
                console.log("response data : ", response);

                if (response.ok) {
                    const responseData = await response.json();
                    alert("registration successful");
                    setUser({ EmployeID: "", EmployeName:"", Department:"", Designation: "", Email: "", password: "" });
                    console.log(responseData);
                  } else {
                    console.log("error inside response ", "error");
                  }
            } catch (error) {
                console.log("error", error)   
            }
          
          };

    return <>
    <section>

    <main>
        <div className="section-registration">
            <div className="container grid grid-two-cols">
                <div className="registration-image">
                    <img src="/images/register.jpg" alt="regsiter image" width="500" height="500" />
                </div>

                <div className="regsitration-form">
                    <h1 className="main-heading mb-3">Registration Form</h1>
                    <br />

                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="EmployeID">EmployeID</label>
                            <input type="Number" name="EmployeID"  placeholder="EmployeID" id="EmployeID" required autoComplete="off" value={user.EmployeID} onChange={handleInput}/>
                        </div>

                        <div>
                            <label htmlFor="EmployeName">EmployeName</label>
                            <input type="text" name="EmployeName"  placeholder="EmployeName" id="EmployeName" required autoComplete="off" value={user.EmployeName} onChange={handleInput}/>
                        </div>

                        <div>
                            <label htmlFor="Department">Department</label>
                            <input type="text" name="Department"  placeholder="Department" id="Department" required autoComplete="off" value={user.Department} onChange={handleInput}/>
                        </div>

                        <div>
                            <label htmlFor="Designation">Designation</label>
                            <input type="text" name="Designation"  placeholder="Designation" id="Designation" required autoComplete="off" value={user.Designation} onChange={handleInput}/>
                        </div>

                        <div>
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="Email"  placeholder="Email" id="Email" required autoComplete="off" value={user.Email} onChange={handleInput}/>
                        </div>   

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"  placeholder="password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}/>
                        </div>                     
                        <br />
                        <button type="submit" className="btn btn-submit">Register Now</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
    </section>
    
    </>
}
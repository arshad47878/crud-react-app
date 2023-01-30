import React from "react";

const UserForm = () => {
  
  return (
    <div>
      <form>
        <label>Name: </label>
        
        <input type="text" id="name" name="name" value=" " />
        <br />
        <br />
        <label>Email: </label>
    
        <input type="text" id="email" name="email" value="" />
        <br />
        <br />

        <label>Phone: </label>
    
        <input type="text" id="Phone" name="phone" value="" />
        <br />
      
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserForm;

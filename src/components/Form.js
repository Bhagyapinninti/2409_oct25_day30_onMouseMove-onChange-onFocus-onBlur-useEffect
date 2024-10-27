import React, { useRef } from "react";

function Form() {

let firstNameInputref= useRef();
let lastNameInputref= useRef();
let telInputref= useRef();
let engInputref= useRef();
let hindiInputref= useRef();
let mathsInputref= useRef();
let sciInputref= useRef();
let socInputref= useRef();
let resultLabelref= useRef();
let telResultLabelRef= useRef();
let engResultLabelRef= useRef();
let hindiResultLabelRef= useRef();
let mathsResultLabelRef= useRef();
let sciResultLabelRef= useRef();
let socResultlabelRef= useRef();
let firstNameLableRef= useRef();
let lastNameLableRef= useRef();


return (
    <div>
      <form>
        <div>
            <h1>SSC Examination Result</h1>
          <label>First Name</label>
          <input ref={firstNameInputref}
           onChange={()=>{
            console.log("FirstName on change")
            firstNameInputref.current.style.backgroundColor="khaki";
            let name= (firstNameInputref.current.value);
            firstNameLableRef.current.innerHTML=(name ? "Your Good Name Plz.":"");
          }}
           ></input>
           <label ref={firstNameLableRef}></label>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputref}
           onChange={()=>{
            console.log("LastName on change")
            lastNameInputref.current.style.backgroundColor="khaki";
            let name= (lastNameInputref.current.value);
            lastNameLableRef.current.innerHTML=(name ? "Nice Name😍":"Nice Name😍");
          }}
          ></input>
          <label ref={lastNameLableRef}></label>
        </div>
        <div>
          <label>Telugu</label>
          <input type="number" ref={telInputref}
          onFocus={()=>{
            console.log("telugu on focus");
            telInputref.current.style.backgroundColor="khaki";
          }}
          onChange={()=>{
            console.log("telugu on change")
            let marks= Number(telInputref.current.value);
            telResultLabelRef.current.innerHTML=(marks >=35? "Pass👍":"Fail👎");
          }}
          onBlur={()=>{
            console.log("telugu on blur")
           
          }}
          ></input>
          <label ref={telResultLabelRef}></label>
        </div>
        <div>
          <label>English</label>
          <input type="number" ref={engInputref}
          
           onFocus={()=>{
            console.log("English on focus");
            engInputref.current.style.backgroundColor="khaki";
          }}
          onChange={()=>{
            console.log("English on change");
            let marks= Number(engInputref.current.value);
            engResultLabelRef.current.innerHTML=(marks >=35? "Pass👍":"Fail👎");
          }}
          onBlur={()=>{
            console.log("English on blur");
            
          }}
          ></input>
          <label ref={engResultLabelRef}></label>
        </div>

        <div>
          <label>Hindi</label>
          <input type="number" ref={hindiInputref}
           onFocus={()=>{
            console.log("Hindi on focus");
            hindiInputref.current.style.backgroundColor="khaki";
          }}
          onChange={()=>{
            console.log("Hindi on change")
            let marks= Number(hindiInputref.current.value);
            hindiResultLabelRef.current.innerHTML=(marks >=35? "Pass👍":"Fail👎");
          }}
          onBlur={()=>{
            console.log("Hindi on blur")
            
          }}
          ></input>
          <label ref={hindiResultLabelRef}></label>

        </div>
        <div>
          <label>Maths</label>
          <input type="number" ref={mathsInputref}
           onFocus={()=>{
            console.log("Maths on focus");
            mathsInputref.current.style.backgroundColor="khaki";
          }}
          onChange={()=>{
            console.log("Maths on change")
            let marks= Number(mathsInputref.current.value);
            mathsResultLabelRef.current.innerHTML=(marks >=35? "Pass👍":"Fail👎");
          }}
          onBlur={()=>{
            console.log("Maths on blur")
            
          }}
          ></input>
          <label ref={mathsResultLabelRef}></label>
        </div>
        <div>
          <label>Science</label>
          <input type="number" ref={sciInputref}
           onFocus={()=>{
            console.log("Science on focus");
            sciInputref.current.style.backgroundColor="khaki";
          }}
          onChange={()=>{
            console.log("Science on change")
            let marks= Number(sciInputref.current.value);
            sciResultLabelRef.current.innerHTML=(marks >=35? "Pass👍":"Fail👎");
          }}
          onBlur={()=>{
            console.log("Science on blur")
            
          }}
          ></input>
          <label ref={sciResultLabelRef}></label>
        </div>
        <div>
          <label>Social</label>
          <input type="number" ref={socInputref}
           onFocus={()=>{
            console.log("Social on focus");
            socInputref.current.style.backgroundColor="khaki";
          }}
          onChange={()=>{
            console.log("Social on change")
            let marks= Number(socInputref.current.value);
            socResultlabelRef.current.innerHTML=(marks >=35? "Pass👍":"Fail👎");
          }}
          onBlur={()=>{
            console.log("Social on blur")
           
          }}
          ></input>
          <label ref={socResultlabelRef}></label>
        </div>

        <div>
          <button type="button" onClick={()=>{

           

            let firstName= (firstNameInputref.current.value);
            let lastName= (lastNameInputref.current.value);
            let telMarks= Number(telInputref.current.value);
            let engMarks= Number(engInputref.current.value);
            let hindiMarks= Number(hindiInputref.current.value);
            let mathsMarks= Number(mathsInputref.current.value);
            let sciMarks= Number(sciInputref.current.value);
            let socMarks= Number(socInputref.current.value);
            let totalMarks= telMarks+engMarks+hindiMarks+mathsMarks+sciMarks+socMarks;
            let perc= totalMarks/600*100;
            
            alert(`${firstName} ${lastName} Total Marks are ${totalMarks} with ${perc.toFixed(2)}%`)
            resultLabelref.current.innerHTML=`${firstName} ${lastName} Total Marks are ${totalMarks} with ${perc.toFixed(2)}%`

          }}>Result</button>
        </div>
        <div>
            <label ref={resultLabelref}></label>
        </div>
      </form>
    </div>
  );
}

export default Form;

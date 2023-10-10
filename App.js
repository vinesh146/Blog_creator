import { ChangeEvent, useState } from "react";

export function All()
{
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
   
     setInputText(e.target.value);
   };
   const [body, setBody] = useState("");

   const handChange = (e: ChangeEvent<HTMLInputElement>) => {
   
     setBody(e.target.value);
   };
   const [author, setAuthor] = useState("");

   const handlChange = (e: ChangeEvent<HTMLInputElement>) => {
   
     setAuthor(e.target.value);
   };
   return(
    <div>
      <h1 className="Top">
         Blog creator Application
       </h1>
      <form >
        <label>
           Enter the Title of the Blog :
          <br />
           <input type="text" onChange={handleChange}  value={inputText}>
           </input>
         
         </label>
       </form>
       <br /> <br />
       <form >
        <label>
          Enter the Body of the Blog :
           <br />
           <input type="text" onChange={handChange}  value={body} className="box">
          </input>
        
         </label>
      </form>
      <br /> <br />
       <form >
         <label>
          Enter the Author of the Blog :
          <br />
          <input type="text" onChange={handlChange}  value={author}>
           </input>
        
        </label>
       </form>
       <br /> <br />
   
       <p className="title">{inputText}</p>
       <br />
       <p className="body">
       {body}
       </p>
       <p className="author"> And the Author Name is, {author}</p>
    </div>
   );
}
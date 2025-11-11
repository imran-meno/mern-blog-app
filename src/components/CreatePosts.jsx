import { useState } from "react";
import axios from "axios";

function CreatePosts() {
  const [type, setType] = useState("");
  const [heading, setHeading] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState(null);
  const [data,setData]=useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("tech", type);
    formData.append("head", heading);
    formData.append("detail", detail);
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:3000/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Blog uploaded successfully!");
      setType('')
      setHeading('')
      setDetail('')
    } catch (err) {
      console.error(err);
      alert("Error uploading blog");
    }
  };

  return (

        <div className="create_main">
            <div className="form_main">
         <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
      <input type="text" placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} />
      <textarea placeholder="Details"  rows='12' cols='50'
       value={detail} onChange={(e) => setDetail(e.target.value)} />
      <input type="file" accept="image/*"
      onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Post Blog</button>
    </form>

            </div>


        </div>    
  );
}

export default CreatePosts;

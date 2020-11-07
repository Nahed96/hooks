import React ,{useState}from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
const AddMovie= ({AddNewMovie})=>{
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState(" ")
  const [rate, setRate] = useState(" ")
  function openModal() {
    setIsOpen(true);
  }
 
  /*function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }*/
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div >
        <button style={{width:'300px',
      height:'300px',background:'blue',fontWeight:'bold',fontSize: '15px' }}onClick={openModal}>+</button>
        <Modal
         isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={{display:'flex',justifyContent:'flex-start',width:"50px"}}
        >
 
          <h1 >Add a movie</h1>
          <form >
              <label>Name</label>
              <input  type='text' name="name" onChange={(e)=>setName(e.target.value)} required /><br/>
              <label>Rate</label>
              <input type='text' name="rate" onChange={(e)=>setRate(e.target.value)} required/><br/>
              <label>date</label>
              <input type='text' name="date" onChange={(e)=>setDate(e.target.value)} required/><br/>
              <label>image</label>
              <input type='url' name="image" onChange={(e)=>setImage(e.target.value)} required/><br/>
              <label>Description</label>
              <input  type='text' name="description" onChange={(e)=>setDescription(e.target.value)} required /><br/>
          </form>
          <button onClick={()=> AddNewMovie({name:name,rate:rate,date:date,description:description,image:image})}>submit</button>
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    );
}
 
export default AddMovie;

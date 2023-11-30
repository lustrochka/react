import { useRef } from 'react';

function Form() {
  const inputRefName = useRef(null);
  const inputRefAge = useRef(null);
  const inputRefEmail = useRef(null);
  const inputRefPass = useRef(null);
  const inputRefPass2 = useRef(null);
  const inputRefSex = useRef(null);
  const inputRefAccept = useRef(null);
  const inputRefImg = useRef(null);
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" ref={inputRefName}></input>
        </div>
        <div>
          <label>Age: </label>
          <input type="number" ref={inputRefAge}></input>
        </div>
        <div>
          <label>E-mail: </label>
          <input type="email" ref={inputRefEmail}></input>
        </div>
        <div>
          <label>Password: </label>
          <input type="password" ref={inputRefPass}></input>
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" ref={inputRefPass2}></input>
        </div>
        <div>
          <label>Gender: </label>
          <select ref={inputRefSex}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>accept T&C </label>
          <input type="checkbox" ref={inputRefAccept}></input>
        </div>
        <div>
          <input type="file" ref={inputRefImg}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

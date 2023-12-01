import { useRef } from 'react';

function Form() {
  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefAge = useRef<HTMLInputElement>(null);
  const inputRefEmail = useRef<HTMLInputElement>(null);
  const inputRefPass = useRef<HTMLInputElement>(null);
  const inputRefPass2 = useRef<HTMLInputElement>(null);
  const inputRefSex = useRef<HTMLSelectElement>(null);
  const inputRefAccept = useRef<HTMLInputElement>(null);
  const inputRefImg = useRef<HTMLInputElement>(null);
  const checkData = () => {
    const validName = /(?=.*[A-Z])/.test(inputRefName.current!.value);
    const age = Number(inputRefAge.current!.value);
    const validEmail = /\S+@\S+\.([A-Za-z]{2,4})$/.test(
      inputRefEmail.current!.value
    );
    const validAge = Number.isFinite(age) && age > 0;
    const validPass = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/.test(
      inputRefPass.current!.value
    );
    const matchPass =
      inputRefPass.current!.value == inputRefPass2.current!.value;
    const validTC = inputRefAccept.current!.checked;
    const image = inputRefImg.current!.files;
    const validImg =
      image && image.length > 0 ? image[0].size < 2097152 : false;
    return (
      validName &&
      validEmail &&
      validAge &&
      validPass &&
      matchPass &&
      validTC &&
      validImg
    );
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkData();
        }}
      >
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
          <input
            type="file"
            ref={inputRefImg}
            accept="image/png, image/jpeg"
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

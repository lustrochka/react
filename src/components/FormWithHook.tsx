import { useForm } from 'react-hook-form';

function FormWithHook() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" {...register('name')}></input>
        </div>
        <div>
          <label>Age: </label>
          <input type="number" {...register('age')}></input>
        </div>
        <div>
          <label>E-mail: </label>
          <input type="email" {...register('email')}></input>
        </div>
        <div>
          <label>Password: </label>
          <input type="password" {...register('password')}></input>
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" {...register('password2')}></input>
        </div>
        <div>
          <label>Gender: </label>
          <select {...register('gender')}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>accept T&C </label>
          <input type="checkbox" {...register('accept')}></input>
        </div>
        <div>
          <input type="file" {...register('image')}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormWithHook;
